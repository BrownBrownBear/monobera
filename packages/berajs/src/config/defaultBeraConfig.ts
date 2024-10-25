import {
  beraTokenAddress,
  polEndpointUrl,
  polSubgraphUrl,
  bgtTokenAddress,
  crocDexAddress,
  crocIndexerEndpoint,
  crocMultiSwapAddress,
  crocRouterEndpoint,
  crocSubgraphEndpoint,
  governanceSubgraphUrl,
  governanceTimelockAddress,
  governorAddress,
  honeyRouterAddress,
  honeySubgraphUrl,
  lendOracleAddress,
  lendPoolAddressProviderAddress,
  lendPoolImplementationAddress,
  lendRewardsAddress,
  lendSubgraphUrl,
  lendUIDataProviderAddress,
  marketListUrl,
  multicallAddress,
  tokenListUrl,
  tradingContractAddress,
  validatorListUrl,
} from "@bera/config";

import type { BeraConfig } from "..";

export const defaultBeraConfig: BeraConfig = {
  endpoints: {
    dexRouter: crocRouterEndpoint,
    dexIndexer: crocIndexerEndpoint,
    tokenList: tokenListUrl,
    validatorList: validatorListUrl,
    marketList: marketListUrl,
    validatorInfo: validatorListUrl,
    polEndpoint: polEndpointUrl,
  },
  subgraphs: {
    honeySubgraph: honeySubgraphUrl,
    dexSubgraph: crocSubgraphEndpoint,
    lendSubgraph: lendSubgraphUrl,
    polSubgraph: polSubgraphUrl,
    governanceSubgraph: governanceSubgraphUrl,
  },
  contracts: {
    multicallAddress: multicallAddress,
    crocMultiSwapAddress: crocMultiSwapAddress,
    wrappedTokenAddress: beraTokenAddress,
    dexAddress: crocDexAddress,
    bgtAddress: bgtTokenAddress,
    lendAddressProviderAddress: lendPoolAddressProviderAddress,
    lendOracleAddress: lendOracleAddress,
    lendPoolProxyAddress: lendPoolImplementationAddress,
    lendUIDataProviderAddress: lendUIDataProviderAddress,
    lendRewardsAggregatorAddress: lendRewardsAddress,
    honeyRouterAddress: honeyRouterAddress,
    perpsTradingContractAddress: tradingContractAddress,
    governance: {
      governor: governorAddress,
      timelock: governanceTimelockAddress,
    },
  },
};
