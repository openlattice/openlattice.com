/*
 * @flow
 */

import React from 'react';

import {
  ENSURE_DATA_QUALITY_HEADER,
  ENSURE_DATA_QUALITY_SUBHEADER,
  SAVE_TIME_HEADER,
  SAVE_TIME_SUBHEADER,
} from './constants/language';

import {
  ContentGrid,
  Header,
  InfoTile,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

const ChronicleFeaturesSection2 = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <ContentGrid align={{ v: 'start' }}>
        <InfoTile align="left">
          <Header as="h2">{ENSURE_DATA_QUALITY_HEADER}</Header>
          <SubHeader as="h5">{ENSURE_DATA_QUALITY_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <Header as="h2">{SAVE_TIME_HEADER}</Header>
          <SubHeader as="h5">{SAVE_TIME_SUBHEADER}</SubHeader>
        </InfoTile>
      </ContentGrid>
    </SectionContent>
  </PageSection>
);

export default ChronicleFeaturesSection2;
