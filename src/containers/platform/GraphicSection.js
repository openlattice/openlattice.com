/*
 * @flow
 */

import React from 'react';

import { DESIGNED_FOR_SECURITY_HEADER, DESIGNED_FOR_SECURITY_SUBHEADER } from './constants/language';

import PageSection from '../../components/layout/NewPageSection';
import { PlatformLayersGraphic } from '../../assets/svg/graphics';
import {
  GraphicShot,
  Header,
  InfoTile,
  LearnMoreExternalLink,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { PRIVACY_SECURITY_LINK } from '../../utils/constants/links';

const GraphicSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <SectionContentGrid alignItems="center">
        <InfoTile align="left">
          <Header as="h2">{DESIGNED_FOR_SECURITY_HEADER}</Header>
          <SubHeader as="h5">{DESIGNED_FOR_SECURITY_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={PRIVACY_SECURITY_LINK} target="_blank">Learn more</LearnMoreExternalLink>
        </InfoTile>
        <GraphicShot>
          <PlatformLayersGraphic />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default GraphicSection;
