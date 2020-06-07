/*
 * @flow
 */

import React from 'react';

import PageSection from '../../components/layout/NewPageSection';
import {
  ContactUsPurple,
  Header,
  SectionContent,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const INTRO_HEADER = 'Technology solutions to empower public servants';

const INTRO_SUB_HEADER = 'Join dozens of jurisdictions across the United States who are using OpenLattice to better'
  + ' serve their constituents.';

const WorkingWithUsIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <SectionContent maxWidth={{ sm: 500, lg: 720 }}>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
      <ContactUsPurple onClick={openBeacon}>
        Schedule a call
      </ContactUsPurple>
    </SectionContent>
  </PageSection>
);

export default WorkingWithUsIntroSection;
