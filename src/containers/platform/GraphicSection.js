/*
 * @flow
 */

import React from 'react';

import { DESIGNED_FOR_SECURITY_HEADER, DESIGNED_FOR_SECURITY_SUBHEADER } from './constants/language';

import { PlatformLayersGraphic } from '../../assets/svg/graphics';
import {
  ContentGrid,
  GraphicShot,
  Header,
  InfoTile,
  LearnMoreButton,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../components';
import { PRIVACY_SECURITY_LINK } from '../../utils/constants/links';

const GraphicSection = () => (
  <PageSection>
    <SectionContent>
      <ContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{DESIGNED_FOR_SECURITY_HEADER}</Header>
          <SubHeader as="h5">{DESIGNED_FOR_SECURITY_SUBHEADER}</SubHeader>
          <LearnMoreButton href={PRIVACY_SECURITY_LINK} />
        </InfoTile>
        <GraphicShot>
          <PlatformLayersGraphic />
        </GraphicShot>
      </ContentGrid>
    </SectionContent>
  </PageSection>
);

export default GraphicSection;
