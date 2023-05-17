export const WALLET_ADDRESS = "0x1234567890123456789012345678901234567890";

export const BERA_BALANCE = 1000;
export const HONEY_BALANCE = 500;

export enum LOCAL_STORAGE_KEYS {
  WALLET_ADDRESS = "WALLET_ADDRESS",
  WALLET_NETWORK = "WALLET_NETWORK",
  SLIPPAGE_TOLERANCE = "SLIPPAGE_TOLERANCE",
  TRANSACTION_TYPE = "TRANSACTION_TYPE",
  USE_SIGNATURES = "USE_SIGNATURES",
}

export enum TRANSACTION_TYPES {
  LEGACY = "legacy",
  EIP_1559 = "eip1559",
}
