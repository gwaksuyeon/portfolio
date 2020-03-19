import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Settings } from 'settings';

class FormSubmitBtnContainer extends React.Component<RouteComponentProps> {

  onClick = () => {
    window.alert('가입이 완료되었습니다. 로그인 페이지로 이동합니다');
    this.props.history.push(Settings.mapsin.signin);
  }

  render() {
    return (
      <Button
        variant="contained"
        type="submit"
        onClick={this.onClick}
      >
        가입완료
      </Button>
    )
  } 
}

export default withRouter(FormSubmitBtnContainer);
