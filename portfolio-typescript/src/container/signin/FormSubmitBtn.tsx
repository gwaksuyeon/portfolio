import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Settings } from 'settings';

class FormSubmitBtnContainer extends React.Component<RouteComponentProps> {

  onClick = () => {
    this.props.history.push(Settings.mapsin.survey);
  }

  render() {
    return (
      <Button
        variant="contained"
        type="submit"
        onClick={this.onClick}
      >
        Login
      </Button>
    )
  } 
}

export default withRouter(FormSubmitBtnContainer);
