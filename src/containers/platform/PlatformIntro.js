/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageDescription, PageIntro } from '../../components/headers/PageHeaders';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { contactUsLink, TARGET } from '../../components/headers/MenuConsts';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 144px auto 208px auto;
  }
`;

const PageIntroWrapper = styled(PageIntro)`
  width: 855px;
`;

const PageDescriptionWrapper = styled(PageDescription)`
  width: 624px;
`;

const PlatformIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageIntroWrapper>
        Built from scratch to meet complex compliance and security requirements.
      </PageIntroWrapper>
      <PageDescriptionWrapper>
        {`We understand the difficulty of working with various regulations and compliances,
          so we’re taking care of that for you.`}
      </PageDescriptionWrapper>
      <ContactUsPurple
          href={contactUsLink}
          target={TARGET}>
        Schedule a call
      </ContactUsPurple>
    </Content>
  </PageSection>
);

export default PlatformIntro;
