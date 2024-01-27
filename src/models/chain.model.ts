import { IS_TESTNET, CHAIN_SUPPORT, CHAIN_INFO } from "const/network.const";

class Chain {
  chain;
  chainInfo;
  networkUrl;
  chainId;
  rpcUrl;

  constructor(initChain?: string) {
    this.chain = initChain || CHAIN_SUPPORT.oasys;

    switch (this.chain) {
      case CHAIN_SUPPORT.oasys:
      default:
        this.chainInfo = CHAIN_INFO.oasys;
        break;
    }

    this.networkUrl = IS_TESTNET
      ? this.chainInfo.baseNetworkUrl.testnet
      : this.chainInfo.baseNetworkUrl.mainnet;
    this.chainId = IS_TESTNET ? this.chainInfo.chainId.testnet : this.chainInfo.chainId.mainnet;
    this.rpcUrl = IS_TESTNET
      ? this.chainInfo.baseRpcNodeUrl.testnet
      : this.chainInfo.baseRpcNodeUrl.mainnet;
  }
}

export default Chain;
