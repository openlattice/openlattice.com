/*
 * @flow
 */

import React from 'react';

import ComplianceAndSecurity from './ComplianceAndSecurity';
import CorePlatformFeatures from './CorePlatformFeatures';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import GraphicSection from './GraphicSection';
import PlatformIntro from './PlatformIntro';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const Platform = () => (
  <>
    <ScrollToTopOnMount />
    <PlatformIntro />
    <GraphicSection />
    <CorePlatformFeatures />
    <ComplianceAndSecurity />
    <FooterSectionWithPageLinks />
  </>
);

export default Platform;
