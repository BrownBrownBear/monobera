import useSWR, { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { formatUnits } from "viem";
import { erc20ABI, usePublicClient, type Address } from "wagmi";

import { type Token } from "../api/currency/tokens";
import { useBeraConfig, useBeraJs } from "../contexts";
import useTokens from "./useTokens";

const REFRESH_BLOCK_INTERVAL = 2000;

interface BalanceToken extends Token {
  balance: bigint;
  formattedBalance: string;
}

interface Call {
  abi: typeof erc20ABI;
  address: `0x${string}`;
  functionName: string;
  args: any[];
}

export const usePollAssetWalletBalance = () => {
  const publicClient = usePublicClient();
  const { mutate } = useSWRConfig();
  const { account, error } = useBeraJs();
  const { networkConfig } = useBeraConfig();
  const { tokenList } = useTokens();
  useSWR(
    [account, "assetWalletBalances"],
    async () => {
      if (account && !error) {
        const call: Call[] = tokenList.map((item: Token) => ({
          address: item.address as `0x${string}`,
          abi: erc20ABI,
          functionName: "balanceOf",
          args: [account],
        }));
        try {
          const result = await publicClient.multicall({
            contracts: call,
            multicallAddress: networkConfig.precompileAddresses
              .multicallAddress as Address,
          });

          const balances = await Promise.all(
            result.map(async (item: any, index: number) => {
              const token = tokenList[index];
              if (item.error) {
                await mutate([account, token?.address, "assetWalletBalances"], {
                  balance: 0,
                  formattedBalance: "0",
                  ...token,
                });
                return { balance: 0, ...token };
              }

              const resultBalanceToken: BalanceToken = {
                balance: item.result,
                formattedBalance: formatUnits(
                  item.result,
                  token?.decimals || 18,
                ),
                ...token,
              } as BalanceToken;
              await mutate(
                [account, token?.address, "assetWalletBalances"],
                resultBalanceToken,
              );
              return resultBalanceToken;
            }),
          );
          return balances;
        } catch (error) {
          console.log(error);
        }
      }

      return undefined;
    },
    {
      refreshInterval: REFRESH_BLOCK_INTERVAL,
    },
  );
};

export const useCurrentAssetWalletBalances = (): BalanceToken[] => {
  const { account } = useBeraJs();

  const { data: assetWalletBalances = undefined } = useSWRImmutable([
    account,
    "assetWalletBalances",
  ]);
  return assetWalletBalances;
};

export const useSelectedAssetWalletBalance = (
  address: string,
): BalanceToken => {
  const { account } = useBeraJs();

  const { data: assetWalletBalances = undefined } = useSWRImmutable([
    account,
    address,
    "assetWalletBalances",
  ]);
  return assetWalletBalances;
};
