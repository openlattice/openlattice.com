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

const MISSION_STATEMENT = 'Our mission is to work with core societal institutions to improve human outcomes.';

const MissionSection = () => (
  <PageSection>
    <SectionContent maxWidth={{ sm: 528, md: 720 }}>
      <Header as="h2">Our mission</Header>
      <SubHeader align="left" as="h5">{MISSION_STATEMENT}</SubHeader>
    </SectionContent>
  </PageSection>
);

export default MissionSection;
