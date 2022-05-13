import { STATUS } from 'literals';

import { Topic } from 'types';

export const description = 'Name Pronunciation Tool';
export const name = 'Hello! And welcome! to Goat Cheese';
export const topic: Topic = {
  cached: false,
  data: [],
  message: '',
  status: STATUS.IDLE,
  updatedAt: 0,
};
