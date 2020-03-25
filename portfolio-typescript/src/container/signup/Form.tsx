import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, InputLabel, MenuItem, Select, ThemeProvider, TextField } from '@material-ui/core';

import { IStoreState } from 'store/state';
import { ActionCtor, GenderType } from 'store/signup';
import { UserState } from 'store/signup/user.detail';
import { Settings } from 'settings';
import { Theme } from 'settings/material';

interface IProps extends RouteComponentProps {
  id: string;
  password: string;
  passwordCheck: string;
  gender: GenderType;
  age: string;

  onChangeId: typeof ActionCtor.onChangeId;
  onChangePassword: typeof ActionCtor.onChangePassword;
  onChangePasswordCheck: typeof ActionCtor.onChangePasswordCheck;
  onChangeGender: typeof ActionCtor.onChangeGender;
  onChangeAge: typeof ActionCtor.onChangeAge;

  createUser: typeof ActionCtor.createUser;
}

class FormContainer extends React.Component<IProps> {

  onChangeId = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    this.props.onChangeId(value);
  }

  onChangePassword = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    this.props.onChangePassword(value);
  }

  onChangePasswordCheck = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    this.props.onChangePasswordCheck(value);
  }

  onClickGender = (e: React.MouseEvent) => {
    const dataType = e.currentTarget.getAttribute('data-type') as GenderType;
    this.props.onChangeGender(dataType);
  }

  onChangeAge = (e: React.ChangeEvent<{value: unknown}>) => {
    const age = e.target.value as string;
    this.props.onChangeAge(age);
  }

  onClickSubmit = async (e: React.FormEvent) => {
    const { id, password, gender, age } = this.props;

    e.preventDefault();
    const userInfo =  {
      id: id,
      password: password,
      gender: gender,
      age: age
    } as UserState;
    this.props.createUser(userInfo);
    this.props.history.push(Settings.mapsin.signin);
  }

  render() {
    const { password, passwordCheck, gender, age } = this.props;

    return (
      <form onSubmit={this.onClickSubmit}>
        <ThemeProvider theme={Theme}>
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
          <TextField
            className={`passwordCheck ${passwordCheck !== password ? 'notCoincide' : ''}`}
            variant="outlined"
            label="비밀번호 확인"
            type="password"
            size="small"
            required
            onChange={this.onChangePasswordCheck}
          />

          <div className="row">
            <div className="selectGenderWrap">
              <div 
                className={`selectBtn ${gender === 'female'? '_active' : ''}`}
                data-type="female"
                onClick={this.onClickGender}
              >
                여자
              </div>
              <div 
                className={`selectBtn ${gender === 'male'? '_active' : ''}`}
                data-type="male"
                onClick={this.onClickGender}
              >
                남자
              </div>
            </div>

            <FormControl variant="outlined">
              <InputLabel id="select-age">연령대</InputLabel>
              <Select
                labelId="select-age"
                className="selectAge"
                value={age}
                label="연령대"
                required
                onChange={this.onChangeAge}
              >
                <MenuItem value={"tenUnder"}>10대이하</MenuItem>
                <MenuItem value={"ten"}>10대</MenuItem>
                <MenuItem value={"twenty"}>20대</MenuItem>
                <MenuItem value={"thirty"}>30대</MenuItem>
                <MenuItem value={"fourty"}>40대</MenuItem>
                <MenuItem value={"fifty"}>50대</MenuItem>
                <MenuItem value={"sixtyOver"}>60대이상</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button
            variant="contained"
            type="submit"
          >
            가입완료
          </Button>
        </ThemeProvider>
      </form>
    )
  }
}

export default connect(
  (state: IStoreState) => ({
    id: state.SignupReducer.get('id'),
    password: state.SignupReducer.get('password'),
    passwordCheck: state.SignupReducer.get('passwordCheck'),
    gender: state.SignupReducer.get('gender'),
    age: state.SignupReducer.get('age'),
  }),
  dispatch => bindActionCreators({
    onChangeId: ActionCtor.onChangeId,
    onChangePassword: ActionCtor.onChangePassword,
    onChangePasswordCheck: ActionCtor.onChangePasswordCheck,
    onChangeGender: ActionCtor.onChangeGender,
    onChangeAge: ActionCtor.onChangeAge,

    createUser: ActionCtor.createUser,
  }, dispatch)
)(withRouter(FormContainer));
