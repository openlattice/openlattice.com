/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import DataSharingSVG from '../../assets/svg/working-with-us-data-sharing.svg';
import DeploySVG from '../../assets/svg/working-with-us-deploy.svg';
import PageSection from '../../components/layout/NewPageSection';
import PipelinesSVG from '../../assets/svg/working-with-us-pipelines.svg';
import ProblemDefinitionSVG from '../../assets/svg/working-with-us-problem-definition.svg';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreExternalLink } from '../../components/controls/index';
import { TARGET } from '../../components/headers/MenuConsts';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';

const implementationPlanLink :string = 'https://help.openlattice.com/article/96-our-implementation-plan';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 200px auto 200px auto;
  }
`;

const SectionDescription = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 40px;
  text-align: center;
  width: 528px;
`;

const WorkingWithUsProcess = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <SectionHeader>How do you start working with us?</SectionHeader>
      <SectionDescription>
        {`As a public benefit corporation, OpenLattice enables precision government by
          linking individual-level data across currently siloed criminal justice,
          healthcare, and social services information at little or no cost.`}
      </SectionDescription>
      <LearnMoreExternalLink href={implementationPlanLink} target={TARGET}>Learn more</LearnMoreExternalLink>
    </Content>
  </PageSection>
);

export default WorkingWithUsProcess;
