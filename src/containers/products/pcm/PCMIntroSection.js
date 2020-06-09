/*
 * @flow
 */

import React from 'react';

import PageSection from '../../../components/layout/NewPageSection';
import {
  Header,
  SectionContent,
  SubHeader,
  ProductStamp,
} from '../../../components';
import { PCMIcon } from '../../../assets/svg/icons';
import { NEUTRALS } from '../../../core/style/Colors';

const INTRO_HEADER = `Reduce time spent on risk
assessments while
measuring their impact`;

const INTRO_SUB_HEADER = `Autofill risk assessments and focus on managing supervision and
tracking outcomes to measure effectiveness.`;

const PCMIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <SectionContent>
      <ProductStamp>
        <PCMIcon width={40} />
        <span>Pretrial Case Management</span>
      </ProductStamp>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
    </SectionContent>
  </PageSection>
);

export default PCMIntroSection;
