// @flow
import React from 'react';
import styled from 'styled-components';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatureicons/merge.svg';
import Feature2 from '../../assets/productfeatureicons/cycle.svg';
import FeatureImg from '../../assets/images/gallery/gallery-feature-shot.png';
import FooterSection from '../footer/FooterSection';
import GalleryIcon from '../../assets/logos/gallery-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/gallery/gallery-product-shot.png';
import PurpleOLLogo from '../../assets/images/logo-original.png';

import { menuStylesForProductPages } from '../products/styled/MenuStyles';
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
} from '../products/styled/StyledProductComponents';

const GalleryFeatureShot = styled(FeatureShot)`
  border: none;
  box-shadow: none;
  height: 549px;
  width: 492px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 270px;
    width: 306px;
  }
`;

/* eslint-disable react/no-unescaped-entities */
const GalleryProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY_05}>
      <AppHeader
          logo={PurpleOLLogo}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={GalleryIcon} />
          <div>Gallery</div>
        </ProductStamp>
        <ProductIntro>Explore your data and identify frequent flyers in only a few clicks</ProductIntro>
        <ProductDescription>
          {`Gallery allows you to view your raw and linked data, and easily identify frequent flyers
            by a variety of criteria (e.g. most jail stays, most interactions with health clinics, etc.).`}
        </ProductDescription>
      </HeaderContent>
      <ProductShot bgImage={ProductImg} />
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Frequent Flyer Identifier</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`Search for the dataset, or linked dataset you would like to view, select the criteria by which
              you would like to measure frequent flyers, click “calculate top utilizers,” and explore those
              that use your jurisdiction's services the most.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Data Explorer</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`In just a few clicks, administrators can easily add and remove members from their organization,
              and also change member permissions to view and/or edit data.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Frequent Flyer Identifier</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The frequent flyer identifier allows you to quickly and easily understand who in your jurisdiction is
              consuming services, and how they interact with and consume said services. You can choose to look at
              individual datasets, for example jail data to identify those individuals who cycle in and out with
              a high number of bookings but a low number of days per jail stay to identify potential candidates
              for diversion. Furthermore, you can view cross-sectional linked datasets to identify frequent
              flyers across the spectrum of social services in your jurisdiction to view a more complete picture
              of your jurisdiction. `}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        <GalleryFeatureShot bgImage={FeatureImg} />
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default GalleryProductPage;
