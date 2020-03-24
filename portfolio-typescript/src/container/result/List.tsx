import React from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { IStoreState } from 'store/state';
import { ActionCtor } from 'store/result';
import { IDetailState } from 'store/result/detail';

interface IProps {
  rank: number;
  list: List<IDetailState>;

  fetchList: typeof ActionCtor.fetchList;
}

class ListContainer extends React.Component<IProps> {

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    const { rank } = this.props;
    await this.props.fetchList(rank);
  }

  render() {
    const { list } = this.props;

    return (
      <>
        {list.toJS().map((obj, inx) => {
          return (
            <div className="item" key={`item-${inx}`}>
              <div className="itemWrap">
                <div className="imgWrap">
                  <img src={obj.img} alt="img"/>
                </div>
                <p className="manufacturer">{obj.manufacturer}</p>
                <p className="name">{obj.name}</p>
              </div>
            </div>
          )
        })}
      </>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    rank: state.SurveyReducer.get('rank'),
    list: state.ResultReducer.get('list'),
  }),
  dispatch => bindActionCreators({
    fetchList: ActionCtor.fetchList,
  }, dispatch),
)(ListContainer);
