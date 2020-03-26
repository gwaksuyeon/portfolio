import React from 'react';
import './signup.scss';

import { Settings } from 'settings';

import LinkToBtnContainer from 'container/signup/LinkToBtn';
import FormContainer from 'container/signup/Form';

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
          <FormContainer />
        </div>
      </div>
    </div>
  )
}

export default Signup;
