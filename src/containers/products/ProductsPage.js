/*
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';

import topImage from '../../assets/images/capitol.png';
import AppHeader from '../../components/headers/AppHeader';
import PageSection from '../../components/layout/PageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import ProductTile from './ProductTile';
import ConnectSection from '../connect/ConnectSection';
import FooterSection from '../footer/FooterSection';

import { N0, N1 } from '../../core/style/Colors';
import * as Constants from './Constants';

import {
  CONTENT_GRID_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG
} from '../../core/style/Sizes';

const Content = styled.div`
  color: ${N0};
  align-items: center;
  display: block;
  flex-direction: column;
  margin: 50px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 210px auto 211px auto;
  }
`;

const TitleText = styled(StyledSectionTitle)`
  color: ${N0};
  margin-bottom: 20px;
  text-align: center;
  font-weight: 500;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 40px;
    text-align: center;
  }
`;

const PageContent = styled.div`
  margin: 80px 0 70px 0;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 140px 0;
  }
`;

const SectionHeaderWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 50%;
  }
`;

const ProductTilesOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: 70px 0 30px 0;
  max-width: ${CONTENT_GRID_WIDTH}px;
`;

const ProductTilesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const ProductsPage = () => (
  <>
    <PageSection bgImage={topImage}>
      <AppHeader />
      <Content>
        <TitleText>Make organizations more productive through modern workflows.</TitleText>
      </Content>
    </PageSection>
    <PageSection bgColor={N1}>
      <PageContent>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Core Platform Services
          </StyledSectionTitle>
          <StyledSectionSubTitle>
            {`OpenLattice enables precision goverment by linking of
              individual level data across criminal justice, healthcare, and
              social services.`}
          </StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Our Products
          </StyledSectionTitle>
          <StyledSectionSubTitle>
            {`OpenLattice enables precision goverment by linking of
              individual level data across criminal justice, healthcare, and
              social services.`}
          </StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile title={Constants.title1} body={Constants.body1} icon="" route={Routes.HOLODECK} />
            <ProductTile title={Constants.title2} body={Constants.body2} icon="" route={Routes.RIDE_ALONG} />
            <ProductTile title={Constants.title3} body={Constants.body3} icon="" route={Routes.PCM} />
            <ProductTile title={Constants.title4} body={Constants.body4} icon="" route={Routes.CHRONICLE} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
      </PageContent>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ProductsPage;
