import { BlockchainMethodsConstant, ApiConstant } from "const";
import { createApi, createBoxAddressApi } from "api";
import Blockchain from "blockchain";
import { KeyAbleProps } from "models/types";

export const getDashboardData = () => {
  return createApi().get("cats");
};

export const getTotalAddressData = () => createBoxAddressApi().get(ApiConstant.GET_TOTAL_ADDRESS);

export const getTotalBoughtBoxesOfUserAllRound = (walletAddress: string) => {
  const { call } = new Blockchain();
  return call(BlockchainMethodsConstant.getTotalBoughtBoxesOfUserAllRound, walletAddress);
};

export const getAllINORounds = async () => {
  try {
    const { call } = new Blockchain();
    const response = (await call(BlockchainMethodsConstant.getAllINORounds)) as {
      data: KeyAbleProps[];
      status: number;
    };

    return response;
  } catch (error) {
    console.log(error);
  }
};
