import { bgtTokenAddress, nativeTokenAddress } from "@bera/config";
import useSWR, { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { formatUnits, getAddress } from "viem";
import { erc20ABI, usePublicClient, type Address } from "wagmi";

import { MULTICALL3_ABI } from "..";
import { type Token } from "../api/currency/tokens";
import { useBeraConfig, useBeraJs } from "../contexts";
import useTokens from "./useTokens";
import POLLING from "~/config/constants/polling";

const REFRESH_BLOCK_INTERVAL = POLLING.FAST;

interface BalanceToken extends Token {
  balance: bigint;
  formattedBalance: string;
}

interface Call {
  abi: any;
  address: `0x${string}`;
  functionName: string;
  args: any[];
}

export const usePollAssetWalletBalance = (externalTokenList?: Token[]) => {
  const publicClient = usePublicClient();
  const { mutate } = useSWRConfig();
  const { account, isConnected, error } = useBeraJs();
  const { networkConfig } = useBeraConfig();
  const { tokenList } = useTokens();
  const QUERY_KEY = [account, isConnected, tokenList, "assetWalletBalances"];
  useSWR(
    QUERY_KEY,
    async () => {
      if (!account || error || !tokenList) return undefined;
      if (account && !error && tokenList) {
        const fullTokenList = [
          ...tokenList,
          ...(externalTokenList ?? []),
        ].filter((token: Token) => token.address !== bgtTokenAddress);
        const call: Call[] = fullTokenList.map((item: Token) => {
          if (item.address === nativeTokenAddress) {
            return {
              address: networkConfig.precompileAddresses
                .multicallAddress as Address,
              abi: MULTICALL3_ABI,
              functionName: "getEthBalance",
              args: [account],
            };
          }
          return {
            address: item.address as `0x${string}`,
            abi: erc20ABI,
            functionName: "balanceOf",
            args: [account],
          };
        });
        try {
          const result = await publicClient.multicall({
            contracts: call,
            multicallAddress: networkConfig.precompileAddresses
              .multicallAddress as Address,
          });

          const balances = await Promise.all(
            result.map(async (item: any, index: number) => {
              const token = fullTokenList[index];
              if (item.error) {
                await mutate([...QUERY_KEY, getAddress(token?.address ?? "")], {
                  balance: 0n,
                  formattedBalance: "0",
                  ...token,
                });
                return { balance: 0n, formattedBalance: "0", ...token };
              }
              const formattedBalance = formatUnits(
                item.result,
                token?.decimals || 18,
              );

              const resultBalanceToken: BalanceToken = {
                balance: item.result,
                formattedBalance: formattedBalance.includes("e")
                  ? "0"
                  : formattedBalance,
                ...token,
              } as BalanceToken;
              await mutate([...QUERY_KEY, token?.address], resultBalanceToken);
              return resultBalanceToken;
            }),
          );
          return balances;
        } catch (error) {
          console.log(error);
        }
      }
    },
    {
      refreshInterval: REFRESH_BLOCK_INTERVAL,
    },
  );

  const useCurrentAssetWalletBalances = () => {
    return useSWRImmutable(QUERY_KEY);
  };

  const useSelectedAssetWalletBalance = (address: string) => {
    return useSWRImmutable([...QUERY_KEY, address]);
  };

  return {
    refetch: () => void mutate(QUERY_KEY),
    useCurrentAssetWalletBalances,
    useSelectedAssetWalletBalance,
  };
};
