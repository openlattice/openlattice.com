// @flow
import React from 'react';
import styled, { css } from 'styled-components';

import ContactUsSection from '../contactus/ContactUsSection';
import Feature1 from '../../assets/productfeatureicons/merge.svg';
import Feature2 from '../../assets/productfeatureicons/pcm/gavel.svg';
import Feature3 from '../../assets/productfeatureicons/pcm/clipboard.svg';
import FeatureImg1 from '../../assets/images/pcm/pcm-feature-shot-1.png';
import FeatureImg2 from '../../assets/images/pcm/pcm-feature-shot-2.png';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import PCMIcon from '../../assets/logos/pcm-small-logo.svg';
import PageSection from '../../components/layout/NewPageSection';
import ProductImg from '../../assets/images/pcm/pcm-product-shot.png';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

import { PageIntro, SectionHeader } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import {
  FeatureShot,
  Icon,
  ProductShot,
  ProductStamp,
} from './styled/StyledProductComponents';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
} from '../../core/style/Sizes';
import { TARGET } from '../../components/headers/MenuConsts';

const report :string = ' 2013 report ';
const reportLink :string = 'https://craftmediabucket.s3.amazonaws.com/uploads/PDFs/LJAF_Report_hidden-costs_FNL.pdf';
const courtReminders :string = ' positive impact court reminders can have';
const courtRemindersLink :string = `https://urbanlabs.uchicago.edu/attachments/3b31252760b28d3b44ad1a8d964d0f1e9128af34/
  store/9c86b123e3b00a5da58318f438a6e787dd01d66d0efad54d66aa232a6473/
  I42-954_NYCSummonsPaper_Final_Mar2018.pdf`;


const IntroContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 70px auto 450px auto;
  }
`;

const PCMIntro = styled(PageIntro)`
  margin-bottom: 32px;
  width: 720px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const PCMDescription = styled(PageDescriptionWrapper)`
  margin: 0;
`;

const ProductFeaturesContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    align-items: flex-start;
    flex-direction: row;
    margin: 440px auto 96px auto;
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-top: 150px;
  }
`;

const ExtendedFeaturesContent = styled(ProductFeaturesContent)`
  align-self: center;
  margin-top: 0;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 32px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    align-items: flex-start;
    flex-direction: column;
    margin: 0 0 200px 0;
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin: 40px 0;
  }
`;

const FeatureOverviewWrapper = styled.div`
  margin: 30px 0;
  min-height: 250px;
  position: relative;
  width: 366px;

  :last-child {
    margin-left: 0;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 48px 48px 80px 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

const FeatureOverviewTitle = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 25px;
  font-weight: 600;
  line-height: 150%;
  margin-top: 24px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 18px;
  }
`;

const paragraphStyles = css`
  color: ${NEUTRALS.GRAY_07};
  line-height: 150%;
`;

const FeatureOverviewDescription = styled.div`
  font-size: 16px;
  margin-top: 16px;
  width: 100%;
  ${paragraphStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: 170px;
  }
`;

const ProductOverviewWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 64px 0;
  width: 100%;

  span:first-child {
    margin-bottom: 64px;
  }

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
    justify-content: space-between;

    span:first-child {
      margin-bottom: 0;
    }
  }
`;

const ProductOverviewDescriptionWrapper = styled.span`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  justify-content: center;
  margin-bottom: 60px;
  width: 464px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
  }
`;

const ExtendedFeatureHeader = styled(SectionHeader)`
  align-self: flex-start;
  text-align: left;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 432px;
  }
`;

const ExtendedFeatureDescription = styled.div`
  font-size: 18px;
  position: relative;
  top: auto;
  ${paragraphStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    top: auto;
    width: 464px;
  }
`;

const PurpleLink = styled.a`
  ${paragraphStyles}
  color: ${PURPLES.PP08};
  font-size: 18px;
  text-decoration: none;
`;

const PCMProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
      <IntroContent>
        <ProductStamp>
          <Icon src={PCMIcon} />
          <div>Pretrial Case Management</div>
        </ProductStamp>
        <PCMIntro>Reduce time spent on risk assessments while measuring their impact</PCMIntro>
        <PCMDescription>
          {`Autofill risk assessments and focus on managing supervision and tracking outcomes
            to measure effectiveness.`}
        </PCMDescription>
      </IntroContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection bgColor={NEUTRALS.WHITE}>
      <ProductFeaturesContent>
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
      </ProductFeaturesContent>
    </PageSection>
    <PageSection bgColor={NEUTRALS.WHITE}>
      <ExtendedFeaturesContent>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Manage risk in your community</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              Reducing jail population safely and objectively can reduce cost to taxpayers while
              allowing defendants who have been deemed low-risk to continue to work and live in the community.
              Furthermore, a
              <PurpleLink href={reportLink} target={TARGET}>{ report }</PurpleLink>
              found low-risk defendants held 2-3 days on pretrial detention were
              roughly 40% more likely to be arrested on new criminal activity after release than those held
              less than 24 hours.
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <FeatureShot bgImage={FeatureImg1} />
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <FeatureShot bgImage={FeatureImg2} />
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Supervision touchpoints</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              Failures to appear can result in additional jurisdiction resources spent executing warrants, and
                potential avoidable jail time for defendants.  Knowing the
              <PurpleLink href={courtRemindersLink} target={TARGET}>{ courtReminders }</PurpleLink>
              , OpenLattice developed both an automated Court Reminder system and an automated
              Voice Verification Check-In system.  This allows jurisdictions to maximize benefit, while
              maintaining minimal labor requirements.
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
        </ProductOverviewWrapper>
      </ExtendedFeaturesContent>
    </PageSection>
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default PCMProductPage;
