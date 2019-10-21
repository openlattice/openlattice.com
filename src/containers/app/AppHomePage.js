/*
 * @flow
 */

import React from 'react';
import IntroSection from '../intro/IntroSection';
import ServicesSection from '../services/ServicesSection';
import TechnologySection from '../technology/TechnologySection';
import HowItWorksSection from '../howitworks/HowItWorksSection';
import JurisdictionSection from '../jurisdictions/JurisdictionSection';
import ConnectSection from '../connect/ConnectSection';
import FooterSection from '../footer/FooterSection';

const AppHomePage = () => (
  <>
    <IntroSection />
    <ServicesSection />
    <TechnologySection />
    <HowItWorksSection />
    <JurisdictionSection />
    <ConnectSection />
    <FooterSection />
  </>
);

export default AppHomePage;
