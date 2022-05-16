import { all, fork } from 'redux-saga/effects';

// import github from './github';
import user from './user';
import profile from './profile';

/**
 * rootSaga
 */
export default function* root() {
  // yield all([fork(github), fork(user), fork(profile)]);
  yield all([fork(profile), fork(user)]);
}
