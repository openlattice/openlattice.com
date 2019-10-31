// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
// import FeatureImg from '../../assets/images/gallery-feature-shot.png';
import FooterSection from '../footer/FooterSection';
import GalleryIcon from '../../assets/logos/gallery-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/gallery/gallery-product-shot.png';
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

/* eslint-disable react/no-unescaped-entities */
const GalleryProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
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
          <FeatureOverviewTitle>Role-based permissions</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`With role-based permissions you can assign all individuals who have the same level of permissions,
              for example officers, the “Officer” role, rather than individually granting each permission included
              in the role simplifying the process.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Manage organization members</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`In just a few clicks, you can easily add and remove members from your organization, and change their
              permissions to view and edit your data.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Field-level permissions</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`With field-level permissions you can restrict or grant access to data by an individual or role at the
              field level (e.g. “Officers” can see basic identification information, but not medical history)
              maintaining regulatory compliance while maximizing data sharing flexibility.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
      </FeaturesContent>
    </PageSection>
    <PageSection>
      <ProductOverviewWrapper>
        <ProductOverviewDescriptionWrapper>
          <ProductOverviewTitle>Role-based field-level permissions</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The OpenLattice Platform was built from the ground-up with the intent to enable secure, compliant data
              sharing to facilitate data-driven decision making and de-silo current data systems.  This is accomplished
              through role-based field-level permissions that grant the user maximum flexibility in granting data
              access. Users have full control over their data which can be added to, removed, and shared with anyone
              at any time.  Gallery provides a simple user interface to ensure these functions are easy to maintain. `}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        {/*<FeatureShot bgImage={FeatureImg} />*/}
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default GalleryProductPage;
