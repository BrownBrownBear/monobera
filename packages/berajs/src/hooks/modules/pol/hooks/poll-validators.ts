import { ApolloClient, InMemoryCache } from "@apollo/client";
import { polSubgraphUrl } from "@bera/config";
import { GetAllValidators } from "@bera/graphql/pol";
import { mutate } from "swr";
import useSWRImmutable from "swr/immutable";

import { DefaultHookOptions, DefaultHookReturnType, Validator } from "~/types";

interface ValidatorsSubgraphType {
  validators: Validator[];
}

export const usePollValidators = (
  options?: DefaultHookOptions,
): DefaultHookReturnType<ValidatorsSubgraphType | undefined> => {
  const QUERY_KEY = ["ValidatorsSubgraphType"];
  const swrResponse = useSWRImmutable<ValidatorsSubgraphType | undefined>(
    QUERY_KEY,
    async () => {
      const bgtClient = new ApolloClient({
        uri: polSubgraphUrl,
        cache: new InMemoryCache(),
      });

      const result = await bgtClient.query({
        query: GetAllValidators,
      });

      return result?.data;
    },
    {
      ...options?.opts,
    },
  );

  return {
    ...swrResponse,
    refresh: () => mutate(QUERY_KEY),
  };
};
