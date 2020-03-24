import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IStoreState } from 'store/state';
import { ActionCtor, FilterTypes } from 'store/result';

interface IProps {
  filterType: FilterTypes|'';
  rank: number;
  rankLabel: string;
  options: List<string>;

  fetchList: typeof ActionCtor.fetchList;
  onChangeFilterType: typeof ActionCtor.onChangeFilterType;
  onChangeRankFilter: typeof ActionCtor.onChangeRankFilter;
}

class RankFilterContainer extends React.Component<IProps> {

  componentDidMount() {
    const { rank } = this.props;
    this.props.onChangeRankFilter(`${rank}등급`);
  }

  componentDidUpdate() {
    this.fetchList();
  }

  fetchList = async () => {
    const { rankLabel } = this.props;
    const rank = Number(rankLabel.split('등급')[0]);

    await this.props.fetchList(rank);
  }

  // rank filter toggle
  onChangeFilterToggle = () => {
    if (this.activeToggle()) {
      this.props.onChangeFilterType('');
    } else {
      this.props.onChangeFilterType(FilterTypes.rank);
    }
  }

  // filterType이 rank이면 true, 아님 false
  activeToggle = (): boolean => {
    const { filterType } = this.props;
    return filterType === FilterTypes.rank;
  }

  // filter option 클릭
  onClickOption = (e: React.MouseEvent) => {
    const data = e.currentTarget.getAttribute('data-label') as string;
    this.props.onChangeRankFilter(data);
  }

  onBlur = () => {
    this.props.onChangeFilterType('');
  }

  render() {
    const { rankLabel, options } = this.props;

    return (
      <div className="ratingFilter">
        <span className="title">등급별</span>
        <div className="dropDownMenuWrap" onBlur={this.onBlur}>
          <button
            type="button"
            className={this.activeToggle() ? '_active' : ''}
            onClick={this.onChangeFilterToggle}
          >
            <p>{rankLabel}</p>
            {this.activeToggle() &&
              <ul className="options">
                {options.map((label, inx) => {
                  return (
                    <li
                      key={`dateLabel-${inx}`}
                      data-label={label}
                      onClick={this.onClickOption}
                    >
                      {label}
                    </li>
                  )
                })}
              </ul>
            }
          </button>
        </div>
      </div>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    filterType: state.ResultReducer.get('filterType'),
    rank: state.SurveyReducer.get('rank'),
    rankLabel: state.ResultReducer.get('filter').get('rank'),
    options: state.ResultReducer.get('filterOption').get('rank'),
  }),
  dispatch => bindActionCreators({
    fetchList: ActionCtor.fetchList,
    onChangeFilterType: ActionCtor.onChangeFilterType,
    onChangeRankFilter: ActionCtor.onChangeRankFilter,
  }, dispatch)
)(RankFilterContainer);
