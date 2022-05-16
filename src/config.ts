import { STATUS } from 'literals';

import {ProfileData, Topic} from 'types';

export const description = 'Name Pronunciation Tool';
export const name = 'Hello! And welcome! to Goat Cheese';
export const topic: Topic = {
  cached: false,
  data: [],
  message: '',
  status: STATUS.IDLE,
  updatedAt: 0,
};

export const profiledata: ProfileData = {
  data: [],
  message: '',
  status: STATUS.IDLE,
};
