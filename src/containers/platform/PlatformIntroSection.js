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

const INTRO_HEADER = `Built from scratch to meet
complex compliance and
security requirements
`;

const INTRO_SUB_HEADER = `We understand the difficulty of working with various regulations
and compliances, so we’re taking care of that for you.`;

const PlatformIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent maxWidth={{ sm: 500, md: 720 }}>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
      <ScheduleCallButton onClick={openBeacon} />
    </SectionContent>
  </PageSection>
);

export default PlatformIntro;
