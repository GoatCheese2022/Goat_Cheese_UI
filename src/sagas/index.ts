import { all, fork } from 'redux-saga/effects';

import user from './user';
import profile from './profile';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(profile), fork(user)]);
}
