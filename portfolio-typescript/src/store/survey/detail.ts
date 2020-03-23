import { Record } from 'immutable';

export interface IDetailState {
  id: number;
  manufacturer: string;
  name: string;
  img: string;
}
const DetailStateRecord = Record<IDetailState>({
  id: 0,
  manufacturer: '',
  name: '',
  img: '',
});
export class DetailState extends DetailStateRecord {}
