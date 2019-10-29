// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatureicons/researchhub/feature1.svg';
import Feature2 from '../../assets/productfeatureicons/researchhub/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/researchhub/feature3.svg';
import FeatureImg1 from '../../assets/images/permissions-feature-shot.png';
import FeatureImg2 from '../../assets/images/researchhub/research-hub-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import PlaceholderIcon from '../../assets/logos/placeholder-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/researchhub/research-hub-product-shot.png';
import PurpleOLIcon from '../../assets/images/purple-ol.svg';

import { menuStylesForProductPages } from '../products/styled/MenuStyles';
import {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
  FeatureShot,
  FeaturesContent,
  HeaderContent,
  Icon,
  PermissionsFeatureShot,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductShot,
  ProductStamp,
} from '../products/styled/StyledProductComponents';
import { NEUTRALS } from '../../core/style/Colors';

const ResearchHubProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={PlaceholderIcon} />
          <div>Research Hub</div>
        </ProductStamp>
        <ProductIntro>Data integration and sharehousing</ProductIntro>
        <ProductDescription>
          {`A secure, cloud-based Management Information System (MIS) that securely integrates,
            indexes, and links highly variable and sensitive data across disparate sources`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
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
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Fine-grained permissions settings</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Dataset owner(s) can add and revoke permissions from users and roles at any time, on a per-dataset
              or per-property basis. Permissions to read, write, link, and materialize data sources can all be
              set separately.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <PermissionsFeatureShot bgImage={FeatureImg1} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <FeatureShot bgImage={FeatureImg2} />
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Secure analytics environment</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Secure, on-platform analysis using R Shiny enables internal and external research partners to collaborate
              on confidential datasets using industry standard analytic tools, respecting all dataset access rules.`}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default ResearchHubProductPage;
