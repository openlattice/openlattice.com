/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import { Header, SectionContent, SubHeader } from '../../components';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const StyledSubHeader = styled(SubHeader)`
  max-width: 500px;
`;

const INTRO_HEADER = `Get the right data
to the right people
at the right time
`;

const IntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <SectionContent>
      <Header>{INTRO_HEADER}</Header>
      <StyledSubHeader>
        Remove data silos across agencies and organizations to save lives, time, and money
      </StyledSubHeader>
      <ContactUsPurple onClick={openBeacon}>
        Schedule a call
      </ContactUsPurple>
    </SectionContent>
  </PageSection>
);

export default IntroSection;
