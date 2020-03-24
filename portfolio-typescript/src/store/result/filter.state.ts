import { Record } from 'immutable';
import { FilterOptionState } from './filter.option.state';

export interface IFilterState {
  rank: string;
}
const FilterStateRecord = Record<IFilterState>({
  rank: new FilterOptionState().getIn(['rank', 0])
})
export class FilterState extends FilterStateRecord {}
