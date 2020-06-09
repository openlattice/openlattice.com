/*
 * @flow
 */

import React from 'react';

import FooterSection from '../footer/FooterSectionWithPageLinks';
import ProductsIntroSection from './ProductsIntroSection';
import ProductsSection from './ProductsSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Products = () => (
  <>
    <ScrollToTopOnMount />
    <ProductsIntroSection />
    <ProductsSection />
    <FooterSection />
  </>
);

export default Products;
