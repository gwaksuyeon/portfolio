import { Record, List } from 'immutable';

export interface IFilterOptionState {
  rank: List<string>;
}
const FilterOptionStateRecord = Record<IFilterOptionState>({
  rank: List(['1등급', '2등급', '3등급', '4등급', '5등급']),
});
export class FilterOptionState extends FilterOptionStateRecord {}
