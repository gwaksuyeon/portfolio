import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import { IStoreState } from 'store/state';
import { ActionCtor } from 'store/survey';
import { DetailState } from 'store/survey/detail';

import ChillFillIcon from 'component/icons/chillFill';
import ChillEmptyIcon from 'component/icons/chillEmpty';

interface IProps {
  currentIndex: number;
  currentValue: number;
  list: List<DetailState>;

  fetchList: typeof ActionCtor.fetchList;
  onChangeCurrentValue: typeof ActionCtor.onChangeCurrentValue;
}

class ListContainer extends React.Component<IProps> {

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    await this.props.fetchList();
  }

  // 현재 매움 값
  onChangeValue = (e: any) => {
    const rank = Number(e.currentTarget.value);

    this.props.onChangeCurrentValue(rank);
  }

  // 먹어본적 없을때의 매움 값
  onClickNotSelect = () => {
    this.props.onChangeCurrentValue(0);
  }

  render() {
    const { currentIndex, currentValue, list } = this.props;

    return (
      <div className="contents">
        <div className="textWrap">
          <p className="manufacturer">
            {list.getIn([currentIndex, 'manufacturer'])}
          </p>
          <p className="name">
            {list.getIn([currentIndex, 'name'])}
          </p>

          <div className="evaluationWrap">
            <Rating
              name={`cill-icons-${list.getIn([currentIndex, 'id'])}`}
              defaultValue={0}
              value={currentValue}
              max={5}
              icon={<ChillFillIcon/>}
              emptyIcon={<ChillEmptyIcon />}
              onChange={this.onChangeValue}
            />
          </div>
          <Button 
            variant="contained" 
            className="notSelectBtn"
            onClick={this.onClickNotSelect}
          >
            먹어본적없다
          </Button>
        </div>
        <div className="imgWrap">
          <img src={list.getIn([currentIndex, 'img'])} alt="img"/>
        </div>
      </div>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    currentIndex: state.SurveyReducer.get('currentIndex'),
    currentValue: state.SurveyReducer.get('currentValue'),
    list: state.SurveyReducer.get('list'),
  }),
  dispatch => bindActionCreators({
    fetchList: ActionCtor.fetchList,
    onChangeCurrentValue: ActionCtor.onChangeCurrentValue,
  }, dispatch)
)(ListContainer);
