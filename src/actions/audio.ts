import { createAction } from '@reduxjs/toolkit';

import { actionPayload } from 'modules/helpers';

import { ActionTypes } from 'literals';

export interface GetAudioSuccessMeta {
  query: string;
}

export const getAudio = createAction<string>(ActionTypes.GET_AUDIO_REQUEST);
export const getAudioSuccess = createAction(
  ActionTypes.GET_AUDIO_SUCCESS,
  (payload: Record<string, any>[], meta: GetAudioSuccessMeta) => actionPayload(payload, meta),
);
export const getAudioFailure = createAction(
  ActionTypes.GET_AUDIO_FAILURE,
  (payload: string, query: string) => actionPayload(payload, { query }),
);
