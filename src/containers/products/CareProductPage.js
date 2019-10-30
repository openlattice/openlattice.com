// @flow
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatureicons/care/headphones.svg';
import Feature2 from '../../assets/productfeatureicons/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/care/pages.svg';
import FeatureImg1 from '../../assets/images/care/care-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/care/care-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import CareIcon from '../../assets/logos/care-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/care/care-product-shot.png';
import PurpleOLLogo from '../../assets/images/logo-original.png';

import { menuStylesForProductPages } from './styled/MenuStyles';
import {
  MEDIA_QUERY_JUR_SM,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
} from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';
import {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  FeaturesContent,
  HeaderContent,
  Icon,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
} from './styled/StyledProductComponents';

const CareProductShot = styled(ProductShot)`
  top: 450px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    top: 800px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) and (max-width: ${MEDIA_QUERY_JUR_SM}px) {
    top: 665px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) and (max-width: ${MEDIA_QUERY_MD}px) {
    top: 600px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) and (max-width: ${MEDIA_QUERY_LG}px) {
    top: 695px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: 725px;
  }
`;

const CareProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLLogo}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={CareIcon} />
          <div>CARE</div>
        </ProductStamp>
        <ProductIntro>Facilitate safe and effective interactions between patrol officers and individuals</ProductIntro>
        <ProductDescription>
          {`The Coordination, Assessment, Response and Engagement (CARE) Application is a mobile-friendly,
            real-time data platform that enables patrol officers, dispatchers, and their community partners
            to better and more safely assist vulnerable populations.`}
        </ProductDescription>
      </HeaderContent>
      <CareProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Create Person Profiles</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Allow creation of profiles for people who may be experiencing mental illness, homelessness,
              chemical dependencies, and other behavioral issues.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Use Real-Time Data</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Provide access to information that will facilitate interactions between individuals and
              first responders, presented in a way that is easily scanned in the field. Information submitted
              into CARE can be made available to other officers almost immediately.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Integrate with Dispatch</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Integrate with the 911 dispatch system to deliver up-to-date, key information that
              officers need to assist encountered individuals.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Record Robust Encounter Information</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The online data collection template quickly and efficiently records encounter information including
              observed behaviors, location encountered, contact information for support individuals, techniques
              used to diffuse a situation, any use of force, and the outcome of an encounter (whether it ended
              in a detention, notifying a case manager, hospitalization, or other outcome). `}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <FeatureShot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg2} />
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Create Response and Interaction Plans</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`CARE serves as a centralized repository for individualized contextual information and curated
              crisis response plans for frequently-encountered individuals. The platform facilitates communication and
              collaboration across PD units, across zones, and with service providers, while protecting
              personal information of clients.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default CareProductPage;
