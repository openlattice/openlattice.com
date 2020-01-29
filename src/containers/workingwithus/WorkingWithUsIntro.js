/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { contactUsLink, TARGET } from '../../components/headers/MenuConsts';

const PageIntroWrapper = styled(PageIntro)`
  width: 816px;
`;

const WorkingWithUsIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageIntroWrapper>
        Technology solutions to empower public servants.
      </PageIntroWrapper>
      <PageDescriptionWrapper>
        {`Our solutions help organizations use technology to drive positive change in tackling recidivism,
          homelessness, mass incarceration, and other key societal welfare issues.`}
      </PageDescriptionWrapper>
      <ContactUsPurple
          href={contactUsLink}
          target={TARGET}>
        Schedule a call
      </ContactUsPurple>
    </Content>
  </PageSection>
);

export default WorkingWithUsIntro;
