/*
 * @flow
 */

import React from 'react';

import CAREFeaturesSection from './CAREFeaturesSection';
import CAREIntroSection from './CAREIntroSection';

import FooterSection from '../../footer/FooterSection';
import { ContactUsPageSection, ScrollToTop } from '../../../components';

const CAREProductPage = () => (
  <>
    <ScrollToTop />
    <CAREIntroSection />
    <CAREFeaturesSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default CAREProductPage;
