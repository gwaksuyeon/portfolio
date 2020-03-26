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
    const userInfo = JSON.parse(localStorage.user);
    const findUserInfo = userInfo.filter((obj: { id: string; password: string; }) => obj.id === id && obj.password === password);

    if (findUserInfo.length === 0) {
      window.alert('정보가 일치하지 않습니다. 다시입력하거나 회원가입을 해주세요');
    } else {
      this.props.history.push(Settings.mapsin.survey);
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
