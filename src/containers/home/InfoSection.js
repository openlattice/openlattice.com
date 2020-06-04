/*
 * @flow
 */

import React from 'react';

import {
  APPLICATION_DEPLOYMENT,
  APPLICATION_DEPLOYMENT_DESCRIPTION,
  DATA_SHARING_AND_COLLABORATION,
  DATA_SHARING_AND_COLLABORATION_DESCRIPTION,
  INTELLIGENT_DATA_INTEGRATIONS,
  INTELLIGENT_DATA_INTEGRATIONS_DESCRIPTION,
} from './constants/language';
import {
  DATA_INTEGRATIONS_LINK,
  DATA_SHARING_LINK,
  INTRO_TO_OL_LINK,
} from './constants/links';

import PageSection from '../../components/layout/NewPageSection';
import {
  DBSyncCircleIcon,
  PlatformStackCircleIcon,
  Users2SolidCircleIcon,
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

const InfoSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <SectionContentGrid>
        <InfoTile>
          <DBSyncCircleIcon />
          <Header as="h3">{INTELLIGENT_DATA_INTEGRATIONS}</Header>
          <SubHeader as="h6">{INTELLIGENT_DATA_INTEGRATIONS_DESCRIPTION}</SubHeader>
          <LearnMoreExternalLink href={DATA_INTEGRATIONS_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile>
          <Users2SolidCircleIcon />
          <Header as="h3">{DATA_SHARING_AND_COLLABORATION}</Header>
          <SubHeader as="h6">{DATA_SHARING_AND_COLLABORATION_DESCRIPTION}</SubHeader>
          <LearnMoreExternalLink href={DATA_SHARING_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <InfoTile>
          <PlatformStackCircleIcon />
          <Header as="h3">{APPLICATION_DEPLOYMENT}</Header>
          <SubHeader as="h6">{APPLICATION_DEPLOYMENT_DESCRIPTION}</SubHeader>
          <LearnMoreExternalLink href={INTRO_TO_OL_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default InfoSection;
