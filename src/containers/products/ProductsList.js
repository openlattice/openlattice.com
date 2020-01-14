/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import ProductTile from './NewProductTile';
import PageSection from '../../components/layout/NewPageSection';

import * as Routes from '../../core/router/Routes';
import { PageDescription, SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_SUBTITLES,
  PRODUCT_TITLES
} from './ProductConsts';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto 0 auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 104px auto 128px auto;
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
  justify-content: center;
  margin: auto;
  max-width: ${CONTENT_WIDTH}px;
`;

const ProductTilesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const ProductsList = () => (
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
    </Content>
  </PageSection>
);

export default ProductsList;
