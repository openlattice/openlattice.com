/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../../components/layout/NewPageSection';
import { PCMProductShot } from '../../../assets/images/pcm';
import { PCMIcon } from '../../../assets/svg/icons';
import {
  Header,
  ProductStamp,
  SectionContent,
  SubHeader,
} from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../../core/style/Sizes';

const INTRO_HEADER = `Reduce time spent on risk
assessments while
measuring their impact`;

const INTRO_SUB_HEADER = `Autofill risk assessments and focus on managing supervision and
tracking outcomes to measure effectiveness.`;

const IntroSectionContent = styled(SectionContent)`
  margin: 64px auto 32px auto;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin: 64px auto 64px auto;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 64px auto 100px auto;
  }
`;

const ProductShot = styled.div`
  align-self: center;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
  z-index: 100;

  > img {
    border-radius: 2px;
    border: 1px solid ${NEUTRALS.GRAY_09};
    box-shadow: 0 10px 30px rgba(48, 47, 57, 0.05);
    margin-bottom: -30%;
    width: 100%;
  }
`;

const PCMIntroSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <IntroSectionContent>
      <ProductStamp>
        <PCMIcon width={40} />
        <span>Pretrial Case Management</span>
      </ProductStamp>
      <Header>{INTRO_HEADER}</Header>
      <SubHeader>{INTRO_SUB_HEADER}</SubHeader>
    </IntroSectionContent>
    <ProductShot>
      <PCMProductShot />
    </ProductShot>
  </PageSection>
);

export default PCMIntroSection;
