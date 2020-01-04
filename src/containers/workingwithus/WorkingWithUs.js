/*
 * @flow
 */

import React from 'react';

import WorkingWithUsIntro from './WorkingWithUsIntro';
import WorkingWithUsProcess from './WorkingWithUsProcess';
import IntegrationAnimationSection from './IntegrationAnimationSection';
import ContactUsSection from '../contactus/ContactUsSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';

const WorkingWithUs = () => (
  <>
    <WorkingWithUsIntro />
    <IntegrationAnimationSection />
    <WorkingWithUsProcess />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUs;
