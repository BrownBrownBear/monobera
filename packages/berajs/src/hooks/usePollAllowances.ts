import useSWR, { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { usePublicClient } from "wagmi";

import { useBeraJs } from "~/contexts";
import POLLING from "~/enum/polling";
import { Token } from "~/types";
import { getAllowances } from "../actions/dex";
import { DefaultHookProps } from "../types/global";

interface AllowanceToken extends Token {
  allowance: bigint;
  formattedAllowance: string;
}

type UsePollAllowancesRequest = DefaultHookProps<{
  contract: string;
  tokens: Token[];
}>;

export interface IUsePollAllowancesResponse {
  useCurrentAllowancesForContract: () => AllowanceToken[];
  useSelectedAllowanceForContract: (address: string) => AllowanceToken;
  refresh: () => void;
}

/**
 *
 * @brief Allows the user to poll the allowances of a given token array.
 *
 * @param contract the address of the ERC20 token contract
 * @param tokens   the list of tokens to poll allowances for
 */
export const usePollAllowances = ({
  args,
  config,
  opts: { refreshInterval } = {
    refreshInterval: POLLING.FAST,
  },
}: UsePollAllowancesRequest): IUsePollAllowancesResponse => {
  const { contract, tokens } = args;
  const publicClient = usePublicClient();
  const { mutate } = useSWRConfig();
  const { account } = useBeraJs();
  const QUERY_KEY = [account, tokens, contract, "allowances"];
  useSWR(
    QUERY_KEY,
    async () => {
      return getAllowances({
        tokens,
        account,
        config,
        contract,
        publicClient,
        queryKey: QUERY_KEY,
        mutate,
        method: "allowance",
      });
    },
    {
      refreshInterval,
    },
  );

  /**
   *
   * @returns the current allowances for the given contract
   */
  const useCurrentAllowancesForContract = (): AllowanceToken[] => {
    const { data: assetWalletBalances = undefined } =
      useSWRImmutable(QUERY_KEY);
    return assetWalletBalances;
  };

  /**
   *
   * @param address the address of the token to get the allowance for
   * @returns the current allowance for the contract for that token
   */
  const useSelectedAllowanceForContract = (address: string): AllowanceToken => {
    const { data: assetWalletBalances = undefined } = useSWRImmutable([
      ...QUERY_KEY,
      address,
    ]);
    return assetWalletBalances;
  };

  return {
    useCurrentAllowancesForContract,
    useSelectedAllowanceForContract,
    refresh: () => mutate(QUERY_KEY),
  };
};
