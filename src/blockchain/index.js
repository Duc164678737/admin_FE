import { ApiConstant, NetworkConstant } from "const";
import { oasysMethods, oasysTransaction } from "./oasys";

class Blockchain {
  chain;
  transaction;
  methods;

  constructor(initChain) {
    this.chain = initChain;

    switch (this.chain) {
      case NetworkConstant.CHAIN_SUPPORT.oasys:
      default:
        this.chainInfo = NetworkConstant.CHAIN_INFO.oasys;
        this.transaction = oasysTransaction;
        this.methods = oasysMethods;
        break;
    }

    this.networkUrl = NetworkConstant.IS_TESTNET
      ? this.chainInfo.baseNetworkUrl.testnet
      : this.chainInfo.baseNetworkUrl.mainnet;

    this.chainId = NetworkConstant.IS_TESTNET
      ? this.chainInfo.chainId.testnet
      : this.chainInfo.chainId.mainnet;

    this.rpcUrl = NetworkConstant.IS_TESTNET
      ? this.chainInfo.baseRpcNodeUrl.testnet
      : this.chainInfo.baseRpcNodeUrl.mainnet;
  }

  sendTransaction = (data) => this.transaction.send(data);

  getTransactionResult = (transactionHash) => this.transaction.getResult(transactionHash);

  call = (functionName, ...args) => callBlockchainFunc(this.methods[functionName], ...args);
}

export default Blockchain;

const callBlockchainFunc = async (func, ...args) => {
  let response = { status: ApiConstant.STT_OK, data: {} };

  try {
    response.data = await func(...args);
  } catch (error) {
    response.status = ApiConstant.STT_INTERNAL_SERVER;
    response.data.message = error;
  }

  return response;
};
