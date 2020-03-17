import React from 'react';
import { Link } from 'react-router-dom'; 
import { Button, ThemeProvider, TextField } from '@material-ui/core';
import './signin.scss';

import { Settings } from 'settings';
import { Theme } from 'settings/material';

import LinkToBtnContainer from 'container/signin/LinkToBtn';

import LogoSloganIcon from 'component/icons/logoSlogan'
import ArrowLeftIcon from 'component/icons/arrowLeft';

const Signin = () => {
  return (
    <div id="signin-wrap">
      <div className="sideWrap">
        <LogoSloganIcon />
      </div>
      <div className="signinWrap">
        <div className="backBtn">
          <LinkToBtnContainer 
            text="돌아가기"
            icon={<ArrowLeftIcon/>}
            url={Settings.index}
          />
        </div>

        <div className="containWrap">
          <p className="title">로그인</p>
          <form>
            <ThemeProvider theme={Theme}>
              <TextField
                className="id"
                variant="outlined"
                label="ID"
                type="text"
                size="small"
              />
              <TextField
                className="password"
                variant="outlined"
                label="Password"
                type="password"
                size="small"
              />
              <Button variant="contained">
                Login
              </Button>
            </ThemeProvider>
          </form>
          <p className="forgotPassword">
            계정이 없으신가요? 
            <Link to={Settings.mapsin.signup}>가입하기</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signin;
