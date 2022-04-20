/*
 * @flow
 */

import React from 'react';

import {
  Header,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../components';

const MISSION_STATEMENT = 'We set out to build a secure, scalable cloud-based data platform that empowers civil'
  + ' servants, researchers, and policy-makers to work together on society\'s toughest challenges. Our solutions'
  + ' help organizations use technology to drive positive change in tackling recidivism, homelessness, mass'
  + ' incarceration, and other key societal welfare issues.';

const MissionSection = () => (
  <PageSection>
    <SectionContent maxWidth={{ sm: 528, md: 720 }}>
      <Header as="h2">Our mission</Header>
      <SubHeader align="left" as="h5">{MISSION_STATEMENT}</SubHeader>
    </SectionContent>
  </PageSection>
);

export default MissionSection;
