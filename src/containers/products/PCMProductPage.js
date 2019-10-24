// @flow
import React from 'react';
import styled from 'styled-components';

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
  N0,
  N4,
  N6,
  N7,
  N8,
  N9,
  PP7,
} from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 65px auto 211px auto;
  }
`;

const GalleryProductStamp = styled.a`
  align-items: center;
  background-color: ${N0};
  border-radius: 281px;
  color: ${N4};
  display: flex;
  font-weight: 600;
  line-height: 150%;
  padding: 12px 22px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const Icon = styled.img`
  margin-right: 13px;
`;

const ProductIntro = styled.div`
  color: ${N7};
  font-size: 35px;
  font-weight: bold;
  margin: 24px 0 32px 0;
  text-align: center;
  line-height: 115%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 56px;
    text-align: center;
    width: 700px;
  }
`;

const ProductDescription = styled.div`
  color: ${N8};
  font-size: 20px;
  text-align: center;
  line-height: 150%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 560px;
  }
`;

const ProductShot = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  position: absolute;
  top: 450px;
  width: 100%;
  z-index: 1000;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    top: 500px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 575px;
    width: 1104px;
    top: 625px;
  }
`;

const FeaturesContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 400px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    margin-top: 500px;
  }
`;

const FeatureOverviewWrapper = styled.div`
  width: 360px;
  height: 250px;
  margin: 48px 48px 80px 0;
  position: relative;

  :last-child {
    margin-left: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    :last-child {
      margin-right: 0;
    }
  }
`;

const FeatureOverviewTitle = styled.div`
  color: ${N7};
  font-size: 25px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 24px;
`;

const FeatureOverviewDescription = styled.div`
  color: ${N8};
  font-size: 16px;
  line-height: 150%;
  width: 100%;
  top: 170px;
  position: absolute;
`;

const ProductOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 64px 0;

  :last-of-type {
    margin-bottom: 200px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    justify-content: space-between;

    div:first-child {
      margin-right: 160px;
    }
  }
`;

const ProductOverviewDescriptionWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;
  height: 300px;
  margin-bottom: 60px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
  }
`;

const FeatureShot = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 556px;
  width: 480px;
`;

const ProductOverviewTitle = styled(FeatureOverviewTitle)`
  font-size: 36px;
  line-height: 140%;
  width: 100%;
`;

const ProductOverviewDescription = styled(FeatureOverviewDescription)`
  font-size: 18px;
  margin-top: 24px;
  position: relative;
  top: auto;
`;

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
      <Content>
        <GalleryProductStamp>
          <Icon src={PCMIcon} />
          <div>Pretrial Case Management</div>
        </GalleryProductStamp>
        <ProductIntro>Reduce time spent on risk assessments while measuring their impact</ProductIntro>
        <ProductDescription>
          {`The PCM Application allows you to autofill risk assessments leaving more time to
            manage supervision and track outcomes to measure effectiveness.`}
        </ProductDescription>
      </Content>
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
