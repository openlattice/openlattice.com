/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const PageContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 128px;
  }
`;

const SectionHeaderWrapper = styled(SectionHeader)`
  width: 576px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
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

const IntegrationAnimationSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <PageContent>
      <SectionHeaderWrapper>Public servants are using ancient software and siloed data</SectionHeaderWrapper>
      <SectionDescription>
        {`Placeholder - As a public benefit corporation, OpenLattice enables precision government by linking
          individual-level data enables precision government by linking individual-level data.`}
      </SectionDescription>
    </PageContent>
  </PageSection>
);

export default IntegrationAnimationSection;
