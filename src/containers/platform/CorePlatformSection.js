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
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import {
  DATA_INTEGRATIONS_LINK,
  DATA_LINKING_LINK,
  EDM_LINK,
  MANAGE_PERMISSIONS_LINK,
  PRIVACY_SECURITY_LINK,
  TOP_UTILIZERS_LINK,
} from '../../utils/constants/links';

// NOTE: the 328px value her is very carfully chosen and is tightly coupled with the media query below in Tile
const TileGrid = styled(SectionContentGrid)`
  align-items: stretch;

  > div {
    max-width: 384px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit,minmax(328px,1fr));
  }
`;

const Tile = styled(InfoTile)`
  justify-content: space-between;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    &:nth-child(even) {
      margin: 0 auto 0 0;
    }

    &:nth-child(odd) {
      margin: 0 0 0 auto;
    }
  }
`;

const CorePlatformSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent maxWidth={{ sm: 528 }}>
      <Header as="h2">{CORE_PLATFORM_FEATURES_HEADER}</Header>
      <SubHeader as="h5">{CORE_PLATFORM_FEATURES_SUBHEADER}</SubHeader>
    </SectionContent>
    <SectionContent>
      <TileGrid>
        <Tile withBorder>
          <DBSyncCircleIcon width="50" />
          <Header as="h3">{DATA_INTEGRATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_INTEGRATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={DATA_INTEGRATIONS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
        <Tile withBorder>
          <LinkCircleIcon width="50" />
          <Header as="h3">{DATA_LINKING_HEADER}</Header>
          <SubHeader as="h6">{DATA_LINKING_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={DATA_LINKING_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
        <Tile withBorder>
          <CloudSecureCircleIcon width="50" />
          <Header as="h3">{DATA_STORAGE_HEADER}</Header>
          <SubHeader as="h6">{DATA_STORAGE_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={PRIVACY_SECURITY_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
        <Tile withBorder>
          <SearchCircleIcon width="50" />
          <Header as="h3">{DATA_EXPLORATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_EXPLORATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={TOP_UTILIZERS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
        <Tile withBorder>
          <DotGridCircleIcon width="50" />
          <Header as="h3">{DATA_STANDARDIZATION_HEADER}</Header>
          <SubHeader as="h6">{DATA_STANDARDIZATION_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={EDM_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
        <Tile withBorder>
          <KeyCircleIcon width="50" />
          <Header as="h3">{PERMISSIONS_MANAGEMENT_HEADER}</Header>
          <SubHeader as="h6">{PERMISSIONS_MANAGEMENT_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={MANAGE_PERMISSIONS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </Tile>
      </TileGrid>
    </SectionContent>
  </PageSection>
);

export default CorePlatformSection;
