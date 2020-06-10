/*
 * @flow
 */

import React from 'react';

import CAREFeaturesSection from './CAREFeaturesSection';
import CAREIntroSection from './CAREIntroSection';

import FooterSection from '../../footer/FooterSection';
import { ContactUsPageSection, ScrollToTopOnMount } from '../../../components';

const CAREProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <CAREIntroSection />
    <CAREFeaturesSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default CAREProductPage;
