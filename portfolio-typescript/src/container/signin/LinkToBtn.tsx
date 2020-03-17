import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

interface IProps extends RouteComponentProps {
  text: string;
  icon?: React.ReactNode;
  url: string;
}

class LinkToBtnContainer extends React.Component<IProps> {

  onClick = () => {
    const { url } = this.props;
    this.props.history.push(url);
  }

  render () {
    const { text, icon } = this.props;

    return (
      <Button
        variant="contained"
        startIcon={icon}
        onClick={this.onClick}
      >
        {text}
      </Button>
    )
  }
}

export default withRouter(LinkToBtnContainer);
