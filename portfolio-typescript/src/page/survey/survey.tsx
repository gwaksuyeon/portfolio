import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import './survey.scss';

import LogoWhiteIcon from 'component/icons/logoWhite';
import ArrowLeftLightIcon from 'component/icons/arrowLeftLight';
import ArrowRightLightIcon from 'component/icons/arrowRightLight';
import ChillFillIcon from 'component/icons/chillFill';

const Survey = () => {
  return (
    <div id="survey-wrap">
      <header>
        <div className="_logo">
          <LogoWhiteIcon />
        </div>
        <Button variant="contained">
          Logout
        </Button>
      </header>

      <main>
        <div className="bg"></div>
        <div className="contentsWrap">
          <div className="progressBarWrap">
            <div className="currentBar"></div>
            <div className="subBar"></div>
          </div>

            <IconButton className="prevBtn">
              <ArrowLeftLightIcon />
            </IconButton>

            <IconButton className="nextBtn">
              <ArrowRightLightIcon />
            </IconButton>

          <div className="contents">
            <div className="textWrap">
              <p className="manufacturer">삼양</p>
              <p className="name">불닭볶음면</p>

              <div className="evaluationWrap">
                <ChillFillIcon />
                <ChillFillIcon />
                <ChillFillIcon />
                <ChillFillIcon />
                <ChillFillIcon />
              </div>
              <Button variant="contained">
                먹어본적없다
              </Button>
            </div>
            <div className="imgWrap">
              <img src="#" alt="img"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Survey;
