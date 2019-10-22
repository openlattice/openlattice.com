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
import { PRODUCT_DESCRIPTIONS, PRODUCT_ICONS, PRODUCT_TITLES } from './Constants';

import {
  CONTENT_GRID_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG
} from '../../core/style/Sizes';

const Content = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  margin: 50px auto;
  max-width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 155px 0 150px 0;
  }
`;

const TitleText = styled(StyledSectionTitle)`
  color: ${N0};
  margin-bottom: 20px;
  text-align: left;
  font-weight: 600;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 30px;
    text-align: left;
    min-width: 770px;
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
  margin: 60px 0 140px 0;
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
    <PageSection bgColor={N0}>
      <PageContent>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Core platform services
          </StyledSectionTitle>
          <StyledSectionSubTitle>
            {`Core tools and services for you to access, explore, configure,
              and analyze your data.`}
          </StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile
                title={PRODUCT_TITLES.GALLERY}
                body={PRODUCT_DESCRIPTIONS.GALLERY}
                icon={PRODUCT_ICONS.GALLERY}
                route={Routes.GALLERY} />
            <ProductTile
                title={PRODUCT_TITLES.ORGANIZATIONS}
                body={PRODUCT_DESCRIPTIONS.ORGANIZATIONS}
                icon=""
                route={Routes.ORGANIZATIONS} />
            <ProductTile
                title={PRODUCT_TITLES.RESEARCH_HUB}
                body={PRODUCT_DESCRIPTIONS.RESEARCH_HUB}
                icon=""
                route={Routes.RESEARCH_HUB} />
            <ProductTile
                title={PRODUCT_TITLES.OTHER_SERVICES}
                body={PRODUCT_DESCRIPTIONS.OTHER_SERVICES}
                icon=""
                route={Routes.OTHER_SERVICES} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Our Products
          </StyledSectionTitle>
          <StyledSectionSubTitle>
            {`We enable precision government by linking of individual level
              data across criminal justice, healthcare, and social services.`}
          </StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile
                title={PRODUCT_TITLES.REFERRALS}
                body={PRODUCT_DESCRIPTIONS.REFERRALS}
                icon=""
                route={Routes.REFERRALS} />
            <ProductTile
                title={PRODUCT_TITLES.CARE}
                body={PRODUCT_DESCRIPTIONS.CARE}
                icon=""
                route={Routes.CARE} />
            <ProductTile
                title={PRODUCT_TITLES.PCM}
                body={PRODUCT_DESCRIPTIONS.PCM}
                icon=""
                route={Routes.PCM} />
            <ProductTile
                title={PRODUCT_TITLES.ASTROMETRICS}
                body={PRODUCT_DESCRIPTIONS.ASTROMETRICS}
                icon=""
                route={Routes.ASTROMETRICS} />
            <ProductTile
                title={PRODUCT_TITLES.CHRONICLE}
                body={PRODUCT_DESCRIPTIONS.CHRONICLE}
                icon=""
                route={Routes.CHRONICLE} />
            <ProductTile
                title={PRODUCT_TITLES.CWP}
                body={PRODUCT_DESCRIPTIONS.CWP}
                icon=""
                route={Routes.CWP} />
            <ProductTile
                title={PRODUCT_TITLES.STEPPING_UP}
                body={PRODUCT_DESCRIPTIONS.STEPPING_UP}
                icon=""
                route={Routes.STEPPING_UP} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
      </PageContent>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ProductsPage;
