import apisauce, { ApiResponse, ApisauceConfig } from "apisauce";
import { ApiConstant, AppConstant, EnvConstant, PathConstant } from "const";
import Cookie from "js-cookie";

const DEFAULT_CONFIG: ApisauceConfig = {
  baseURL: "",
  headers: { ...ApiConstant.HEADER_DEFAULT },
  timeout: ApiConstant.TIMEOUT,
  withCredentials: true,
};

const handleErrorRequest = (response: ApiResponse<IApiResponse>) => {
  if ([ApiConstant.STT_UNAUTHORIZED, ApiConstant.STT_FORBIDDEN].includes(response.status || 0)) {
    window.localStorage.removeItem(AppConstant.KEY_USER_INFO);
    window.sessionStorage.removeItem(AppConstant.KEY_USER_INFO);

    if (window.location.pathname === PathConstant.LOGIN) return;
    window.location.replace(PathConstant.LOGIN);
  }

  if (
    response.status &&
    false === [ApiConstant.STT_OK, ApiConstant.STT_CREATED].includes(response.status)
  ) {
    EnvConstant.IS_DEV && console.log(response);
  }
};

const createInstance = (baseURL?: string, token?: string) => {
  const newToken = token || Cookie.get(AppConstant.KEY_TOKEN);

  baseURL && Api.setBaseURL(baseURL);
  newToken && Api.setHeader("accessToken", newToken);

  return Api;
};

const Api = apisauce.create(DEFAULT_CONFIG);
Api.addResponseTransform(handleErrorRequest);

// API GET TOTAL ADDRESS
const ApiGetTA = apisauce.create({ ...DEFAULT_CONFIG, withCredentials: false });
ApiGetTA.addResponseTransform(handleErrorRequest);

export const createApi = (token?: string) => createInstance(EnvConstant.BASE_URL, token);

const createInstanceAddress = (baseURL?: string) => {
  baseURL && ApiGetTA.setBaseURL(baseURL);

  return ApiGetTA;
};

export const createBoxAddressApi = () => createInstanceAddress(EnvConstant.BOX_ADDRESS_BASE_URL);

export default Api;

export interface IApiResponse {
  status: number;
  data: object;
}
