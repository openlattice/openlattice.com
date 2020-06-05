/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';

import Bullpen from '../../assets/investors/bullpen.png';
import GovTech from '../../assets/investors/gov-tech.png';
import HarrisonMetal from '../../assets/investors/harrison-metal.png';
import PageSection from '../../components/layout/NewPageSection';
import PointNine from '../../assets/investors/point-nine.png';
import UrbanInnovation from '../../assets/investors/urban-innovation.png';
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

const logoStyles = css`
  background-image: url(${(props) => props.logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 32px;

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

const UrbanInnovationLogo = styled.div`
  ${logoStyles}
  height: 65px;
  width: 181px;
`;

const GovTechLogo = styled.div`
  ${logoStyles}
  height: 29px;
  width: 116px;
`;

const BullpenLogo = styled.div`
  ${logoStyles}
  height: 14px;
  width: 240px;
`;

const HarrisonMetalLogo = styled.div`
  ${logoStyles}
  height: 66px;
  width: 132px;
`;

const PointNineLogo = styled.div`
  ${logoStyles}
  height: 40px;
  width: 141px;
`;

const InvestorsSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <Header as="h2">Our investors</Header>
      <LogosWrapper>
        <UrbanInnovationLogo logo={UrbanInnovation} />
        <GovTechLogo logo={GovTech} />
        <BullpenLogo logo={Bullpen} />
        <HarrisonMetalLogo logo={HarrisonMetal} />
        <PointNineLogo logo={PointNine} />
      </LogosWrapper>
    </SectionContent>
  </PageSection>
);

export default InvestorsSection;
