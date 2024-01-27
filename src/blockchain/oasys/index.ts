import Blockchain from "blockchain";
import contractInstance, {
  INORoundContractInstance,
  INOManagerContractInstance,
} from "./smart-contract-instance";
import { getTxResult, isValidAddress, sendTransaction } from "./transaction";

const oasysTransaction = {
  send: (walletAddress: string, transactionData: any) =>
    sendTransaction(walletAddress, transactionData),
  getResult: (transactionHash: string) => getTxResult(transactionHash, new Blockchain().rpcUrl),
  checkValidAddress: (walletAddress: string) => isValidAddress(walletAddress),
};

const oasysMethods: any = {
  ...contractInstance,

  getAllINORounds: INORoundContractInstance.getAllRounds,
  getTotalBoughtBoxesOfUserAllRound: (walletAddress: string) =>
    INOManagerContractInstance.getTotalBoughtBoxesOfUserAllRound(walletAddress),
};

export { oasysMethods, oasysTransaction };
