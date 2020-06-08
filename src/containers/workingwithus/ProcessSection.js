/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  DATA_PIPELINES,
  DATA_SHARING_AGREEMENTS,
  DEPLOY_APPS,
  PROBLEM_DEFINITION,
} from './constants';

import PageSection from '../../components/layout/NewPageSection';
import {
  DataPipelinesGraphic,
  DataSharingAgreementsGraphic,
  HighUtilizerTimelineGraphic,
  OverdoseGraphGraphic,
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
import { TARGET } from '../../components/headers/MenuConsts';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { IMPLEMENTATION_PLAN_LINK } from '../../utils/constants/links';

const ProcessStepsGrid = styled(SectionContentGrid)`
  grid-template-columns: auto;
  margin: 128px 0 24px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, auto));
    margin: 0;

    > div:first-child {
      justify-self: flex-start;
      max-width: 600px;
    }

    > div:last-child {
      justify-self: flex-end;
      max-width: 432px;
    }
  }
`;

const ProcessStepsSectionContent = styled(SectionContent)`
  ${ProcessStepsGrid}:first-child {
    margin-top: 0;
  }
`;

const StepTile = styled(InfoTile)`
  align-items: center;
  flex-direction: column;
  height: 100%;

  ${Header} {
    text-align: center;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    align-items: flex-start;
    flex-direction: row;

    ${Header} {
      margin-top: 4px;
      margin-left: 48px;
      text-align: left;
    }

    ${SubHeader} {
      margin-left: 48px;
    }
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 0;
  }
`;

const StepBubble = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 24px;

  > span {
    align-items: center;
    background-color: ${PURPLES.PP08};
    border-radius: 50%;
    color: ${NEUTRALS.WHITE};
    display: flex;
    flex: 0 0 auto;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    &::after {
      background-color: ${NEUTRALS.GRAY_09};
      content: '';
      height: 100%;
      margin: 24px auto;
      min-height: 300px;
      width: 1px;
    }
  }
`;

const HOW_TO_WORK_WITH_US_HEADER = 'How do you start working with us?';
const HOW_TO_WORK_WITH_US_SUBHEADER = 'As a public benefit corporation, OpenLattice enables precision government by'
  + ' linking individual-level data across currently siloed criminal justice, healthcare, and social services'
  + ' information at little or no cost.';

const ProcessSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <InfoTile maxWidth={{ sm: 460, lg: 528 }}>
        <Header as="h2">{HOW_TO_WORK_WITH_US_HEADER}</Header>
        <SubHeader as="h5">{HOW_TO_WORK_WITH_US_SUBHEADER}</SubHeader>
        <LearnMoreExternalLink href={IMPLEMENTATION_PLAN_LINK} target={TARGET}>Learn more</LearnMoreExternalLink>
      </InfoTile>
    </SectionContent>
    <ProcessStepsSectionContent>
      <ProcessStepsGrid align="center">
        <StepTile align="left">
          <StepBubble>
            <span>1</span>
          </StepBubble>
          <div>
            <Header as="h3">Problem definition</Header>
            <SubHeader as="h5">{PROBLEM_DEFINITION}</SubHeader>
          </div>
        </StepTile>
        <GraphicShot maxWidth={432}>
          <OverdoseGraphGraphic />
        </GraphicShot>
      </ProcessStepsGrid>
      <ProcessStepsGrid align="center">
        <StepTile align="left">
          <StepBubble>
            <span>2</span>
          </StepBubble>
          <div>
            <Header as="h3">Data sharing agreements</Header>
            <SubHeader as="h5">{DATA_SHARING_AGREEMENTS}</SubHeader>
          </div>
        </StepTile>
        <GraphicShot maxWidth={432}>
          <DataSharingAgreementsGraphic />
        </GraphicShot>
      </ProcessStepsGrid>
      <ProcessStepsGrid align="center">
        <StepTile align="left">
          <StepBubble>
            <span>3</span>
          </StepBubble>
          <div>
            <Header as="h3">Integrate data pipelines</Header>
            <SubHeader as="h5">{DATA_PIPELINES}</SubHeader>
          </div>
        </StepTile>
        <GraphicShot maxWidth={432}>
          <DataPipelinesGraphic />
        </GraphicShot>
      </ProcessStepsGrid>
      <ProcessStepsGrid align="center">
        <StepTile align="left">
          <StepBubble>
            <span>4</span>
          </StepBubble>
          <div>
            <Header as="h3">Deploy applications</Header>
            <SubHeader as="h5">{DEPLOY_APPS}</SubHeader>
          </div>
        </StepTile>
        <GraphicShot maxWidth={432}>
          <HighUtilizerTimelineGraphic />
        </GraphicShot>
      </ProcessStepsGrid>
    </ProcessStepsSectionContent>
  </PageSection>
);

export default ProcessSection;
