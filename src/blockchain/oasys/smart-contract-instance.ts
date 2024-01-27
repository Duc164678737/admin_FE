import { ContractInterface, ethers } from "ethers";
import { EnvConstant, NetworkConstant } from "const";
import { INOManagerBuild, INORoundBuild } from "./builds";

export const getSmartContractFromJsonFile = (
  contractAddress: string,
  jsonFile: ContractInterface,
) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(NetworkConstant.BASE_RPC_NODE_URL);
    const contract = new ethers.Contract(contractAddress, jsonFile, provider);

    return contract;
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    return {} as any;
  }
};

export const INORoundContractInstance = getSmartContractFromJsonFile(
  EnvConstant.CONTRACT_ADDRESS.ADDRESS_INO_ROUND as string,
  INORoundBuild.abi,
);
export const INOManagerContractInstance = getSmartContractFromJsonFile(
  EnvConstant.CONTRACT_ADDRESS.ADDRESS_INO_MANAGER as string,
  INOManagerBuild.abi,
);

const contractInstance = {
  ...INOManagerContractInstance,
  ...INORoundContractInstance,
};

export default contractInstance;
