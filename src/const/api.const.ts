// import { EnvConstant } from "const
import { CONTRACT_ADDRESS } from "./env.const";

// Common
export const HEADER_DEFAULT = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const HEADER_FILE = {
  "Content-Type": "multipart/form-data",
};

export const TIMEOUT = 300000;

// HTTP Status
export const STT_OK = 200;
export const STT_CREATED = 201;
export const STT_BAD_REQUEST = 400;
export const STT_UNAUTHORIZED = 401;
export const STT_FORBIDDEN = 403;
export const STT_NOT_FOUND = 404;
export const STT_INTERNAL_SERVER = 500;
export const STT_NOT_MODIFIED = 304;

// API
export const LOGIN = "/auth/login";

export const GET_TOTAL_ADDRESS = `/api?module=token&action=getTokenHolders&contractaddress=${CONTRACT_ADDRESS.ADDRESS_BOX}&page=1&offset=10000`;
