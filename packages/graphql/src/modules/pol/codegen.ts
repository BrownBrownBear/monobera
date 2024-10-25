import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  Int8: { input: any; output: any };
  Timestamp: { input: any; output: any };
};

export type ActiveIncentive = {
  __typename?: "ActiveIncentive";
  amountLeft: Scalars["BigDecimal"]["output"];
  amountLeftUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  incentiveRate?: Maybe<Scalars["BigDecimal"]["output"]>;
  token: TokenInformation;
  vault: Vault;
};

export type ActiveIncentive_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountLeft?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountLeftUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeftUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountLeft_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeft_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeft_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountLeft_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeft_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeft_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountLeft_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<ActiveIncentive_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  incentiveRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  incentiveRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  incentiveRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ActiveIncentive_Filter>>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<TokenInformation_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ActiveIncentive_OrderBy {
  AmountLeft = "amountLeft",
  AmountLeftUsd = "amountLeftUsd",
  Id = "id",
  IncentiveRate = "incentiveRate",
  Token = "token",
  TokenAddress = "token__address",
  TokenBeraValue = "token__beraValue",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenUsdValue = "token__usdValue",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

export enum Aggregation_Interval {
  Day = "day",
  Hour = "hour",
}

export type BexGlobalUsage = {
  __typename?: "BexGlobalUsage";
  allTimeTxCount: Scalars["BigInt"]["output"];
  allTimeVolumeUsd: Scalars["BigDecimal"]["output"];
  allTimefeesUsd: Scalars["BigDecimal"]["output"];
  dailyVolumeUsd: Scalars["BigDecimal"]["output"];
  dailyfeesUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  poolCount: Scalars["BigInt"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  tvlUsd: Scalars["BigDecimal"]["output"];
  txCount: Scalars["BigInt"]["output"];
};

export type BexGlobalUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BexGlobalUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BexGlobalUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
};

export type Block = {
  __typename?: "Block";
  blockNumber: Scalars["BigInt"]["output"];
  count: Scalars["BigInt"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  validator: Validator;
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type BlockInfo = {
  __typename?: "BlockInfo";
  blockHash: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  validator: Validator;
};

export type BlockInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockInfo_Filter>>>;
  blockHash?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_contains?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_gt?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_gte?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blockHash_lt?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_lte?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  blockHash_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  blockHash_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BlockInfo_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BlockInfo_OrderBy {
  BlockHash = "blockHash",
  Id = "id",
  Timestamp = "timestamp",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
}

export type BlockReward = {
  __typename?: "BlockReward";
  baseRate: Scalars["BigDecimal"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  commissionRate: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  rewardRate: Scalars["BigDecimal"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  validator: Validator;
};

export type BlockRewardStatsByValidator = {
  __typename?: "BlockRewardStatsByValidator";
  allTimeBaseRate: Scalars["BigDecimal"]["output"];
  allTimeCommissionRate: Scalars["BigDecimal"]["output"];
  allTimeRewardRate: Scalars["BigDecimal"]["output"];
  baseRate: Scalars["BigDecimal"]["output"];
  commissionRate: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  rewardRate: Scalars["BigDecimal"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  validator: Validator;
};

export type BlockRewardStatsByValidator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockRewardStatsByValidator_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BlockRewardStatsByValidator_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
};

export type BlockReward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockReward_Filter>>>;
  baseRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  commissionRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  commissionRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commissionRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<BlockReward_Filter>>>;
  rewardRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BlockReward_OrderBy {
  BaseRate = "baseRate",
  BlockNumber = "blockNumber",
  CommissionRate = "commissionRate",
  Id = "id",
  RewardRate = "rewardRate",
  Timestamp = "timestamp",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
}

export type BlockStats = {
  __typename?: "BlockStats";
  allTimeblockCount: Scalars["BigInt"]["output"];
  blockCount: Scalars["BigInt"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
};

export type BlockStatsByValidator = {
  __typename?: "BlockStatsByValidator";
  allTimeblockCount: Scalars["BigInt"]["output"];
  blockCount: Scalars["BigInt"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  validator: Validator;
};

export type BlockStatsByValidator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockStatsByValidator_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BlockStatsByValidator_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
};

export type BlockStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BlockStats_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BlockStats_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
};

export type Block_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  count?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  count_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  count_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum Block_OrderBy {
  BlockNumber = "blockNumber",
  Count = "count",
  Id = "id",
  Timestamp = "timestamp",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
}

export type DefaultCuttingBoard = {
  __typename?: "DefaultCuttingBoard";
  id: Scalars["Bytes"]["output"];
  startBlock: Scalars["BigInt"]["output"];
  weights: Array<DefaultCuttingBoardWeight>;
};

export type DefaultCuttingBoardWeightsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DefaultCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DefaultCuttingBoardWeight_Filter>;
};

export type DefaultCuttingBoardWeight = {
  __typename?: "DefaultCuttingBoardWeight";
  id: Scalars["Bytes"]["output"];
  owner: DefaultCuttingBoard;
  percentageNumerator: Scalars["BigInt"]["output"];
  receiver: Scalars["Bytes"]["output"];
  vault?: Maybe<Vault>;
};

export type DefaultCuttingBoardWeight_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DefaultCuttingBoardWeight_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<DefaultCuttingBoardWeight_Filter>>>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<DefaultCuttingBoard_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  percentageNumerator?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  percentageNumerator_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum DefaultCuttingBoardWeight_OrderBy {
  Id = "id",
  Owner = "owner",
  OwnerId = "owner__id",
  OwnerStartBlock = "owner__startBlock",
  PercentageNumerator = "percentageNumerator",
  Receiver = "receiver",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

export type DefaultCuttingBoard_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DefaultCuttingBoard_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<DefaultCuttingBoard_Filter>>>;
  startBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  weights_?: InputMaybe<DefaultCuttingBoardWeight_Filter>;
};

export enum DefaultCuttingBoard_OrderBy {
  Id = "id",
  StartBlock = "startBlock",
  Weights = "weights",
}

/**
 * A FeeChange represents an update to the swap fee setting on a given CrocSwap
 * liquidity pool.
 *
 */
export type FeeChange = {
  __typename?: "FeeChange";
  block: Scalars["BigInt"]["output"];
  feeRate: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  time: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type FeeChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FeeChange_Filter>>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  feeRate?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_gt?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_gte?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  feeRate_lt?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_lte?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_not?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<FeeChange_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  time?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  time_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum FeeChange_OrderBy {
  Block = "block",
  FeeRate = "feeRate",
  Id = "id",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  Time = "time",
  TransactionHash = "transactionHash",
}

export type FriendsOfTheChef = {
  __typename?: "FriendsOfTheChef";
  id: Scalars["Bytes"]["output"];
  isFriend: Scalars["Boolean"]["output"];
  receiver: Scalars["Bytes"]["output"];
};

export type FriendsOfTheChef_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FriendsOfTheChef_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isFriend?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFriend_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isFriend_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFriend_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<FriendsOfTheChef_Filter>>>;
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum FriendsOfTheChef_OrderBy {
  Id = "id",
  IsFriend = "isFriend",
  Receiver = "receiver",
}

export type GlobalCuttingBoardWeight = {
  __typename?: "GlobalCuttingBoardWeight";
  amount: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  receiver: Scalars["Bytes"]["output"];
  vault?: Maybe<Vault>;
};

export type GlobalCuttingBoardWeight_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<GlobalCuttingBoardWeight_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<GlobalCuttingBoardWeight_Filter>>>;
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum GlobalCuttingBoardWeight_OrderBy {
  Amount = "amount",
  Id = "id",
  Receiver = "receiver",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

export type GlobalIncentivesUsage = {
  __typename?: "GlobalIncentivesUsage";
  allTimeBgtDistributed: Scalars["BigDecimal"]["output"];
  allTimeUsdValueIncentivesVolume: Scalars["BigDecimal"]["output"];
  bgtDistributed: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  usdValueIncentivesVolume: Scalars["BigDecimal"]["output"];
};

export type GlobalIncentivesUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalIncentivesUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<GlobalIncentivesUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
};

export type GlobalInfo = {
  __typename?: "GlobalInfo";
  baseRewardRate: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  rewardRate: Scalars["BigDecimal"]["output"];
  totalActiveIncentivesUsd: Scalars["BigDecimal"]["output"];
  totalBGTDistributed: Scalars["BigDecimal"]["output"];
  totalBgtQueued: Scalars["BigDecimal"]["output"];
  totalBgtStaked: Scalars["BigDecimal"]["output"];
  totalIncentivesVolumeUsd: Scalars["BigDecimal"]["output"];
  totalValidators: Scalars["BigDecimal"]["output"];
};

export type GlobalInfo_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<GlobalInfo_Filter>>>;
  baseRewardRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseRewardRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseRewardRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<GlobalInfo_Filter>>>;
  rewardRate?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  rewardRate_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  rewardRate_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalActiveIncentivesUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalActiveIncentivesUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalActiveIncentivesUsd_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalBGTDistributed?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBGTDistributed_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBGTDistributed_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalBgtQueued?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBgtQueued_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtQueued_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBgtStaked?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalBgtStaked_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalBgtStaked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalIncentivesVolumeUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalIncentivesVolumeUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalIncentivesVolumeUsd_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  totalValidators?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  totalValidators_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  totalValidators_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum GlobalInfo_OrderBy {
  BaseRewardRate = "baseRewardRate",
  Id = "id",
  RewardRate = "rewardRate",
  TotalActiveIncentivesUsd = "totalActiveIncentivesUsd",
  TotalBgtDistributed = "totalBGTDistributed",
  TotalBgtQueued = "totalBgtQueued",
  TotalBgtStaked = "totalBgtStaked",
  TotalIncentivesVolumeUsd = "totalIncentivesVolumeUsd",
  TotalValidators = "totalValidators",
}

export type IncentivesDataPoint = {
  __typename?: "IncentivesDataPoint";
  bgtAmount: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  token: TokenInformation;
  tokenAmount: Scalars["BigDecimal"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  usdValueBgtAmount: Scalars["BigDecimal"]["output"];
  usdValueTokenAmount: Scalars["BigDecimal"]["output"];
  validator: Validator;
  vault: Vault;
};

export type IncentivesDataPoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<IncentivesDataPoint_Filter>>>;
  bgtAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  bgtAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  bgtAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<IncentivesDataPoint_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  tokenAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tokenAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tokenAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  token_?: InputMaybe<TokenInformation_Filter>;
  token_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_gt?: InputMaybe<Scalars["String"]["input"]>;
  token_gte?: InputMaybe<Scalars["String"]["input"]>;
  token_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_lt?: InputMaybe<Scalars["String"]["input"]>;
  token_lte?: InputMaybe<Scalars["String"]["input"]>;
  token_not?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  token_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  token_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  token_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  usdValueBgtAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  usdValueBgtAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueBgtAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  usdValueTokenAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  usdValueTokenAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValueTokenAmount_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum IncentivesDataPoint_OrderBy {
  BgtAmount = "bgtAmount",
  Id = "id",
  Timestamp = "timestamp",
  Token = "token",
  TokenAmount = "tokenAmount",
  TokenAddress = "token__address",
  TokenBeraValue = "token__beraValue",
  TokenDecimals = "token__decimals",
  TokenId = "token__id",
  TokenName = "token__name",
  TokenSymbol = "token__symbol",
  TokenUsdValue = "token__usdValue",
  TransactionHash = "transactionHash",
  UsdValueBgtAmount = "usdValueBgtAmount",
  UsdValueTokenAmount = "usdValueTokenAmount",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

/**
 * A LiquidityChange entity represents a single modification to a single
 * liquidity position made on CrocSwap. LiquidityChanges are categorized
 * according to their changeType, which can be equal to mint, burn, harvest,
 * claim, or recover.
 *
 */
export type LiquidityChange = {
  __typename?: "LiquidityChange";
  askTick?: Maybe<Scalars["Int"]["output"]>;
  baseAssetBeraPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  baseAssetUsdPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  baseFlow?: Maybe<Scalars["BigInt"]["output"]>;
  bidTick?: Maybe<Scalars["Int"]["output"]>;
  block: Scalars["BigInt"]["output"];
  callSource: Scalars["String"]["output"];
  changeType: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  isBid: Scalars["Boolean"]["output"];
  liq?: Maybe<Scalars["BigInt"]["output"]>;
  pivotTime?: Maybe<Scalars["BigInt"]["output"]>;
  pool: Pool;
  positionType: Scalars["String"]["output"];
  quoteAssetBeraPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  quoteAssetUsdPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  quoteFlow?: Maybe<Scalars["BigInt"]["output"]>;
  time: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  user: Scalars["Bytes"]["output"];
};

export type LiquidityChange_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LiquidityChange_Filter>>>;
  askTick?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_gt?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_gte?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  askTick_lt?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_lte?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_not?: InputMaybe<Scalars["Int"]["input"]>;
  askTick_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  baseAssetBeraPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetBeraPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetUsdPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseFlow?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  baseFlow_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  bidTick?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_gt?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_gte?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  bidTick_lt?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_lte?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_not?: InputMaybe<Scalars["Int"]["input"]>;
  bidTick_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  callSource?: InputMaybe<Scalars["String"]["input"]>;
  callSource_contains?: InputMaybe<Scalars["String"]["input"]>;
  callSource_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_gt?: InputMaybe<Scalars["String"]["input"]>;
  callSource_gte?: InputMaybe<Scalars["String"]["input"]>;
  callSource_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  callSource_lt?: InputMaybe<Scalars["String"]["input"]>;
  callSource_lte?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  callSource_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType?: InputMaybe<Scalars["String"]["input"]>;
  changeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  changeType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  changeType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType_gt?: InputMaybe<Scalars["String"]["input"]>;
  changeType_gte?: InputMaybe<Scalars["String"]["input"]>;
  changeType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  changeType_lt?: InputMaybe<Scalars["String"]["input"]>;
  changeType_lte?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  changeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  changeType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  changeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  changeType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isBid?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBid_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isBid_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBid_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  liq?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  liq_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  liq_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<LiquidityChange_Filter>>>;
  pivotTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  pivotTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  pivotTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType?: InputMaybe<Scalars["String"]["input"]>;
  positionType_contains?: InputMaybe<Scalars["String"]["input"]>;
  positionType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  positionType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType_gt?: InputMaybe<Scalars["String"]["input"]>;
  positionType_gte?: InputMaybe<Scalars["String"]["input"]>;
  positionType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  positionType_lt?: InputMaybe<Scalars["String"]["input"]>;
  positionType_lte?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  positionType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  positionType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  positionType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  positionType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteAssetBeraPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteAssetBeraPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  quoteAssetUsdPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteAssetUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteFlow?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  quoteFlow_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  time?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  time_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum LiquidityChange_OrderBy {
  AskTick = "askTick",
  BaseAssetBeraPrice = "baseAssetBeraPrice",
  BaseAssetUsdPrice = "baseAssetUsdPrice",
  BaseFlow = "baseFlow",
  BidTick = "bidTick",
  Block = "block",
  CallSource = "callSource",
  ChangeType = "changeType",
  Id = "id",
  IsBid = "isBid",
  Liq = "liq",
  PivotTime = "pivotTime",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  PositionType = "positionType",
  QuoteAssetBeraPrice = "quoteAssetBeraPrice",
  QuoteAssetUsdPrice = "quoteAssetUsdPrice",
  QuoteFlow = "quoteFlow",
  Time = "time",
  TransactionHash = "transactionHash",
  User = "user",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

/**
 * A Pool represents a single liquidity pool on CrocSwap, which is uniquely
 * specified by a base token, a quote token, and a poolIdx. The ID of the Pool
 * is the same as the poolHash used internally in CrocSwap contracts.
 *
 */
export type Pool = {
  __typename?: "Pool";
  base: Scalars["Bytes"]["output"];
  baseAmount: Scalars["BigDecimal"]["output"];
  baseInfo: TokenInformation;
  blockCreate: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  liquidityChanges: Array<LiquidityChange>;
  pool24hStats: Pool24hStats;
  poolIdx: Scalars["BigInt"]["output"];
  quote: Scalars["Bytes"]["output"];
  quoteAmount: Scalars["BigDecimal"]["output"];
  quoteInfo: TokenInformation;
  shareAddress: PoolShareAddress;
  swaps: Array<Swap>;
  template?: Maybe<PoolTemplate>;
  timeCreate: Scalars["BigInt"]["output"];
  tvlUsd: Scalars["BigDecimal"]["output"];
  vault?: Maybe<Vault>;
  wtv: Scalars["BigDecimal"]["output"];
};

/**
 * A Pool represents a single liquidity pool on CrocSwap, which is uniquely
 * specified by a base token, a quote token, and a poolIdx. The ID of the Pool
 * is the same as the poolHash used internally in CrocSwap contracts.
 *
 */
export type PoolLiquidityChangesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LiquidityChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LiquidityChange_Filter>;
};

/**
 * A Pool represents a single liquidity pool on CrocSwap, which is uniquely
 * specified by a base token, a quote token, and a poolIdx. The ID of the Pool
 * is the same as the poolHash used internally in CrocSwap contracts.
 *
 */
export type PoolSwapsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Swap_Filter>;
};

export type Pool24hStats = {
  __typename?: "Pool24hStats";
  dayFeesUsd: Scalars["BigDecimal"]["output"];
  dayTimestamp: Scalars["Timestamp"]["output"];
  dayVolumeUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  pool: Pool;
};

export type Pool24hStats_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool24hStats_Filter>>>;
  dayFeesUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  dayFeesUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayFeesUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  dayTimestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  dayTimestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  dayTimestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  dayVolumeUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  dayVolumeUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  dayVolumeUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Pool24hStats_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum Pool24hStats_OrderBy {
  DayFeesUsd = "dayFeesUsd",
  DayTimestamp = "dayTimestamp",
  DayVolumeUsd = "dayVolumeUsd",
  Id = "id",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
}

export type PoolDataPoint = {
  __typename?: "PoolDataPoint";
  eventType: Scalars["Int8"]["output"];
  feesUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  pool: Pool;
  poolShareAddress?: Maybe<PoolShareAddress>;
  timestamp: Scalars["Timestamp"]["output"];
  tvlChangeUsd: Scalars["BigDecimal"]["output"];
  volumeChange: Scalars["BigInt"]["output"];
  volumeUsd: Scalars["BigDecimal"]["output"];
};

export type PoolDataPoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDataPoint_Filter>>>;
  eventType?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  eventType_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_not?: InputMaybe<Scalars["Int8"]["input"]>;
  eventType_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  feesUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  feesUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  feesUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolDataPoint_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_?: InputMaybe<PoolShareAddress_Filter>;
  poolShareAddress_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_gt?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_gte?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolShareAddress_lt?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_lte?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  poolShareAddress_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  poolShareAddress_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  poolShareAddress_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  tvlChangeUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tvlChangeUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlChangeUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  volumeChange?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volumeChange_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  volumeChange_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  volumeUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  volumeUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  volumeUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum PoolDataPoint_OrderBy {
  EventType = "eventType",
  FeesUsd = "feesUsd",
  Id = "id",
  Pool = "pool",
  PoolShareAddress = "poolShareAddress",
  PoolShareAddressAddress = "poolShareAddress__address",
  PoolShareAddressId = "poolShareAddress__id",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  Timestamp = "timestamp",
  TvlChangeUsd = "tvlChangeUsd",
  VolumeChange = "volumeChange",
  VolumeUsd = "volumeUsd",
}

export type PoolShareAddress = {
  __typename?: "PoolShareAddress";
  address: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  vault?: Maybe<Vault>;
};

export type PoolShareAddress_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_gt?: InputMaybe<Scalars["String"]["input"]>;
  address_gte?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_lt?: InputMaybe<Scalars["String"]["input"]>;
  address_lte?: InputMaybe<Scalars["String"]["input"]>;
  address_not?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<PoolShareAddress_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolShareAddress_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PoolShareAddress_OrderBy {
  Address = "address",
  Id = "id",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

/**
 * PoolTemplate represents a pool type pattern to create new pools
 *
 */
export type PoolTemplate = {
  __typename?: "PoolTemplate";
  blockInit: Scalars["BigInt"]["output"];
  blockRevise: Scalars["BigInt"]["output"];
  enabled: Scalars["Boolean"]["output"];
  feeRate: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  poolIdx: Scalars["BigInt"]["output"];
  pools: Array<Pool>;
  priceCeiling: Scalars["BigInt"]["output"];
  priceFloor: Scalars["BigInt"]["output"];
  timeInit: Scalars["BigInt"]["output"];
  timeRevise: Scalars["BigInt"]["output"];
};

/**
 * PoolTemplate represents a pool type pattern to create new pools
 *
 */
export type PoolTemplatePoolsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<Pool_Filter>;
};

export type PoolTemplate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolTemplate_Filter>>>;
  blockInit?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockInit_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockInit_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockRevise?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockRevise_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockRevise_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  enabled_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  feeRate?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_gt?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_gte?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  feeRate_lt?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_lte?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_not?: InputMaybe<Scalars["Int"]["input"]>;
  feeRate_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<PoolTemplate_Filter>>>;
  poolIdx?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  poolIdx_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  pools_?: InputMaybe<Pool_Filter>;
  priceCeiling?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  priceCeiling_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceCeiling_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  priceFloor?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  priceFloor_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  priceFloor_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeInit?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeInit_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeInit_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeRevise?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeRevise_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeRevise_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum PoolTemplate_OrderBy {
  BlockInit = "blockInit",
  BlockRevise = "blockRevise",
  Enabled = "enabled",
  FeeRate = "feeRate",
  Id = "id",
  PoolIdx = "poolIdx",
  Pools = "pools",
  PriceCeiling = "priceCeiling",
  PriceFloor = "priceFloor",
  TimeInit = "timeInit",
  TimeRevise = "timeRevise",
}

export type PoolUsage = {
  __typename?: "PoolUsage";
  allTimeTxCount: Scalars["BigInt"]["output"];
  allTimeVolumeUsd: Scalars["BigDecimal"]["output"];
  allTimefeesUsd: Scalars["BigDecimal"]["output"];
  dailyVolumeUsd: Scalars["BigDecimal"]["output"];
  dailyfeesUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  pool: Pool;
  poolShareAddress?: Maybe<PoolShareAddress>;
  timestamp: Scalars["Timestamp"]["output"];
  tvlUsd: Scalars["BigDecimal"]["output"];
  txCount: Scalars["BigInt"]["output"];
};

export type PoolUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<PoolUsage_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress?: InputMaybe<Scalars["String"]["input"]>;
  poolShareAddress_?: InputMaybe<PoolShareAddress_Filter>;
  pool_?: InputMaybe<Pool_Filter>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
};

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  base?: InputMaybe<Scalars["Bytes"]["input"]>;
  baseAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseInfo?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_?: InputMaybe<TokenInformation_Filter>;
  baseInfo_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_gt?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_gte?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseInfo_lt?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_lte?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseInfo_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseInfo_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  base_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  base_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  base_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockCreate?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockCreate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockCreate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  liquidityChanges_?: InputMaybe<LiquidityChange_Filter>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  pool24hStats?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_?: InputMaybe<Pool24hStats_Filter>;
  pool24hStats_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool24hStats_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool24hStats_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool24hStats_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  poolIdx?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  poolIdx_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  poolIdx_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  quote?: InputMaybe<Scalars["Bytes"]["input"]>;
  quoteAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteInfo?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_?: InputMaybe<TokenInformation_Filter>;
  quoteInfo_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_gt?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_gte?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteInfo_lt?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_lte?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteInfo_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteInfo_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quote_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  quote_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  quote_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  shareAddress_?: InputMaybe<PoolShareAddress_Filter>;
  swaps_?: InputMaybe<Swap_Filter>;
  template?: InputMaybe<Scalars["String"]["input"]>;
  template_?: InputMaybe<PoolTemplate_Filter>;
  template_contains?: InputMaybe<Scalars["String"]["input"]>;
  template_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  template_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  template_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  template_gt?: InputMaybe<Scalars["String"]["input"]>;
  template_gte?: InputMaybe<Scalars["String"]["input"]>;
  template_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  template_lt?: InputMaybe<Scalars["String"]["input"]>;
  template_lte?: InputMaybe<Scalars["String"]["input"]>;
  template_not?: InputMaybe<Scalars["String"]["input"]>;
  template_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  template_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  template_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  template_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  template_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  template_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  template_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  template_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  template_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  timeCreate?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  timeCreate_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  timeCreate_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tvlUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  tvlUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  tvlUsd_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wtv?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  wtv_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  wtv_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum Pool_OrderBy {
  Base = "base",
  BaseAmount = "baseAmount",
  BaseInfo = "baseInfo",
  BaseInfoAddress = "baseInfo__address",
  BaseInfoBeraValue = "baseInfo__beraValue",
  BaseInfoDecimals = "baseInfo__decimals",
  BaseInfoId = "baseInfo__id",
  BaseInfoName = "baseInfo__name",
  BaseInfoSymbol = "baseInfo__symbol",
  BaseInfoUsdValue = "baseInfo__usdValue",
  BlockCreate = "blockCreate",
  Id = "id",
  LiquidityChanges = "liquidityChanges",
  Pool24hStats = "pool24hStats",
  Pool24hStatsDayFeesUsd = "pool24hStats__dayFeesUsd",
  Pool24hStatsDayTimestamp = "pool24hStats__dayTimestamp",
  Pool24hStatsDayVolumeUsd = "pool24hStats__dayVolumeUsd",
  Pool24hStatsId = "pool24hStats__id",
  PoolIdx = "poolIdx",
  Quote = "quote",
  QuoteAmount = "quoteAmount",
  QuoteInfo = "quoteInfo",
  QuoteInfoAddress = "quoteInfo__address",
  QuoteInfoBeraValue = "quoteInfo__beraValue",
  QuoteInfoDecimals = "quoteInfo__decimals",
  QuoteInfoId = "quoteInfo__id",
  QuoteInfoName = "quoteInfo__name",
  QuoteInfoSymbol = "quoteInfo__symbol",
  QuoteInfoUsdValue = "quoteInfo__usdValue",
  ShareAddress = "shareAddress",
  ShareAddressAddress = "shareAddress__address",
  ShareAddressId = "shareAddress__id",
  Swaps = "swaps",
  Template = "template",
  TemplateBlockInit = "template__blockInit",
  TemplateBlockRevise = "template__blockRevise",
  TemplateEnabled = "template__enabled",
  TemplateFeeRate = "template__feeRate",
  TemplateId = "template__id",
  TemplatePoolIdx = "template__poolIdx",
  TemplatePriceCeiling = "template__priceCeiling",
  TemplatePriceFloor = "template__priceFloor",
  TemplateTimeInit = "template__timeInit",
  TemplateTimeRevise = "template__timeRevise",
  TimeCreate = "timeCreate",
  TvlUsd = "tvlUsd",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
  Wtv = "wtv",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activeIncentive?: Maybe<ActiveIncentive>;
  activeIncentives: Array<ActiveIncentive>;
  /** Collection of aggregated `BexGlobalUsage` values */
  bexGlobalUsages: Array<BexGlobalUsage>;
  block?: Maybe<Block>;
  blockInfo?: Maybe<BlockInfo>;
  blockInfos: Array<BlockInfo>;
  blockReward?: Maybe<BlockReward>;
  /** Collection of aggregated `BlockRewardStatsByValidator` values */
  blockRewardStatsByValidators: Array<BlockRewardStatsByValidator>;
  blockRewards: Array<BlockReward>;
  /** Collection of aggregated `BlockStatsByValidator` values */
  blockStatsByValidators: Array<BlockStatsByValidator>;
  /** Collection of aggregated `BlockStats` values */
  blockStats_collection: Array<BlockStats>;
  blocks: Array<Block>;
  defaultCuttingBoard?: Maybe<DefaultCuttingBoard>;
  defaultCuttingBoardWeight?: Maybe<DefaultCuttingBoardWeight>;
  defaultCuttingBoardWeights: Array<DefaultCuttingBoardWeight>;
  defaultCuttingBoards: Array<DefaultCuttingBoard>;
  feeChange?: Maybe<FeeChange>;
  feeChanges: Array<FeeChange>;
  friendsOfTheChef?: Maybe<FriendsOfTheChef>;
  friendsOfTheChefs: Array<FriendsOfTheChef>;
  globalCuttingBoardWeight?: Maybe<GlobalCuttingBoardWeight>;
  globalCuttingBoardWeights: Array<GlobalCuttingBoardWeight>;
  /** Collection of aggregated `GlobalIncentivesUsage` values */
  globalIncentivesUsages: Array<GlobalIncentivesUsage>;
  globalInfo?: Maybe<GlobalInfo>;
  globalInfos: Array<GlobalInfo>;
  incentivesDataPoint?: Maybe<IncentivesDataPoint>;
  incentivesDataPoints: Array<IncentivesDataPoint>;
  liquidityChange?: Maybe<LiquidityChange>;
  liquidityChanges: Array<LiquidityChange>;
  pool?: Maybe<Pool>;
  pool24HStats?: Maybe<Pool24hStats>;
  pool24HStats_collection: Array<Pool24hStats>;
  poolDataPoint?: Maybe<PoolDataPoint>;
  poolDataPoints: Array<PoolDataPoint>;
  poolShareAddress?: Maybe<PoolShareAddress>;
  poolShareAddresses: Array<PoolShareAddress>;
  poolTemplate?: Maybe<PoolTemplate>;
  poolTemplates: Array<PoolTemplate>;
  /** Collection of aggregated `PoolUsage` values */
  poolUsages: Array<PoolUsage>;
  pools: Array<Pool>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tokenInformation?: Maybe<TokenInformation>;
  tokenInformations: Array<TokenInformation>;
  userDepositedPool?: Maybe<UserDepositedPool>;
  userDepositedPools: Array<UserDepositedPool>;
  userValidatorInformation?: Maybe<UserValidatorInformation>;
  userValidatorInformations: Array<UserValidatorInformation>;
  userVaultDeposits?: Maybe<UserVaultDeposits>;
  userVaultDeposits_collection: Array<UserVaultDeposits>;
  validator?: Maybe<Validator>;
  validatorBGTStakedDataPoint?: Maybe<ValidatorBgtStakedDataPoint>;
  validatorBGTStakedDataPoints: Array<ValidatorBgtStakedDataPoint>;
  /** Collection of aggregated `ValidatorBGTStaked` values */
  validatorBGTStakeds: Array<ValidatorBgtStaked>;
  validatorCuttingBoard?: Maybe<ValidatorCuttingBoard>;
  validatorCuttingBoardWeight?: Maybe<ValidatorCuttingBoardWeight>;
  validatorCuttingBoardWeights: Array<ValidatorCuttingBoardWeight>;
  validatorCuttingBoards: Array<ValidatorCuttingBoard>;
  /** Collection of aggregated `ValidatorTokenRewardUsage` values */
  validatorTokenRewardUsages: Array<ValidatorTokenRewardUsage>;
  /** Collection of aggregated `ValidatorUsage` values */
  validatorUsages: Array<ValidatorUsage>;
  validators: Array<Validator>;
  vault?: Maybe<Vault>;
  /** Collection of aggregated `VaultTokenUsage` values */
  vaultTokenUsages: Array<VaultTokenUsage>;
  /** Collection of aggregated `VaultUsage` values */
  vaultUsages: Array<VaultUsage>;
  vaultWhiteList?: Maybe<VaultWhiteList>;
  vaultWhiteListToken?: Maybe<VaultWhiteListToken>;
  vaultWhiteListTokens: Array<VaultWhiteListToken>;
  vaultWhiteLists: Array<VaultWhiteList>;
  vaults: Array<Vault>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryActiveIncentiveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryActiveIncentivesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ActiveIncentive_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActiveIncentive_Filter>;
};

export type QueryBexGlobalUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BexGlobalUsage_Filter>;
};

export type QueryBlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBlockInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBlockInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlockInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockInfo_Filter>;
};

export type QueryBlockRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBlockRewardStatsByValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockRewardStatsByValidator_Filter>;
};

export type QueryBlockRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlockReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockReward_Filter>;
};

export type QueryBlockStatsByValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockStatsByValidator_Filter>;
};

