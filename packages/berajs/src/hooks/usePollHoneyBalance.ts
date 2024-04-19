import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { formatUnits } from "viem";
import { usePublicClient } from "wagmi";

import { getHoneyBalance } from "~/actions/dex/getHoneyBalance";
import POLLING from "~/enum/polling";
import { DefaultHookProps } from "~/types/global";
import { useBeraJs } from "../contexts";

export interface UsePollHoneyBalancesResponse {
  isLoading: boolean;
  isValidating: boolean;
  useHoneyBalance: () => string;
  useRawHoneyBalance: () => bigint;
}

export const usePollHoneyBalance = ({
  config,
  opts: { refreshInterval } = {
    refreshInterval: POLLING.FAST,
  },
}: DefaultHookProps): UsePollHoneyBalancesResponse => {
  const publicClient = usePublicClient();
  const { isConnected, account } = useBeraJs();
  const QUERY_KEY = [account, isConnected, "honeyBalance"];
  const { isLoading, isValidating } = useSWR(
    QUERY_KEY,
    async () => {
      return getHoneyBalance({ publicClient, config, isConnected, account });
    },
    {
      refreshInterval,
    },
  );
  const useHoneyBalance = (): string => {
    const { data = undefined } = useSWRImmutable(QUERY_KEY);
    return formatUnits(data ?? 0n, 18);
  };
  const useRawHoneyBalance = (): bigint => {
    const { data = undefined } = useSWRImmutable(QUERY_KEY);
    return data;
  };
  return {
    isLoading,
    isValidating,
    useHoneyBalance,
    useRawHoneyBalance,
  };
};
