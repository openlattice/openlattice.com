/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import IntegrationImage from '../../assets/images/workingwithus/integrated-data.png';
import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreExternalLink } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import { TARGET } from '../../components/headers/MenuConsts';

const ourCaseStudiesLink :string = 'https://help.openlattice.com/collection/65-case-studies';

const PageContent = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0 0 0;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 128px;
    width: ${CONTENT_WIDTH}px;
  }
`;

const SectionHeaderWrapper = styled(SectionHeader)`
  width: 576px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const IntegrationSectionHeader = styled(SectionHeader)`
  text-align: left;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const SectionDescription = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  margin-bottom: 80px;
  width: 528px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
`;

const IntegrationSectionWrapper = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 464px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const Description = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 40px;
  text-align: left;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
`;

const CaseStudiesButton = styled(LearnMoreExternalLink)`
  width: 165px;
`;

const IntegratedDataImage = styled.img`
  height: 726px;
  width: 528px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 471.9px;
    width: 343.2px;
  }
`;

const IntegrationAnimationSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <PageContent>
      <SectionHeaderWrapper>Public servants are using ancient software and siloed data</SectionHeaderWrapper>
      <SectionDescription>
        {`Our solutions help organizations use technology to drive positive change in tackling recidivism,
          homelessness, mass incarceration, and other key societal welfare issues.`}
      </SectionDescription>
      <IntegrationSectionWrapper>
        <TextWrapper>
          <IntegrationSectionHeader>
            Leverage data across silos and save money, time, and lives
          </IntegrationSectionHeader>
          <Description>
            {`Integrate data across public safety, healthcare systems, and social services to streamline operations,
              test interventions, and improve human outcomes. Use existing OpenLattice solutions or develop your
              own against unified individual profiles.`}
          </Description>
          <CaseStudiesButton
              href={ourCaseStudiesLink}
              target={TARGET}>
            Our case studies
          </CaseStudiesButton>
        </TextWrapper>
        <IntegratedDataImage src={IntegrationImage} />
      </IntegrationSectionWrapper>
    </PageContent>
  </PageSection>
);

export default IntegrationAnimationSection;