export type QueryBlockStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockStats_Filter>;
};

export type QueryBlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
};

export type QueryDefaultCuttingBoardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDefaultCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDefaultCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DefaultCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DefaultCuttingBoardWeight_Filter>;
};

export type QueryDefaultCuttingBoardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DefaultCuttingBoard_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DefaultCuttingBoard_Filter>;
};

export type QueryFeeChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFeeChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FeeChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeChange_Filter>;
};

export type QueryFriendsOfTheChefArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFriendsOfTheChefsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FriendsOfTheChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FriendsOfTheChef_Filter>;
};

export type QueryGlobalCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGlobalCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GlobalCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalCuttingBoardWeight_Filter>;
};

export type QueryGlobalIncentivesUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalIncentivesUsage_Filter>;
};

export type QueryGlobalInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGlobalInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GlobalInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalInfo_Filter>;
};

export type QueryIncentivesDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryIncentivesDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<IncentivesDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivesDataPoint_Filter>;
};

export type QueryLiquidityChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLiquidityChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LiquidityChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChange_Filter>;
};

export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPool24HStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPool24HStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool24hStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool24hStats_Filter>;
};

export type QueryPoolDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDataPoint_Filter>;
};

export type QueryPoolShareAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolShareAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShareAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShareAddress_Filter>;
};

