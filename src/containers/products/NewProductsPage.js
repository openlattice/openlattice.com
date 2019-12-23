/*
 * @flow
 */

import React from 'react';

import ContactUsSection from '../contactus/ContactUsSection';
import FooterSection from '../footer/FooterSectionWithPageLinks';
import ProductsIntro from './ProductsIntro';
import ProductsList from './ProductsList';

const Products = () => (
  <>
    <ProductsIntro />
    <ProductsList />
    <ContactUsSection />
    <FooterSection />
  </>
);

export default Products;
