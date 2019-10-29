// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
import FeatureImg1 from '../../assets/images/cwp/cwp-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/cwp/cwp-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import CWPIcon from '../../assets/logos/cwp-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/cwp/cwp-product-shot.png';
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

const CWPProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={CWPIcon} />
          <div>Community Work Program</div>
        </ProductStamp>
        <ProductIntro>A data driven approach to managing community work programs</ProductIntro>
        <ProductDescription>
          {`A purpose-built application that provides your jurisdiction with a data driven tool to
            manage participation and completion of alternative sentences to community services`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Schedule assignments</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            Create, manage, and distribute schedules to participants at work sites in your community.
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Manage work sites</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Capture key details about work sites, including points of contact, hours of operations,
              available assignments, and participant capacity.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Monitor compliance</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Track participant compliance toward program requirements, including hours worked and
              appointment infractions.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Identify Needed Actions</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The CWP app dashboard provides a convenient view of all participants who have pending
              actions. Quickly jump to participant profiles to enroll, update, and maintain program
              participation data.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <FeatureShot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg2} />
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Track Participant Progress</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The Participant profile provides a simple view of information about your participants as
              they complete program requirements. Users can view and manage a participant’s work
              assignments and program participation on a single screen. The profile can also be
              connected to court or law enforcement data systems to reduce data entry.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default CWPProductPage;