export type QueryPoolTemplateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolTemplatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolTemplate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTemplate_Filter>;
};

export type QueryPoolUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolUsage_Filter>;
};

export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type QueryTokenInformationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenInformationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenInformation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenInformation_Filter>;
};

export type QueryUserDepositedPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserDepositedPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserDepositedPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDepositedPool_Filter>;
};

export type QueryUserValidatorInformationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserValidatorInformationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserValidatorInformation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserValidatorInformation_Filter>;
};

export type QueryUserVaultDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserVaultDeposits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserVaultDeposits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserVaultDeposits_Filter>;
};

export type QueryValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryValidatorBgtStakedDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryValidatorBgtStakedDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorBgtStakedDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorBgtStakedDataPoint_Filter>;
};

export type QueryValidatorBgtStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorBgtStaked_Filter>;
};

export type QueryValidatorCuttingBoardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryValidatorCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryValidatorCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorCuttingBoardWeight_Filter>;
};

export type QueryValidatorCuttingBoardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorCuttingBoard_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorCuttingBoard_Filter>;
};

export type QueryValidatorTokenRewardUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorTokenRewardUsage_Filter>;
};

export type QueryValidatorUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorUsage_Filter>;
};

export type QueryValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};

export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultTokenUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTokenUsage_Filter>;
};

export type QueryVaultUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultUsage_Filter>;
};

export type QueryVaultWhiteListArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultWhiteListTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultWhiteListTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWhiteListToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWhiteListToken_Filter>;
};

export type QueryVaultWhiteListsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWhiteList_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWhiteList_Filter>;
};

export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  activeIncentive?: Maybe<ActiveIncentive>;
  activeIncentives: Array<ActiveIncentive>;
  /** Collection of aggregated `BexGlobalUsage` values */
  bexGlobalUsages: Array<BexGlobalUsage>;
  block?: Maybe<Block>;
  blockInfo?: Maybe<BlockInfo>;
  blockInfos: Array<BlockInfo>;
  blockReward?: Maybe<BlockReward>;
  /** Collection of aggregated `BlockRewardStatsByValidator` values */
  blockRewardStatsByValidators: Array<BlockRewardStatsByValidator>;
  blockRewards: Array<BlockReward>;
  /** Collection of aggregated `BlockStatsByValidator` values */
  blockStatsByValidators: Array<BlockStatsByValidator>;
  /** Collection of aggregated `BlockStats` values */
  blockStats_collection: Array<BlockStats>;
  blocks: Array<Block>;
  defaultCuttingBoard?: Maybe<DefaultCuttingBoard>;
  defaultCuttingBoardWeight?: Maybe<DefaultCuttingBoardWeight>;
  defaultCuttingBoardWeights: Array<DefaultCuttingBoardWeight>;
  defaultCuttingBoards: Array<DefaultCuttingBoard>;
  feeChange?: Maybe<FeeChange>;
  feeChanges: Array<FeeChange>;
  friendsOfTheChef?: Maybe<FriendsOfTheChef>;
  friendsOfTheChefs: Array<FriendsOfTheChef>;
  globalCuttingBoardWeight?: Maybe<GlobalCuttingBoardWeight>;
  globalCuttingBoardWeights: Array<GlobalCuttingBoardWeight>;
  /** Collection of aggregated `GlobalIncentivesUsage` values */
  globalIncentivesUsages: Array<GlobalIncentivesUsage>;
  globalInfo?: Maybe<GlobalInfo>;
  globalInfos: Array<GlobalInfo>;
  incentivesDataPoint?: Maybe<IncentivesDataPoint>;
  incentivesDataPoints: Array<IncentivesDataPoint>;
  liquidityChange?: Maybe<LiquidityChange>;
  liquidityChanges: Array<LiquidityChange>;
  pool?: Maybe<Pool>;
  pool24HStats?: Maybe<Pool24hStats>;
  pool24HStats_collection: Array<Pool24hStats>;
  poolDataPoint?: Maybe<PoolDataPoint>;
  poolDataPoints: Array<PoolDataPoint>;
  poolShareAddress?: Maybe<PoolShareAddress>;
  poolShareAddresses: Array<PoolShareAddress>;
  poolTemplate?: Maybe<PoolTemplate>;
  poolTemplates: Array<PoolTemplate>;
  /** Collection of aggregated `PoolUsage` values */
  poolUsages: Array<PoolUsage>;
  pools: Array<Pool>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tokenInformation?: Maybe<TokenInformation>;
  tokenInformations: Array<TokenInformation>;
  userDepositedPool?: Maybe<UserDepositedPool>;
  userDepositedPools: Array<UserDepositedPool>;
  userValidatorInformation?: Maybe<UserValidatorInformation>;
  userValidatorInformations: Array<UserValidatorInformation>;
  userVaultDeposits?: Maybe<UserVaultDeposits>;
  userVaultDeposits_collection: Array<UserVaultDeposits>;
  validator?: Maybe<Validator>;
  validatorBGTStakedDataPoint?: Maybe<ValidatorBgtStakedDataPoint>;
  validatorBGTStakedDataPoints: Array<ValidatorBgtStakedDataPoint>;
  /** Collection of aggregated `ValidatorBGTStaked` values */
  validatorBGTStakeds: Array<ValidatorBgtStaked>;
  validatorCuttingBoard?: Maybe<ValidatorCuttingBoard>;
  validatorCuttingBoardWeight?: Maybe<ValidatorCuttingBoardWeight>;
  validatorCuttingBoardWeights: Array<ValidatorCuttingBoardWeight>;
  validatorCuttingBoards: Array<ValidatorCuttingBoard>;
  /** Collection of aggregated `ValidatorTokenRewardUsage` values */
  validatorTokenRewardUsages: Array<ValidatorTokenRewardUsage>;
  /** Collection of aggregated `ValidatorUsage` values */
  validatorUsages: Array<ValidatorUsage>;
  validators: Array<Validator>;
  vault?: Maybe<Vault>;
  /** Collection of aggregated `VaultTokenUsage` values */
  vaultTokenUsages: Array<VaultTokenUsage>;
  /** Collection of aggregated `VaultUsage` values */
  vaultUsages: Array<VaultUsage>;
  vaultWhiteList?: Maybe<VaultWhiteList>;
  vaultWhiteListToken?: Maybe<VaultWhiteListToken>;
  vaultWhiteListTokens: Array<VaultWhiteListToken>;
  vaultWhiteLists: Array<VaultWhiteList>;
  vaults: Array<Vault>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionActiveIncentiveArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionActiveIncentivesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ActiveIncentive_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ActiveIncentive_Filter>;
};

export type SubscriptionBexGlobalUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BexGlobalUsage_Filter>;
};

export type SubscriptionBlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBlockInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBlockInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlockInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockInfo_Filter>;
};

export type SubscriptionBlockRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBlockRewardStatsByValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockRewardStatsByValidator_Filter>;
};

export type SubscriptionBlockRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BlockReward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockReward_Filter>;
};

export type SubscriptionBlockStatsByValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockStatsByValidator_Filter>;
};

export type SubscriptionBlockStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BlockStats_Filter>;
};

export type SubscriptionBlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
};

export type SubscriptionDefaultCuttingBoardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDefaultCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDefaultCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DefaultCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DefaultCuttingBoardWeight_Filter>;
};

export type SubscriptionDefaultCuttingBoardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<DefaultCuttingBoard_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DefaultCuttingBoard_Filter>;
};

export type SubscriptionFeeChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFeeChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FeeChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FeeChange_Filter>;
};

export type SubscriptionFriendsOfTheChefArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFriendsOfTheChefsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<FriendsOfTheChef_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FriendsOfTheChef_Filter>;
};

export type SubscriptionGlobalCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGlobalCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GlobalCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalCuttingBoardWeight_Filter>;
};

export type SubscriptionGlobalIncentivesUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalIncentivesUsage_Filter>;
};

export type SubscriptionGlobalInfoArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGlobalInfosArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<GlobalInfo_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GlobalInfo_Filter>;
};

export type SubscriptionIncentivesDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionIncentivesDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<IncentivesDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<IncentivesDataPoint_Filter>;
};

export type SubscriptionLiquidityChangeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLiquidityChangesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<LiquidityChange_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChange_Filter>;
};

export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPool24HStatsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPool24HStats_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool24hStats_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool24hStats_Filter>;
};

export type SubscriptionPoolDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDataPoint_Filter>;
};

export type SubscriptionPoolShareAddressArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolShareAddressesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolShareAddress_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolShareAddress_Filter>;
};

export type SubscriptionPoolTemplateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolTemplatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<PoolTemplate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolTemplate_Filter>;
};

export type SubscriptionPoolUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolUsage_Filter>;
};

export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};

export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};

export type SubscriptionTokenInformationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenInformationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TokenInformation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenInformation_Filter>;
};

export type SubscriptionUserDepositedPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserDepositedPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserDepositedPool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserDepositedPool_Filter>;
};

export type SubscriptionUserValidatorInformationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserValidatorInformationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserValidatorInformation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserValidatorInformation_Filter>;
};

export type SubscriptionUserVaultDepositsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserVaultDeposits_CollectionArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<UserVaultDeposits_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserVaultDeposits_Filter>;
};

export type SubscriptionValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionValidatorBgtStakedDataPointArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionValidatorBgtStakedDataPointsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorBgtStakedDataPoint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorBgtStakedDataPoint_Filter>;
};

export type SubscriptionValidatorBgtStakedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorBgtStaked_Filter>;
};

export type SubscriptionValidatorCuttingBoardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionValidatorCuttingBoardWeightArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionValidatorCuttingBoardWeightsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorCuttingBoardWeight_Filter>;
};

export type SubscriptionValidatorCuttingBoardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorCuttingBoard_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorCuttingBoard_Filter>;
};

export type SubscriptionValidatorTokenRewardUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorTokenRewardUsage_Filter>;
};

export type SubscriptionValidatorUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ValidatorUsage_Filter>;
};

export type SubscriptionValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};

export type SubscriptionVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultTokenUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultTokenUsage_Filter>;
};

export type SubscriptionVaultUsagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  interval: Aggregation_Interval;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultUsage_Filter>;
};

export type SubscriptionVaultWhiteListArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultWhiteListTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultWhiteListTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWhiteListToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWhiteListToken_Filter>;
};

export type SubscriptionVaultWhiteListsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWhiteList_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<VaultWhiteList_Filter>;
};

export type SubscriptionVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

/**
 * A Swap entity represents an atomic swap of a base token for a quote token
 * made on either CrocSwap or Uniswap V3.
 *
 */
export type Swap = {
  __typename?: "Swap";
  baseAssetBeraPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  baseAssetUsdPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  baseFlow: Scalars["BigInt"]["output"];
  block: Scalars["BigInt"]["output"];
  callSource: Scalars["String"]["output"];
  dex: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  inBaseQty: Scalars["Boolean"]["output"];
  isBuy: Scalars["Boolean"]["output"];
  limitPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  minOut?: Maybe<Scalars["BigInt"]["output"]>;
  pool: Pool;
  price?: Maybe<Scalars["BigDecimal"]["output"]>;
  qty: Scalars["BigInt"]["output"];
  quoteAssetBeraPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  quoteAssetUsdPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  quoteFlow: Scalars["BigInt"]["output"];
  time: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  transactionIndex: Scalars["BigInt"]["output"];
  user: Scalars["Bytes"]["output"];
};

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  baseAssetBeraPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetBeraPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetBeraPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetUsdPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseAssetUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  baseAssetUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  baseFlow?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  baseFlow_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  baseFlow_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  block_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  block_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  callSource?: InputMaybe<Scalars["String"]["input"]>;
  callSource_contains?: InputMaybe<Scalars["String"]["input"]>;
  callSource_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_gt?: InputMaybe<Scalars["String"]["input"]>;
  callSource_gte?: InputMaybe<Scalars["String"]["input"]>;
  callSource_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  callSource_lt?: InputMaybe<Scalars["String"]["input"]>;
  callSource_lte?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  callSource_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callSource_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  callSource_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex?: InputMaybe<Scalars["String"]["input"]>;
  dex_contains?: InputMaybe<Scalars["String"]["input"]>;
  dex_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  dex_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex_gt?: InputMaybe<Scalars["String"]["input"]>;
  dex_gte?: InputMaybe<Scalars["String"]["input"]>;
  dex_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dex_lt?: InputMaybe<Scalars["String"]["input"]>;
  dex_lte?: InputMaybe<Scalars["String"]["input"]>;
  dex_not?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  dex_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  dex_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  dex_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  dex_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  inBaseQty?: InputMaybe<Scalars["Boolean"]["input"]>;
  inBaseQty_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  inBaseQty_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  inBaseQty_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isBuy?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBuy_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isBuy_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isBuy_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  limitPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  limitPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  limitPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minOut?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  minOut_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  minOut_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  qty?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  qty_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  qty_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  quoteAssetBeraPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteAssetBeraPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetBeraPrice_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  quoteAssetUsdPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteAssetUsdPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  quoteAssetUsdPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteFlow?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  quoteFlow_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  quoteFlow_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  time?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  time_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  time_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionIndex?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionIndex_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  transactionIndex_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  user?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum Swap_OrderBy {
  BaseAssetBeraPrice = "baseAssetBeraPrice",
  BaseAssetUsdPrice = "baseAssetUsdPrice",
  BaseFlow = "baseFlow",
  Block = "block",
  CallSource = "callSource",
  Dex = "dex",
  Id = "id",
  InBaseQty = "inBaseQty",
  IsBuy = "isBuy",
  LimitPrice = "limitPrice",
  MinOut = "minOut",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  Price = "price",
  Qty = "qty",
  QuoteAssetBeraPrice = "quoteAssetBeraPrice",
  QuoteAssetUsdPrice = "quoteAssetUsdPrice",
  QuoteFlow = "quoteFlow",
  Time = "time",
  TransactionHash = "transactionHash",
  TransactionIndex = "transactionIndex",
  User = "user",
}

