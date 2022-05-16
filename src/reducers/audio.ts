import { createReducer } from '@reduxjs/toolkit';

import {audiodata} from 'config';
import { STATUS } from 'literals';

import { getAudio, getAudioSuccess, getAudioFailure } from 'actions/audio';

import {AudioState} from 'types';

export const audioState: AudioState = {
  audio: {},
};

export default {
  profile: createReducer<AudioState>(audioState, builder => {
    builder
      .addCase(getAudio, (draft, { payload }) => {
        draft.audio[payload] = draft.audio[payload] || { ...audiodata };

        draft.audio[payload].message = '';
        draft.audio[payload].status = STATUS.RUNNING;
      })
      .addCase(getAudioSuccess, (draft, { meta, payload }) => {
        const { query = '' } = meta || {};

        draft.audio[query] = draft.audio[query] || { ...audiodata };
        draft.audio[query].data = payload;
        draft.audio[query].status = STATUS.SUCCESS;
      })
      .addCase(getAudioFailure, (draft, { meta, payload }) => {
        const { query = '' } = meta || {};

        draft.audio[query] = draft.audio[query] || { ...audiodata };

        draft.audio[query].message = payload;
        draft.audio[query].status = STATUS.ERROR;
      });
  }),
};
