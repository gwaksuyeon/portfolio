import { Button } from '@material-ui/core';
import React from 'react';
import './landing.scss';

import LogoWhiteIcon from 'component/icons/logoWhite';
import ArrowRightLightIcon from 'component/icons/arrowRightLight';
import EvaluteIcon from 'component/icons/evaluate';
import StarIcon from 'component/icons/star';
import ChillIcon from 'component/icons/chill';
import LogoRedIcon from 'component/icons/logoRed';
import LandingImg from 'assets/landing/lading_img_01.png';
import LandingImg2 from 'assets/landing/landing_02.png';

const Landing = () => {
  return (
    <div id="landing-wrap">
      <header>
        <div className="_logo">
          <LogoWhiteIcon/>
        </div>
        <div className="_loginBtn">
          <Button variant="contained">
            Login
          </Button>
        </div>
      </header>

      <main>
        <section>
          <div className="contentsWrap">
            <div className="imgWrap">
              <img src={LandingImg} alt="landingImg"/>
            </div>
            <div className="textWrap">
              <p>
                당신의<br/>
                맵기를<br/>
                알아보세요<br/>
              </p>
              <Button
                variant="contained"
                endIcon={<ArrowRightLightIcon/>}
              >
                지금 알아보기
              </Button>
            </div>
          </div>
        </section>

        <section>
          <div className="contentsWrap">
            <div className="itemWrap">
              <p className="numbering">01</p>
              <EvaluteIcon />
              <p className="title">맵기평가</p>
              <p className="text">
                각 음식들에 대한 <br/> 맵기를 평가하기
              </p>
            </div>

            <div className="itemWrap">
              <p className="numbering">02</p>
              <StarIcon />
              <p className="title">등급 산출 및 음식 추천</p>
              <p className="text">
                스코빌 지수와 고객들의 평가를 통한 <br/> 
                맵기등급 결정 및 등급에 맞는 음식 추천
              </p>
            </div>

            <div className="itemWrap">
              <p className="numbering">03</p>
              <ChillIcon />
              <p className="title">즐기기</p>
              <p className="text">
                매움을 알맞게 즐기기
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="contentsWrap">
            <div className="textWrap">
              <p>
                지금<br/>
                <span className="bold">맵신</span>을<br/>
                만나보세요<br/>
              </p>
              <Button
                variant="contained"
                endIcon={<ArrowRightLightIcon/>}
              >
                지금 만나보기
              </Button>
            </div>
            <div className="imgWrap">
              <img src={LandingImg2} alt="landingImg2"/>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="_logo">
          <LogoRedIcon />
        </div>
        <p>
          Copyright 2020, GwakSuYeon, All rights reserved
        </p>
      </footer>
    </div>
  )
}

export default Landing;
