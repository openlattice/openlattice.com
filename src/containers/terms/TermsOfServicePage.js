/*
 * @flow
 */

import React from 'react';

import TermsOfServiceSection from './TermsOfServiceSection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const TermsOfServicePage = () => (
  <>
    <ScrollToTop />
    <TermsOfServiceSection />
    <FooterSection />
  </>
);

export default TermsOfServicePage;
