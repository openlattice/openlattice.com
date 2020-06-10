/*
 * @flow
 */

import React from 'react';

import ChronicleFAQSection from './ChronicleFAQSection';
import ChronicleFeaturesSection from './ChronicleFeaturesSection';
import ChronicleFeaturesSection2 from './ChronicleFeaturesSection2';
import ChronicleIntroSection from './ChronicleIntroSection';

import FooterSection from '../../footer/FooterSection';
import ScrollToTopOnMount from '../../../components/layout/ScrollToTopOnMount';
import { ContactUsPageSection } from '../../../components/sections';

const ChronicleProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <ChronicleIntroSection />
    <ChronicleFeaturesSection />
    <ChronicleFeaturesSection2 />
    <ChronicleFAQSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default ChronicleProductPage;
