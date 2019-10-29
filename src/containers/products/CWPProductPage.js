// @flow
import React from 'react';
import styled from 'styled-components';

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
import PurpleOLLogo from '../../assets/images/logo-original.png';

import { menuStylesForProductPages } from './styled/MenuStyles';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
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

const CWPFeature1Shot = styled(FeatureShot)`
  height: 556px;
  width: 438px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 348px;
    width: 274px;
  }
`;

const CWPFeature2Shot = styled(FeatureShot)`
  height: 519px;
  width: 480px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 324px;
    width: 300px;
  }
`;

const CWPProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLLogo}
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
        <CWPFeature1Shot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <CWPFeature2Shot bgImage={FeatureImg2} />
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
