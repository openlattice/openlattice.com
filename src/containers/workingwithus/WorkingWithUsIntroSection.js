/*
 * @flow
 */

import React from 'react';

import {
  Header,
  PageSection,
  ScheduleCallButton,
  SectionContent,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const INTRO_HEADER = 'Technology solutions to empower public servants';

const INTRO_SUB_HEADER = 'Join dozens of jurisdictions across the United States who are using OpenLattice to better'
  + ' serve their constituents.';

const WorkingWithUsIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent maxWidth={{ sm: 500, lg: 720 }}>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
      <ScheduleCallButton onClick={openBeacon} />
    </SectionContent>
  </PageSection>
);

export default WorkingWithUsIntroSection;
