/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { Header, PageSection, SectionContent } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const SectionContentExtraMargin = styled(SectionContent)`
  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 128px 0 200px 0;
  }
`;

const INTRO_HEADER = `We believe core societal institutions
should have modern data infrastructure
to better serve citizens
`;

const AboutIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContentExtraMargin>
      <Header>{INTRO_HEADER}</Header>
    </SectionContentExtraMargin>
  </PageSection>
);

export default AboutIntroSection;
