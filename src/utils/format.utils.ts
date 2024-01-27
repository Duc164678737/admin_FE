import { AppConstant, EnvConstant } from "const";

/**
 * Format number
 *
 * @param {number} number - The number to format
 * @param {number} [maximumFractionDigits = 3] -The length of decimal
 * @param {string} [fallbackLabel = AppConstant.NOT_HAVE_VALUE_LABEL] - Default string will returned when number is the empty string
 * @param {object} [localeOption = {}] - To customized method toLocaleString
 * @param {number} [minimumFractionDigits = 0] - The min length of decimal
 *
 * @return {string} The value of format number
 *
 */
export const formatNumber = (
  number: number,
  maximumFractionDigits = 3,
  fallbackLabel = AppConstant.NOT_HAVE_VALUE_LABEL,
  localeOption = {},
  minimumFractionDigits = 0,
) => {
  try {
    if (!number && number !== 0) return fallbackLabel;
    const num = Number(number);
    return num.toLocaleString("en-US", {
      maximumFractionDigits,
      minimumFractionDigits,
      ...localeOption,
    });
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    return number;
  }
};

/**
 * Truncate a transaction or address
 *
 * @param {string} address - The transaction hash or address.
 * @param {number} [startLength=4] - Length of the beginning of the truncated hash.
 * @param {number} [endLength=4] - Length of the end of the truncated hash.
 *
 * @return {string} A truncated transaction/address hash.
 *
 */

export const truncateHash = (address: string, startLength = 4, endLength = 4) => {
  if (!address) return "";
  return `${address.substring(0, startLength)}...${address.substring(address.length - endLength)}`;
};
