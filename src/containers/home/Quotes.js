/*
 * @flow
 */

import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import RightArrow from '../../assets/svg/home/right-arrow.svg';
import LeftArrow from '../../assets/svg/home/left-arrow.svg';
import PageSection from '../../components/layout/NewPageSection';

import { DAVID_SCHWINDT, JUSTIN_LOOSE } from './QuotesConsts';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const QUOTES :Object[] = [
  DAVID_SCHWINDT,
  JUSTIN_LOOSE,
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

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 338px;
    margin: 0 10px;
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 360px;
    margin: 0 10px;
    width: 100%;
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

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 18px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 26px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  ${sharedTextStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
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

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 32px;
    margin-bottom: 24px;
    width: 32px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 20px;
    margin-bottom: 18px;
    width: 20px;
  }
`;

const Arrow = styled.img`
  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 12px;
    width: 13.5px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 8px;
    width: 9px;
  }
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
      <PageSection bgColor={NEUTRALS.GRAY_16}>
        <Content>
          <ButtonCircle onClick={this.moveBackward}>
            <Arrow src={LeftArrow} alt="" />
          </ButtonCircle>
          <QuoteWrapper>
            <Quote>{ QUOTES[currentIndex].QUOTE }</Quote>
            <div>
              <Name>{ QUOTES[currentIndex].NAME }</Name>
              <Org>{ QUOTES[currentIndex].ORG }</Org>
            </div>
          </QuoteWrapper>
          <ButtonCircle onClick={this.moveForward}>
            <Arrow src={RightArrow} alt="" />
          </ButtonCircle>
        </Content>
      </PageSection>
    );
  }
}

export default Quotes;
