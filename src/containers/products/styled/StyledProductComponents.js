// @flow

import styled from 'styled-components';

import { NEUTRALS } from '../../../core/style/Colors';
import {
  MEDIA_QUERY_JUR_SM,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
} from '../../../core/style/Sizes';

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 65px auto 211px auto;
  }
`;

const ProductStamp = styled.a`
  align-items: center;
  background-color: ${NEUTRALS.WHITE};
  border-radius: 281px;
  color: ${NEUTRALS.BLACK};
  display: flex;
  font-weight: 600;
  line-height: 150%;
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const Icon = styled.img`
  margin-right: 13px;
`;

const ProductIntro = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 35px;
  font-weight: bold;
  margin: 24px 0 32px 0;
  text-align: center;
  line-height: 115%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 56px;
    text-align: center;
    width: 700px;
  }
`;

const ProductDescription = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 20px;
  text-align: center;
  line-height: 150%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 560px;
  }
`;

const ProductShot = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 2px;
  border: 1px solid ${NEUTRALS.GRAY_09};
  box-shadow: 0px 10px 30px rgba(48, 47, 57, 0.05);
  box-sizing: border-box;
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
    top: 550px;
    width: 480px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) and (max-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
    top: 550px;
    width: 915px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 670px;
    top: 625px;
    width: 1102px;
  }
`;

const FeaturesContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 400px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-top: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) and (max-width: ${MEDIA_QUERY_JUR_SM}px) {
    margin-top: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 550px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    align-items: flex-start;
    flex-direction: row;
    margin-top: 600px;
  }
`;

const FeatureOverviewWrapper = styled.div`
  width: 366px;
  min-height: 250px;
  margin: 30px 0;
  position: relative;

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

const FeatureOverviewDescription = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  margin-top: 16px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: 170px;
  }
`;

const ProductOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 64px 0;

  span:first-child {
    margin-bottom: 64px;
  }

  :last-of-type {
    margin-bottom: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProductOverviewDescriptionWrapper = styled.span`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  justify-content: center;
  margin-bottom: 60px;
  width: 350px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
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
  box-shadow: 0px 10px 30px rgba(48, 47, 57, 0.05);
  box-sizing: border-box;
  height: 556px;
  width: 480px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 348px;
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 556px;
    width: 480px;
  }
`;

const PermissionsFeatureShot = styled(FeatureShot)`
  height: 315px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 197px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 315px;
  }
`;

const ProductOverviewTitle = styled(FeatureOverviewTitle)`
  font-size: 30px;
  line-height: 140%;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 20px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    font-size: 36px;
  }
`;

const ProductOverviewDescription = styled(FeatureOverviewDescription)`
  font-size: 18px;
  margin-top: 24px;
  position: relative;
  top: auto;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: auto;
  }
`;

export {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  FeaturesContent,
  HeaderContent,
  Icon,
  PermissionsFeatureShot,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
};
