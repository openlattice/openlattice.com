/*
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import * as Routes from '../../core/router/Routes';

import topImage from '../../assets/images/capitol.png';
import logo from '../../assets/images/logo-white.png';
import { N0, N1 } from '../../core/style/Colors';
import PageSection from '../../components/layout/PageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import ProductTile from './ProductTile';
import ConnectSection from '../connect/ConnectSection';
import FooterSection from '../footer/FooterSection';

import * as Constants from './Constants';

import {
  CONTENT_GRID_WIDTH,
  WINDOW_EDGE_PADDING,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG
} from '../../core/style/Sizes';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  margin-top: ${WINDOW_EDGE_PADDING}px;
`;

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
  margin: 0 0 30px 0;
  max-width: ${CONTENT_GRID_WIDTH}px;
`;

const ProductTilesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -15px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: space-between;
  }
`;

const ProductsPage = () => (
  <>
    <PageSection bgImage={topImage}>
      <Header>
        <img src={logo} alt="OpenLattice Logo" height={50} />
      </Header>
      <Content>
        <TitleText>Make organizations more productive through modern workflows.</TitleText>
      </Content>
    </PageSection>
    <PageSection bgColor={N1}>
      <PageContent>
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
        <ProductTilesOuterWrapper style={{ marginTop: '70px' }}>
          <ProductTilesInnerWrapper>
            <ProductTile title={Constants.title1} body={Constants.body1} icon="" route={Routes.HOLODECK} />
            <ProductTile title={Constants.title2} body={Constants.body2} icon="" route={Routes.RIDE_ALONG} />
            <ProductTile title={Constants.title3} body={Constants.body3} icon="" route={Routes.PSA} />
            <ProductTile title={Constants.title4} body={Constants.body4} icon="" route={Routes.PCM} />
            <ProductTile title={Constants.title5} body={Constants.body5} icon="" route={Routes.CHRONICLE} />
            <ProductTile title={Constants.title6} body={Constants.body6} icon="" route={Routes.ECR} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
      </PageContent>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ProductsPage;
