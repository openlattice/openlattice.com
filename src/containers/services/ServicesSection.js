/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as Routes from '../../core/router/Routes';
import personPng from '../../assets/images/person-grp@3x.png';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';

import {
  NEUTRALS,
  PINKS,
  PURPLES,
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin: 30px 0 100px 0;
  max-width: 100%;
  height: 375px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 450px;
    max-width: 50%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 625px;
    margin: 140px 0 0 0;
  }
`;

const ArtSectionOuterWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  height: 200px;
  justify-content: center;
  margin-top: -200px;
  min-width: 100%;
  position: relative;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 300px;
    margin-top: -300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 375px;
    margin-top: -375px;
    min-width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

const PersonImg = styled.img`
  height: 200px;
  margin-left: 0;
  z-index: 1000;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 375px;
    margin-left: 400px;
  }
`;

const Badge = styled.div`
  border-radius: 2px;
  color: ${NEUTRALS.GRAY_01};
  display: inline;
  font-size: 12px;
  line-height: 17px;
  font-weight: bold;
  padding: 5px 8px;
  z-index: 2000;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 14px;
    line-height: 19px;
    padding: 6px 10px;
  }
`;

/*
 * Health svg & badge
 */

const HealthWrapper = styled.div`
  bottom: 10px;
  left: 0;
  position: absolute;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    bottom: 20px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    bottom: 50px;
    width: calc(50% + 150px);
  }
`;

const HealthSvg = styled.svg`
  height: 110px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 242px;
  }
`;

const HealthBadge = styled(Badge)`
  background-color: #9359ff;
  left: calc(30% - 20px);
  position: absolute;
  top: calc(46%);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(50% - 90px);
    top: calc(50%);
  }
`;

/*
 * Public Safety svg & badge
 */

const PublicSafetyWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -30px;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: -80px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: -80px;
    width: calc(50% - 250px);
  }
`;

const PublicSafetySvg = styled.svg`
  height: 133px;
`;

const PublicSafetyBadge = styled(Badge)`
  background-color: #c881ff;
  left: calc(30%);
  position: absolute;
  top: calc(10%);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(40%);
  }
`;

/*
 * Social Services svg & badge
 */

const SocialServicesWrapper = styled.div`
  bottom: 16px;
  position: absolute;
  right: 0;
  width: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    bottom: 20px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    bottom: 30px;
    width: calc(50% - 200px);
  }
`;

const SocialServicesSvg = styled.svg`
  height: 60px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 70px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 88px;
  }
`;

const SocialServicesBadge = styled(Badge)`
  background-color: #6124e2;
  left: calc(26%);
  position: absolute;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: calc(40%);
    top: calc(30%);
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    left: calc(50%);
  }
`;

/* eslint-disable max-len */

const Health = () => (
  <HealthWrapper>
    <HealthBadge>
      Healthcare
    </HealthBadge>
    <HealthSvg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        viewBox="0 0 786 242">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PURPLES.PP04}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          d="M-152.38 33.147C-63.027-1.367 26.603-8.061 116.51 13.065 251.37 44.753 386.15 176.098 511.266 217.168c83.41 27.38 174.656 31.08 273.735 11.1" />
    </HealthSvg>
  </HealthWrapper>
);

/* eslint-enable */

const PublicSafety = () => (
  <PublicSafetyWrapper>
    <PublicSafetyBadge>
      Public Safety
    </PublicSafetyBadge>
    <PublicSafetySvg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        viewBox="0 0 426 133">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PURPLES.PP03}
          strokeWidth="2"
          d="M1 131.9C8.696 128.555 190.364-17.495 474.106 3.544" />
    </PublicSafetySvg>
  </PublicSafetyWrapper>
);

const SocialServices = () => (
  <SocialServicesWrapper>
    <SocialServicesBadge>
      Social Services
    </SocialServicesBadge>
    <SocialServicesSvg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        width="100%"
        viewBox="0 0 455 88">
      <path
          fill="none"
          fillRule="evenodd"
          stroke={PURPLES.PP05}
          strokeWidth="2"
          d="M958.576-81.579C904.796 5.88 787.47 61.375 606.6 84.908 335.295 120.207 237.057-21.178 1 4.346" />
    </SocialServicesSvg>
  </SocialServicesWrapper>
);

const ProductsLink = styled(Link)`
  background-color: ${PINKS.PINK01};
  border: none;
  border-radius: 20px;
  color: ${NEUTRALS.WHITE};
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: semi-bold;
  line-height: 20px;
  margin-top: 10px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  z-index: 3000;
`;

const ServicesSection = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_01}>
      <Content>
        <StyledSectionTitle>
          Understand how services are delivered and consumed
        </StyledSectionTitle>
        <StyledSectionSubTitle>
          {
            `Leverage data across public safety, healthcare systems, and social services to streamline operations,
            test interventions, and improve human outcomes.`
          }
        </StyledSectionSubTitle>
        <ProductsLink to={Routes.PRODUCTS}>
          Learn more about our products
        </ProductsLink>
      </Content>
    </PageSection>
    <ArtSectionOuterWrapper>
      <PersonImg src={personPng} />
      <Health />
      <PublicSafety />
      <SocialServices />
    </ArtSectionOuterWrapper>
  </>
);

// $FlowFixMe
export default withRouter(ServicesSection);
