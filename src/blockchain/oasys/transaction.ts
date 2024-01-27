import { TransactionRequest } from "@ethersproject/providers";
import { AppConstant, NetworkConstant, LangConstant, EnvConstant } from "const";
import { ethers } from "ethers";
import { Deferrable } from "ethers/lib/utils";
import { ConnectorUtils } from "utils";

/**
 * Check if wallet address is valid on ethereum or binance smart chain
 */
export const isValidAddress = (walletAddress: string) => {
  try {
    const isValidEtherAddress = ethers.utils.isAddress(walletAddress);
    return isValidEtherAddress;
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    return false;
  }
};

/**
 * Send transaction on Ethereum or Binance Smart Chain
 *
 * @param {string} walletAddress - user's wallet address
 * @param {object} transactionData - transaction data object, required fields are from, to, data, others are optional
 * @param {string} rpcUrl - rpc url
 *
 * @return {Promise} Return transaction hash if sent transaction successfully
 *
 */
export const sendTransaction = async (walletAddress: string, transactionData: object) => {
  if (!transactionData || !isValidAddress(walletAddress)) return null;

  try {
    const currentWalletProvider = ConnectorUtils.getCurrentProvider();

    const txRequest = {
      ...transactionData,
    };

    const chainProvider = new ethers.providers.Web3Provider(currentWalletProvider, "any");
    const signer = chainProvider.getSigner(walletAddress);
    const transaction = await signer.sendTransaction(txRequest);

    return Promise.resolve(transaction.hash);
  } catch (error: any) {
    EnvConstant.IS_DEV && console.log(error);
    return Promise.reject({
      status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
      code: error?.code,
      message: error?.transactionData?.message || error?.reason || error?.stack?.toString(),
    });
  }
};

/**
 * Get transaction result
 *
 * @param {string} transactionHash - transaction hash
 *
 * @return {Promise} Return transaction status object
 *
 */
export const getTxResult = async (transactionHash: string | null, rpcUrl: string) => {
  return new Promise((resolve, reject) => {
    if (!transactionHash) {
      reject({
        status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
        message: LangConstant.MSG_SOMETHING_WENT_WRONG,
      });
      return;
    }
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    let receipt;
    let numberOfFunctionCalled = 0;

    const poolingStatus = setInterval(async () => {
      if (++numberOfFunctionCalled === NetworkConstant.MAXIMUM_POOLING_TRANSACTION_EXECUTE) {
        clearInterval(poolingStatus);
        reject({
          status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
          message: LangConstant.MSG_SOMETHING_WENT_WRONG,
        });
        return;
      }

      try {
        receipt = await provider.waitForTransaction(transactionHash);
        const transaction = await provider.getTransaction(transactionHash);
        if (!receipt || !transaction) {
          clearInterval(poolingStatus);
          reject({
            status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
            message: LangConstant.MSG_SOMETHING_WENT_WRONG,
          });
          return;
        }

        let message;
        try {
          const code = await provider.call(
            transaction as Deferrable<TransactionRequest>,
            transaction.blockNumber,
          );
          message = ethers.utils.toUtf8String("0x" + code?.substr(138));
        } catch (err: any) {
          const code = err?.data?.replace("Reverted ", "");
          message = ethers.utils?.toUtf8String("0x" + (code?.substr(138) || "")) || "";
        }

        clearInterval(poolingStatus);

        if (receipt.status === NetworkConstant.OASYS_TRANSACTION_STATUS.success) {
          resolve({
            ...receipt,
            status: AppConstant.TRANSACTION_STATUS_TYPE.complete,
            message,
          });
        } else {
          resolve({
            ...receipt,
            status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
            message,
          });
        }
      } catch (error: any) {
        EnvConstant.IS_DEV && console.log(error);
        clearInterval(poolingStatus);
        reject({
          status: AppConstant.TRANSACTION_STATUS_TYPE.failed,
          message: error?.message || error,
        });
      }
    }, NetworkConstant.POOLING_TRANSACTION_STATUS_TIME_IN_MILLISECOND);
  });
};
