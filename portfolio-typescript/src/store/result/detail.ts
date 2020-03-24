import { Record } from 'immutable';

export interface IDetailState {
  id: number;
  manufacturer: string; // 제조사
  name: string; // 이름
  evaluation: number; // 평가
  img: string; // img
}
const DetailStateRecord = Record<IDetailState>({
  id: 0,
  manufacturer: '', // 제조사
  name: '', // 이름
  evaluation: 0, // 평가
  img: '', // img
})
export class DetailState extends DetailStateRecord {}
