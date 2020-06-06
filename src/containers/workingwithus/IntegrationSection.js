/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import {
  DataPipelinesGraphic,
  DataSharingAgreementsGraphic,
  EMSDataCardGraphic,
  HighUtilizerTimelineGraphic,
  IntegratedDataDataCardGraphic,
  MedicaidDataCardGraphic,
  OurCustomersMapGraphic,
  OverdoseGraphGraphic,
  PlatformLayersGraphic,
  PoliceDataCardGraphic,
} from '../../assets/svg/graphics';
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
import { PAGE_PADDING, MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { CASE_STUDIES_LINK } from '../../utils/constants/links';

const ANCIENT_SOFTWARE_HEADER = 'Public servants are using ancient software and siloed data';
const ANCIENT_SOFTWARE_SUBHEADER = 'Our solutions help organizations use technology to drive positive change in'
  + ' tackling recidivism, homelessness, mass incarceration, and other key societal welfare issues.';

const INTEGRATE_DATA_HEADER = 'Leverage data across silos and save lives, time, and money';
const INTEGRATE_DATA_SUBHEADER = 'Integrate data across public safety, healthcare systems, and social services to'
  + ' streamline operations, test interventions, and improve human outcomes. Use existing OpenLattice solutions or'
  + ' develop your own against unified individual profiles.';

const DataSiloCards = styled.div`
  align-items: center;
  display: flex;
  height: 480px;
  justify-content: center;
  margin-bottom: -100px;
  margin-top: -200px;
  width: calc(100% + ${2 * PAGE_PADDING}px);
  overflow: hidden;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin-bottom: -50px;
    margin-top: -180px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-top: -120px;
    margin-bottom: 0;
  }
`;

const DataSiloCardsGrid = styled.div`
  display: grid;
  grid-gap: 48px;
  grid-template-columns: 1fr 1fr 1fr;

  > div {
    align-items: center;
    display: flex;
    max-height: 528px;
    max-width: 528px;
    width: calc(50vw + 50px);

    > img {
      border: 1px solid ${NEUTRALS.GRAY_09};
      border-radius: 3px;
      box-shadow: 0 10px 60px rgba(47, 45, 62, 0.05);
      width: 100%;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    grid-gap: 32px;
  }
`;

const IntegrationSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent maxWidth={{ sm: 410 }}>
      <Header as="h2">{ANCIENT_SOFTWARE_HEADER}</Header>
      <SubHeader as="h5">{ANCIENT_SOFTWARE_SUBHEADER}</SubHeader>
    </SectionContent>
    <DataSiloCards>
      <DataSiloCardsGrid>
        <div><PoliceDataCardGraphic /></div>
        <div><EMSDataCardGraphic /></div>
        <div><MedicaidDataCardGraphic /></div>
      </DataSiloCardsGrid>
    </DataSiloCards>
    <SectionContent>
      <SectionContentGrid align="center">
        <InfoTile align="left">
          <Header as="h2">{INTEGRATE_DATA_HEADER}</Header>
          <SubHeader as="h5">{INTEGRATE_DATA_SUBHEADER}</SubHeader>
          <LearnMoreExternalLink href={CASE_STUDIES_LINK} target="_blank">Our case studies</LearnMoreExternalLink>
        </InfoTile>
        <GraphicShot>
          <IntegratedDataDataCardGraphic />
        </GraphicShot>
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default IntegrationSection;
