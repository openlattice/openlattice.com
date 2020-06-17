/*
 * @flow
 */

import React from 'react';

import PCMFeaturesSection from './PCMFeaturesSection';
import PCMIntroSection from './PCMIntroSection';

import FooterSection from '../../footer/FooterSection';
import { ContactUsPageSection, ScrollToTop } from '../../../components';

const PCMProductPage = () => (
  <>
    <ScrollToTop />
    <PCMIntroSection />
    <PCMFeaturesSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
