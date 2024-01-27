import { IAppReduxState } from "./index";
import { createActions, createReducer } from "reduxsauce";
import { successReducerFunc, resetReducerFunc } from "./redux-structure";
import { AlertActionClass } from "models";

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
  appSet: ["data"],
  appReset: [],
});

/* ------------- Initial State ------------- */
export interface IAppRedux {
  alert?: AlertActionClass;
  isApiError: boolean;
  userInfo: { username: string; password: string };
}
export const INITIAL_STATE: IAppRedux = {
  isApiError: false,
  userInfo: { username: "", password: "" },
};

/* ------------- Selector ------------- */
export const Selector = {
  // Get User info
  getUserInfo: (state: IAppReduxState) => state.appRedux.userInfo,

  getAlert: (state: IAppReduxState): AlertActionClass | undefined => state.appRedux.alert,

  isApiError: (state: IAppReduxState): boolean => state.appRedux.isApiError,
};

/* ------------- Reducers ------------- */
const success = (state = INITIAL_STATE, action: object) => successReducerFunc(state, action);

const reset = () => resetReducerFunc(INITIAL_STATE);

/* ------------- Mapping ------------- */
const HANDLERS = {
  [Types.APP_SET]: success,
  [Types.APP_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

export default Creators;
