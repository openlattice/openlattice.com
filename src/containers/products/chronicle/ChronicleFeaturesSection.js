/*
 * @flow
 */

import React from 'react';

import {
  ANALYZE_COLLABORATE_HEADER,
  ANALYZE_COLLABORATE_SUBHEADER,
  INTEGRATE_AND_SHARE_DATA_HEADER,
  INTEGRATE_AND_SHARE_DATA_SUBHEADER,
  INTEGRATE_DATA_HEADER,
  INTEGRATE_DATA_SUBHEADER,
  MANAGE_PARTICIPANTS_HEADER,
  MANAGE_PARTICIPANTS_SUBHEADER,
  REVIEW_STUDY_DATA_HEADER,
  REVIEW_STUDY_DATA_SUBHEADER,
  STREAMLINE_HEADER,
  STREAMLINE_SUBHEADER,
} from './constants/language';

import PageSection from '../../../components/layout/NewPageSection';
import { ChronicleFeatureShot1, ChronicleFeatureShot2, ChronicleFeatureShot3 } from '../../../assets/images/chronicle';
import { BarsCircleIcon, MergeArrowCircleIcon, UserCircleIcon } from '../../../assets/svg/circle-icons';
import {
  GraphicShot,
  Header,
  InfoTile,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../../components';
import { ProductFeaturesSectionContent } from '../components';

const ChronicleFeaturesSection = () => (
  <PageSection>
    <ProductFeaturesSectionContent>
      <SectionContentGrid>
        <InfoTile align="left">
          <UserCircleIcon />
          <Header as="h3">{MANAGE_PARTICIPANTS_HEADER}</Header>
          <SubHeader as="h6">{MANAGE_PARTICIPANTS_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <MergeArrowCircleIcon />
          <Header as="h3">{INTEGRATE_DATA_HEADER}</Header>
          <SubHeader as="h6">{INTEGRATE_DATA_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <BarsCircleIcon />
          <Header as="h3">{ANALYZE_COLLABORATE_HEADER}</Header>
          <SubHeader as="h6">{ANALYZE_COLLABORATE_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </ProductFeaturesSectionContent>
    <SectionContent>
      <SectionContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{STREAMLINE_HEADER}</Header>
          <SubHeader as="h5">{STREAMLINE_SUBHEADER}</SubHeader>
        </InfoTile>
        <GraphicShot withBorder>
          <ChronicleFeatureShot1 />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
    <SectionContent>
      <SectionContentGrid align="center" reverseOrderOnMobile>
        <GraphicShot withBorder>
          <ChronicleFeatureShot2 />
        </GraphicShot>
        <InfoTile align="left">
          <Header as="h2">{REVIEW_STUDY_DATA_HEADER}</Header>
          <SubHeader as="h5">{REVIEW_STUDY_DATA_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </SectionContent>
    <SectionContent>
      <SectionContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{INTEGRATE_AND_SHARE_DATA_HEADER}</Header>
          <SubHeader as="h5">{INTEGRATE_AND_SHARE_DATA_SUBHEADER}</SubHeader>
        </InfoTile>
        <GraphicShot withBorder>
          <ChronicleFeatureShot3 />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default ChronicleFeaturesSection;
