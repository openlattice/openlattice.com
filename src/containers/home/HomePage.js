/*
 * @flow
 */

import React from 'react';

import FeaturesSection from './FeaturesSection';
import InfoSection from './InfoSection';
import IntroSection from './IntroSection';
import OurCustomersSection from './OurCustomersSection';
import QuotesSection from './QuotesSection';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const HomePage = () => (
  <>
    <ScrollToTopOnMount />
    <IntroSection />
    <InfoSection />
    <FeaturesSection />
    <QuotesSection />
    <OurCustomersSection />
    <FooterSectionWithPageLinks />
  </>
);

export default HomePage;
