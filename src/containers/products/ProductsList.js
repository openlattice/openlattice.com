/*
 * @flow
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';

import ProductTile from './NewProductTile';
import ProductTileWithImage from './ProductTileWithImage';
import PageSection from '../../components/layout/NewPageSection';

import * as Routes from '../../core/router/Routes';
import { PageDescription, SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_IMAGES,
  PRODUCT_SUBTITLES,
  PRODUCT_TITLES
} from './ProductConsts';

const MORE_PRODUCTS :string = 'More products';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 50px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 128px auto 128px auto;
    width: ${CONTENT_WIDTH}px;
  }
`;

const Description = styled(PageDescription)`
  font-size: 18px;
  margin-bottom: 80px;
  width: 524px;
`;

const ProductTilesOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: auto -48px auto - 48px;
  margin-bottom: 104px;
  max-width: ${CONTENT_WIDTH}px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin: 0 -24px 50px -24px;
    width: 100%;
  }
`;

const MoreProductTilesOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 104px;
`;

const ProductTilesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const Line = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_10};
  height: 0;
  margin: 0;
  width: 100%;
`;

const MoreProductsExpandableRow = styled.div`
  align-items: center;
  color: ${NEUTRALS.GRAY_08};
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  line-height: 130%;
  padding: 24px 20px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 18px;
  }
`;

const ProductsList = () => {

  const [moreProductsVisible, showMoreProducts] = useState(false);
  return (
    <PageSection bgColor={NEUTRALS.WHITE}>
      <Content>
        <SectionHeader>Bring government into the 21st century.</SectionHeader>
        <Description>
          {`OpenLattice is founded on the ideal that government tools don't have to be difficult to
          deploy or use, nor is it necessary to make a trade off between security and collaboration.`}
        </Description>
        <ProductTilesOuterWrapper>
          <ProductTilesInnerWrapper>
            <ProductTile
                body={PRODUCT_DESCRIPTIONS.PCM}
                icon={PRODUCT_ICONS.PCM}
                route={Routes.PCM}
                subtitles={PRODUCT_SUBTITLES.PCM}
                title={PRODUCT_TITLES.PCM} />
            <ProductTile
                body={PRODUCT_DESCRIPTIONS.CARE}
                icon={PRODUCT_ICONS.CARE}
                route={Routes.CARE}
                subtitles={PRODUCT_SUBTITLES.CARE}
                title={PRODUCT_TITLES.CARE} />
            <ProductTile
                body={PRODUCT_DESCRIPTIONS.RESEARCH_HUB}
                icon={PRODUCT_ICONS.RESEARCH_HUB}
                route={Routes.RESEARCH_HUB}
                subtitles={PRODUCT_SUBTITLES.RESEARCH_HUB}
                title={PRODUCT_TITLES.RESEARCH_HUB} />
            <ProductTile
                body={PRODUCT_DESCRIPTIONS.CHRONICLE}
                icon={PRODUCT_ICONS.CHRONICLE}
                route={Routes.CHRONICLE}
                subtitles={PRODUCT_SUBTITLES.CHRONICLE}
                title={PRODUCT_TITLES.CHRONICLE} />
          </ProductTilesInnerWrapper>
        </ProductTilesOuterWrapper>
        {
          moreProductsVisible
            ? (
              <>
                <Line />
                <MoreProductsExpandableRow onClick={() => showMoreProducts(!moreProductsVisible)}>
                  <div>{ MORE_PRODUCTS }</div>
                  <FontAwesomeIcon color={NEUTRALS.GRAY_08} icon={faChevronUp} />
                </MoreProductsExpandableRow>
                <MoreProductTilesOuterWrapper>
                  <ProductTileWithImage
                      body={PRODUCT_DESCRIPTIONS.ASTROMETRICS}
                      icon={PRODUCT_ICONS.ASTROMETRICS}
                      image={PRODUCT_IMAGES.ASTROMETRICS}
                      index={0}
                      subtitles={PRODUCT_SUBTITLES.ASTROMETRICS}
                      title={PRODUCT_TITLES.ASTROMETRICS} />
                  <ProductTileWithImage
                      body={PRODUCT_DESCRIPTIONS.CWP}
                      icon={PRODUCT_ICONS.CWP}
                      image={PRODUCT_IMAGES.CWP}
                      index={1}
                      subtitles={PRODUCT_SUBTITLES.CWP}
                      title={PRODUCT_TITLES.CWP} />
                  <ProductTileWithImage
                      body={PRODUCT_DESCRIPTIONS.REFERRALS}
                      icon={PRODUCT_ICONS.REFERRALS}
                      image={PRODUCT_IMAGES.REFERRALS}
                      index={2}
                      subtitles={PRODUCT_SUBTITLES.REFERRALS}
                      title={PRODUCT_TITLES.REFERRALS} />
                  <ProductTileWithImage
                      body={PRODUCT_DESCRIPTIONS.STEPPING_UP}
                      icon={PRODUCT_ICONS.STEPPING_UP}
                      image={PRODUCT_IMAGES.STEPPING_UP}
                      index={3}
                      subtitles={PRODUCT_SUBTITLES.STEPPING_UP}
                      title={PRODUCT_TITLES.STEPPING_UP} />
                </MoreProductTilesOuterWrapper>
                <MoreProductsExpandableRow onClick={() => showMoreProducts(!moreProductsVisible)}>
                  <div>{ MORE_PRODUCTS }</div>
                  <FontAwesomeIcon color={NEUTRALS.GRAY_08} icon={faChevronUp} />
                </MoreProductsExpandableRow>
                <Line />
              </>
            )
            : (
              <>
                <Line />
                <MoreProductsExpandableRow onClick={() => showMoreProducts(!moreProductsVisible)}>
                  <div>{ MORE_PRODUCTS }</div>
                  <FontAwesomeIcon color={NEUTRALS.GRAY_08} icon={faChevronDown} />
                </MoreProductsExpandableRow>
                <Line />
              </>
            )
        }
      </Content>
    </PageSection>
  );
};

export default ProductsList;
