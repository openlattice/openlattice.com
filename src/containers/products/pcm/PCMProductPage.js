/*
 * @flow
 */

import React from 'react';

import PCMFeaturesSection from './PCMFeaturesSection';
import PCMIntroSection from './PCMIntroSection';
import FooterSection from '../../footer/FooterSection';
import { ContactUsPageSection, ScrollToTopOnMount } from '../../../components';

const PCMProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PCMIntroSection />
    <PCMFeaturesSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
