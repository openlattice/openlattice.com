// @flow

import styled, { css } from 'styled-components';

import { SectionHeader } from '../../../components/headers/PageHeaders';
import { NEUTRALS } from '../../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_JUR_SM,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
} from '../../../core/style/Sizes';

const ProductStamp = styled.a`
  align-items: center;
  background-color: ${NEUTRALS.WHITE};
  border-radius: 281px;
  color: ${NEUTRALS.GRAY_06};
  display: flex;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  margin-bottom: 24px;
  padding: 14px 22px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 20px;
  }
`;

const Icon = styled.img`
  margin-right: 13px;
`;

const ProductShot = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  border: 1px solid ${NEUTRALS.GRAY_09};
  box-shadow: 0 10px 30px rgba(48, 47, 57, 0.05);
  box-sizing: content-box;
  height: 100%;
  position: absolute;
  top: 450px;
  width: 100%;
  z-index: 1000;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 182px;
    top: 720px;
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) and (max-width: ${MEDIA_QUERY_JUR_SM}px) {
    height: 223px;
    top: 600px;
    width: 366px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 292px;
    top: 640px;
    width: 480px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) and (max-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
    top: 550px;
    width: 915px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 670px;
    top: 612px;
    width: 1102px;
  }
`;

const FeatureShot = styled.span`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  border: 1px solid ${NEUTRALS.GRAY_09};
  box-shadow: 0 10px 30px rgba(48, 47, 57, 0.05);
  box-sizing: border-box;
  height: 556px;
  width: 480px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 348px;
    width: 300px;
  }
`;

const FeatureOverviewWrapper = styled.div`
  margin: 30px 0;
  min-height: 250px;
  position: relative;
  width: 366px;

  :last-child {
    margin-left: 0;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 48px 48px 80px 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

const FeatureOverviewTitle = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 25px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 24px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 18px;
  }
`;

const paragraphStyles = css`
  color: ${NEUTRALS.GRAY_07};
  line-height: 150%;
`;

const FeatureOverviewDescription = styled.div`
  font-size: 16px;
  margin-top: 16px;
  width: 100%;
  ${paragraphStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: 170px;
  }
`;

const ProductOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 64px 0;
  width: 100%;

  span:first-child {
    margin-bottom: 64px;
  }

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    justify-content: space-between;

    span:first-child {
      margin-bottom: 0;
    }
  }
`;

const ProductOverviewDescriptionWrapper = styled.span`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  justify-content: center;
  margin-bottom: 60px;
  width: 464px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
  }
`;

const ExtendedFeatureHeader = styled(SectionHeader)`
  align-self: flex-start;
  text-align: left;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 432px;
  }
`;

const ExtendedFeatureDescription = styled.div`
  font-size: 18px;
  position: relative;
  top: auto;
  ${paragraphStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: auto;
    width: 464px;
  }
`;

const ProductFeaturesContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    align-items: flex-start;
    flex-direction: row;
    margin: 440px auto 96px auto;
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-top: 150px;
  }
`;

const ExtendedFeaturesContent = styled(ProductFeaturesContent)`
  align-self: center;
  margin-top: 0;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 32px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    align-items: flex-start;
    flex-direction: column;
    margin: 0 0 200px 0;
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin: 40px 0;
  }
`;

export {
  ExtendedFeatureDescription,
  ExtendedFeatureHeader,
  ExtendedFeaturesContent,
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  Icon,
  ProductFeaturesContent,
  ProductOverviewDescriptionWrapper,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
  paragraphStyles,
};
