// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatureicons/referrals/feature1.svg';
import Feature2 from '../../assets/productfeatureicons/referrals/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/feature3.svg';
import FeatureImg1 from '../../assets/images/referrals/referrals-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/referrals/referrals-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import ReferralsIcon from '../../assets/logos/placeholder-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/referrals/referrals-product-shot.png';
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
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={ReferralsIcon} />
          <div>Referrals</div>
        </ProductStamp>
        <ProductIntro>Referrals and service management in one platform</ProductIntro>
        <ProductDescription>
          {`Enable service providers to manage their own inbound and outbound referrals, as
            well as wait-time and other customer service-focused analytics.`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Client crisis management</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Facilitate case workers and first responders who need to provide services for
              clients in crisis, identifying appropriate services, contacting the providers
              directly, and engaging with the client.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Provider referral management platform</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Allow providers to manage all inbound and outbound referrals. Intelligent system
              alerts users when referrals need attention and automatically sends status updates
              to referring providers to close the feedback loop and provide information.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Notifications and reminders</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Enable providers to remind clients of upcoming appointments and court dates,
              achieving fewer appointment no-shows.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Patient access and engagement</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Improve customer service, engagement, and retention by ensuring patients are engaged
              throughout the entire referral process. Communicate with patients securely through the
              OpenLattice platform, resulting in a better patient experience, better patient
              understanding of results and next steps, and increased loyalty to providers.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <FeatureShot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg2} />
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Data collection & consent</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Providers can safely collect data and consent statements from their clients on the
              OpenLattice platform. the platform is HIPAA-compliant and supports other compliance
              and privacy features, such as presentation of user consent statements and data use
              agreements upon login.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ReferralsProductPage;
