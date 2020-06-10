/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../../components/layout/NewPageSection';
import { Header, SectionContent } from '../../../components';

const ComingSoonSectionContent = styled(SectionContent)`
  margin: 400px 0 500px 0;
`;

const PCMIntroSection = () => (
  <PageSection includeMenu>
    <ComingSoonSectionContent>
      <Header>COMING SOON</Header>
    </ComingSoonSectionContent>
  </PageSection>
);

export default PCMIntroSection;
