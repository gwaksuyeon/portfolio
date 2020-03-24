import React from 'react';
import { List } from 'immutable';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IconButton } from '@material-ui/core';

import { IStoreState } from 'store/state';
import { ActionCtor } from 'store/survey';
import { Settings } from 'settings';

import ArrowRightLightIcon from 'component/icons/arrowRightLight';
import CheckIcon from 'component/icons/check';

interface IProps extends RouteComponentProps {
  currentIndex: number;
  currentValue: number;
  saveScore: List<number>;

  onChangeNextButton: typeof ActionCtor.onChangeNextButton;
  onChangeTotalScore: typeof ActionCtor.onChangeTotalScore;
  onGetCalcRank: typeof ActionCtor.onGetCalcRank;
}

class NextBtnContainer extends React.Component<IProps> {

  componentDidUpdate() {
    const { currentIndex, currentValue } = this.props;

    this.props.onChangeTotalScore(currentIndex, currentValue);
  }

  onClickNextBtn = () => {
    this.props.onChangeNextButton();
  }

  onClickGoResult = () => {
    if(window.confirm('등급을 계산하시겠습니까?')) {
      this.getRank();
      this.props.history.push(Settings.mapsin.result);
    }
  }

  getRank = () => {
    const { saveScore } = this.props;

    // 먹어본적 없는 항목은 전체 개수에서 제외
    const count = saveScore.filter(obj => obj !== 0).size;
    // 점수 합
    const sumScore = saveScore.reduce((sumRes: number, sumObj: number) => {
      return sumRes + sumObj;
    });
    // 접수 합 / 항목
    const rank = Math.round(sumScore / count);

    this.props.onGetCalcRank(rank);
  }

  render() {
    const { currentIndex } = this.props; 

    return (
      <>
        {currentIndex !== 9 ?
          <IconButton 
            className="nextBtn"
            onClick={this.onClickNextBtn}
          >
            <ArrowRightLightIcon />
          </IconButton>

          :

          <IconButton
            className="completeBtn"
            onClick={this.onClickGoResult}
          >
            <CheckIcon />
          </IconButton>
        }
      </>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    currentIndex: state.SurveyReducer.get('currentIndex'),
    currentValue: state.SurveyReducer.get('currentValue'),
    saveScore: state.SurveyReducer.get('saveScore'),
  }),
  dispatch => bindActionCreators({
    onChangeNextButton: ActionCtor.onChangeNextButton,
    onChangeTotalScore: ActionCtor.onChangeTotalScore,
    onGetCalcRank: ActionCtor.onGetCalcRank,
  }, dispatch)
)(withRouter(NextBtnContainer));
