import React from 'react';
import './survey.scss';

import LogoutBtnContainer from 'container/survey/LogoutBtn';
import ProgressBarContainer from 'container/survey/ProgressBar';
import PrevBtnContainer from 'container/survey/PrevBtn';
import NextBtnContainer from 'container/survey/NextBtn';
import ListContainer from 'container/survey/List';

import LogoWhiteIcon from 'component/icons/logoWhite';
import ChillIcon from 'component/icons/chillFill';

const Survey = () => {
  return (
    <div id="survey-wrap">
      <header>
        <div className="_logo">
          <LogoWhiteIcon />
        </div>
        <LogoutBtnContainer />
      </header>

      <main>
        <div className="bg"></div>
        <div className="contentsWrap">
          <div className="progressBarWrap">
            <ProgressBarContainer />
          </div>
          <div className="guide">
            <p>
              <span>
                <ChillIcon/>&nbsp;:&nbsp;아주맵지않음
              </span>
              <span>
                <ChillIcon/><ChillIcon/>&nbsp;:&nbsp;조금맵지않음
              </span>
              <span>
                <ChillIcon/><ChillIcon/><ChillIcon/>&nbsp;:&nbsp;보통
              </span>
              <span>
                <ChillIcon/><ChillIcon/><ChillIcon/><ChillIcon/>&nbsp;:&nbsp;조금매움
              </span>
              <span>
                <ChillIcon/><ChillIcon/><ChillIcon/><ChillIcon/><ChillIcon/>&nbsp;:&nbsp;아주매움
              </span>
            </p>
          </div>

            <PrevBtnContainer />
            <NextBtnContainer />

            <ListContainer />
        </div>
      </main>
    </div>
  )
}

export default Survey;
