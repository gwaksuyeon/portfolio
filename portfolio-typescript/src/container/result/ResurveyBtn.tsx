import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Settings } from 'settings';

class ResurveyBtnContainer extends React.Component<RouteComponentProps> {

  onClick = () => {
    if (window.confirm('다시 평가하시겠습니까?')) {
      this.props.history.push(Settings.mapsin.survey);
    }
  }

  render() {
    return (
      <Button
        variant="contained"
        className="resurveyBtn"
        onClick={this.onClick}
      >
        다시 평가하기
      </Button>
    )
  }
}

export default withRouter(ResurveyBtnContainer);
