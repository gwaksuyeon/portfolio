import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Settings } from 'settings';
import Button from '@material-ui/core/Button';

interface IProps extends RouteComponentProps {
  text: string;
  icon?: React.ReactNode;
}

class GoLoginBtnContainer extends React.Component<IProps> {

  onClick = () => {
    this.props.history.push(Settings.mapsin.signin);
  }

  render () {
    const { text, icon } = this.props;

    return (
      <Button
        variant="contained"
        endIcon={icon}
        onClick={this.onClick}
      >
        {text}
      </Button>
    )
  }
}

export default withRouter(GoLoginBtnContainer);
