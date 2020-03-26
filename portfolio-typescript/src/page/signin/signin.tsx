import React from 'react';
import { Link } from 'react-router-dom'; 
import './signin.scss';

import { Settings } from 'settings';

import LinkToBtnContainer from 'container/signin/LinkToBtn';
import FormContainer from 'container/signin/Form';

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
          <FormContainer />

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
