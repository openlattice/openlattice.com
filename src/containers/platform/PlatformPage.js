/*
 * @flow
 */

import React from 'react';

import ComplianceAndSecurity from './ComplianceAndSecurity';
import CorePlatformFeatures from './CorePlatformFeatures';
import GraphicSection from './GraphicSection';
import PlatformIntroSection from './PlatformIntroSection';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Platform = () => (
  <>
    <ScrollToTopOnMount />
    <PlatformIntroSection />
    <GraphicSection />
    <CorePlatformFeatures />
    <ComplianceAndSecurity />
    <FooterSectionWithPageLinks />
  </>
);

export default Platform;
