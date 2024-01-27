import { createApi } from "api";
import { LOGIN } from "const/api.const";

export interface ILogin {
  username: string;
  password: string;
}

export const login = (data: ILogin) => {
  return createApi().post(LOGIN, data);
};
