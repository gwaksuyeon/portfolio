import React from 'react';
import { connect } from 'react-redux';

import { IStoreState } from 'store/state';

interface IProps {
  rank: number;
}

const RatingResultContainer = ({
  rank,
}: IProps) => {
  if (rank === 1) {
    return (
      <>
        <div className="imgWrap">
          <img src={require('assets/img/haekbuldark.png')} alt="핵불닭볶음면"/>
        </div>
        <div className="textWrap">
          <p className="title">
            당신의 맵기는<br/>
          <span className="bold">{rank}등급</span>입니다.
          </p>
          <p className="subText">모든 매운음식을 즐길 수 있어요</p>
        </div>
      </>
    )
  }
  
  if (rank === 2) {
    return (
      <>
        <div className="imgWrap">
          <img src={require('assets/img/yeobddeok.png')} alt="엽떡오리지널"/>
        </div>
        <div className="textWrap">
          <p className="title">
            당신의 맵기는<br/>
          <span className="bold">{rank}등급</span>입니다.
          </p>
          <p className="subText">가장 매운맛까지 얼마 남지않았어요</p>
        </div>
      </>
    )
  }

  if (rank === 3) {
    return (
      <>
        <div className="imgWrap">
          <img src={require('assets/img/buldark.png')} alt="불닭"/>
        </div>
        <div className="textWrap">
          <p className="title">
            당신의 맵기는<br/>
          <span className="bold">{rank}등급</span>입니다.
          </p>
          <p className="subText">매운 음식을 무난하게 즐길 수 있어요</p>
        </div>
      </>
    )
  }

  if (rank === 4) {
    return (
      <>
        <div className="imgWrap">
          <img src={require('assets/img/sinramyeon.png')} alt="신라면"/>
        </div>
        <div className="textWrap">
          <p className="title">
            당신의 맵기는<br/>
          <span className="bold">{rank}등급</span>입니다.
          </p>
          <p className="subText">맵찔이를 겨우 벗어났어요</p>
        </div>
      </>
    )
  }

  if (rank === 5) {
    return (
      <>
        <div className="imgWrap">
          <img src={require('assets/img/jinramyeon.png')} alt="진라면순한맛"/>
        </div>
        <div className="textWrap">
          <p className="title">
            당신의 맵기는<br/>
          <span className="bold">{rank}등급</span>입니다.
          </p>
          <p className="subText">진정한 맵찔이에요</p>
        </div>
      </>
    )
  }

  return null;
}

export default connect(
  (state: IStoreState) => ({
    rank: state.SurveyReducer.get('rank'),
  }),
)(RatingResultContainer);
