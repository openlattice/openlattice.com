/*
 * @flow
 */

import React from 'react';

import ChronicleFAQSection from './ChronicleFAQSection';
import ChronicleFeaturesSection from './ChronicleFeaturesSection';
import ChronicleFeaturesSection2 from './ChronicleFeaturesSection2';

import FooterSection from '../../footer/FooterSection';
import { ChronicleProductShot } from '../../../assets/images/chronicle';
import { OpenLatticeIcon } from '../../../assets/svg/icons';
import { ContactUsPageSection, ScrollToTop } from '../../../components';
import { ProductIntroSection } from '../components';

const INTRO_HEADER = `Manage participants and data
collection for human-centered
research studies`;

const INTRO_SUBHEADER = 'Chronicle gives your research team new options to run multiple phases of your study.'
  + ' Chronicle includes an optional participant mobile app, a flexible dashboard to see and manage participation'
  + ' and communication with participants, and an integration with ResearchHub, where all data storage is secure'
  + ' and HIPAA and GDPR compliant.';

const ChronicleProductPage = () => (
  <>
    <ScrollToTop />
    <ProductIntroSection
        introHeader={INTRO_HEADER}
        introSubHeader={INTRO_SUBHEADER}
        productIcon={OpenLatticeIcon}
        productName="Chronicle"
        productShot={ChronicleProductShot} />
    <ChronicleFeaturesSection />
    <ChronicleFeaturesSection2 />
    <ChronicleFAQSection />
    <ContactUsPageSection />
    <FooterSection />
  </>
);

export default ChronicleProductPage;