export type TokenInformation = {
  __typename?: "TokenInformation";
  address: Scalars["String"]["output"];
  beraValue: Scalars["BigDecimal"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  usdValue: Scalars["BigDecimal"]["output"];
};

export type TokenInformation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  address_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_gt?: InputMaybe<Scalars["String"]["input"]>;
  address_gte?: InputMaybe<Scalars["String"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_lt?: InputMaybe<Scalars["String"]["input"]>;
  address_lte?: InputMaybe<Scalars["String"]["input"]>;
  address_not?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  address_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  address_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  address_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  and?: InputMaybe<Array<InputMaybe<TokenInformation_Filter>>>;
  beraValue?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  beraValue_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  beraValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<TokenInformation_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  usdValue?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  usdValue_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  usdValue_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum TokenInformation_OrderBy {
  Address = "address",
  BeraValue = "beraValue",
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
  UsdValue = "usdValue",
}

export type UserDepositedPool = {
  __typename?: "UserDepositedPool";
  id: Scalars["Bytes"]["output"];
  pool: Pool;
  user: Scalars["Bytes"]["output"];
};

export type UserDepositedPool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserDepositedPool_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<UserDepositedPool_Filter>>>;
  pool?: InputMaybe<Scalars["String"]["input"]>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_gt?: InputMaybe<Scalars["String"]["input"]>;
  pool_gte?: InputMaybe<Scalars["String"]["input"]>;
  pool_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_lt?: InputMaybe<Scalars["String"]["input"]>;
  pool_lte?: InputMaybe<Scalars["String"]["input"]>;
  pool_not?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  pool_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  pool_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  user?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum UserDepositedPool_OrderBy {
  Id = "id",
  Pool = "pool",
  PoolBase = "pool__base",
  PoolBaseAmount = "pool__baseAmount",
  PoolBlockCreate = "pool__blockCreate",
  PoolId = "pool__id",
  PoolPoolIdx = "pool__poolIdx",
  PoolQuote = "pool__quote",
  PoolQuoteAmount = "pool__quoteAmount",
  PoolTimeCreate = "pool__timeCreate",
  PoolTvlUsd = "pool__tvlUsd",
  PoolWtv = "pool__wtv",
  User = "user",
}

export type UserValidatorInformation = {
  __typename?: "UserValidatorInformation";
  amountDeposited: Scalars["BigDecimal"]["output"];
  amountQueued: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  latestBlock: Scalars["BigInt"]["output"];
  latestBlockTime: Scalars["BigInt"]["output"];
  user: Scalars["Bytes"]["output"];
  validator: Validator;
};

export type UserValidatorInformation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountDeposited?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountDeposited_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountDeposited_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountQueued?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountQueued_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<UserValidatorInformation_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  latestBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  latestBlockTime_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlockTime_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  latestBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  latestBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  latestBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<UserValidatorInformation_Filter>>>;
  user?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum UserValidatorInformation_OrderBy {
  AmountDeposited = "amountDeposited",
  AmountQueued = "amountQueued",
  Id = "id",
  LatestBlock = "latestBlock",
  LatestBlockTime = "latestBlockTime",
  User = "user",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
}

export type UserVaultDeposits = {
  __typename?: "UserVaultDeposits";
  amount: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  user: Scalars["Bytes"]["output"];
  vault: Vault;
};

export type UserVaultDeposits_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<UserVaultDeposits_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<UserVaultDeposits_Filter>>>;
  user?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  user_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  user_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum UserVaultDeposits_OrderBy {
  Amount = "amount",
  Id = "id",
  User = "user",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

export type Validator = {
  __typename?: "Validator";
  amountQueued: Scalars["BigDecimal"]["output"];
  amountStaked: Scalars["BigDecimal"]["output"];
  coinbase: Scalars["Bytes"]["output"];
  commission: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  validatorCuttingBoard?: Maybe<ValidatorCuttingBoard>;
};

export type ValidatorBgtStaked = {
  __typename?: "ValidatorBGTStaked";
  allTimeBgtStaked: Scalars["BigDecimal"]["output"];
  bgtStaked: Scalars["BigDecimal"]["output"];
  coinbase: Scalars["Bytes"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
};

export type ValidatorBgtStakedDataPoint = {
  __typename?: "ValidatorBGTStakedDataPoint";
  amountStaked: Scalars["BigDecimal"]["output"];
  coinbase: Scalars["Bytes"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
};

export type ValidatorBgtStakedDataPoint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountStaked?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountStaked_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<ValidatorBgtStakedDataPoint_Filter>>>;
  coinbase?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  coinbase_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not?: InputMaybe<Scalars["Int8"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorBgtStakedDataPoint_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
};

export enum ValidatorBgtStakedDataPoint_OrderBy {
  AmountStaked = "amountStaked",
  Coinbase = "coinbase",
  Id = "id",
  Timestamp = "timestamp",
}

export type ValidatorBgtStaked_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorBgtStaked_Filter>>>;
  coinbase?: InputMaybe<Scalars["Bytes"]["input"]>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<ValidatorBgtStaked_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
};

export type ValidatorCuttingBoard = {
  __typename?: "ValidatorCuttingBoard";
  id: Scalars["Bytes"]["output"];
  startBlock: Scalars["BigInt"]["output"];
  validator: Validator;
  weights: Array<ValidatorCuttingBoardWeight>;
};

export type ValidatorCuttingBoardWeightsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ValidatorCuttingBoardWeight_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ValidatorCuttingBoardWeight_Filter>;
};

export type ValidatorCuttingBoardWeight = {
  __typename?: "ValidatorCuttingBoardWeight";
  id: Scalars["Bytes"]["output"];
  owner: ValidatorCuttingBoard;
  percentageNumerator: Scalars["BigInt"]["output"];
  receiver: Scalars["Bytes"]["output"];
  vault?: Maybe<Vault>;
};

export type ValidatorCuttingBoardWeight_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorCuttingBoardWeight_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorCuttingBoardWeight_Filter>>>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<ValidatorCuttingBoard_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  percentageNumerator?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  percentageNumerator_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  percentageNumerator_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  receiver?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  receiver_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  receiver_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum ValidatorCuttingBoardWeight_OrderBy {
  Id = "id",
  Owner = "owner",
  OwnerId = "owner__id",
  OwnerStartBlock = "owner__startBlock",
  PercentageNumerator = "percentageNumerator",
  Receiver = "receiver",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
}

export type ValidatorCuttingBoard_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorCuttingBoard_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorCuttingBoard_Filter>>>;
  startBlock?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startBlock_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startBlock_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_gt?: InputMaybe<Scalars["String"]["input"]>;
  validator_gte?: InputMaybe<Scalars["String"]["input"]>;
  validator_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_lt?: InputMaybe<Scalars["String"]["input"]>;
  validator_lte?: InputMaybe<Scalars["String"]["input"]>;
  validator_not?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  validator_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  validator_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  weights_?: InputMaybe<ValidatorCuttingBoardWeight_Filter>;
};

export enum ValidatorCuttingBoard_OrderBy {
  Id = "id",
  StartBlock = "startBlock",
  Validator = "validator",
  ValidatorAmountQueued = "validator__amountQueued",
  ValidatorAmountStaked = "validator__amountStaked",
  ValidatorCoinbase = "validator__coinbase",
  ValidatorCommission = "validator__commission",
  ValidatorId = "validator__id",
  Weights = "weights",
}

export type ValidatorTokenRewardUsage = {
  __typename?: "ValidatorTokenRewardUsage";
  allTimeTokenRewarded: Scalars["BigDecimal"]["output"];
  allTimeUsdValueTokenRewarded: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  token: TokenInformation;
  tokenRewarded: Scalars["BigDecimal"]["output"];
  usdValueTokenRewarded: Scalars["BigDecimal"]["output"];
  validator: Validator;
};

export type ValidatorTokenRewardUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorTokenRewardUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<ValidatorTokenRewardUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<TokenInformation_Filter>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
};

export type ValidatorUsage = {
  __typename?: "ValidatorUsage";
  allTimeBgtDirected: Scalars["BigDecimal"]["output"];
  allTimeUsdValueBgtDirected: Scalars["BigDecimal"]["output"];
  allTimeUsdValueTokenRewarded: Scalars["BigDecimal"]["output"];
  bgtDirected: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  usdValueBgtDirected: Scalars["BigDecimal"]["output"];
  usdValueTokenRewarded: Scalars["BigDecimal"]["output"];
  validator: Validator;
};

export type ValidatorUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<ValidatorUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  validator?: InputMaybe<Scalars["String"]["input"]>;
  validator_?: InputMaybe<Validator_Filter>;
};

export type Validator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountQueued?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountQueued_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountQueued_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountStaked?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountStaked_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountStaked_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  coinbase?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  coinbase_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  coinbase_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  commission?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  commission_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  commission_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  validatorCuttingBoard_?: InputMaybe<ValidatorCuttingBoard_Filter>;
};

export enum Validator_OrderBy {
  AmountQueued = "amountQueued",
  AmountStaked = "amountStaked",
  Coinbase = "coinbase",
  Commission = "commission",
  Id = "id",
  ValidatorCuttingBoard = "validatorCuttingBoard",
  ValidatorCuttingBoardId = "validatorCuttingBoard__id",
  ValidatorCuttingBoardStartBlock = "validatorCuttingBoard__startBlock",
}

export type Vault = {
  __typename?: "Vault";
  activeIncentives?: Maybe<Array<ActiveIncentive>>;
  activeIncentivesValueUsd: Scalars["BigDecimal"]["output"];
  id: Scalars["Bytes"]["output"];
  stakingToken: TokenInformation;
  stakingTokenAmount: Scalars["BigDecimal"]["output"];
  vaultAddress: Scalars["Bytes"]["output"];
  vaultWhitelist?: Maybe<VaultWhiteList>;
};

export type VaultActiveIncentivesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<ActiveIncentive_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ActiveIncentive_Filter>;
};

export type VaultTokenUsage = {
  __typename?: "VaultTokenUsage";
  allTimeTokenEmitted: Scalars["BigDecimal"]["output"];
  allTimeUsdValueTokenEmitted: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  token: TokenInformation;
  tokenEmitted: Scalars["BigDecimal"]["output"];
  usdValueTokenEmitted: Scalars["BigDecimal"]["output"];
  vault: Vault;
};

export type VaultTokenUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultTokenUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<VaultTokenUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  token_?: InputMaybe<TokenInformation_Filter>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
};

export type VaultUsage = {
  __typename?: "VaultUsage";
  allTimeBgtReceived: Scalars["BigDecimal"]["output"];
  allTimeUsdValueBgtReceived: Scalars["BigDecimal"]["output"];
  allTimeUsdValueIncentivesVolume: Scalars["BigDecimal"]["output"];
  bgtReceived: Scalars["BigDecimal"]["output"];
  id: Scalars["Int8"]["output"];
  timestamp: Scalars["Timestamp"]["output"];
  usdValueBgtReceived: Scalars["BigDecimal"]["output"];
  usdValueTokensEmitted: Scalars["BigDecimal"]["output"];
  vault: Vault;
};

export type VaultUsage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultUsage_Filter>>>;
  id?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_gte?: InputMaybe<Scalars["Int8"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Int8"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Int8"]["input"]>;
  id_lte?: InputMaybe<Scalars["Int8"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<VaultUsage_Filter>>>;
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_gte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Timestamp"]["input"]>>;
  timestamp_lt?: InputMaybe<Scalars["Timestamp"]["input"]>;
  timestamp_lte?: InputMaybe<Scalars["Timestamp"]["input"]>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
};

export type VaultWhiteList = {
  __typename?: "VaultWhiteList";
  id: Scalars["Bytes"]["output"];
  vault: Vault;
  whiteListedTokens?: Maybe<Array<VaultWhiteListToken>>;
};

export type VaultWhiteListWhiteListedTokensArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<VaultWhiteListToken_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<VaultWhiteListToken_Filter>;
};

export type VaultWhiteListToken = {
  __typename?: "VaultWhiteListToken";
  id: Scalars["Bytes"]["output"];
  isWhiteListed: Scalars["Boolean"]["output"];
  vaultWhiteList: VaultWhiteList;
  whiteListedToken: TokenInformation;
};

export type VaultWhiteListToken_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultWhiteListToken_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  isWhiteListed?: InputMaybe<Scalars["Boolean"]["input"]>;
  isWhiteListed_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  isWhiteListed_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isWhiteListed_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<VaultWhiteListToken_Filter>>>;
  vaultWhiteList?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_?: InputMaybe<VaultWhiteList_Filter>;
  vaultWhiteList_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_gt?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_gte?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultWhiteList_lt?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_lte?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vaultWhiteList_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  vaultWhiteList_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vaultWhiteList_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_?: InputMaybe<TokenInformation_Filter>;
  whiteListedToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  whiteListedToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not_ends_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  whiteListedToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  whiteListedToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  whiteListedToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum VaultWhiteListToken_OrderBy {
  Id = "id",
  IsWhiteListed = "isWhiteListed",
  VaultWhiteList = "vaultWhiteList",
  VaultWhiteListId = "vaultWhiteList__id",
  WhiteListedToken = "whiteListedToken",
  WhiteListedTokenAddress = "whiteListedToken__address",
  WhiteListedTokenBeraValue = "whiteListedToken__beraValue",
  WhiteListedTokenDecimals = "whiteListedToken__decimals",
  WhiteListedTokenId = "whiteListedToken__id",
  WhiteListedTokenName = "whiteListedToken__name",
  WhiteListedTokenSymbol = "whiteListedToken__symbol",
  WhiteListedTokenUsdValue = "whiteListedToken__usdValue",
}

export type VaultWhiteList_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VaultWhiteList_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<VaultWhiteList_Filter>>>;
  vault?: InputMaybe<Scalars["String"]["input"]>;
  vault_?: InputMaybe<Vault_Filter>;
  vault_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_gt?: InputMaybe<Scalars["String"]["input"]>;
  vault_gte?: InputMaybe<Scalars["String"]["input"]>;
  vault_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_lt?: InputMaybe<Scalars["String"]["input"]>;
  vault_lte?: InputMaybe<Scalars["String"]["input"]>;
  vault_not?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  vault_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  vault_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  whiteListedTokens_?: InputMaybe<VaultWhiteListToken_Filter>;
};

export enum VaultWhiteList_OrderBy {
  Id = "id",
  Vault = "vault",
  VaultActiveIncentivesValueUsd = "vault__activeIncentivesValueUsd",
  VaultId = "vault__id",
  VaultStakingTokenAmount = "vault__stakingTokenAmount",
  VaultVaultAddress = "vault__vaultAddress",
  WhiteListedTokens = "whiteListedTokens",
}

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  activeIncentivesValueUsd?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  activeIncentivesValueUsd_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  activeIncentivesValueUsd_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  activeIncentives_?: InputMaybe<ActiveIncentive_Filter>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  stakingToken?: InputMaybe<Scalars["String"]["input"]>;
  stakingTokenAmount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  stakingTokenAmount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  stakingTokenAmount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  stakingToken_?: InputMaybe<TokenInformation_Filter>;
  stakingToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stakingToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  stakingToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  stakingToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  vaultAddress?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vaultAddress_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  vaultAddress_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  vaultWhitelist_?: InputMaybe<VaultWhiteList_Filter>;
};

