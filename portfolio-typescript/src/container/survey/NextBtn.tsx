import React from 'react';
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
  onChangeNextButton: typeof ActionCtor.onChangeNextButton;
}

class NextBtnContainer extends React.Component<IProps> {

  onClickNextBtn = () => {
    this.props.onChangeNextButton();
  }

  onClickGoResult = () => {
    if(window.confirm('등급을 계산하시겠습니까?')) {
      this.props.onChangeNextButton();
      this.props.history.push(Settings.mapsin.result);
    }
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
  }),
  dispatch => bindActionCreators({
    onChangeNextButton: ActionCtor.onChangeNextButton,
  }, dispatch)
)(withRouter(NextBtnContainer));
