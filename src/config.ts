import { STATUS } from 'literals';

<<<<<<< Updated upstream
import {ProfileData} from 'types';
=======
// @ts-ignore
import {AudioData, ProfileData, Topic} from 'types';
>>>>>>> Stashed changes

export const description = 'Name Pronunciation Tool';
export const name = 'Hello! And welcome! to Goat Cheese';
export const profiledata: ProfileData = {
  data: [],
  message: '',
  status: STATUS.IDLE,
};
