import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, FormControl, InputLabel, MenuItem, Select, ThemeProvider, TextField } from '@material-ui/core';

import { IStoreState } from 'store/state';
import { ActionCtor, GenderType } from 'store/signup';
import { Settings } from 'settings';
import { Theme } from 'settings/material';

interface IProps extends RouteComponentProps {
  gender: GenderType;

  onChangeGender: typeof ActionCtor.onChangeGender;
}

class FormContainer extends React.Component<IProps> {

  onClickGender = (e: React.MouseEvent) => {
    const dataType = e.currentTarget.getAttribute('data-type') as GenderType;
    this.props.onChangeGender(dataType)
  }

  onClickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.history.push(Settings.mapsin.signin);
  }

  render() {
    const { gender } = this.props;

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
          />
          <TextField
            className="password"
            variant="outlined"
            label="비밀번호"
            type="password"
            size="small"
            required
          />
          <TextField
            className="passwordCheck"
            variant="outlined"
            label="비밀번호 확인"
            type="password"
            size="small"
            required
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
                label="연령대"
                required
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
    gender: state.SignupReducer.get('gender'),
  }),
  dispatch => bindActionCreators({
    onChangeGender: ActionCtor.onChangeGender,
  }, dispatch)
)(withRouter(FormContainer));
