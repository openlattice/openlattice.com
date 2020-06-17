/*
 * @flow
 */

import React from 'react';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import CorePlatformSection from './CorePlatformSection';
import GraphicSection from './GraphicSection';
import PlatformIntroSection from './PlatformIntroSection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const Platform = () => (
  <>
    <ScrollToTop />
    <PlatformIntroSection />
    <GraphicSection />
    <CorePlatformSection />
    <ComplianceAndSecuritySection />
    <FooterSection />
  </>
);

export default Platform;
