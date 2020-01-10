/*
 * @flow
 */

import React from 'react';

import Intro from './Intro';
import ValueProps from './ValueProps';
import Features from './Features';
import OurCustomers from './OurCustomers';
import Quotes from './Quotes';
import ContactUsSection from '../contactus/ContactUsSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';

const AppHomePage = () => (
  <>
    <Intro />
    <ValueProps />
    <Features />
    <OurCustomers />
    <Quotes />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default AppHomePage;
