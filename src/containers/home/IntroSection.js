/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageDescription, PageIntro } from '../../components/headers/PageHeaders';
import { ScheduleACallPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { scheduleACallLink, TARGET } from '../../components/headers/MenuConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 109px auto 363px auto;
  }
`;

const PageIntroWrapper = styled(PageIntro)`
  width: 720px;
`;

const PageDescriptionWrapper = styled(PageDescription)`
  width: 624px;
`;

const IntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageIntroWrapper>
        Foundational tools to better serve all citizens.
      </PageIntroWrapper>
      <PageDescriptionWrapper>
        {`Modern data infrastructure that removes data silos across agencies and
          organizations, saving lives, money, and time.`}
      </PageDescriptionWrapper>
      <ScheduleACallPurple
          href={scheduleACallLink}
          target={TARGET}>
        Schedule a call
      </ScheduleACallPurple>
    </Content>
  </PageSection>
);

export default IntroSection;
