/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import {
  BullpenLogo,
  GovTechLogo,
  HarrisonMetalLogo,
  PointNineLogo,
  UrbanInnovationLogo,
} from '../../assets/investors';
import { Header, SectionContent } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const LogosWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    flex-direction: column;
  }
`;

const InvestorLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;

  > img {
    width: 100%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    margin: 32px 16px;
  }
`;

const InvestorsSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <Header as="h2">Our investors</Header>
      <LogosWrapper>
        <InvestorLogo><UrbanInnovationLogo /></InvestorLogo>
        <InvestorLogo><GovTechLogo /></InvestorLogo>
        <InvestorLogo><BullpenLogo /></InvestorLogo>
        <InvestorLogo><HarrisonMetalLogo /></InvestorLogo>
        <InvestorLogo><PointNineLogo /></InvestorLogo>
      </LogosWrapper>
    </SectionContent>
  </PageSection>
);

export default InvestorsSection;
