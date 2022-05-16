import { keyMirror } from '@gilbarbara/helpers';

import { Status } from 'types';

export const ActionTypes = keyMirror({
  GET_PROFILE_REQUEST: undefined,
  GET_PROFILE_SUCCESS: undefined,
  GET_PROFILE_FAILURE: undefined,
  HIDE_ALERT: undefined,
  SHOW_ALERT: undefined,
  SET_APP_OPTIONS: undefined,
  USER_LOGIN_REQUEST: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT_REQUEST: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  GET_AUDIO_REQUEST: undefined,
  GET_AUDIO_SUCCESS: undefined,
  GET_AUDIO_FAILURE: undefined,
  SAVE_AUDIO_REQUEST: undefined
});

export const STATUS: Status = {
  IDLE: 'idle',
  RUNNING: 'running',
  READY: 'ready',
  SUCCESS: 'success',
  ERROR: 'error',
};
