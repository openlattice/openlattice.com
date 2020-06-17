/*
 * @flow
 */

import React from 'react';

import PrivacyPolicySection from './PrivacyPolicySection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const PrivacyPolicyPage = () => (
  <>
    <ScrollToTop />
    <PrivacyPolicySection />
    <FooterSection />
  </>
);

export default PrivacyPolicyPage;
