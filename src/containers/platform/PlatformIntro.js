/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageDescription, PageIntro, PageTitle } from '../../components/headers/PageHeaders';
import { ScheduleACallPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { scheduleACallLink, TARGET } from '../../components/headers/MenuConsts';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 156px auto 168px auto;
  }
`;

const PageDescriptionWrapper = styled(PageDescription)`
  width: 624px;
`;

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
