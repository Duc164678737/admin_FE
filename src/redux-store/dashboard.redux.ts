import { IAppReduxState } from "./index";
import { createActions, createReducer } from "reduxsauce";
import {
  IReduxStateCommon,
  REDUX_STATE,
  requestReducerFunc,
  failureReducerFunc,
  successReducerFunc,
  resetReducerFunc,
} from "./redux-structure";
import { DashboardClass } from "models";

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators } = createActions({
  getAllINORounds: [],
  getDashboardData: [],
  getWalletRoundData: ["data"],
  getTotalAddressData: [],

  updateDashboard: ["data"],
  dashboardSuccess: ["data"],
  dashboardFailure: ["error", "data"],
  dashboardSet: ["data"],
  dashboardReset: [],
});

/* ------------- Initial State ------------- */
export interface IDashboardRedux extends IReduxStateCommon {
  dashboard: DashboardClass;
}
export const INITIAL_STATE: IDashboardRedux = {
  ...REDUX_STATE,

  dashboard: new DashboardClass(),
};

/* ------------- Selector ------------- */
export const Selector = {
  getDashboardData: (state: IAppReduxState) => state.dashboardRedux.dashboard,
  getAllINORounds: (state: IAppReduxState) => state.dashboardRedux.dashboard,
};

/* ------------- Reducers ------------- */
const updateDashboard = (state = INITIAL_STATE, action: { data: object }) => {
  const data = action.data || {};

  return { ...state, dashboard: new DashboardClass({ ...state.dashboard, ...data }) };
};

const request = (state = INITIAL_STATE) => requestReducerFunc(state);

const success = (state = INITIAL_STATE, action: object) => successReducerFunc(state, action);

const failure = (state = INITIAL_STATE, action: object) => failureReducerFunc(state, action);

const reset = () => resetReducerFunc(INITIAL_STATE);

/* ------------- Mapping ------------- */
const HANDLERS = {
  [Types.GET_ALL_INO_ROUNDS]: request,
  [Types.GET_DASHBOARD_DATA]: request,
  [Types.GET_WALLET_ROUND_DATA]: request,
  [Types.GET_TOTAL_ADDRESS_DATA]: request,

  [Types.UPDATE_DASHBOARD]: updateDashboard,
  [Types.DASHBOARD_SUCCESS]: success,
  [Types.DASHBOARD_FAILURE]: failure,
  [Types.DASHBOARD_SET]: success,
  [Types.DASHBOARD_RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);

export default Creators;
