import { EnvConstant } from "const";
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "sagas";

import {
  Creators as DashboardActions,
  Types as DashboardTypes,
  reducer as DashboardReducer,
  Selector as DashboardSelector,
  IDashboardRedux,
} from "./dashboard.redux";

import {
  Creators as AppActions,
  Types as AppTypes,
  reducer as AppReducer,
  Selector as AppSelector,
  IAppRedux,
} from "./app.redux";

/* ------------- Assemble The Reducers ------------- */
const systemReducer = combineReducers({
  appRedux: AppReducer,
  dashboardRedux: DashboardReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: any, action: any) => {
  return systemReducer(state, action);
};

/* ------------- Redux Configuration ------------- */

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();

// Create store
const store = EnvConstant.IS_DEV
  ? createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
  : createStore(rootReducer, applyMiddleware(sagaMiddleware));

// kick off root saga
sagaMiddleware.run(rootSaga);

interface IAppReduxState {
  appRedux: IAppRedux;
  dashboardRedux: IDashboardRedux;
}

/* ------------- Redux Actions ------------- */
export { AppActions, AppTypes, AppSelector, DashboardActions, DashboardTypes, DashboardSelector };
export type { IAppReduxState };

export default store;
