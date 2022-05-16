import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import {getProfile, getProfileFailure, getProfileSuccess} from 'actions';
import axios from "axios";

/**
 * Get Profile
 *
 * @param {Object} action
 *
 */
export function* getProfileSaga({ payload }: ReturnType<typeof getProfile>) {
  try {
    // @ts-ignore
    let response = yield axios.get( `http://localhost:9091/pronunciation/get-user-details?userId=${payload}`);
    yield put(getProfileSuccess( response.data, { query: payload }),);

  } catch (error: any) {
    yield put(getProfileFailure(error.message, payload));
  }
}

/**
 * Profile Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.GET_PROFILE_REQUEST, getProfileSaga)]);
}
