import { gql } from "@apollo/client";

export default gql`
  query GetTotalBgtDistributed {
    globalInfo(id: "global") {
      id
      totalBGTDistributed
    }
  }

  query GetBgtInflation {
    globalInfo(id: "global") {
      id
      rewardRate
      baseRewardRate
    }
  }

  query GetUserValidatorInformation($address: Bytes!) {
    userValidatorInformations(where: { user: $address }) {
      id
      amountQueued
      amountDeposited
      latestBlock
      user
    }
  }

  query GetValidValidator($address: ID!) {
    validator(id: $address) {
      coinbase
    }
  }

  query GetAllValidators {
    validators(first: 1000, orderDirection: desc, orderBy: amountStaked) {
      coinbase
      amountStaked
    }
  }

  query GetValidatorBgtStaked($address: Bytes!, $timestamp: Timestamp!) {
    validatorBgtStaked: validatorBGTStakeds(
      interval: day
      where: { coinbase: $address, timestamp_gte: $timestamp }
    ) {
      allTimeBgtStaked
      bgtStaked
      coinbase
      timestamp
    }
  }

  query GetValidatorBgtStakedDelta($address: Bytes!, $timestamp: Timestamp!) {
    validatorBgtStakedDelta: validatorBGTStakedDataPoints(
      where: { coinbase: $address, timestamp_gte: $timestamp }
    ) {
      amountStaked
      coinbase
      timestamp
    }
  }

  query GetValidatorBgtUsage($address: String!, $timestamp: Timestamp!) {
    validatorUsages(
      interval: day
      where: { validator: $address, timestamp_gte: $timestamp }
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

  query GetValidatorBlockRewardStats(
    $address: String!
    $timestamp: Timestamp!
  ) {
    blockRewardStatsByValidators(
      interval: day
      where: { validator: $address, timestamp_gte: $timestamp }
    ) {
      timestamp
      rewardRate
      commissionRate
      validator {
        coinbase
      }
    }
  }

  query GetValidatorTokenRewardUsages(
    $address: String!
    $timestamp: Timestamp!
  ) {
    validatorTokenRewardUsages(
      interval: day
      where: { validator: $address, timestamp_gte: $timestamp }
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
    validatorUsages(interval: day, where: { validator: $address }, first: 1) {
      allTimeUsdValueTokenRewarded
    }
  }

  query GetValidatorBgtBoost($address: String!) {
    userValidatorBoostQueued: userValidatorInformations(
      first: 10
      where: { validator: $address, amountQueued_gt: "0" }
      orderBy: amountQueued
      orderDirection: desc
    ) {
      amountQueued
      user
    }
    userValidatorBoostDeposited: userValidatorInformations(
      first: 10
      where: { validator: $address, amountDeposited_gt: "0" }
      orderBy: amountDeposited
      orderDirection: desc
    ) {
      amountDeposited
      user
    }
  }

  query GetValidatorBlockStats($address: String = "") {
    blockStatsByValidators(
      interval: hour
      first: 1
      where: { validator: $address }
    ) {
      allTimeblockCount
    }
    blockStats_collection(interval: hour, first: 1) {
      allTimeblockCount
    }
  }

  query GetAllValidatorBlockCount($timestamp: Timestamp) {
    blockStatsByValidators(
      interval: hour
      first: 1000
      where: { timestamp_gte: $timestamp }
    ) {
      allTimeblockCount
      validator {
        coinbase
      }
      timestamp
    }
  }

  # TODO: we need to figure out what to do when we have 1000+ reward vaults and this query is wrong
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
    vaults(first: 1000, where: { stakingTokenAmount_gt: "0" }) {
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