export enum Vault_OrderBy {
  ActiveIncentives = "activeIncentives",
  ActiveIncentivesValueUsd = "activeIncentivesValueUsd",
  Id = "id",
  StakingToken = "stakingToken",
  StakingTokenAmount = "stakingTokenAmount",
  StakingTokenAddress = "stakingToken__address",
  StakingTokenBeraValue = "stakingToken__beraValue",
  StakingTokenDecimals = "stakingToken__decimals",
  StakingTokenId = "stakingToken__id",
  StakingTokenName = "stakingToken__name",
  StakingTokenSymbol = "stakingToken__symbol",
  StakingTokenUsdValue = "stakingToken__usdValue",
  VaultAddress = "vaultAddress",
  VaultWhitelist = "vaultWhitelist",
  VaultWhitelistId = "vaultWhitelist__id",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars["Bytes"]["output"]>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type GetTotalBgtDistributedQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetTotalBgtDistributedQuery = {
  __typename?: "Query";
  globalInfo?: {
    __typename?: "GlobalInfo";
    id: any;
    totalBGTDistributed: any;
  } | null;
};

export type GetBgtInflationQueryVariables = Exact<{ [key: string]: never }>;

export type GetBgtInflationQuery = {
  __typename?: "Query";
  globalInfo?: {
    __typename?: "GlobalInfo";
    id: any;
    rewardRate: any;
    baseRewardRate: any;
  } | null;
};

export type GetUserValidatorInformationQueryVariables = Exact<{
  address: Scalars["Bytes"]["input"];
}>;

export type GetUserValidatorInformationQuery = {
  __typename?: "Query";
  userValidatorInformations: Array<{
    __typename?: "UserValidatorInformation";
    id: any;
    amountQueued: any;
    amountDeposited: any;
    latestBlock: any;
    user: any;
  }>;
};

export type GetValidValidatorQueryVariables = Exact<{
  address: Scalars["ID"]["input"];
}>;

export type GetValidValidatorQuery = {
  __typename?: "Query";
  validator?: { __typename?: "Validator"; coinbase: any } | null;
};

export type GetAllValidatorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllValidatorsQuery = {
  __typename?: "Query";
  validators: Array<{
    __typename?: "Validator";
    coinbase: any;
    amountStaked: any;
  }>;
};

export type GetValidatorBgtStakedQueryVariables = Exact<{
  address: Scalars["Bytes"]["input"];
  timestamp: Scalars["Timestamp"]["input"];
}>;

export type GetValidatorBgtStakedQuery = {
  __typename?: "Query";
  validatorBgtStaked: Array<{
    __typename?: "ValidatorBGTStaked";
    allTimeBgtStaked: any;
    bgtStaked: any;
    coinbase: any;
    timestamp: any;
  }>;
};

export type GetValidatorBgtStakedDeltaQueryVariables = Exact<{
  address: Scalars["Bytes"]["input"];
  timestamp: Scalars["Timestamp"]["input"];
}>;

export type GetValidatorBgtStakedDeltaQuery = {
  __typename?: "Query";
  validatorBgtStakedDelta: Array<{
    __typename?: "ValidatorBGTStakedDataPoint";
    amountStaked: any;
    coinbase: any;
    timestamp: any;
  }>;
};

export type GetValidatorBgtUsageQueryVariables = Exact<{
  address: Scalars["String"]["input"];
  timestamp: Scalars["Timestamp"]["input"];
}>;

export type GetValidatorBgtUsageQuery = {
  __typename?: "Query";
  validatorUsages: Array<{
    __typename?: "ValidatorUsage";
    bgtDirected: any;
    timestamp: any;
    allTimeBgtDirected: any;
    allTimeUsdValueBgtDirected: any;
    validator: { __typename?: "Validator"; commission: any };
  }>;
};

export type GetValidatorBlockRewardStatsQueryVariables = Exact<{
  address: Scalars["String"]["input"];
  timestamp: Scalars["Timestamp"]["input"];
}>;

export type GetValidatorBlockRewardStatsQuery = {
  __typename?: "Query";
  blockRewardStatsByValidators: Array<{
    __typename?: "BlockRewardStatsByValidator";
    timestamp: any;
    rewardRate: any;
    commissionRate: any;
    validator: { __typename?: "Validator"; coinbase: any };
  }>;
};

export type GetValidatorTokenRewardUsagesQueryVariables = Exact<{
  address: Scalars["String"]["input"];
  timestamp: Scalars["Timestamp"]["input"];
}>;

export type GetValidatorTokenRewardUsagesQuery = {
  __typename?: "Query";
  validatorTokenRewardUsages: Array<{
    __typename?: "ValidatorTokenRewardUsage";
    tokenRewarded: any;
    usdValueTokenRewarded: any;
    timestamp: any;
    allTimeUsdValueTokenRewarded: any;
    id: any;
    token: {
      __typename?: "TokenInformation";
      address: string;
      id: any;
      name: string;
      symbol: string;
      decimals: number;
    };
  }>;
  validatorUsages: Array<{
    __typename?: "ValidatorUsage";
    allTimeUsdValueTokenRewarded: any;
  }>;
};

export type GetValidatorBgtBoostQueryVariables = Exact<{
  address: Scalars["String"]["input"];
}>;

export type GetValidatorBgtBoostQuery = {
  __typename?: "Query";
  userValidatorBoostQueued: Array<{
    __typename?: "UserValidatorInformation";
    amountQueued: any;
    user: any;
  }>;
  userValidatorBoostDeposited: Array<{
    __typename?: "UserValidatorInformation";
    amountDeposited: any;
    user: any;
  }>;
};

export type GetValidatorBlockStatsQueryVariables = Exact<{
  address?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetValidatorBlockStatsQuery = {
  __typename?: "Query";
  blockStatsByValidators: Array<{
    __typename?: "BlockStatsByValidator";
    allTimeblockCount: any;
  }>;
  blockStats_collection: Array<{
    __typename?: "BlockStats";
    allTimeblockCount: any;
  }>;
};

export type GetAllValidatorBlockCountQueryVariables = Exact<{
  timestamp?: InputMaybe<Scalars["Timestamp"]["input"]>;
}>;

export type GetAllValidatorBlockCountQuery = {
  __typename?: "Query";
  blockStatsByValidators: Array<{
    __typename?: "BlockStatsByValidator";
    allTimeblockCount: any;
    timestamp: any;
    validator: { __typename?: "Validator"; coinbase: any };
  }>;
};

export type GetGaugesQueryVariables = Exact<{ [key: string]: never }>;

export type GetGaugesQuery = {
  __typename?: "Query";
  globalInfos: Array<{
    __typename?: "GlobalInfo";
    totalValidators: any;
    totalIncentivesVolumeUsd: any;
    totalBgtStaked: any;
    totalBgtQueued: any;
    totalBGTDistributed: any;
    totalActiveIncentivesUsd: any;
    rewardRate: any;
    id: any;
    baseRewardRate: any;
  }>;
  globalCuttingBoardWeights: Array<{
    __typename?: "GlobalCuttingBoardWeight";
    amount: any;
    id: any;
    receiver: any;
    vault?: {
      __typename?: "Vault";
      activeIncentivesValueUsd: any;
      id: any;
      stakingTokenAmount: any;
      vaultAddress: any;
    } | null;
  }>;
  vaults: Array<{
    __typename?: "Vault";
    activeIncentivesValueUsd: any;
    vaultAddress: any;
    stakingTokenAmount: any;
    stakingToken: {
      __typename?: "TokenInformation";
      address: string;
      beraValue: any;
      decimals: number;
      name: string;
      symbol: string;
      usdValue: any;
    };
  }>;
};

export const GetTotalBgtDistributedDocument = gql`
    query GetTotalBgtDistributed {
  globalInfo(id: "global") {
    id
    totalBGTDistributed
  }
}
    `;

/**
 * __useGetTotalBgtDistributedQuery__
 *
 * To run a query within a React component, call `useGetTotalBgtDistributedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalBgtDistributedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalBgtDistributedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTotalBgtDistributedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTotalBgtDistributedQuery,
    GetTotalBgtDistributedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetTotalBgtDistributedQuery,
    GetTotalBgtDistributedQueryVariables
  >(GetTotalBgtDistributedDocument, options);
}
export function useGetTotalBgtDistributedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTotalBgtDistributedQuery,
    GetTotalBgtDistributedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetTotalBgtDistributedQuery,
    GetTotalBgtDistributedQueryVariables
  >(GetTotalBgtDistributedDocument, options);
}
export function useGetTotalBgtDistributedSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetTotalBgtDistributedQuery,
        GetTotalBgtDistributedQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetTotalBgtDistributedQuery,
    GetTotalBgtDistributedQueryVariables
  >(GetTotalBgtDistributedDocument, options);
}
export type GetTotalBgtDistributedQueryHookResult = ReturnType<
  typeof useGetTotalBgtDistributedQuery
>;
export type GetTotalBgtDistributedLazyQueryHookResult = ReturnType<
  typeof useGetTotalBgtDistributedLazyQuery
>;
export type GetTotalBgtDistributedSuspenseQueryHookResult = ReturnType<
  typeof useGetTotalBgtDistributedSuspenseQuery
>;
export type GetTotalBgtDistributedQueryResult = Apollo.QueryResult<
  GetTotalBgtDistributedQuery,
  GetTotalBgtDistributedQueryVariables
>;
export const GetBgtInflationDocument = gql`
    query GetBgtInflation {
  globalInfo(id: "global") {
    id
    rewardRate
    baseRewardRate
  }
}
    `;

/**
 * __useGetBgtInflationQuery__
 *
 * To run a query within a React component, call `useGetBgtInflationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBgtInflationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBgtInflationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBgtInflationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBgtInflationQuery,
    GetBgtInflationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBgtInflationQuery, GetBgtInflationQueryVariables>(
    GetBgtInflationDocument,
    options,
  );
}
export function useGetBgtInflationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBgtInflationQuery,
    GetBgtInflationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetBgtInflationQuery,
    GetBgtInflationQueryVariables
  >(GetBgtInflationDocument, options);
}
export function useGetBgtInflationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetBgtInflationQuery,
        GetBgtInflationQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetBgtInflationQuery,
    GetBgtInflationQueryVariables
  >(GetBgtInflationDocument, options);
}
export type GetBgtInflationQueryHookResult = ReturnType<
  typeof useGetBgtInflationQuery
>;
export type GetBgtInflationLazyQueryHookResult = ReturnType<
  typeof useGetBgtInflationLazyQuery
>;
export type GetBgtInflationSuspenseQueryHookResult = ReturnType<
  typeof useGetBgtInflationSuspenseQuery
>;
export type GetBgtInflationQueryResult = Apollo.QueryResult<
  GetBgtInflationQuery,
  GetBgtInflationQueryVariables
>;
export const GetUserValidatorInformationDocument = gql`
    query GetUserValidatorInformation($address: Bytes!) {
  userValidatorInformations(where: {user: $address}) {
    id
    amountQueued
    amountDeposited
    latestBlock
    user
  }
}
    `;

/**
 * __useGetUserValidatorInformationQuery__
 *
 * To run a query within a React component, call `useGetUserValidatorInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserValidatorInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserValidatorInformationQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetUserValidatorInformationQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserValidatorInformationQuery,
    GetUserValidatorInformationQueryVariables
  > &
    (
      | { variables: GetUserValidatorInformationQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserValidatorInformationQuery,
    GetUserValidatorInformationQueryVariables
  >(GetUserValidatorInformationDocument, options);
}
export function useGetUserValidatorInformationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserValidatorInformationQuery,
    GetUserValidatorInformationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserValidatorInformationQuery,
    GetUserValidatorInformationQueryVariables
  >(GetUserValidatorInformationDocument, options);
}
export function useGetUserValidatorInformationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserValidatorInformationQuery,
        GetUserValidatorInformationQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetUserValidatorInformationQuery,
    GetUserValidatorInformationQueryVariables
  >(GetUserValidatorInformationDocument, options);
}
export type GetUserValidatorInformationQueryHookResult = ReturnType<
  typeof useGetUserValidatorInformationQuery
>;
export type GetUserValidatorInformationLazyQueryHookResult = ReturnType<
  typeof useGetUserValidatorInformationLazyQuery
>;
export type GetUserValidatorInformationSuspenseQueryHookResult = ReturnType<
  typeof useGetUserValidatorInformationSuspenseQuery
>;
export type GetUserValidatorInformationQueryResult = Apollo.QueryResult<
  GetUserValidatorInformationQuery,
  GetUserValidatorInformationQueryVariables
>;
export const GetValidValidatorDocument = gql`
    query GetValidValidator($address: ID!) {
  validator(id: $address) {
    coinbase
  }
}
    `;

/**
 * __useGetValidValidatorQuery__
 *
 * To run a query within a React component, call `useGetValidValidatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidValidatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidValidatorQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetValidValidatorQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidValidatorQuery,
    GetValidValidatorQueryVariables
  > &
    (
      | { variables: GetValidValidatorQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidValidatorQuery,
    GetValidValidatorQueryVariables
  >(GetValidValidatorDocument, options);
}
export function useGetValidValidatorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidValidatorQuery,
    GetValidValidatorQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidValidatorQuery,
    GetValidValidatorQueryVariables
  >(GetValidValidatorDocument, options);
}
export function useGetValidValidatorSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidValidatorQuery,
        GetValidValidatorQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidValidatorQuery,
    GetValidValidatorQueryVariables
  >(GetValidValidatorDocument, options);
}
export type GetValidValidatorQueryHookResult = ReturnType<
  typeof useGetValidValidatorQuery
>;
export type GetValidValidatorLazyQueryHookResult = ReturnType<
  typeof useGetValidValidatorLazyQuery
>;
export type GetValidValidatorSuspenseQueryHookResult = ReturnType<
  typeof useGetValidValidatorSuspenseQuery
>;
export type GetValidValidatorQueryResult = Apollo.QueryResult<
  GetValidValidatorQuery,
  GetValidValidatorQueryVariables
>;
export const GetAllValidatorsDocument = gql`
    query GetAllValidators {
  validators(first: 1000, orderDirection: desc, orderBy: amountStaked) {
    coinbase
    amountStaked
  }
}
    `;

/**
 * __useGetAllValidatorsQuery__
 *
 * To run a query within a React component, call `useGetAllValidatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllValidatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllValidatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllValidatorsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllValidatorsQuery,
    GetAllValidatorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllValidatorsQuery, GetAllValidatorsQueryVariables>(
    GetAllValidatorsDocument,
    options,
  );
}
export function useGetAllValidatorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllValidatorsQuery,
    GetAllValidatorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllValidatorsQuery,
    GetAllValidatorsQueryVariables
  >(GetAllValidatorsDocument, options);
}
export function useGetAllValidatorsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllValidatorsQuery,
        GetAllValidatorsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllValidatorsQuery,
    GetAllValidatorsQueryVariables
  >(GetAllValidatorsDocument, options);
}
export type GetAllValidatorsQueryHookResult = ReturnType<
  typeof useGetAllValidatorsQuery
>;
export type GetAllValidatorsLazyQueryHookResult = ReturnType<
  typeof useGetAllValidatorsLazyQuery
>;
export type GetAllValidatorsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllValidatorsSuspenseQuery
>;
export type GetAllValidatorsQueryResult = Apollo.QueryResult<
  GetAllValidatorsQuery,
  GetAllValidatorsQueryVariables
>;
export const GetValidatorBgtStakedDocument = gql`
    query GetValidatorBgtStaked($address: Bytes!, $timestamp: Timestamp!) {
  validatorBgtStaked: validatorBGTStakeds(
    interval: day
    where: {coinbase: $address, timestamp_gte: $timestamp}
  ) {
    allTimeBgtStaked
    bgtStaked
    coinbase
    timestamp
  }
}
    `;

/**
 * __useGetValidatorBgtStakedQuery__
 *
 * To run a query within a React component, call `useGetValidatorBgtStakedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBgtStakedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBgtStakedQuery({
 *   variables: {
 *      address: // value for 'address'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetValidatorBgtStakedQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorBgtStakedQuery,
    GetValidatorBgtStakedQueryVariables
  > &
    (
      | { variables: GetValidatorBgtStakedQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBgtStakedQuery,
    GetValidatorBgtStakedQueryVariables
  >(GetValidatorBgtStakedDocument, options);
}
export function useGetValidatorBgtStakedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBgtStakedQuery,
    GetValidatorBgtStakedQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBgtStakedQuery,
    GetValidatorBgtStakedQueryVariables
  >(GetValidatorBgtStakedDocument, options);
}
export function useGetValidatorBgtStakedSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBgtStakedQuery,
        GetValidatorBgtStakedQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBgtStakedQuery,
    GetValidatorBgtStakedQueryVariables
  >(GetValidatorBgtStakedDocument, options);
}
export type GetValidatorBgtStakedQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedQuery
>;
export type GetValidatorBgtStakedLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedLazyQuery
>;
export type GetValidatorBgtStakedSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedSuspenseQuery
>;
export type GetValidatorBgtStakedQueryResult = Apollo.QueryResult<
  GetValidatorBgtStakedQuery,
  GetValidatorBgtStakedQueryVariables
>;
export const GetValidatorBgtStakedDeltaDocument = gql`
    query GetValidatorBgtStakedDelta($address: Bytes!, $timestamp: Timestamp!) {
  validatorBgtStakedDelta: validatorBGTStakedDataPoints(
    where: {coinbase: $address, timestamp_gte: $timestamp}
  ) {
    amountStaked
    coinbase
    timestamp
  }
}
    `;

/**
 * __useGetValidatorBgtStakedDeltaQuery__
 *
 * To run a query within a React component, call `useGetValidatorBgtStakedDeltaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBgtStakedDeltaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBgtStakedDeltaQuery({
 *   variables: {
 *      address: // value for 'address'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetValidatorBgtStakedDeltaQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorBgtStakedDeltaQuery,
    GetValidatorBgtStakedDeltaQueryVariables
  > &
    (
      | { variables: GetValidatorBgtStakedDeltaQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBgtStakedDeltaQuery,
    GetValidatorBgtStakedDeltaQueryVariables
  >(GetValidatorBgtStakedDeltaDocument, options);
}
export function useGetValidatorBgtStakedDeltaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBgtStakedDeltaQuery,
    GetValidatorBgtStakedDeltaQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBgtStakedDeltaQuery,
    GetValidatorBgtStakedDeltaQueryVariables
  >(GetValidatorBgtStakedDeltaDocument, options);
}
export function useGetValidatorBgtStakedDeltaSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBgtStakedDeltaQuery,
        GetValidatorBgtStakedDeltaQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBgtStakedDeltaQuery,
    GetValidatorBgtStakedDeltaQueryVariables
  >(GetValidatorBgtStakedDeltaDocument, options);
}
export type GetValidatorBgtStakedDeltaQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedDeltaQuery
>;
export type GetValidatorBgtStakedDeltaLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedDeltaLazyQuery
>;
export type GetValidatorBgtStakedDeltaSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBgtStakedDeltaSuspenseQuery
>;
export type GetValidatorBgtStakedDeltaQueryResult = Apollo.QueryResult<
  GetValidatorBgtStakedDeltaQuery,
  GetValidatorBgtStakedDeltaQueryVariables
>;
export const GetValidatorBgtUsageDocument = gql`
    query GetValidatorBgtUsage($address: String!, $timestamp: Timestamp!) {
  validatorUsages(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    bgtDirected
    timestamp
    allTimeBgtDirected
    allTimeUsdValueBgtDirected
    validator {
      commission
    }
  }
}
    `;

/**
 * __useGetValidatorBgtUsageQuery__
 *
 * To run a query within a React component, call `useGetValidatorBgtUsageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBgtUsageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBgtUsageQuery({
 *   variables: {
 *      address: // value for 'address'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetValidatorBgtUsageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorBgtUsageQuery,
    GetValidatorBgtUsageQueryVariables
  > &
    (
      | { variables: GetValidatorBgtUsageQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBgtUsageQuery,
    GetValidatorBgtUsageQueryVariables
  >(GetValidatorBgtUsageDocument, options);
}
export function useGetValidatorBgtUsageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBgtUsageQuery,
    GetValidatorBgtUsageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBgtUsageQuery,
    GetValidatorBgtUsageQueryVariables
  >(GetValidatorBgtUsageDocument, options);
}
export function useGetValidatorBgtUsageSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBgtUsageQuery,
        GetValidatorBgtUsageQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBgtUsageQuery,
    GetValidatorBgtUsageQueryVariables
  >(GetValidatorBgtUsageDocument, options);
}
export type GetValidatorBgtUsageQueryHookResult = ReturnType<
  typeof useGetValidatorBgtUsageQuery
>;
export type GetValidatorBgtUsageLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBgtUsageLazyQuery
>;
export type GetValidatorBgtUsageSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBgtUsageSuspenseQuery
>;
export type GetValidatorBgtUsageQueryResult = Apollo.QueryResult<
  GetValidatorBgtUsageQuery,
  GetValidatorBgtUsageQueryVariables
>;
export const GetValidatorBlockRewardStatsDocument = gql`
    query GetValidatorBlockRewardStats($address: String!, $timestamp: Timestamp!) {
  blockRewardStatsByValidators(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    timestamp
    rewardRate
    commissionRate
    validator {
      coinbase
    }
  }
}
    `;

/**
 * __useGetValidatorBlockRewardStatsQuery__
 *
 * To run a query within a React component, call `useGetValidatorBlockRewardStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBlockRewardStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBlockRewardStatsQuery({
 *   variables: {
 *      address: // value for 'address'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetValidatorBlockRewardStatsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorBlockRewardStatsQuery,
    GetValidatorBlockRewardStatsQueryVariables
  > &
    (
      | {
          variables: GetValidatorBlockRewardStatsQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBlockRewardStatsQuery,
    GetValidatorBlockRewardStatsQueryVariables
  >(GetValidatorBlockRewardStatsDocument, options);
}
export function useGetValidatorBlockRewardStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBlockRewardStatsQuery,
    GetValidatorBlockRewardStatsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBlockRewardStatsQuery,
    GetValidatorBlockRewardStatsQueryVariables
  >(GetValidatorBlockRewardStatsDocument, options);
}
export function useGetValidatorBlockRewardStatsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBlockRewardStatsQuery,
        GetValidatorBlockRewardStatsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBlockRewardStatsQuery,
    GetValidatorBlockRewardStatsQueryVariables
  >(GetValidatorBlockRewardStatsDocument, options);
}
export type GetValidatorBlockRewardStatsQueryHookResult = ReturnType<
  typeof useGetValidatorBlockRewardStatsQuery
>;
export type GetValidatorBlockRewardStatsLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBlockRewardStatsLazyQuery
>;
export type GetValidatorBlockRewardStatsSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBlockRewardStatsSuspenseQuery
>;
export type GetValidatorBlockRewardStatsQueryResult = Apollo.QueryResult<
  GetValidatorBlockRewardStatsQuery,
  GetValidatorBlockRewardStatsQueryVariables
>;
export const GetValidatorTokenRewardUsagesDocument = gql`
    query GetValidatorTokenRewardUsages($address: String!, $timestamp: Timestamp!) {
  validatorTokenRewardUsages(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    token {
      address
      id
      name
      symbol
      decimals
    }
    tokenRewarded
    usdValueTokenRewarded
    timestamp
    allTimeUsdValueTokenRewarded
    id
  }
  validatorUsages(interval: day, where: {validator: $address}, first: 1) {
    allTimeUsdValueTokenRewarded
  }
}
    `;

/**
 * __useGetValidatorTokenRewardUsagesQuery__
 *
 * To run a query within a React component, call `useGetValidatorTokenRewardUsagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorTokenRewardUsagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorTokenRewardUsagesQuery({
 *   variables: {
 *      address: // value for 'address'
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetValidatorTokenRewardUsagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorTokenRewardUsagesQuery,
    GetValidatorTokenRewardUsagesQueryVariables
  > &
    (
      | {
          variables: GetValidatorTokenRewardUsagesQueryVariables;
          skip?: boolean;
        }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorTokenRewardUsagesQuery,
    GetValidatorTokenRewardUsagesQueryVariables
  >(GetValidatorTokenRewardUsagesDocument, options);
}
export function useGetValidatorTokenRewardUsagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorTokenRewardUsagesQuery,
    GetValidatorTokenRewardUsagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorTokenRewardUsagesQuery,
    GetValidatorTokenRewardUsagesQueryVariables
  >(GetValidatorTokenRewardUsagesDocument, options);
}
export function useGetValidatorTokenRewardUsagesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorTokenRewardUsagesQuery,
        GetValidatorTokenRewardUsagesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorTokenRewardUsagesQuery,
    GetValidatorTokenRewardUsagesQueryVariables
  >(GetValidatorTokenRewardUsagesDocument, options);
}
export type GetValidatorTokenRewardUsagesQueryHookResult = ReturnType<
  typeof useGetValidatorTokenRewardUsagesQuery
>;
export type GetValidatorTokenRewardUsagesLazyQueryHookResult = ReturnType<
  typeof useGetValidatorTokenRewardUsagesLazyQuery
>;
export type GetValidatorTokenRewardUsagesSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorTokenRewardUsagesSuspenseQuery
>;
export type GetValidatorTokenRewardUsagesQueryResult = Apollo.QueryResult<
  GetValidatorTokenRewardUsagesQuery,
  GetValidatorTokenRewardUsagesQueryVariables
>;
export const GetValidatorBgtBoostDocument = gql`
    query GetValidatorBgtBoost($address: String!) {
  userValidatorBoostQueued: userValidatorInformations(
    first: 10
    where: {validator: $address, amountQueued_gt: "0"}
    orderBy: amountQueued
    orderDirection: desc
  ) {
    amountQueued
    user
  }
  userValidatorBoostDeposited: userValidatorInformations(
    first: 10
    where: {validator: $address, amountDeposited_gt: "0"}
    orderBy: amountDeposited
    orderDirection: desc
  ) {
    amountDeposited
    user
  }
}
    `;

/**
 * __useGetValidatorBgtBoostQuery__
 *
 * To run a query within a React component, call `useGetValidatorBgtBoostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBgtBoostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBgtBoostQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetValidatorBgtBoostQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetValidatorBgtBoostQuery,
    GetValidatorBgtBoostQueryVariables
  > &
    (
      | { variables: GetValidatorBgtBoostQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBgtBoostQuery,
    GetValidatorBgtBoostQueryVariables
  >(GetValidatorBgtBoostDocument, options);
}
export function useGetValidatorBgtBoostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBgtBoostQuery,
    GetValidatorBgtBoostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBgtBoostQuery,
    GetValidatorBgtBoostQueryVariables
  >(GetValidatorBgtBoostDocument, options);
}
export function useGetValidatorBgtBoostSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBgtBoostQuery,
        GetValidatorBgtBoostQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBgtBoostQuery,
    GetValidatorBgtBoostQueryVariables
  >(GetValidatorBgtBoostDocument, options);
}
export type GetValidatorBgtBoostQueryHookResult = ReturnType<
  typeof useGetValidatorBgtBoostQuery
>;
export type GetValidatorBgtBoostLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBgtBoostLazyQuery
>;
export type GetValidatorBgtBoostSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBgtBoostSuspenseQuery
>;
export type GetValidatorBgtBoostQueryResult = Apollo.QueryResult<
  GetValidatorBgtBoostQuery,
  GetValidatorBgtBoostQueryVariables
>;
export const GetValidatorBlockStatsDocument = gql`
    query GetValidatorBlockStats($address: String = "") {
  blockStatsByValidators(interval: hour, first: 1, where: {validator: $address}) {
    allTimeblockCount
  }
  blockStats_collection(interval: hour, first: 1) {
    allTimeblockCount
  }
}
    `;

/**
 * __useGetValidatorBlockStatsQuery__
 *
 * To run a query within a React component, call `useGetValidatorBlockStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetValidatorBlockStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetValidatorBlockStatsQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetValidatorBlockStatsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetValidatorBlockStatsQuery,
    GetValidatorBlockStatsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetValidatorBlockStatsQuery,
    GetValidatorBlockStatsQueryVariables
  >(GetValidatorBlockStatsDocument, options);
}
export function useGetValidatorBlockStatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetValidatorBlockStatsQuery,
    GetValidatorBlockStatsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetValidatorBlockStatsQuery,
    GetValidatorBlockStatsQueryVariables
  >(GetValidatorBlockStatsDocument, options);
}
export function useGetValidatorBlockStatsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetValidatorBlockStatsQuery,
        GetValidatorBlockStatsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetValidatorBlockStatsQuery,
    GetValidatorBlockStatsQueryVariables
  >(GetValidatorBlockStatsDocument, options);
}
export type GetValidatorBlockStatsQueryHookResult = ReturnType<
  typeof useGetValidatorBlockStatsQuery
>;
export type GetValidatorBlockStatsLazyQueryHookResult = ReturnType<
  typeof useGetValidatorBlockStatsLazyQuery
>;
export type GetValidatorBlockStatsSuspenseQueryHookResult = ReturnType<
  typeof useGetValidatorBlockStatsSuspenseQuery
>;
export type GetValidatorBlockStatsQueryResult = Apollo.QueryResult<
  GetValidatorBlockStatsQuery,
  GetValidatorBlockStatsQueryVariables
>;
export const GetAllValidatorBlockCountDocument = gql`
    query GetAllValidatorBlockCount($timestamp: Timestamp) {
  blockStatsByValidators(
    interval: hour
    first: 1000
    where: {timestamp_gte: $timestamp}
  ) {
    allTimeblockCount
    validator {
      coinbase
    }
    timestamp
  }
}
    `;

/**
 * __useGetAllValidatorBlockCountQuery__
 *
 * To run a query within a React component, call `useGetAllValidatorBlockCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllValidatorBlockCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllValidatorBlockCountQuery({
 *   variables: {
 *      timestamp: // value for 'timestamp'
 *   },
 * });
 */
export function useGetAllValidatorBlockCountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllValidatorBlockCountQuery,
    GetAllValidatorBlockCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAllValidatorBlockCountQuery,
    GetAllValidatorBlockCountQueryVariables
  >(GetAllValidatorBlockCountDocument, options);
}
export function useGetAllValidatorBlockCountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllValidatorBlockCountQuery,
    GetAllValidatorBlockCountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAllValidatorBlockCountQuery,
    GetAllValidatorBlockCountQueryVariables
  >(GetAllValidatorBlockCountDocument, options);
}
export function useGetAllValidatorBlockCountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllValidatorBlockCountQuery,
        GetAllValidatorBlockCountQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllValidatorBlockCountQuery,
    GetAllValidatorBlockCountQueryVariables
  >(GetAllValidatorBlockCountDocument, options);
}
export type GetAllValidatorBlockCountQueryHookResult = ReturnType<
  typeof useGetAllValidatorBlockCountQuery
