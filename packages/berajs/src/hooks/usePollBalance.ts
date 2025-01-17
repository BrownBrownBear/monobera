import { multicallAddress, nativeTokenAddress } from "@bera/config";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { erc20Abi, formatEther, formatUnits, getAddress } from "viem";
import { usePublicClient } from "wagmi";

import { multicall3Abi } from "~/abi";
import POLLING from "~/enum/polling";
import { useBeraJs } from "../contexts";
import { BalanceToken } from "~/types/dex";

interface Call {
  abi: typeof erc20Abi;
  address: `0x${string}`;
  functionName: string;
  args: any[];
}

export const usePollBalance = ({
  address,
}: {
  address: string | undefined;
}) => {
  const publicClient = usePublicClient();
  const { account } = useBeraJs();
  const QUERY_KEY = [account, address, "balance"];
  const { isLoading } = useSWR(
    QUERY_KEY,
    async () => {
      if (!publicClient) return undefined;
      if (account && address) {
        if (address !== nativeTokenAddress) {
          const call: Call[] = [
            {
              address: address as `0x${string}`,
              abi: erc20Abi,
              functionName: "balanceOf",
              args: [account],
            },
            {
              address: address as `0x${string}`,
              abi: erc20Abi,
              functionName: "symbol",
              args: [],
            },
            {
              address: address as `0x${string}`,
              abi: erc20Abi,
              functionName: "name",
              args: [],
            },
            {
              address: address as `0x${string}`,
              abi: erc20Abi,
              functionName: "decimals",
              args: [],
            },
          ];
          const result = await publicClient.multicall({
            contracts: call,
            multicallAddress: multicallAddress,
          });

          const balance: BalanceToken = {
            balance: result[0]?.result as bigint,
            formattedBalance: formatUnits(
              result[0]?.result as bigint,
              (result[3]?.result as number) ?? 18,
            ),
            address: getAddress(address),
            decimals: result[3]?.result as number,
            symbol: result[1]?.result as string,
            name: result[2]?.result as string,
          };
          return balance;
        }
        const call = {
          address: multicallAddress,
          abi: multicall3Abi,
          functionName: "getEthBalance",
          args: [account],
        };
        const result = await publicClient.readContract(call);
        return {
          balance: result,
          formattedBalance: formatEther((result as bigint) ?? 0n),
          address,
          decimals: 18,
          symbol: "BERA",
          name: "Berachain",
        };
      }
      return undefined;
    },
    {
      refreshInterval: POLLING.FAST,
    },
  );
  const useBalance = () => {
    const { data = undefined } = useSWRImmutable(QUERY_KEY);
    return data;
  };
  return {
    isLoading,
    useBalance,
  };
};
