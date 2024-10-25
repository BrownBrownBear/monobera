import { ApolloClient, InMemoryCache } from "@apollo/client";
import { polSubgraphUrl } from "@bera/config";

export const bgtClient = new ApolloClient({
  uri: polSubgraphUrl,
  cache: new InMemoryCache(),
});

export const ssrBgtClient = new ApolloClient({
  ssrMode: true,
  uri: polSubgraphUrl,
  cache: new InMemoryCache(),
});
