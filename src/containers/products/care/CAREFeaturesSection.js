/*
 * @flow
 */

import React from 'react';

import { ProductFeaturesSectionContent } from '../components';

import {
  COLLABORATIVE_WORKFLOWS_HEADER,
  COLLABORATIVE_WORKFLOWS_SUBHEADER,
  DATA_COLLECTION_HEADER,
  DATA_COLLECTION_SUBHEADER,
  DISPATCH_INTEGRATION_HEADER,
  DISPATCH_INTEGRATION_SUBHEADER,
  REAL_TIME_DATA_HEADER,
  REAL_TIME_DATA_SUBHEADER,
  RESPONSE_INTERACTION_PLANS_HEADER,
  RESPONSE_INTERACTION_PLANS_SUBHEADER,
} from './constants/language';

import PageSection from '../../../components/layout/NewPageSection';
import { CAREFeatureShot1, CAREFeatureShot2 } from '../../../assets/images/care';
import { CheckBoardCircleIcon, GavelCircleIcon, MergeArrowCircleIcon } from '../../../assets/svg/circle-icons';
import {
  GraphicShot,
  Header,
  InfoTile,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../../components';

const CAREIntroSection = () => (
  <PageSection>
    <ProductFeaturesSectionContent>
      <SectionContentGrid>
        <InfoTile align="left">
          <MergeArrowCircleIcon />
          <Header as="h3">{DISPATCH_INTEGRATION_HEADER}</Header>
          <SubHeader as="h6">{DISPATCH_INTEGRATION_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <GavelCircleIcon />
          <Header as="h3">{COLLABORATIVE_WORKFLOWS_HEADER}</Header>
          <SubHeader as="h6">{COLLABORATIVE_WORKFLOWS_SUBHEADER}</SubHeader>
        </InfoTile>
        <InfoTile align="left">
          <CheckBoardCircleIcon />
          <Header as="h3">{RESPONSE_INTERACTION_PLANS_HEADER}</Header>
          <SubHeader as="h6">{RESPONSE_INTERACTION_PLANS_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </ProductFeaturesSectionContent>
    <SectionContent>
      <SectionContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{DATA_COLLECTION_HEADER}</Header>
          <SubHeader as="h5">{DATA_COLLECTION_SUBHEADER}</SubHeader>
        </InfoTile>
        <GraphicShot withBorder>
          <CAREFeatureShot1 />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
    <SectionContent>
      <SectionContentGrid align="center" reverseOrderOnMobile>
        <GraphicShot withBorder>
          <CAREFeatureShot2 />
        </GraphicShot>
        <InfoTile align="left">
          <Header as="h2">{REAL_TIME_DATA_HEADER}</Header>
          <SubHeader as="h5">{REAL_TIME_DATA_SUBHEADER}</SubHeader>
        </InfoTile>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default CAREIntroSection;
