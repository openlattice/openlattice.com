/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-white@3x.png';
import splashImg1 from '../../assets/images/splash_01.jpg';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { BTN_BG_COLOR_1, WINDOW_EDGE_PADDING } from '../../core/style/Constants';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin-top: ${WINDOW_EDGE_PADDING}px;
`;

const Content = styled.div`
  color: #fff;
  display: block;
  margin-bottom: 150px;
  margin-left: 80px;
  margin-top: 100px;
  max-width: 550px;
`;

const Title = StyledSectionTitle.extend`
  color: #fff;
  font-size: 40px;
`;

const SubTitle = StyledSectionSubTitle.extend`
  color: #fff;
  font-size: 20px;
  margin-bottom: 50px;
`;

const ScheduleLink = styled.a`
  background-color: ${BTN_BG_COLOR_1};
  border: none;
  border-radius: 20px;
  color: #fff;
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


const IntroSection = () => (
  <PageSection bgImage={splashImg1}>
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
