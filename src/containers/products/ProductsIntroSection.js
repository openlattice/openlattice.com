/*
 * @flow
 */

import React from 'react';

import {
  Header,
  PageSection,
  ScheduleCallButton,
  SectionContent,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const INTRO_HEADER = `Solve modern problems
with modern solutions
`;

const INTRO_SUB_HEADER = `Use data-driven workflows to accurately and efficiently identify
problems, take necessary actions, and track outcomes.`;

const ProductsIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent maxWidth={{ sm: 480, md: 720 }}>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
      <ScheduleCallButton onClick={openBeacon} />
    </SectionContent>
  </PageSection>
);

export default ProductsIntroSection;
