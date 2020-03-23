import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/state';

interface IProps {
  currentIndex: number;
}

class ProgressBarContainer extends React.Component<IProps> {
  render() {
    const { currentIndex } = this.props;

    return (
      <div 
        className="currentBar"
        style={{width: `calc(100% / 10 * ${currentIndex + 1})`}}
      >
      </div>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    currentIndex: state.SurveyReducer.get('currentIndex'),
  })
)(ProgressBarContainer);
