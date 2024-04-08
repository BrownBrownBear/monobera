import { stakingAddress } from "@bera/config";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { formatUnits } from "viem";
import { usePublicClient } from "wagmi";

import { STAKING_PRECOMPILE_ABI } from "~/config";
import POLLING from "~/config/constants/polling";
import { useBeraJs } from "~/contexts";

export const usePollUnbondingDelegations = (
  validatorAddress: `0x${string}`,
) => {
  const { account: address } = useBeraJs();
  const publicClient = usePublicClient();
  const method = "getUnbondingDelegation";
  const QUERY_KEY = [address, validatorAddress, method];
  useSWR(
    QUERY_KEY,
    async () => {
      if (!publicClient) return undefined;
      if (address) {
        const result: any = await publicClient.readContract({
          address: stakingAddress,
          abi: STAKING_PRECOMPILE_ABI,
          functionName: method,
          args: [address, validatorAddress],
        });
        return result.map((delegation: any) => ({
          ...delegation,
          initialBalance: formatUnits(delegation.initialBalance, 18).toString(),
          creationHeight: formatUnits(delegation.creationHeight, 0).toString(),
          unbondingId: formatUnits(delegation.initialBalance, 18).toString(),
          balance: formatUnits(delegation.balance, 18).toString(),
        }));
      }
      return undefined;
    },
    {
      refreshInterval: POLLING.FAST,
    },
  );
  const useGetUnbondingDelegation = () => {
    const { data = undefined } = useSWRImmutable(QUERY_KEY);
    return data;
  };

  const useTotalUnbonding = () => {
    const { data = undefined } = useSWRImmutable(QUERY_KEY);
    if (data) {
      return data.reduce(
        (total: number, delegation: { balance: any }) =>
          total + Number(delegation.balance),
        0,
      );
    }
    return data;
  };
  return {
    useGetUnbondingDelegation,
    useTotalUnbonding,
  };
};
