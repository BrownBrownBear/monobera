import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { formatUnits } from "viem";
import { usePublicClient } from "wagmi";

import { STAKING_PRECOMPILE_ABI, STAKING_PRECOMPILE_ADDRESS } from "~/config";
import POLLING from "~/config/constants/polling";
import { useBeraJs } from "~/contexts";

export const usePollUnbondingDelegations = (
  validatorAddress: `0x${string}`,
) => {
  const { account: address, error } = useBeraJs();
  const publicClient = usePublicClient();
  const method = "getUnbondingDelegation";
  const QUERY_KEY = [address, validatorAddress, method];
  useSWR(
    QUERY_KEY,
    async () => {
      if (address && !error) {
        const result: any = await publicClient.readContract({
          address: STAKING_PRECOMPILE_ADDRESS,
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
  return {
    useGetUnbondingDelegation,
  };
};