>;
export type GetAllValidatorBlockCountLazyQueryHookResult = ReturnType<
  typeof useGetAllValidatorBlockCountLazyQuery
>;
export type GetAllValidatorBlockCountSuspenseQueryHookResult = ReturnType<
  typeof useGetAllValidatorBlockCountSuspenseQuery
>;
export type GetAllValidatorBlockCountQueryResult = Apollo.QueryResult<
  GetAllValidatorBlockCountQuery,
  GetAllValidatorBlockCountQueryVariables
>;
export const GetGaugesDocument = gql`
    query GetGauges {
  globalInfos(first: 1) {
    totalValidators
    totalIncentivesVolumeUsd
    totalBgtStaked
    totalBgtQueued
    totalBGTDistributed
    totalActiveIncentivesUsd
    rewardRate
    id
    baseRewardRate
  }
  globalCuttingBoardWeights(first: 1) {
    amount
    id
    receiver
    vault {
      activeIncentivesValueUsd
      id
      stakingTokenAmount
      vaultAddress
    }
  }
  vaults(first: 1000, where: {stakingTokenAmount_gt: "0"}) {
    activeIncentivesValueUsd
    vaultAddress
    stakingTokenAmount
    stakingToken {
      address
      beraValue
      decimals
      name
      symbol
      usdValue
    }
  }
}
    `;

