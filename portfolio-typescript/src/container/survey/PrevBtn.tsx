import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IconButton } from '@material-ui/core';

import { IStoreState } from 'store/state';
import { ActionCtor } from 'store/survey';

import ArrowLeftLightIcon from 'component/icons/arrowLeftLight';

interface IProps {
  currentIndex: number;
  onChangePrevButton: typeof ActionCtor.onChangePrevButton;
}

class PrevBtnContainer extends React.Component<IProps> {

  onClick = () => {
    this.props.onChangePrevButton();
  }

  render() {
    const { currentIndex } = this.props;

    return (
      <>
        {currentIndex !== 0 &&
          <IconButton 
            className="prevBtn"
            onClick={this.onClick}
          >
            <ArrowLeftLightIcon />
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
    onChangePrevButton: ActionCtor.onChangePrevButton,
  }, dispatch)
)(PrevBtnContainer);
