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
  DBSyncCircleIcon,
  PlatformStackCircleIcon,
  Users2SolidCircleIcon,
} from '../../assets/svg/circle-icons';
import {
  ContentGrid,
  Header,
  InfoTile,
  LearnMoreButton,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../components';
import {
  DATA_INTEGRATIONS_LINK,
  DATA_SHARING_LINK,
  INTRO_TO_OL_LINK,
} from '../../utils/constants/links';

const InfoSection = () => (
  <PageSection>
    <SectionContent>
      <ContentGrid>
        <InfoTile>
          <DBSyncCircleIcon />
          <Header as="h3">{INTELLIGENT_DATA_INTEGRATIONS}</Header>
          <SubHeader as="h6">{INTELLIGENT_DATA_INTEGRATIONS_DESCRIPTION}</SubHeader>
          <LearnMoreButton href={DATA_INTEGRATIONS_LINK} />
        </InfoTile>
        <InfoTile>
          <Users2SolidCircleIcon />
          <Header as="h3">{DATA_SHARING_AND_COLLABORATION}</Header>
          <SubHeader as="h6">{DATA_SHARING_AND_COLLABORATION_DESCRIPTION}</SubHeader>
          <LearnMoreButton href={DATA_SHARING_LINK} />
        </InfoTile>
        <InfoTile>
          <PlatformStackCircleIcon />
          <Header as="h3">{APPLICATION_DEPLOYMENT}</Header>
          <SubHeader as="h6">{APPLICATION_DEPLOYMENT_DESCRIPTION}</SubHeader>
          <LearnMoreButton href={INTRO_TO_OL_LINK} />
        </InfoTile>
      </ContentGrid>
    </SectionContent>
  </PageSection>
);

export default InfoSection;
