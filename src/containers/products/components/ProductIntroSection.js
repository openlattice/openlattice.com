/*
 * @flow
 */

import React from 'react';

import ProductIntroSectionContent from './ProductIntroSectionContent';
import ProductShot from './ProductShot';
import ProductStamp from './ProductStamp';

import { Header, PageSection, SubHeader } from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

type Props = {
  introHeader :string;
  introSubHeader :string;
  productIcon :any;
  productName :string;
  productShot :any;
};

const ProductIntroSection = ({
  introHeader,
  introSubHeader,
  productIcon: ProductIcon,
  productName,
  productShot: ProductShotImg,
} :Props) => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
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
