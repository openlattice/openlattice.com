/*
 * @flow
 */

import React from 'react';

import FooterSection from '../footer/FooterSectionWithPageLinks';
import ProductsIntro from './ProductsIntro';
import ProductsList from './ProductsList';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Products = () => (
  <>
    <ScrollToTopOnMount />
    <ProductsIntro />
    <ProductsList />
    <FooterSection />
  </>
);

export default Products;
