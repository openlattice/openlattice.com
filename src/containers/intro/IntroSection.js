/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-white@3x.png';

import BackgroundCarousel from './BackgroundCarousel';
import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { N0, PK0 } from '../../core/style/Colors';
import { WINDOW_EDGE_PADDING, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin-top: ${WINDOW_EDGE_PADDING}px;
`;

const Content = styled.div`
  color: ${N0};
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    max-width: 60%;
  }
  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 210px auto 211px auto;
  }
`;

const Title = StyledSectionTitle.extend`
  color: ${N0};
  font-size: 40px;
  margin-bottom: 20px;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    text-align: center;
  }
`;

const SubTitle = StyledSectionSubTitle.extend`
  color: ${N0};
  font-size: 20px;
  margin-bottom: 60px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    text-align: center;
  }
`;

const ScheduleLink = styled.a`
  background-color: ${PK0};
  border: none;
  border-radius: 20px;
  color: ${N0};
  cursor: pointer;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  outline: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const BackgroundComponent = (
  <BackgroundCarousel interval={5000} />
);

const IntroSection = () => (
  <PageSection bgComponent={BackgroundComponent}>
    <Header>
      <img src={logoImg} alt="OpenLattice Logo" height={50} />
    </Header>
    <Content>
      <Title>Modern data infrastructure for core societal institutions</Title>
      <SubTitle>Foundational tools to better serve all citizens</SubTitle>
      <ScheduleLink href="https://calendly.com/openlattice/openlattice-website-request">
        Schedule a call to learn more
      </ScheduleLink>
    </Content>
  </PageSection>
);

export default IntroSection;
