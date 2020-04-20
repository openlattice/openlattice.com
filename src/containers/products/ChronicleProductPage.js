/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import {
  ExtendedFeatureDescription,
  ExtendedFeatureHeader,
  ExtendedFeaturesContent,
  FeatureShot,
  Icon,
  ProductOverviewDescriptionWrapper,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
} from './styled/StyledProductComponents';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';
import { PageIntro } from '../../components/headers/PageHeaders';
import ChronicleIcon from '../../assets/logos/placeholder-logo.svg';
import FeatureImg1 from '../../assets/images/chronicle/chronicle_participants.png';
import FeatureImg2 from '../../assets/images/chronicle/mobile_screenshot_inapp.png';
import FeatureImg3 from '../../assets/images/chronicle/chronicle_data.png';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import PageSection from '../../components/layout/NewPageSection';
import ProductImg from '../../assets/images/chronicle/chronicle_dashboard.png';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const IntroContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 70px auto 320px;
  }
`;
const ChronicleExtendedFeaturesContent = styled(ExtendedFeaturesContent)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 450px auto 96px auto;
  }
`;

const ChronicleIntro = styled(PageIntro)`
  margin-bottom: 32px;
  width: 912px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const ChronicleDescription = styled(PageDescriptionWrapper)`
  margin: 0;
  width: 528px;
`;
const ChronicleProductShot = styled(ProductShot)`
  margin-top: 50px;
  top: 450px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    top: 800px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: 660px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: 643px;
  }
`;

const ChronicleProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
      <IntroContent>
        <ProductStamp>
          <Icon src={ChronicleIcon} />
          <div>CHRONICLE</div>
        </ProductStamp>
        <ChronicleIntro>
    A novel, passive sensing research tool for Android
      that collects mobile device usage data with low participant burden.
        </ChronicleIntro>
        <ChronicleDescription>
          {`With continuous time stamped output about app usage, research teams can 
        calculate detailed variables that reflect the complex ways that children 
        and adults use mobile media.`}
        </ChronicleDescription>
      </IntroContent>
      <ChronicleProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <ChronicleExtendedFeaturesContent>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Easy to Enroll and Monitor Participants</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Participants only need to download the application onto their 
                smartphone or tablet and sign in with the study ID and link you 
                provide them. Participants only need to download the Chronicle 
                application from the Google Play Store and click a specialized 
                link sent to them from the study team which will input their 
                personalized login information into the app to enroll their device. 
                The Chronicle application will upload data to the OpenLattice 
                platform every 15 minutes while the device is connected to WiFi. 
                If participants wish to stop their data collection at any time, 
                all they need to do is uninstall the app.. `}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={FeatureImg1} />
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <FeatureShot bgImage={FeatureImg2} />
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>How it Works</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Chronicle objectively measures the duration, content, and timing 
                of Android mobile device use. Researchers receive an output which 
                includes every user interaction, application launch and termination, 
                how often the device is checked, and other data points all with 
                appropriate time stamps. Data are stored on HIPAA-compliant servers 
                and are not linked to any persistent identifiers.`}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Research Team Support</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Chronicle was developed by child and family researchers, so we 
                understand the needs that different research teams may have.  
                We provide set-up support (e.g., how to set up a study, verbiage 
                  to use in your IRB application), prompt service support, and 
                  guidance on data analysis.`}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={FeatureImg3} />
        </ProductOverviewWrapper>
      </ChronicleExtendedFeaturesContent>
    </PageSection>
    <FooterSectionWithPageLinks />


  </>
);

export default ChronicleProductPage;
