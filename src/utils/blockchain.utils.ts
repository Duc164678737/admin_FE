import { NetworkConstant } from "const";
import { BigNumber, ethers, utils } from "ethers";

/** Convert big number into number value
 *
 * @param {any} [value] - value needs to convert
 *
 * @return {number | null} Converted number or null value
 */
export const convertBigNumberToNumber = (value: any): number | null => {
  if (value && BigNumber.isBigNumber(value)) {
    let result = null;
    try {
      result = value.toNumber();
    } catch (error) {
      window.isDebug && console.log(error);
    }
    return Number(result);
  } else {
    return null;
  }
};

export const formatBigNumberWithEther = (value: any): number | null => {
  if (value && BigNumber.isBigNumber(value)) {
    let result = null;
    try {
      result = utils.formatEther(value);
    } catch (error) {
      window.isDebug && console.log(error);
    }
    return Number(result);
  } else {
    return null;
  }
};

export const formatBalanceToDecimalNumber = (balanceInBaseUnit: any) => {
  if (!balanceInBaseUnit) return null;
  return ethers.utils.formatUnits(balanceInBaseUnit, NetworkConstant.DEFAULT_TOKEN_BASE_UNIT);
};
