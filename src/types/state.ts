import React from 'react';
import { Dispatch } from 'redux';
import { Variants } from 'styled-minimal/lib/types';
import { ValueOf } from 'type-fest';

import { AlertPosition, Icons, Status } from './common';

export interface AlertData {
  icon: Icons;
  id: string;
  message: React.ReactNode;
  position: AlertPosition;
  timeout: number;
  variant: Variants;
}

export interface ProfileData {
  data: Array<Record<string, any>>;
  message: string;
  status: ValueOf<Status>;
}

export interface AlertsState {
  data: AlertData[];
}

export interface AppState {
  query: string;
}

export interface ProfileState {
  profiles: Record<string, ProfileData>;
}

export interface UserState {
  isAuthenticated: boolean;
  status: ValueOf<Status>;
}

export interface RootState {
  alerts: AlertsState;
  app: AppState;
  profile: ProfileState;
  user: UserState;
}

export interface WithDispatch {
  dispatch: Dispatch;
}
