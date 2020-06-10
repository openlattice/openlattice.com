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

import PageSection from '../../../components/layout/NewPageSection';
import {
  Header,
  InfoTile,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

const ChronicleFeaturesSection2 = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <SectionContentGrid>
        <InfoTile align="left">
          <Header as="h2">{ENSURE_DATA_QUALITY_HEADER}</Header>
          <SubHeader as="h5">{ENSURE_DATA_QUALITY_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <Header as="h2">{SAVE_TIME_HEADER}</Header>
          <SubHeader as="h5">{SAVE_TIME_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default ChronicleFeaturesSection2;
