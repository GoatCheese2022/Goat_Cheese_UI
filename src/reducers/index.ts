import alerts, { alertsState } from './alerts';
import app, { appState } from './app';
import user, { userState } from './user';
import profile, {profileState} from "./profile";

export const initialState = {
  profile: profileState,
  alerts: alertsState,
  app: appState,
  user: userState,
};

export default {
  ...profile,
  ...alerts,
  ...app,
  ...user,
};
