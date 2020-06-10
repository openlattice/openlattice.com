/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  AUTOFILL_HEADER,
  AUTOFILL_SUBHEADER,
  MANAGE_RISK_HEADER,
  MANAGE_RISK_SUBHEADER,
  MANAGE_SUPERVISION_HEADER,
  MANAGE_SUPERVISION_SUBHEADER,
  SUPERVISION_TOUCHPOINTS_HEADER,
  SUPERVISION_TOUCHPOINTS_SUBHEADER,
  TRACK_OUTCOMES_HEADER,
  TRACK_OUTCOMES_SUBHEADER,
} from './constants/language';

import PageSection from '../../../components/layout/NewPageSection';
import {
  PCMFeatureShot1,
  PCMFeatureShot2,
} from '../../../assets/images/pcm';
import {
  CheckBoardCircleIcon,
  GavelCircleIcon,
  MergeArrowCircleIcon,
} from '../../../assets/svg/circle-icons';
import {
  GraphicShot,
  Header,
  InfoTile,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../../components';
import { MEDIA_QUERY_LG } from '../../../core/style/Sizes';

const FeaturesSectionContent = styled(SectionContent)`
  margin-top: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 450px
  }
`;

const PCMFeaturesSection = () => (
  <PageSection>
    <FeaturesSectionContent>
      <SectionContentGrid>
        <InfoTile align="left">
          <MergeArrowCircleIcon />
          <Header as="h3">{AUTOFILL_HEADER}</Header>
          <SubHeader as="h6">{AUTOFILL_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <GavelCircleIcon />
          <Header as="h3">{TRACK_OUTCOMES_HEADER}</Header>
          <SubHeader as="h6">{TRACK_OUTCOMES_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <CheckBoardCircleIcon />
          <Header as="h3">{MANAGE_SUPERVISION_HEADER}</Header>
          <SubHeader as="h6">{MANAGE_SUPERVISION_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </FeaturesSectionContent>
    <SectionContent>
      <SectionContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{MANAGE_RISK_HEADER}</Header>
          <SubHeader as="h5">{MANAGE_RISK_SUBHEADER}</SubHeader>
        </InfoTile>
        <GraphicShot withBorder>
          <PCMFeatureShot1 />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
    <SectionContent>
      <SectionContentGrid align="center" reverseOrderOnMobile>
        <GraphicShot withBorder>
          <PCMFeatureShot2 />
        </GraphicShot>
        <InfoTile align="left">
          <Header as="h2">{SUPERVISION_TOUCHPOINTS_HEADER}</Header>
          <SubHeader as="h5">{SUPERVISION_TOUCHPOINTS_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default PCMFeaturesSection;
