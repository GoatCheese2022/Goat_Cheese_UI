import { createReducer } from '@reduxjs/toolkit';

import { setAppOptions } from 'actions';

import { AppState } from 'types';

export const appState: AppState = {
  query: 'U700001',
};

export default {
  app: createReducer<AppState>(appState, builder => {
    builder.addCase(setAppOptions, (draft, { payload }) => {
      draft.query = payload.query;
    });
  }),
};
