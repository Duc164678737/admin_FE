import Chain from "models/chain.model";

export const CONNECTOR_ID_KEY = "connectorId";

const NETWORK_TYPE = {
  mainnet: "mainnet",
  testnet: "testnet",
};

export const IS_TESTNET = process.env.REACT_APP_CHAIN_NETWORK === NETWORK_TYPE.testnet;

export const CHAIN_SUPPORT = {
  oasys: "oasys",
};

export const CHAIN_INFO = {
  [CHAIN_SUPPORT.oasys]: {
    chainId: {
      mainnet: process.env.REACT_APP_CHAIN_ID_MAIN_NET || 19011,
      testnet: process.env.REACT_APP_CHAIN_ID_TEST_NET || 20197,
    },
    baseNetworkUrl: {
      mainnet:
        process.env.REACT_APP_BASE_EXPLORER_MAIN_NET_URL ||
        "https://explorer.oasys.homeverse.games/",
      testnet:
        process.env.REACT_APP_BASE_EXPLORER_TEST_NET_URL ||
        "https://explorer.sandverse.oasys.games/",
    },
    baseRpcNodeUrl: {
      mainnet:
        process.env.REACT_APP_BASE_RPC_NODE_MAIN_NET_URL ||
        "https://rpc.mainnet.oasys.homeverse.games/",
      testnet:
        process.env.REACT_APP_BASE_RPC_NODE_TEST_NET_URL || "https://rpc.sandverse.oasys.games/",
    },
  },
};

export const CONNECTOR_IDS = {
  // Oasys
  metamask: "meta-mask",
};

export const METAMASK_DENIED_REQUEST_CODE = 4001;
export const BINANCE_DENIED_REQUEST_CODE = -32603;
export const PENDING_WALLET_REQUEST = -32002;

export const POOLING_TRANSACTION_STATUS_TIME_IN_MILLISECOND = 3000;
export const MAXIMUM_POOLING_TRANSACTION_EXECUTE =
  600000 / POOLING_TRANSACTION_STATUS_TIME_IN_MILLISECOND; // 200 time function execute - 10 minutes

export const OASYS_TRANSACTION_STATUS = {
  failed: 0,
  success: 1,
};

export const BASE_RPC_NODE_URL = new Chain().rpcUrl;

export const DEFAULT_TOKEN_BASE_UNIT = 18;

export const DEFAULT_GAS_LIMIT = 30000;
