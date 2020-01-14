// @flow
import React from 'react';
import styled from 'styled-components';

import ContactUsSection from '../contactus/ContactUsSection';
import Feature1 from '../../assets/productfeatureicons/researchhub/feature1.svg';
import Feature2 from '../../assets/productfeatureicons/researchhub/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/researchhub/feature3.svg';
import FeatureImg1 from '../../assets/images/permissions-feature-shot.png';
import FeatureImg2 from '../../assets/images/researchhub/research-hub-feature-shot-2.png';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import PlaceholderIcon from '../../assets/logos/placeholder-small-logo.svg';
import PageSection from '../../components/layout/NewPageSection';
import ProductImg from '../../assets/images/researchhub/research-hub-product-shot.png';
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
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const IntroContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 70px auto 450px auto;
  }
`;

const ResearchHubIntro = styled(PageIntro)`
  margin-bottom: 32px;
  width: 720px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const ResearchHubDescription = styled(PageDescriptionWrapper)`
  margin: 0;
`;

const ResearchHubProductShot = styled(ProductShot)`
  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    top: 600px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    top: 690px;
  }
`;

const PermissionsFeatureShot = styled(FeatureShot)`
  height: 315px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 197px;
  }
`;

const ResearchHubProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
      <IntroContent>
        <ProductStamp>
          <Icon src={PlaceholderIcon} />
          <div>Research Hub</div>
        </ProductStamp>
        <ResearchHubIntro>Data integration and sharehousing</ResearchHubIntro>
        <ResearchHubDescription>
          {`A secure, cloud-based Management Information System (MIS) that securely integrates,
            indexes, and links highly variable and sensitive data across disparate sources.`}
        </ResearchHubDescription>
      </IntroContent>
      <ResearchHubProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection bgColor={NEUTRALS.WHITE}>
      <ProductFeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Data services</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Integrate, index, and link highly variable and sensitive data across disparate sources
              (e.g., Medicaid, DDS, Child Welfare), enabling longitudinal analysis of social services
              and health care use and outcomes, collaborative case management, and cross-agency workflow development.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Role-based access controls</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Flexible and highly customizable permissioning system, ideal for cleints with complex
              data-sharing needs.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>External collaboration management</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Enables agencies to share subsets of data with internal analysts and external research partners,
              or to share asymmetrically and link individual-level data while enabling only one agency to see
              individuals in both datasets. Facilitates the DUA-signing process.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </ProductFeaturesContent>
    </PageSection>
    <PageSection bgColor={NEUTRALS.WHITE}>
      <ExtendedFeaturesContent>
        <ProductOverviewWrapper>
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Fine-grained permissions settings</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Dataset owner(s) can add and revoke permissions from users and roles at any time, on a per-dataset
                or per-property basis. Permissions to read, write, link, and materialize data sources can all be
                set separately.`}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
          <PermissionsFeatureShot bgImage={FeatureImg1} />
        </ProductOverviewWrapper>
        <ProductOverviewWrapper>
          <FeatureShot bgImage={FeatureImg2} />
          <ProductOverviewDescriptionWrapper>
            <ExtendedFeatureHeader>Secure analytics environment</ExtendedFeatureHeader>
            <ExtendedFeatureDescription>
              {`Secure, on-platform analysis using R Shiny enables internal and external research partners to
                collaborate on confidential datasets using industry standard analytic tools, respecting all
                dataset access rules.`}
            </ExtendedFeatureDescription>
          </ProductOverviewDescriptionWrapper>
        </ProductOverviewWrapper>
      </ExtendedFeaturesContent>
    </PageSection>
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default ResearchHubProductPage;
