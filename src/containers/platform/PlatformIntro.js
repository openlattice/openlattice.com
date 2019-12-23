/*
 * @flow
 */

import React from 'react';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro, PageTitle } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import { ScheduleACallPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { scheduleACallLink, TARGET } from '../../components/headers/MenuConsts';

const PlatformIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageTitle>Platform</PageTitle>
      <PageIntro>
        Built from scratch to meet industry requirements.
      </PageIntro>
      <PageDescriptionWrapper>
        {`We understand the difficulty of working with various regulations and compliances,
          so we’re taking care of that for you.`}
      </PageDescriptionWrapper>
      <ScheduleACallPurple
          href={scheduleACallLink}
          target={TARGET}>
        Schedule a call
      </ScheduleACallPurple>
    </Content>
  </PageSection>
);

export default PlatformIntro;
