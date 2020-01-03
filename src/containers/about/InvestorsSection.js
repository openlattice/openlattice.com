/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';

import UrbanInnovation from '../../assets/investors/urban-innovation.png';
import GovTech from '../../assets/investors/gov-tech.png';
import Bullpen from '../../assets/investors/bullpen.png';
import HarrisonMetal from '../../assets/investors/harrison-metal.png';
import PointNine from '../../assets/investors/point-nine.png';
import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 100px auto;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 220px;
    width: 1104px;
  }
`;

const Header = styled(SectionHeader)`
  margin-bottom: 0;
`;

const LogosOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  max-width: 1104px;
`;

const LogosInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -37px;
  margin-top: 20px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const logoStyles = css`
  background-image: url(${(props) => props.logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 37px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }
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
    <Content>
      <Header>Our investors</Header>
      <LogosOuterWrapper>
        <LogosInnerWrapper>
          <UrbanInnovationLogo logo={UrbanInnovation} />
          <GovTechLogo logo={GovTech} />
          <BullpenLogo logo={Bullpen} />
          <HarrisonMetalLogo logo={HarrisonMetal} />
          <PointNineLogo logo={PointNine} />
        </LogosInnerWrapper>
      </LogosOuterWrapper>
    </Content>
  </PageSection>
);

export default InvestorsSection;
