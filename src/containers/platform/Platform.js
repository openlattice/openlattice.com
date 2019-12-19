/*
 * @flow
 */

import React from 'react';

import PlatformIntro from './PlatformIntro';
import GraphicSection from './GraphicSection';
import CorePlatformFeatures from './CorePlatformFeatures';
import ComplianceAndSecurity from './ComplianceAndSecurity';

const Platform = () => (
  <>
    <PlatformIntro />
    <GraphicSection />
    <CorePlatformFeatures />
    <ComplianceAndSecurity />
  </>
);

export default Platform;
