import { createAction } from '@reduxjs/toolkit';

import { actionPayload } from 'modules/helpers';

import { ActionTypes } from 'literals';

export interface GetProfileSuccessMeta {
  query: string;
}

export const getProfile = createAction<string>(ActionTypes.GET_PROFILE_REQUEST);
export const getProfileSuccess = createAction(
  ActionTypes.GET_PROFILE_SUCCESS,
  (payload: Record<string, any>[], meta: GetProfileSuccessMeta) => actionPayload(payload, meta),
);
export const getProfileFailure = createAction(
  ActionTypes.GET_PROFILE_FAILURE,
  (payload: string, query: string) => actionPayload(payload, { query }),
);
