/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro, PageTitle } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { contactUsLink, TARGET } from '../../components/headers/MenuConsts';

const PageIntroWrapper = styled(PageIntro)`
  width: 624px;
`;

const WorkingWithUsIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageTitle>Working with us</PageTitle>
      <PageIntroWrapper>
        Tackle problems with the right tools.
      </PageIntroWrapper>
      <PageDescriptionWrapper>
        {`Placeholder - Integrate and utilize siloed data across agencies and
          organizations to save money, time, and lives.`}
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
