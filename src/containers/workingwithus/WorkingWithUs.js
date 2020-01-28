/*
 * @flow
 */

import React from 'react';

import ContactUsSection from '../contactus/ContactUsSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import IntegrationAnimationSection from './IntegrationAnimationSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';
import WorkingWithUsIntro from './WorkingWithUsIntro';
import WorkingWithUsProcess from './WorkingWithUsProcess';

const WorkingWithUs = () => (
  <>
    <ScrollToTopOnMount />
    <WorkingWithUsIntro />
    <IntegrationAnimationSection />
    <WorkingWithUsProcess />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUs;
