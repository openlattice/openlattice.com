// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
// import FeatureImg1 from '../../assets/images/pcm-feature-shot-1.png';
// import FeatureImg2 from '../../assets/images/pcm-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import ReferralsIcon from '../../assets/logos/placeholder-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/referrals-product-shot.svg';
import PurpleOLIcon from '../../assets/images/purple-ol.svg';

import { menuStylesForProductPages } from './styled/MenuStyles';

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

import { NEUTRALS } from '../../core/style/Colors';

const ReferralsProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={ReferralsIcon} />
          <div>Referrals</div>
        </ProductStamp>
        <ProductIntro>Refer clients to social services and share information with other service providers</ProductIntro>
        <ProductDescription>
          {`The referrals management platform is a mobile-friendly application that allows case workers,
            first responders, and other providers to identify and suggest services for their clients,
            manage a person's referrals, and close the information loop with other service providers.`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Address Client Crises</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Facilitate case workers and first responders who need to provide services for clients in crisis,
              identifying appropriate services available in a specific geographic location, contacting the
              provider directly, and engaging the client with whatever information is available.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Manage Referrals</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Allow providers to manage all inbound and outbound referrals and alert
              users when referrals need attention, automatically sending status updates to referring
              providers to close the feedback loop and provide information.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Engage with Patients</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Improve customer service, engagement, and retention by ensuring patients are engaged throughout
              the entire referral process. Communicate with patients securely through the OpenLattice platform,
              resulting in a better patient experience, better patient understanding of results and next steps,
              and increased loyalty to providers.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Use Real-Time Analytics</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Providers achieve greater insight into their businesses using real-time analytics such as metrics
              dashboards, referral volume, trends, leakage rate, capture rate, service levels, wait times, outreach
              results, and other self-defined outcomes of interest. They can track metrics over time and also
              achieve greater awareness of external provider wait-time and responsiveness trends, ensuring that
              the patients that they refer out receive the highest standards of care.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        {/* <FeatureShot bgImage={FeatureImg1} /> */}
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        {/* <FeatureShot bgImage={FeatureImg2} /> */}
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Collect Data Safely</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Providers can safely collect data and consent statements from their clients on the OpenLattice platform.
              The platform is HIPAA-compliant and supports other compliance and privacy features, such as presentation
              of user consent statements and data use agreements upon login.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ReferralsProductPage;
