/*
 * @flow
 */

import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

import RightArrow from '../../assets/svg/home/right-arrow.svg';
import LeftArrow from '../../assets/svg/home/left-arrow.svg';
import PageSection from '../../components/layout/NewPageSection';

import { DAVID_SCHWINDT, RANDOM, RANDOM_2 } from './QuotesConsts';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';

const QUOTES :Object[] = [
  DAVID_SCHWINDT,
  RANDOM,
  RANDOM_2,
];

const Content = styled.div`
  align-items: center;
  display: flex;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 122px auto 108px auto;
  }
`;

const QuoteWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 48px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 374px;
    width: 912px;
  }
`;

const sharedTextStyles = css`
  color: ${NEUTRALS.WHITE};
  line-height: 150%;
`;

const Quote = styled.div`
  font-size: 32px;
  margin-bottom: 80px;
  ${sharedTextStyles}
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  ${sharedTextStyles}
`;

const Org = styled(Name)`
  font-weight: normal;
`;

const ButtonCircle = styled.div`
  align-items: center;
  background-color: ${NEUTRALS.WHITE};
  border-radius: 50%;
  display: flex;
  height: 48px;
  justify-content: center;
  margin-bottom: 36px;
  width: 48px;

  &:hover {
    cursor: pointer;
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

const slideLeftAnimation = keyframes`
  slide {
    100% { left: 0; }
  }
`;

const FadeInWrapper = styled.div`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 374px;
    width: 912px;
  }
`;

const FadeInInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;
  position: relative;
`;

const Mask = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const FadeIn = styled.div`
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-name: slide;
  animation-direction: reverse;
  animation-timing-function: ease-in;
  position: absolute;
  /* animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: ${fadeInAnimation};
  animation-timing-function: ease-in; */
  /* display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}; */
  display: block;
  /* height: 912px; */
  /* position: absolute; */
  width: 912px;
  /* top: 122px; */
  /* left: 344px;
  right: 344px; */
`;

type Props = {};

type State = {
  currentIndex :number;
};

class Quotes extends Component<Props, State> {

  constructor(props :Props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };
  }

  moveForward = () => {
    const { currentIndex } = this.state;
    const nextIndex :number = currentIndex + 1;
    if (nextIndex < QUOTES.length) {
      this.setState({ currentIndex: nextIndex });
    }
    if (nextIndex === QUOTES.length) {
      this.setState({ currentIndex: 0 });
    }
  }

  moveBackward = () => {
    const { currentIndex } = this.state;
    const previousIndex :number = currentIndex - 1;
    if (previousIndex > -1) {
      this.setState({ currentIndex: previousIndex });
    }
    if (previousIndex === -1) {
      this.setState({ currentIndex: QUOTES.length - 1 });
    }
  }

  render() {
    const { currentIndex } = this.state;
    return (
      <PageSection bgColor={NEUTRALS.GRAY_15}>
        <Content>
          <ButtonCircle onClick={this.moveBackward}>
            <img src={LeftArrow} alt="" />
          </ButtonCircle>
          <QuoteWrapper>
            <Quote>{ QUOTES[currentIndex].QUOTE }</Quote>
            <div>
              <Name>{ QUOTES[currentIndex].NAME }</Name>
              <Org>{ QUOTES[currentIndex].ORG }</Org>
            </div>
          </QuoteWrapper>
          <ButtonCircle onClick={this.moveForward}>
            <img src={RightArrow} alt="" />
          </ButtonCircle>
        </Content>
      </PageSection>
    );
  }
}

export default Quotes;
