/*
 * @flow
 */

import React from 'react';

import PageSection from '../../components/layout/NewPageSection';
import { Header, SectionContent, SubHeader } from '../../components';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const INTRO_HEADER = `Built from scratch to meet
complex compliance and
security requirements
`;

const INTRO_SUB_HEADER = `We understand the difficulty of working with various regulations
and compliances, so we’re taking care of that for you.`;

const PlatformIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <SectionContent maxWidth={{ sm: 500, md: 720 }}>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
      <ContactUsPurple onClick={openBeacon}>
        Schedule a call
      </ContactUsPurple>
    </SectionContent>
  </PageSection>
);

export default PlatformIntro;
