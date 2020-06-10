/*
 * @flow
 */

import React from 'react';

import ResearchHubIntroSection from './ResearchHubIntroSection';

import FooterSection from '../../footer/FooterSection';
import { ScrollToTopOnMount } from '../../../components';

const PCMProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <ResearchHubIntroSection />
    <FooterSection />
  </>
);

export default PCMProductPage;
