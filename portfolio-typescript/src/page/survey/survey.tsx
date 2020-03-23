import React from 'react';
import { Button } from '@material-ui/core';
import './survey.scss';

import LogoutBtnContainer from 'container/survey/LogoutBtn';
import ProgressBarContainer from 'container/survey/ProgressBar';
import PrevBtnContainer from 'container/survey/PrevBtn';
import NextBtnContainer from 'container/survey/NextBtn';
import ListContainer from 'container/survey/List';

import LogoWhiteIcon from 'component/icons/logoWhite';

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

            <PrevBtnContainer />
            <NextBtnContainer />

            <ListContainer />
        </div>
      </main>
    </div>
  )
}

export default Survey;
