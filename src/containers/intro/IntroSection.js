/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import AppHeader from '../../components/headers/AppHeader';
import BackgroundCarousel from './BackgroundCarousel';
import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { N0, PK0 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';

const scheduleACallLink = 'https://calendly.com/openlattice/openlattice-web-request';

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
    <AppHeader />
    <Content>
      <Title>
        Modern data infrastructure for core societal institutions
      </Title>
      <SubTitle>
        Foundational tools to better serve all citizens
      </SubTitle>
      <ScheduleLink href={scheduleACallLink} target="_blank">
        Schedule a call to learn more
      </ScheduleLink>
    </Content>
  </PageSection>
);

export default IntroSection;
