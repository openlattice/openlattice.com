/*
 * @flow
 */

import React, { Fragment } from 'react';

import styled from 'styled-components';

import personPng from '../../assets/images/person-grp@3x.png';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';

import {
  N1,
  PP2,
  PP3,
  PP4
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin: 80px 0 100px 0;
  max-width: 100%;
  height: 530px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    max-width: 50%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 375px;
  }
`;

const ArtSectionOuterWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  height: 375px;
  justify-content: center;
  margin-top: -375px;
  min-width: 100%;
  position: relative;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    min-width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

const Badge = styled.div`
  border-radius: 2px;
  color: #fff;
  display: inline;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 10px;
  z-index: 2000;
`;

const HealthBadge = Badge.extend`
  background-color: #9359ff;
  left: calc(50% - 90px);
  position: absolute;
  top: calc(50%);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(50% - 100px);
  }
`;

const PublicSafetyBadge = Badge.extend`
  background-color: #c881ff;
  left: calc(10% + 50px);
  position: absolute;
  top: calc(50% - 50px);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(10% + 20px);
    top: calc(50% - 10px);
  }
`;

const SocialServicesBadge = Badge.extend`
  background-color: #6124e2;
  left: calc(50% - 40px);
  position: absolute;
  top: calc(20%);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(50% - 50px);
  }
`;

const PersonImg = styled.img`
  height: 375px;
  margin-left: 0;
  z-index: 1000;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-left: 400px;
  }
`;

const LeftPathWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    bottom: 50px;
    width: calc(50% + 150px);
  }
`;

const RightBottomPathWrapper = styled.div`
  bottom: 40px;
  position: absolute;
  right: 0;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: calc(50% - 200px);
  }
`;

const RightTopPathWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -20px;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: -80px;
    width: calc(50% - 250px);
  }
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
