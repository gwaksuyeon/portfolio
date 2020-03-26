import React from 'react';
import './result.scss';

import LogoutBtnContainer from 'container/result/LogoutBtn';
import RatingResultContainer from 'container/result/RatingResult';
import ResurveyBtnContainer from 'container/result/ResurveyBtn';
import RankFilterContainer from 'container/result/RankFilter';
import ListContainer from 'container/result/List';

import LogoWhiteIcon from 'component/icons/logoWhite';

const Result = () => {
  return (
    <div id="result-wrap">
      <header>
        <div className="_logo">
          <LogoWhiteIcon />
        </div>
        <LogoutBtnContainer />
      </header>

      <main>
        <div className="ratingResultWrap">
          <RatingResultContainer />
        </div>

        <div className="filterWrap">
          <RankFilterContainer />
          <ResurveyBtnContainer />
        </div>

        <div className="contentWrap">
          <ListContainer />
        </div>
      </main>
    </div>
  )
}

export default Result;
