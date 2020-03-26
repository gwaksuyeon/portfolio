import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl , ThemeProvider, TextField } from '@material-ui/core';

import { IStoreState } from 'store/state';
import { ActionCtor } from 'store/signin';
import { Settings } from 'settings';
import { Theme } from 'settings/material';

import { Data } from 'store/signup/user.mock';

interface IProps extends RouteComponentProps {
  id: string;
  password: string;

  onChangeId: typeof ActionCtor.onChangeId;
  onChangePassword: typeof ActionCtor.onChangePassword;
}

class FormContainer extends React.Component<IProps> {

  componentDidMount() {
    localStorage.user = JSON.stringify(Data);
  }

  onChangeId = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    this.props.onChangeId(value);
  }

  onChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    this.props.onChangePassword(value);
  }

  onClickSubmit = (e: React.FormEvent) => {
    const { id, password } = this.props;

    e.preventDefault();

    console.log(JSON.parse(localStorage.user).id)

    if (JSON.parse(localStorage.user).indexOf(id) !== -1 && JSON.parse(localStorage.user).indexOf(password) !== -1) {
      this.props.history.push(Settings.mapsin.survey);
    } else {
      window.alert('회원이 아니거나 정보가 틀렸습니다')
    }
  }

  render() {
    return (
      <form onSubmit={this.onClickSubmit}>
        <ThemeProvider theme={Theme}>
          <FormControl>
            <TextField
              className="id"
              variant="outlined"
              label="아이디"
              type="text"
              size="small"
              required
              onChange={this.onChangeId}
            />
            <TextField
              className="password"
              variant="outlined"
              label="비밀번호"
              type="password"
              size="small"
              required
              onChange={this.onChangePassword}
            />
            <Button
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </ThemeProvider>
      </form>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    id: state.SigninReducer.get('id'),
    password: state.SigninReducer.get('password'),
  }),
  dispatch => bindActionCreators({
    onChangeId: ActionCtor.onChangeId,
    onChangePassword: ActionCtor.onChangePassword,
  }, dispatch)
)(withRouter(FormContainer));
