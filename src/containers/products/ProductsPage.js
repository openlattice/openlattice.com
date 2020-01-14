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
import ContactUsSection from '../contactus/ContactUsSection';
import FooterSection from '../footer/FooterSection';

import { NEUTRALS } from '../../core/style/Colors';
import { PRODUCT_DESCRIPTIONS, PRODUCT_ICONS, PRODUCT_TITLES } from './Constants';

import {
  CONTENT_GRID_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG
} from '../../core/style/Sizes';

const SECTIONS = {
  CORE_PLATFORM: 'corePlatform',
  PRODUCTS: 'products',
};

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
  color: ${NEUTRALS.WHITE};
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
        <TitleText>Leverage cross-sector data to improve human outcomes.</TitleText>
      </Content>
    </PageSection>
    <PageSection bgColor={NEUTRALS.WHITE}>
      <PageContent>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Core Platform Services
          </StyledSectionTitle>
          <StyledSectionSubTitle>Manage, explore, and analyze your data.</StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile
                section={SECTIONS.CORE_PLATFORM}
                title={PRODUCT_TITLES.GALLERY}
                body={PRODUCT_DESCRIPTIONS.GALLERY}
                icon={PRODUCT_ICONS.GALLERY}
                route={Routes.GALLERY} />
            <ProductTile
                section={SECTIONS.CORE_PLATFORM}
                title={PRODUCT_TITLES.ORGANIZATIONS}
                body={PRODUCT_DESCRIPTIONS.ORGANIZATIONS}
                icon={PRODUCT_ICONS.ORGANIZATIONS}
                route={Routes.ORGANIZATIONS} />
            <ProductTile
                section={SECTIONS.CORE_PLATFORM}
                title={PRODUCT_TITLES.OTHER_SERVICES}
                body={PRODUCT_DESCRIPTIONS.OTHER_SERVICES}
                icon={PRODUCT_ICONS.OTHER_SERVICES}
                route={Routes.OTHER_SERVICES} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
        <SectionHeaderWrapper>
          <StyledSectionTitle>
            Our Products
          </StyledSectionTitle>
          <StyledSectionSubTitle>
            {`We help public servants, policy makers, and researchers make better decisions with a complete
              picture across existing criminal justice, healthcare, and social service data sets.`}
          </StyledSectionSubTitle>
        </SectionHeaderWrapper>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile
                section={SECTIONS.PRODUCTS}
                title={PRODUCT_TITLES.CARE}
                body={PRODUCT_DESCRIPTIONS.CARE}
                icon={PRODUCT_ICONS.CARE}
                route={Routes.CARE} />
            <ProductTile
                section={SECTIONS.PRODUCTS}
                title={PRODUCT_TITLES.PCM}
                body={PRODUCT_DESCRIPTIONS.PCM}
                icon={PRODUCT_ICONS.PCM}
                route={Routes.PCM} />
            <ProductTile
                section={SECTIONS.CORE_PLATFORM}
                title={PRODUCT_TITLES.OTHER_PRODUCTS}
                body={PRODUCT_DESCRIPTIONS.OTHER_PRODUCTS}
                icon={PRODUCT_ICONS.OTHER_PRODUCTS}
                route={Routes.OTHER_PRODUCTS} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
      </PageContent>
    </PageSection>
    <ContactUsSection />
    <FooterSection />
  </>
);

export default ProductsPage;
