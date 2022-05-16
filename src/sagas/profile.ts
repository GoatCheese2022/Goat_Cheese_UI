// import { request } from '@gilbarbara/helpers';
// import { all, call, put, takeLatest } from 'redux-saga/effects';
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
    // let data;
    console.log("Sending requeest forrrrrrrrrrrrrrrrrr: " + payload)
    // @ts-ignore
    let response = yield axios.get( `http://localhost:9091/pronunciation/get-user-details?userId=${payload}`);
    console.log("responseeeeeeeeeeee " + response.data.email);
    console.log("audioaudioaudiooooooo " + response.data.audioFileBytes);

    // data = yield call(request, `http://localhost:9091/pronunciation/get-details?userId=${payload}`, ));
    // let data = yield axios.get(`http://localhost:9091/pronunciation/get-details?userId=${payload}`);
    // console.log("aaaaaaaaaaaaaaaaa " + data.toLocaleString());
    // console.log("bbbbbbbbbbbb " + data["firstName"]);
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
