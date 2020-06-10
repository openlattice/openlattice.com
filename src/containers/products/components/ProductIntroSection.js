/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import ProductIntroSectionContent from './ProductIntroSectionContent';
import ProductShot from './ProductShot';
import ProductStamp from './ProductStamp';

import PageSection from '../../../components/layout/NewPageSection';
import { Header, SubHeader } from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

type Props = {
  introHeader :string;
  introSubHeader :string;
  productIcon :Node;
  productName :string;
  productShot :Node;
};

const ProductIntroSection = ({
  introHeader,
  introSubHeader,
  productIcon: ProductIcon,
  productName,
  productShot: ProductShotImg,
} :Props) => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <ProductIntroSectionContent>
      <ProductStamp>
        <ProductIcon />
        <span>{productName}</span>
      </ProductStamp>
      <Header>{introHeader}</Header>
      <SubHeader>{introSubHeader}</SubHeader>
    </ProductIntroSectionContent>
    <ProductShot>
      <ProductShotImg />
    </ProductShot>
  </PageSection>
);

export default ProductIntroSection;
