// @flow

import styled from 'styled-components';

import {
  N0,
  N4,
  N7,
  N8,
} from '../../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../../core/style/Sizes';

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

const GalleryProductStamp = styled.a`
  align-items: center;
  background-color: ${N0};
  border-radius: 281px;
  color: ${N4};
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
  color: ${N7};
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
  color: ${N8};
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
  height: 100%;
  position: absolute;
  top: 450px;
  width: 100%;
  z-index: 1000;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: 500px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 575px;
    width: 1104px;
    top: 625px;
  }
`;

const FeaturesContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 400px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    margin-top: 500px;
  }
`;

const FeatureOverviewWrapper = styled.div`
  width: 360px;
  height: 250px;
  margin: 48px 48px 80px 0;
  position: relative;

  :last-child {
    margin-left: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    :last-child {
      margin-right: 0;
    }
  }
`;

const FeatureOverviewTitle = styled.div`
  color: ${N7};
  font-size: 25px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 24px;
`;

const FeatureOverviewDescription = styled.div`
  color: ${N8};
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  top: 170px;
  position: absolute;
`;

const ProductOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 64px 0;

  :last-of-type {
    margin-bottom: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    justify-content: space-between;

    div:first-child {
      margin-right: 160px;
    }
  }
`;

const ProductOverviewDescriptionWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;
  height: 300px;
  margin-bottom: 60px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
  }
`;

const FeatureShot = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 556px;
  width: 480px;
`;

const ProductOverviewTitle = styled(FeatureOverviewTitle)`
  font-size: 36px;
  line-height: 140%;
  width: 100%;
`;

const ProductOverviewDescription = styled(FeatureOverviewDescription)`
  font-size: 18px;
  margin-top: 24px;
  position: relative;
  top: auto;
`;

export {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  FeaturesContent,
  GalleryProductStamp,
  HeaderContent,
  Icon,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductShot,
};
