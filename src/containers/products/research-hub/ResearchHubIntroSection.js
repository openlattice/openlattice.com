/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { Header, PageSection, SectionContent } from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

const ComingSoonSectionContent = styled(SectionContent)`
  margin: 300px 0;
`;

const PCMIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <ComingSoonSectionContent>
      <Header>COMING SOON</Header>
    </ComingSoonSectionContent>
  </PageSection>
);

export default PCMIntroSection;
