/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import ChronicleFAQ from './ChronicleFAQ';
import {
  ANALYZE_COLLABORATE,
  APP_DESCRIPTION,
  ENSURE_DATA_QUALITY,
  INTEGRATE_DATA,
  INTEGRATE_DESCRIPTION,
  INTRO_DESCRIPTION,
  INTRO_HEADER,
  MANAGE_PARTICIPANTS,
  REVIEW_DESCRIPTION,
  SAVE_TIME,
} from './constants';

import FooterSection from '../../footer/FooterSection';
import OpenLatticeIcon from '../../../assets/svg/icons/ol-icon.svg';
import PageSection from '../../../components/layout/NewPageSection';
import ScrollToTopOnMount from '../../../components/layout/ScrollToTopOnMount';
import {
  ChronicleAndroidAppPNG,
  ChronicleParticipantsTableImg,
  ChronicleStudyDetailsPNG,
  MetaTablePNG,
} from '../../../assets/images/chronicle';
import {
  BarsCircleIcon,
  MergeArrowCircleIcon,
  UserCircleIcon,
} from '../../../assets/svg/circle-icons';
import { PageDescription, PageIntro } from '../../../components/headers/PageHeaders';
import { ContactUsPageSection } from '../../../components/sections';
import { NEUTRALS } from '../../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../../core/style/Sizes';
import {
  ExtendedFeatureDescription,
  ExtendedFeatureHeader,
  ExtendedFeaturesContent,
  FeatureShot,
  Icon,
  ProductOverviewDescriptionWrapper,
  ProductOverviewWrapper,
  ProductStamp,
} from '../styled/StyledProductComponents';

const IntroContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto 250px auto;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 50px auto 350px auto;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 90px auto 350px auto;
  }
`;

const IntroTitle = styled(PageIntro)`
  max-width: 1000px;
`;

const IntroDescription = styled(PageDescription)`
  max-width: ${CONTENT_WIDTH}px;
`;

const ProductShot = styled.div`
  align-self: center;
  max-width: ${CONTENT_WIDTH + 60}px;
  padding: 0 30px;
  position: absolute;
  top: 80%;
  width: 100%;
  z-index: 100;

  > img {
    border-radius: 2px;
    border: 1px solid ${NEUTRALS.GRAY_09};
    box-shadow: 0 10px 30px rgba(48, 47, 57, 0.05);
    width: 100%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    top: 75%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: 70%;
  }
`;

const ContentGrid = styled.div`
  align-self: center;
  display: grid;
  line-height: 1.5;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;

  h1 {
    font-weight: 36px;
    margin: 0 0 24px 0;
  }

  h2 {
    font-size: 25px;
    font-weight: 600;
    margin: 24px 0 16px 0;
  }

  span {
    white-space: pre-wrap;
  }
`;

const ProductFeaturesContentGrid = styled(ContentGrid)`
  grid-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 200px;
  margin-top: 20%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin-top: 30%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 450px;
  }
`;

const ProductInfoContentGrid = styled(ContentGrid)`
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 150px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    grid-gap: 200px;
  }
`;

const ChronicleProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
      <IntroContent>
        <ProductStamp>
          <Icon src={OpenLatticeIcon} />
          <div>CHRONICLE</div>
        </ProductStamp>
        <IntroTitle>{INTRO_HEADER}</IntroTitle>
        <IntroDescription>{INTRO_DESCRIPTION}</IntroDescription>
      </IntroContent>
      <ProductShot>
        <ChronicleParticipantsTableImg />
      </ProductShot>
    </PageSection>
    <PageSection>
      <ProductFeaturesContentGrid>
        <div>
          <UserCircleIcon />
          <h2>Manage Participants</h2>
          <span>{MANAGE_PARTICIPANTS}</span>
        </div>
        <div>
          <MergeArrowCircleIcon />
          <h2>Integrate Data</h2>
          <span>{INTEGRATE_DATA}</span>
        </div>
        <div>
          <BarsCircleIcon />
          <h2>Analyze & Collaborate</h2>
          <span>{ANALYZE_COLLABORATE}</span>
        </div>
      </ProductFeaturesContentGrid>
    </PageSection>
    <PageSection>
      <ExtendedFeaturesContent>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>
              Streamline data collection and communication with participants through the Chronicle Mobile app
            </ExtendedFeatureHeader>
            <ExtendedFeatureDescription>{APP_DESCRIPTION}</ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={ChronicleAndroidAppPNG} />
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <FeatureShot bgImage={MetaTablePNG} />
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Review study data</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>{REVIEW_DESCRIPTION}</ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Integrate and share data</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>{INTEGRATE_DESCRIPTION}</ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={ChronicleStudyDetailsPNG} />
        </ProductOverviewWrapper>
      </ExtendedFeaturesContent>
    </PageSection>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <ProductInfoContentGrid>
        <div>
          <h1>Ensure data quality with comprehensive participant status</h1>
          <span>{ENSURE_DATA_QUALITY}</span>
        </div>
        <div>
          <h1>Save time with automated compliance documentation</h1>
          <span>{SAVE_TIME}</span>
        </div>
      </ProductInfoContentGrid>
    </PageSection>
    <PageSection>
      <ChronicleFAQ />
    </PageSection>
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default ChronicleProductPage;
