// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ContactUsSection from '../contactus/ContactUsSection';
import Feature1 from '../../assets/productfeatureicons/merge.svg';
import Feature2 from '../../assets/productfeatureicons/pcm/gavel.svg';
import Feature3 from '../../assets/productfeatureicons/pcm/clipboard.svg';
import FeatureImg1 from '../../assets/images/pcm/pcm-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/pcm/pcm-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import PCMIcon from '../../assets/logos/pcm-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/pcm/pcm-product-shot.png';
import PurpleOLogo from '../../assets/images/logo-original.png';

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
import { menuStylesForProductPages } from './styled/MenuStyles';
import { NEUTRALS } from '../../core/style/Colors';

const PCMProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLogo}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={PCMIcon} />
          <div>Pretrial Case Management</div>
        </ProductStamp>
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
          <FeatureOverviewTitle>Autofill risk assessments</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Integrate your Records Management System so you do not have to manually
              look up defendant case history to complete risk assessments.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Track outcomes</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Track hearing outcomes to better understand how judges and defendants interact
              with risk assessments and release requirements broadly in your jurisdiction.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Manage supervision</FeatureOverviewTitle>
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
        <FeatureShot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg2} />
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
    <ContactUsSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
