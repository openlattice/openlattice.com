/*
 * @flow
 */

import React from 'react';

import FooterSection from '../footer/FooterSectionWithPageLinks';
import ProductsIntroSection from './ProductsIntroSection';
import ProductsList from './ProductsList';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Products = () => (
  <>
    <ScrollToTopOnMount />
    <ProductsIntroSection />
    <ProductsList />
    <FooterSection />
  </>
);

export default Products;
