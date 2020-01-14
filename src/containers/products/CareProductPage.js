// @flow
import React from 'react';
import styled from 'styled-components';

import ContactUsSection from '../contactus/ContactUsSection';
import Feature1 from '../../assets/productfeatureicons/care/headphones.svg';
import Feature2 from '../../assets/productfeatureicons/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/care/pages.svg';
import FeatureImg1 from '../../assets/images/care/care-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/care/care-feature-shot-2.png';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import CareIcon from '../../assets/logos/care-small-logo.svg';
import PageSection from '../../components/layout/NewPageSection';
import ProductImg from '../../assets/images/care/care-product-shot.png';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import {
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
} from './styled/StyledProductComponents';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
} from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';

const IntroContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 70px auto 451px auto;
  }
`;

const CAREIntro = styled(PageIntro)`
  margin-bottom: 32px;
  width: 912px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const CAREDescription = styled(PageDescriptionWrapper)`
  margin: 0;
  width: 528px;
`;

const CareProductShot = styled(ProductShot)`
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

const CAREFeaturesContent = styled(ProductFeaturesContent)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 391px auto 96px auto;
  }
`;

const CareProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
      <IntroContent>
        <ProductStamp>
          <Icon src={CareIcon} />
          <div>CARE</div>
        </ProductStamp>
        <CAREIntro>Facilitate safe and effective interactions between patrol officers and individuals</CAREIntro>
        <CAREDescription>
          {`A mobile-friendly, real-time data platform that enables patrol officers, dispatchers, and their
            community partners to better assist the vulnerable populations.`}
        </CAREDescription>
      </IntroContent>
      <CareProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <CAREFeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Dispatch integration</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Integrate with the 911 dispatch system to deliver up-to-date, key information that officers need
              to assist encountered individuals.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Collaborative workflows</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Facilitate communication and collaboration across PD units, across zones, and with service providers,
              while protecting personal information of clients.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Response & interaction plans</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Care serves as a centralized repository for individualized contextual information and curated crisis
              response plans for frequently-encountered individuals.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </CAREFeaturesContent>
    </PageSection>
    <PageSection>
      <ExtendedFeaturesContent>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Data collection</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`The online data collection template quickly and efficiently records encounter information including
                observed behaviors, location encountered, contact information for support individuals, techniques
                used to diffuse a situation, any use of force, and the outcome of an encounter (whether it ended
                in a detention, notifying a case manager, hospitalization, or other outcome). `}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={FeatureImg1} />
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <FeatureShot bgImage={FeatureImg2} />
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Real-time data</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Care provides access to information that will facilitate interactions between individuals and first
                responders, presented in a way that is easily scanned in the field. Information submitted into
                Care can be made available to other officers almost immediately.`}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
        </ProductOverviewWrapper>
      </ExtendedFeaturesContent>
    </PageSection>
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default CareProductPage;
