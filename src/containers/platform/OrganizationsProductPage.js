// @flow
import React from 'react';

import AppHeader from '../../components/headers/AppHeader';
import ConnectSection from '../connect/ConnectSection';
import Feature1 from '../../assets/productfeatureicons/organizations/feature1.svg';
import Feature2 from '../../assets/productfeatureicons/organizations/feature2.svg';
import Feature3 from '../../assets/productfeatureicons/organizations/feature3.svg';
import FeatureImg from '../../assets/images/permissions-feature-shot.png';
import FooterSection from '../footer/FooterSection';
import OrganizationsIcon from '../../assets/logos/organizations-small-logo.svg';
import PageSection from '../../components/layout/PageSection';
import ProductImg from '../../assets/images/organizations/organizations-product-shot.png';
import PurpleOLIcon from '../../assets/images/purple-ol.svg';

import { menuStylesForProductPages } from '../products/styled/MenuStyles';

import {
  FeatureOverviewDescription,
  FeatureOverviewTitle,
  FeatureOverviewWrapper,
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

/* eslint-disable react/no-unescaped-entities */
const OrganizationsProductPage = () => (
  <>
    <PageSection bgColor={NEUTRALS.GRAY05}>
      <AppHeader
          logo={PurpleOLIcon}
          menuStyles={menuStylesForProductPages} />
      <HeaderContent>
        <ProductStamp>
          <Icon src={OrganizationsIcon} />
          <div>Organizations</div>
        </ProductStamp>
        <ProductIntro>Manage your organization's granular, role-based permissions quickly and easily</ProductIntro>
        <ProductDescription>
          {`The Organizations app allows you to securely share data while maintaining compliance with any
            regulations in your field or jurisdiction.`}
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
        <PermissionsFeatureShot bgImage={FeatureImg} />
      </ProductOverviewWrapper>
    </PageSection>
    <ConnectSection />
    <FooterSection />
  </>
);

export default OrganizationsProductPage;
