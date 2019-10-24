// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatures/feature1.svg';
import Feature2 from '../../assets/productfeatures/feature2.svg';
import Feature3 from '../../assets/productfeatures/feature3.svg';
// import FeatureImg1 from '../../assets/images/pcm-feature-shot-1.png';
// import FeatureImg2 from '../../assets/images/pcm-feature-shot-2.png';
import FooterSection from '../footer/FooterSection';
import GalleryIcon from '../../assets/logos/gallery-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
// import ProductImg from '../../assets/images/pcm-product-shot.png';
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
        <ProductIntro>Manage your organization's granular, role-based permissions quickly and easily</ProductIntro>
        <ProductDescription>
          {`Gallery allows you to securely share data while maintaining compliance with any regulations in your
            field or jurisdiction.`}
        </ProductDescription>
      </HeaderContent>
      {/* <ProductShot bgImage={ProductImg} /> */}
    </PageSection>
    <PageSection>
      <FeaturesContent>
        <FeatureOverviewWrapper>
          <img src={Feature1} alt="" />
          <FeatureOverviewTitle>Role-Based Permissions</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`With role-based permissions you can assign all individuals who have the same level of permissions,
              for example officers, the “Officer” role, rather than individually granting each permission
              included in the role simplifying the process.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature2} alt="" />
          <FeatureOverviewTitle>Manage Organization Members</FeatureOverviewTitle>
          <FeatureOverviewDescription>
            {`In just a few clicks, you can easily add and remove members from your organization, and change their
              permissions to view and edit your data.`}
          </FeatureOverviewDescription>
        </FeatureOverviewWrapper>
        <FeatureOverviewWrapper>
          <img src={Feature3} alt="" />
          <FeatureOverviewTitle>Field-Level Permissions</FeatureOverviewTitle>
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
          <ProductOverviewTitle>Role-Based Field-Level Permissions</ProductOverviewTitle>
          <ProductOverviewDescription>
            {`The OpenLattice Platform was built from the ground-up with the intent to enable secure, compliant data
              sharing to facilitate data-driven decision making and de-silo current data systems.  This is accomplished
              through role-based field-level permissions that grant the user maximum flexibility in granting data
              access. Users have full control over their data which can be added to, removed, and shared with anyone
              at any time.  Gallery provides a simple user interface to ensure these functions are easy to maintain. `}
          </ProductOverviewDescription>
        </ProductOverviewDescriptionWrapper>
        {/* <FeatureShot bgImage={FeatureImg1} /> */}
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default GalleryProductPage;
