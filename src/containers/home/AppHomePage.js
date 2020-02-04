/*
 * @flow
 */

import React from 'react';

import Features from './Features';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import Intro from './Intro';
import OurCustomers from './OurCustomers';
import Quotes from './Quotes';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';
import ValueProps from './ValueProps';

const AppHomePage = () => (
  <>
    <ScrollToTopOnMount />
    <Intro />
    <ValueProps />
    <Features />
    <Quotes />
    <OurCustomers />
    <FooterSectionWithPageLinks />
  </>
);

export default AppHomePage;
