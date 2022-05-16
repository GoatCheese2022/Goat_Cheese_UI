import { all, put, takeLatest } from 'redux-saga/effects';

import { ActionTypes } from 'literals';

import axios from "axios";
import {getAudio, getAudioSuccess, getAudioFailure} from "actions/audio";

/**
 * Get Audio
 *
 * @param {Object} action
 *
 */
export function* getAudioSaga({ payload }: ReturnType<typeof getAudio>) {
  try {
    console.log("Sending requeest forrrrrrrrrrrrrrrrrr: " + payload)
    // @ts-ignore
    let response = yield axios.get( `http://localhost:9091/pronunciation/get-audio?userId=${payload}`);
    console.log("responseeeeeeeeeeee " + response.data.email);
    console.log("audioaudioaudiooooooo " + response.data.audioFileBytes);

    yield put(getAudioSuccess( response.data, { query: payload }),);

  } catch (error: any) {
    yield put(getAudioFailure(error.message, payload));
  }
}




/**
 * Profile Sagas
 */
export default function* root() {
  yield all([takeLatest(ActionTypes.GET_AUDIO_REQUEST, getAudioSaga)]);
}
