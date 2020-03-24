import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Settings } from 'settings';

class LogoutBtnContainer extends React.Component<RouteComponentProps> {

  onClick = () => {
    this.props.history.push(Settings.index);
  }

  render() {
    return (
      <Button 
        variant="contained"
        onClick={this.onClick}
      >
        Logout
      </Button>
    )
  }
}

export default withRouter(LogoutBtnContainer);
