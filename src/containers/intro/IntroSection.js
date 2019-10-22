/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo-white.png';

import BackgroundCarousel from './BackgroundCarousel';
import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { N0, PK0 } from '../../core/style/Colors';
import { WINDOW_EDGE_PADDING, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';
import * as Routes from '../../core/router/Routes';

const helpLink = 'https://help.openlattice.com';
const scheduleACallLink = 'https://calendly.com/openlattice/openlattice-web-request';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  margin-top: ${WINDOW_EDGE_PADDING}px;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const MenuInternalLink = styled(Link)`
  color: ${N0};
  margin-left: 30px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  color: ${N0};
  margin-left: 30px;
  text-decoration: none;
`;

const Content = styled.div`
  color: ${N0};
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 210px auto 211px auto;
  }
`;

const Title = styled(StyledSectionTitle)`
  color: ${N0};
  margin-bottom: 20px;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 40px;
    text-align: center;
  }
`;

const SubTitle = styled(StyledSectionSubTitle)`
  color: ${N0};
  font-size: 15px;
  line-height: 27px;
  margin-bottom: 60px;
  text-align: left;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 20px;
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
  font-weight: semi-bold;
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
      <Menu>
        <MenuInternalLink to={Routes.PRODUCTS}>Products</MenuInternalLink>
        <MenuExternalLink href={helpLink}>Help</MenuExternalLink>
      </Menu>
    </Header>
    <Content>
      <Title>
        Modern data infrastructure for core societal institutions
      </Title>
      <SubTitle>
        Foundational tools to better serve all citizens
      </SubTitle>
      <ScheduleLink href={scheduleACallLink}>
        Schedule a call to learn more
      </ScheduleLink>
    </Content>
  </PageSection>
);

export default IntroSection;
