/**
 * Saga index: connects action type and saga
 */

import { all, takeLatest } from "redux-saga/effects";

/* ------------- Types ------------- */
import { DashboardTypes } from "redux-store";

/* ------------- Sagas ------------- */
import { getWalletRoundData, getTotalAddressData, getAllINORoundsRequest } from "./dashboard.saga";

/* ------------- Connect Types To Sagas ------------- */
function* rootSaga() {
  yield all([
    // ------------- Dashboard -------------
    takeLatest(DashboardTypes.GET_ALL_INO_ROUNDS, getAllINORoundsRequest),
    takeLatest(DashboardTypes.GET_WALLET_ROUND_DATA, getWalletRoundData),
    takeLatest(DashboardTypes.GET_TOTAL_ADDRESS_DATA, getTotalAddressData),
  ]);
}

export default rootSaga;
