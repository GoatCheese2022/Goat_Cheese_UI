import { createReducer } from '@reduxjs/toolkit';

import {profiledata} from 'config';
import { STATUS } from 'literals';

import { getProfile, getProfileSuccess, getProfileFailure } from 'actions';

import {ProfileState} from 'types';

export const profileState: ProfileState = {
  profiles: {},
};

export default {
  profile: createReducer<ProfileState>(profileState, builder => {
    builder
      .addCase(getProfile, (draft, { payload }) => {
        draft.profiles[payload] = draft.profiles[payload] || { ...profiledata };

        draft.profiles[payload].message = '';
        draft.profiles[payload].status = STATUS.RUNNING;
      })
      .addCase(getProfileSuccess, (draft, { meta, payload }) => {
        const { query = '' } = meta || {};

        draft.profiles[query] = draft.profiles[query] || { ...profiledata };
        draft.profiles[query].data = payload;
        draft.profiles[query].status = STATUS.SUCCESS;
      })
      .addCase(getProfileFailure, (draft, { meta, payload }) => {
        const { query = '' } = meta || {};

        draft.profiles[query] = draft.profiles[query] || { ...profiledata };

        draft.profiles[query].message = payload;
        draft.profiles[query].status = STATUS.ERROR;
      });
  }),
};
