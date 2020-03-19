import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, ThemeProvider, TextField } from '@material-ui/core';
import './signup.scss';

import { Settings } from 'settings';
import { Theme } from 'settings/material';

import LinkToBtnContainer from 'container/signup/LinkToBtn';
import SelectGenderBtnContainer from 'container/signup/SelectGenderBtn';
import FormSubmitBtnContainer from 'container/signup/FormSubmitBtn';

import LogoSloganIcon from 'component/icons/logoSlogan'
import ArrowLeftIcon from 'component/icons/arrowLeft';

const Signup = () => {
  return (
    <div id="signup-wrap">
      <div className="sideWrap">
        <LogoSloganIcon />
      </div>
      <div className="signupWrap">
        <div className="backBtn">
          <LinkToBtnContainer 
            text="돌아가기"
            icon={<ArrowLeftIcon/>}
            url={Settings.mapsin.signin}
          />
        </div>

        <div className="containWrap">
          <p className="title">회원가입</p>
          <form>
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
                <SelectGenderBtnContainer />

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

              <FormSubmitBtnContainer />
            </ThemeProvider>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
