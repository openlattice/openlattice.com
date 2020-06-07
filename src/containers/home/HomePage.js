/*
 * @flow
 */

import React from 'react';

import FeaturesSection from './FeaturesSection';
import HomeIntroSection from './HomeIntroSection';
import InfoSection from './InfoSection';
import OurCustomersSection from './OurCustomersSection';
import QuotesSection from './QuotesSection';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const HomePage = () => (
  <>
    <ScrollToTopOnMount />
    <HomeIntroSection />
    <InfoSection />
    <FeaturesSection />
    <QuotesSection />
    <OurCustomersSection />
    <FooterSectionWithPageLinks />
  </>
);

export default HomePage;
