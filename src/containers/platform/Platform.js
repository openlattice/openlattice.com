/*
 * @flow
 */

import React from 'react';

import PlatformIntro from './PlatformIntro';
import GraphicSection from './GraphicSection';
import CorePlatformFeatures from './CorePlatformFeatures';
import ComplianceAndSecurity from './ComplianceAndSecurity';
import ContactUsSection from '../contactus/ContactUsSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';

const Platform = () => (
  <>
    <PlatformIntro />
    <GraphicSection />
    <CorePlatformFeatures />
    <ComplianceAndSecurity />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default Platform;
