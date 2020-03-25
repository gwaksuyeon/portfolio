import { Record } from 'immutable';
import { GenderType } from './index';

export interface IUserState {
  id: string;
  password: string;
  gender: GenderType;
  age: string;
}
const UserStateRecord = Record<IUserState>({
  id: '',
  password: '',
  gender: GenderType.female,
  age: '',
});
export class UserState extends UserStateRecord {}

