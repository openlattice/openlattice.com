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

const INTRO_HEADER = `Get the right data
to the right people
at the right time
`;

const INTRO_SUBHEADER = `Remove data silos across agencies and
organizations to save lives, time, and money`;

const HomeIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUBHEADER}</SubHeader>
      <ScheduleCallButton onClick={openBeacon} />
    </SectionContent>
  </PageSection>
);

export default HomeIntroSection;
