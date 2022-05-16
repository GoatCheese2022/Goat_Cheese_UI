import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import github, { githubState } from './github';
import user, { userState } from './user';
import profile, {profileState} from "./profile";

export const initialState = {
  profile: profileState,
  alerts: alertsState,
  app: appState,
  github: githubState,
  user: userState,
};

export default {
  ...profile,
  ...alerts,
  ...app,
  ...github,
  ...user,
};
