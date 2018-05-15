/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import FooterTile from './FooterTile';
import InfoTile from './InfoTile';
import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import * as Constants from './Constants';
import { CONTENT_GRID_WIDTH, MEDIA_QUERY_SM } from '../../core/style/Sizes';

/*
 * styled components
 */

const Content = styled.div`
  margin: 80px 0 100px 0;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin: 150px 0;
  }
`;

const SectionHeaderWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    width: 50%;
  }
`;

const TechTilesWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width:${CONTENT_GRID_WIDTH}px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    justify-content: space-between;
  }
`;

const TechnologySection = () => (
  <PageSection>
    <Content>
      <SectionHeaderWrapper>
        <StyledSectionTitle>Our Technology</StyledSectionTitle>
        <StyledSectionSubTitle>
          Our no-cost tier of core services helps address the most common challenges in cross-sector data partnerships.
        </StyledSectionSubTitle>
      </SectionHeaderWrapper>
      <TechTilesWrapper style={{ marginTop: '70px' }}>
        <InfoTile title={Constants.title1} body={Constants.body1} icon={Constants.icon1} />
        <InfoTile title={Constants.title2} body={Constants.body2} icon={Constants.icon2} />
        <InfoTile title={Constants.title3} body={Constants.body3} icon={Constants.icon3} />
        <InfoTile title={Constants.title4} body={Constants.body4} icon={Constants.icon4} />
        <InfoTile title={Constants.title5} body={Constants.body5} icon={Constants.icon5} />
        <InfoTile title={Constants.title6} body={Constants.body6} icon={Constants.icon6} />
      </TechTilesWrapper>
      <TechTilesWrapper>
        <FooterTile body={Constants.body7} icon={Constants.icon7} />
        <FooterTile body={Constants.body8} icon={Constants.icon8} />
      </TechTilesWrapper>
    </Content>
  </PageSection>
);

export default TechnologySection;
