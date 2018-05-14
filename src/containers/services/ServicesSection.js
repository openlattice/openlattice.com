/*
 * @flow
 */

import React, { Fragment } from 'react';

import styled from 'styled-components';

import personPng from '../../assets/images/person-grp@3x.png';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH } from '../../core/style/Sizes';

import {
  N1,
  PP2,
  PP3,
  PP4
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin-bottom: 150px;
  margin-top: 150px;
  max-width: 100%;

  @media only screen and (min-width: 1020px) {
    margin-bottom: 350px;
    margin-top: 150px;
    max-width: 50%;
  }
`;

const ArtSectionOuterWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 1020px) {
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    height: 375px;
    justify-content: center;
    margin-top: -375px;
    min-width: ${PAGE_SECTION_MIN_WIDTH}px;
    position: relative;
  }
`;

const Badge = styled.div`
  border-radius: 2px;
  color: #fff;
  display: inline;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 10px;
`;

const HealthBadge = Badge.extend`
  background-color: #9359ff;
  left: calc(50% - 100px);
  position: absolute;
  top: calc(50%);
`;

const PublicSafetyBadge = Badge.extend`
  background-color: #c881ff;
  left: calc(10% + 20px);
  position: absolute;
  top: calc(50% - 10px);
`;

const SocialServicesBadge = Badge.extend`
  background-color: #6124e2;
  left: calc(50% - 50px);
  position: absolute;
  top: calc(20%);
`;

const PersonImg = styled.img`
  height: 375px;
  margin-left: 400px;
  z-index: 1000;
`;

const LeftPathWrapper = styled.div`
  bottom: 50px;
  left: 0;
  position: absolute;
  width: calc(50% + 150px);
`;

const RightBottomPathWrapper = styled.div`
  bottom: 40px;
  position: absolute;
  right: 0;
  width: calc(50% - 200px);
`;

const RightTopPathWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -80px;
  width: calc(50% - 250px);
`;

/* eslint-disable max-len */

const LeftPath = () => (
  <LeftPathWrapper>
    <HealthBadge>HEALTHCARE</HealthBadge>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        height="242"
        width="100%"
        viewBox="0 0 786 242">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PP3}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          d="M-152.38 33.147C-63.027-1.367 26.603-8.061 116.51 13.065 251.37 44.753 386.15 176.098 511.266 217.168c83.41 27.38 174.656 31.08 273.735 11.1" />
    </svg>
  </LeftPathWrapper>
);

/* eslint-enable */

const RightBottomPath = () => (
  <RightBottomPathWrapper>
    <SocialServicesBadge>SOCIAL SERVICES</SocialServicesBadge>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        height="88"
        viewBox="0 0 455 88">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PP4}
          strokeWidth="2"
          d="M958.576-81.579C904.796 5.88 787.47 61.375 606.6 84.908 335.295 120.207 237.057-21.178 1 4.346" />
    </svg>
  </RightBottomPathWrapper>
);

const RightTopPath = () => (
  <RightTopPathWrapper>
    <PublicSafetyBadge>PUBLIC SAFETY</PublicSafetyBadge>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        height="133"
        width="100%"
        viewBox="0 0 426 133">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PP2}
          strokeWidth="2"
          d="M1 131.9C8.696 128.555 190.364-17.495 474.106 3.544" />
    </svg>
  </RightTopPathWrapper>
);

const IntroSection = () => (
  <Fragment>
    <PageSection bgColor={N1}>
      <Content>
        <StyledSectionTitle>Understand how services are delivered and consumed</StyledSectionTitle>
        <StyledSectionSubTitle>
          {
            `Leverage data across public safety, healthcare systems, and social services to streamline operations,
            test interventions, and improve human outcomes.`
          }
        </StyledSectionSubTitle>
      </Content>
    </PageSection>
    <ArtSectionOuterWrapper>
      <PersonImg src={personPng} />
      <LeftPath />
      <RightBottomPath />
      <RightTopPath />
    </ArtSectionOuterWrapper>
  </Fragment>
);

export default IntroSection;
