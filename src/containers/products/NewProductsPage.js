/*
 * @flow
 */

import React from 'react';

import ContactUsSection from '../contactus/ContactUsSection';
import FooterSection from '../footer/FooterSectionWithPageLinks';
import ProductsIntro from './ProductsIntro';
import ProductsList from './ProductsList';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Products = () => (
  <>
    <ScrollToTopOnMount />
    <ProductsIntro />
    <ProductsList />
    <ContactUsSection />
    <FooterSection />
  </>
);

export default Products;
