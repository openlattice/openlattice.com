/*
 * @flow
 */

import React from 'react';

import ResearchHubIntroSection from './ResearchHubIntroSection';

import FooterSection from '../../footer/FooterSection';
import { ScrollToTop } from '../../../components';

const PCMProductPage = () => (
  <>
    <ScrollToTop />
    <ResearchHubIntroSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
