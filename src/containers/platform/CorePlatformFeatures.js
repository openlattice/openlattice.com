/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  CORE_PLATFORM_FEATURES_HEADER,
  CORE_PLATFORM_FEATURES_SUBHEADER,
  DATA_EXPLORATION_HEADER,
  DATA_EXPLORATION_SUBHEADER,
  DATA_INTEGRATION_HEADER,
  DATA_INTEGRATION_SUBHEADER,
  DATA_LINKING_HEADER,
  DATA_LINKING_SUBHEADER,
  DATA_STANDARDIZATION_HEADER,
  DATA_STANDARDIZATION_SUBHEADER,
  DATA_STORAGE_HEADER,
  DATA_STORAGE_SUBHEADER,
  PERMISSIONS_MANAGEMENT_HEADER,
  PERMISSIONS_MANAGEMENT_SUBHEADER,
} from './constants/language';

import PageSection from '../../components/layout/NewPageSection';
import {
  CloudSecureCircleIcon,
  DBSyncCircleIcon,
  DotGridCircleIcon,
  KeyCircleIcon,
  LinkCircleIcon,
  SearchCircleIcon,
} from '../../assets/svg/circle-icons';
import {
  Header,
  InfoTile,
  LearnMoreExternalLink,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import {
  DATA_INTEGRATIONS_LINK,
  DATA_LINKING_LINK,
  EDM_LINK,
  MANAGE_PERMISSIONS_LINK,
  PRIVACY_SECURITY_LINK,
  TOP_UTILIZERS_LINK,
} from '../../utils/constants/links';

const TileGrid = styled(SectionContentGrid)`
  grid-template-columns: repeat(auto-fit,minmax(336px,1fr));
`;

const CorePlatformFeatures = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent maxWidth={{ sm: 528 }}>
      <Header as="h2">{CORE_PLATFORM_FEATURES_HEADER}</Header>
      <SubHeader as="h5">{CORE_PLATFORM_FEATURES_SUBHEADER}</SubHeader>
    </SectionContent>
    <SectionContent>
      <TileGrid alignItems="stretch">
        <InfoTile withBorder>
          <DBSyncCircleIcon width="50" />
          <Header as="h3">{DATA_INTEGRATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_INTEGRATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={DATA_INTEGRATIONS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile withBorder>
          <LinkCircleIcon width="50" />
          <Header as="h3">{DATA_LINKING_HEADER}</Header>
          <SubHeader as="h6">{DATA_LINKING_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={DATA_LINKING_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile withBorder>
          <CloudSecureCircleIcon width="50" />
          <Header as="h3">{DATA_STORAGE_HEADER}</Header>
          <SubHeader as="h6">{DATA_STORAGE_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={PRIVACY_SECURITY_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile withBorder>
          <SearchCircleIcon width="50" />
          <Header as="h3">{DATA_EXPLORATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_EXPLORATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={TOP_UTILIZERS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile withBorder>
          <DotGridCircleIcon width="50" />
          <Header as="h3">{DATA_STANDARDIZATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_STANDARDIZATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={EDM_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile withBorder>
          <KeyCircleIcon width="50" />
          <Header as="h3">{PERMISSIONS_MANAGEMENT_HEADER}</Header>
          <SubHeader as="h6">{PERMISSIONS_MANAGEMENT_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={MANAGE_PERMISSIONS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
      </TileGrid>
    </SectionContent>
  </PageSection>
);

export default CorePlatformFeatures;
