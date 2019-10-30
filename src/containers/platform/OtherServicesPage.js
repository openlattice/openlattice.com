/*
 * @flow
 */
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import EDMImg from '../../assets/images/edm-product-shot.png';
import EDMStamp from '../../assets/logos/edm-product-stamp.png';
import FooterSection from '../footer/FooterSection';
import LinkingImg from '../../assets/images/linking-product-shot.png';
import PageSection from '../../components/layout/PageSection';
import PurpleOLogo from '../../assets/images/logo-original.png';
import ResearchHubImg from '../../assets/images/research-hub-product-shot.png';
import ResearchHubStamp from '../../assets/logos/research-hub-product-stamp.png';

import {
  FeatureShot,
  HeaderContent,
  ProductDescription,
  ProductIntro,
  ProductOverviewDescription,
  ProductOverviewDescriptionWrapper,
  ProductOverviewTitle,
  ProductOverviewWrapper,
  ProductStampWrapper,
} from '../products/styled/StyledProductComponents';
import { menuStylesForProductPages } from '../products/styled/MenuStyles';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const OtherProductsHeaderContent = styled(HeaderContent)`

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 40px auto 150px auto;
  }
`;

const TextWrapper = styled(ProductOverviewDescriptionWrapper)`
  justify-content: center;
  width: 400px;
`;

const LinkingFeatureShot = styled(FeatureShot)`
  border: none;
`;

const EDMFeatureShot = styled(FeatureShot)`
  height: 332px;
  padding: 48px;
  width: 479px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 208px;
    padding: 30px;
    width: 299px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 332px;
    width: 479px;
  }
`;

const EDMInnerFeatureShot = styled.img`
  height: 236px;
  width: 383px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 148px;
    width: 239px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 236px;
    width: 383px;
  }
`;

const OtherServicesPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLogo}
          menuStyles={menuStylesForProductPages} />
      <OtherProductsHeaderContent>
        <ProductIntro>Other services</ProductIntro>
        <ProductDescription>
          The OpenLattice Platform provides you with the ability to securely access, explore, manage, and analyze your data.
        </ProductDescription>
      </OtherProductsHeaderContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <TextWrapper>
          <ProductOverviewTitle>OpenLattice Data Linking</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The OpenLattice linking algorithm can be deployed on data stored on the Platform to de-duplicate
              individuals from within datasets and create a unified profile of individuals across datasets.
              Linking gives the officers, case workers, and health professionals interacting with these
              individuals more complete information when making treatment decisions.`}
          </ProductOverviewDescription>
          <ProductOverviewDescription>
            {`With linked data, OpenLattice can also quickly and easily calculate frequent flyers both
              across and within services, enabling jurisdictions to view and manage shared data more
              effectively by understanding how individuals interact across the spectrum of government services.`}
          </ProductOverviewDescription>
        </TextWrapper>
        <LinkingFeatureShot bgImage={LinkingImg} />
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <EDMFeatureShot>
          <EDMInnerFeatureShot src={EDMImg} />
        </EDMFeatureShot>
        <TextWrapper>
          <ProductStampWrapper src={EDMStamp} width="132px" />
          <ProductOverviewTitle>Understand how your data is stored</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`Familiarize yourself with the standardized OpenLattice graph data model and quickly and easily
              search for the entities you need. This tool facilitates analysis and development on the Platform,
              enabling users to take advantage of.`}
          </ProductOverviewDescription>
        </TextWrapper>
      </ProductOverviewWrapper>
      <ProductOverviewWrapper>
        <TextWrapper>
          <ProductStampWrapper src={ResearchHubStamp} width="239px" />
          <ProductOverviewTitle>Data integration and sharehousing</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`A secure, cloud-based Management Information System (MIS) that securely integrates, indexes, and
              links highly variable and sensitive data across disparate sources.`}
          </ProductOverviewDescription>
        </TextWrapper>
        <FeatureShot bgImage={ResearchHubImg} />
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default OtherServicesPage;
