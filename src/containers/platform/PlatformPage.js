/*
 * @flow
 */

import React from 'react';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import CorePlatformSection from './CorePlatformSection';
import GraphicSection from './GraphicSection';
import PlatformIntroSection from './PlatformIntroSection';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Platform = () => (
  <>
    <ScrollToTopOnMount />
    <PlatformIntroSection />
    <GraphicSection />
    <CorePlatformSection />
    <ComplianceAndSecuritySection />
    <FooterSectionWithPageLinks />
  </>
);

export default Platform;
