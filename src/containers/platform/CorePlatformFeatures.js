/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import FeatureTile from './features/FeatureTile';
import PageSection from '../../components/layout/NewPageSection';

import * as Routes from '../../core/router/Routes';
import { SectionHeader } from '../../components/headers/PageHeaders';
import {
  FEATURE_DESCRIPTIONS,
  FEATURE_ICONS,
  FEATURE_TITLES
} from './features/FeaturesConsts';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

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
    width: ${CONTENT_WIDTH}px;
  }
`;

const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 528px;
`;

const TextSection = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 104px;
  text-align: center;
  width: 100%;
`;

const FeatureTilesOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  max-width: ${CONTENT_WIDTH}px;
`;

const FeatureTilesInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const CorePlatformFeatures = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <TextWrapper>
        <SectionHeader>
          Core platform features
        </SectionHeader>
        <TextSection>
          {`Placeholder - As a public benefit corporation, OpenLattice enables
            precision government by linking individual-level data enables
            precision government by linking individual-level data.`}
        </TextSection>
      </TextWrapper>
      <FeatureTilesOuterWrapper>
        <FeatureTilesInnerWrapper>
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.INTEGRATION}
              icon={FEATURE_ICONS.INTEGRATION}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.INTEGRATION} />
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.LINKING}
              icon={FEATURE_ICONS.LINKING}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.LINKING} />
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.STORAGE}
              icon={FEATURE_ICONS.STORAGE}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.STORAGE} />
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.STANDARDIZATION}
              icon={FEATURE_ICONS.STANDARDIZATION}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.STANDARDIZATION} />
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.EXPLORATION}
              icon={FEATURE_ICONS.EXPLORATION}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.EXPLORATION} />
          <FeatureTile
              body={FEATURE_DESCRIPTIONS.PERMISSIONS_MANAGEMENT}
              icon={FEATURE_ICONS.PERMISSIONS_MANAGEMENT}
              route={Routes.PLATFORM}
              title={FEATURE_TITLES.PERMISSIONS_MANAGEMENT} />
        </FeatureTilesInnerWrapper>
      </FeatureTilesOuterWrapper>
    </Content>
  </PageSection>
);

export default CorePlatformFeatures;