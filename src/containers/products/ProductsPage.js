/*
 * @flow
 */

import React from 'react';

import ProductsIntroSection from './ProductsIntroSection';
import ProductsSection from './ProductsSection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const Products = () => (
  <>
    <ScrollToTop />
    <ProductsIntroSection />
    <ProductsSection />
    <FooterSection />
  </>
);

export default Products;