/**
 * __useGetGaugesQuery__
 *
 * To run a query within a React component, call `useGetGaugesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGaugesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGaugesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGaugesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetGaugesQuery,
    GetGaugesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetGaugesQuery, GetGaugesQueryVariables>(
    GetGaugesDocument,
    options,
  );
}
export function useGetGaugesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGaugesQuery,
    GetGaugesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetGaugesQuery, GetGaugesQueryVariables>(
    GetGaugesDocument,
    options,
  );
}
export function useGetGaugesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetGaugesQuery, GetGaugesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetGaugesQuery, GetGaugesQueryVariables>(
    GetGaugesDocument,
    options,
  );
}
export type GetGaugesQueryHookResult = ReturnType<typeof useGetGaugesQuery>;
export type GetGaugesLazyQueryHookResult = ReturnType<
  typeof useGetGaugesLazyQuery
>;
export type GetGaugesSuspenseQueryHookResult = ReturnType<
  typeof useGetGaugesSuspenseQuery
>;
export type GetGaugesQueryResult = Apollo.QueryResult<
  GetGaugesQuery,
  GetGaugesQueryVariables
>;

export const GetTotalBgtDistributed = gql`
    query GetTotalBgtDistributed {
  globalInfo(id: "global") {
    id
    totalBGTDistributed
  }
}
    `;
export const GetBgtInflation = gql`
    query GetBgtInflation {
  globalInfo(id: "global") {
    id
    rewardRate
    baseRewardRate
  }
}
    `;
export const GetUserValidatorInformation = gql`
    query GetUserValidatorInformation($address: Bytes!) {
  userValidatorInformations(where: {user: $address}) {
    id
    amountQueued
    amountDeposited
    latestBlock
    user
  }
}
    `;
export const GetValidValidator = gql`
    query GetValidValidator($address: ID!) {
  validator(id: $address) {
    coinbase
  }
}
    `;
export const GetAllValidators = gql`
    query GetAllValidators {
  validators(first: 1000, orderDirection: desc, orderBy: amountStaked) {
    coinbase
    amountStaked
  }
}
    `;
export const GetValidatorBgtStaked = gql`
    query GetValidatorBgtStaked($address: Bytes!, $timestamp: Timestamp!) {
  validatorBgtStaked: validatorBGTStakeds(
    interval: day
    where: {coinbase: $address, timestamp_gte: $timestamp}
  ) {
    allTimeBgtStaked
    bgtStaked
    coinbase
    timestamp
  }
}
    `;
export const GetValidatorBgtStakedDelta = gql`
    query GetValidatorBgtStakedDelta($address: Bytes!, $timestamp: Timestamp!) {
  validatorBgtStakedDelta: validatorBGTStakedDataPoints(
    where: {coinbase: $address, timestamp_gte: $timestamp}
  ) {
    amountStaked
    coinbase
    timestamp
  }
}
    `;
export const GetValidatorBgtUsage = gql`
    query GetValidatorBgtUsage($address: String!, $timestamp: Timestamp!) {
  validatorUsages(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    bgtDirected
    timestamp
    allTimeBgtDirected
    allTimeUsdValueBgtDirected
    validator {
      commission
    }
  }
}
    `;
export const GetValidatorBlockRewardStats = gql`
    query GetValidatorBlockRewardStats($address: String!, $timestamp: Timestamp!) {
  blockRewardStatsByValidators(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    timestamp
    rewardRate
    commissionRate
    validator {
      coinbase
    }
  }
}
    `;
export const GetValidatorTokenRewardUsages = gql`
    query GetValidatorTokenRewardUsages($address: String!, $timestamp: Timestamp!) {
  validatorTokenRewardUsages(
    interval: day
    where: {validator: $address, timestamp_gte: $timestamp}
  ) {
    token {
      address
      id
      name
      symbol
      decimals
    }
    tokenRewarded
    usdValueTokenRewarded
    timestamp
    allTimeUsdValueTokenRewarded
    id
  }
  validatorUsages(interval: day, where: {validator: $address}, first: 1) {
    allTimeUsdValueTokenRewarded
  }
}
    `;
export const GetValidatorBgtBoost = gql`
    query GetValidatorBgtBoost($address: String!) {
  userValidatorBoostQueued: userValidatorInformations(
    first: 10
    where: {validator: $address, amountQueued_gt: "0"}
    orderBy: amountQueued
    orderDirection: desc
  ) {
    amountQueued
    user
  }
  userValidatorBoostDeposited: userValidatorInformations(
    first: 10
    where: {validator: $address, amountDeposited_gt: "0"}
    orderBy: amountDeposited
    orderDirection: desc
  ) {
    amountDeposited
    user
  }
}
    `;
export const GetValidatorBlockStats = gql`
    query GetValidatorBlockStats($address: String = "") {
  blockStatsByValidators(interval: hour, first: 1, where: {validator: $address}) {
    allTimeblockCount
  }
  blockStats_collection(interval: hour, first: 1) {
    allTimeblockCount
  }
}
    `;
export const GetAllValidatorBlockCount = gql`
    query GetAllValidatorBlockCount($timestamp: Timestamp) {
  blockStatsByValidators(
    interval: hour
    first: 1000
    where: {timestamp_gte: $timestamp}
  ) {
    allTimeblockCount
    validator {
      coinbase
    }
    timestamp
  }
}
    `;
export const GetGauges = gql`
    query GetGauges {
  globalInfos(first: 1) {
    totalValidators
    totalIncentivesVolumeUsd
    totalBgtStaked
    totalBgtQueued
    totalBGTDistributed
    totalActiveIncentivesUsd
    rewardRate
    id
    baseRewardRate
  }
  globalCuttingBoardWeights(first: 1) {
    amount
    id
    receiver
    vault {
      activeIncentivesValueUsd
      id
      stakingTokenAmount
      vaultAddress
    }
  }
  vaults(first: 1000, where: {stakingTokenAmount_gt: "0"}) {
    activeIncentivesValueUsd
    vaultAddress
    stakingTokenAmount
    stakingToken {
      address
      beraValue
      decimals
      name
      symbol
      usdValue
    }
  }
}
    `;
