/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import type { Element } from 'react';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import {
  DATA_SECURITY,
  GENERATE_DATASETS,
  MANAGE_ACCESS,
  SECURE_AUDIT_LOG,
  SHARE_DATA,
} from './FeaturesConsts';

const FEATURES :Object[] = [
  SHARE_DATA,
  MANAGE_ACCESS,
  GENERATE_DATASETS,
  SECURE_AUDIT_LOG,
  DATA_SECURITY,
];

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 100px;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 0 auto 200px auto;
  }
`;

const FeatureWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 180px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    margin-bottom: 280px;
    width: ${CONTENT_WIDTH}px;
  }
`;

const FeatureTextWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  max-width: 480px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin: 48px 0;
  }
`;

const FeatureHeader = styled(SectionHeader)`
  align-self: flex-start;
  text-align: left;
  width: 432px;
`;

const Description = styled.div`
  color: ${NEUTRALS.GRAY_17};
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 48px;
  text-align: left;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 16px;
  }
`;

const SubFeatureWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 12px;
`;

const SubFeatureText = styled(Description)`
  color: ${NEUTRALS.GRAY_07};
  font-weight: 500;
  margin-bottom: 0;
  margin-left: 12px;
`;

const Graphic = styled.img`
  height: ${(props) => props.normalHeight};
  width: ${(props) => props.normalWidth};

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: ${(props) => props.smallHeight};
    width: ${(props) => props.smallWidth};
  }
`;

const Features = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      {
        FEATURES.map((feature :Object, index :number) => {

          const featureText :Element<*> = (
            <FeatureTextWrapper>
              <FeatureHeader>{ feature.TITLE }</FeatureHeader>
              <Description>{ feature.DESCRIPTION }</Description>
              {
                feature.SUB_FEATURES.map((text :string, subIndex :number) => (
                  <SubFeatureWrapper key={text}>
                    <img src={feature.ICONS[subIndex]} alt="" />
                    <SubFeatureText>{ text }</SubFeatureText>
                  </SubFeatureWrapper>
                ))
              }
            </FeatureTextWrapper>
          );
          const graphic :Element<*> = (
            <Graphic
                src={feature.GRAPHIC}
                smallHeight={feature.GRAPHIC_DIMENSIONS.smallHeight}
                smallWidth={feature.GRAPHIC_DIMENSIONS.smallWidth}
                normalHeight={feature.GRAPHIC_DIMENSIONS.normalHeight}
                normalWidth={feature.GRAPHIC_DIMENSIONS.normalWidth} />
          );

          if (index % 2 !== 0) {
            return (
              <FeatureWrapper key={feature.TITLE}>
                { graphic }
                { featureText }
              </FeatureWrapper>
            );
          }
          return (
            <FeatureWrapper key={feature.TITLE}>
              { featureText }
              { graphic }
            </FeatureWrapper>
          );
        })
      }
    </Content>
  </PageSection>
);

export default Features;
