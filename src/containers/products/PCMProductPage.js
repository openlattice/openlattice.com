// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
import FeatureImg1 from '../../assets/images/pcm-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/pcm-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import PCMIcon from '../../assets/logos/pcm-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/pcm-product-shot.png';
import PurpleOLIcon from '../../assets/images/purple-ol.svg';

import {
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
} from './styled/StyledProductComponents';

import {
  N6,
  N7,
  N9,
  PP7,
} from '../../core/style/Colors';

const PCMProductPage = () => (
  <>
    <PageSection bgColor={N6}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={{
            activeStyles: {
              color: N7,
              fontWeight: 600
            },
            includeScheduleButtonBorder: true,
            menuFontColor: N9,
            scheduleBorderColor: PP7,
            scheduleColor: PP7
          }} />
      <HeaderContent>
        <GalleryProductStamp>
          <Icon src={PCMIcon} />
          <div>Pretrial Case Management</div>
        </GalleryProductStamp>
        <ProductIntro>Reduce time spent on risk assessments while measuring their impact</ProductIntro>
        <ProductDescription>
          {`The PCM Application allows you to autofill risk assessments leaving more time to
            manage supervision and track outcomes to measure effectiveness.`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Autofill Risk Assessments</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Integrate your Records Management System so you do not have to manually
              look up defendant case history to complete risk assessments.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Track Outcomes</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Track hearing outcomes to better understand how judges and defendants interact
              with risk assessments and release requirements broadly in your jurisdiction.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Manage Supervision</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Send automated court reminders to reduce Failure to Appear rates, and manage
              voice verification check-in appointments, and track community service completion.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Manage Risk in Your Community</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Reducing jail population safely and objectively can reduce cost to taxpayers while
              allowing defendants who have been deemed low-risk to continue to work and live in the community.
              Furthermore, a 2013 report found low-risk defendants held 2-3 days on pretrial detention were
              roughly 40% more likely to be arrested on new criminal activity after release than those held
              less than 24 hours.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <FeatureShot bgImage={FeatureImg2} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg1} />
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Supervision Touchpoints</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Failures to appear can result in additional jurisdiction resources spent executing warrants, and
              potential avoidable jail time for defendants.  Knowing the positive impact court reminders can have,
              OpenLattice developed both an automated Court Reminder system and an automated Voice Verification
              Check-In system.  This allows jurisdictions to maximize benefit, while maintaining minimal labor
              requirements.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
