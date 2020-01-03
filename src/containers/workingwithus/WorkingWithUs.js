/*
 * @flow
 */

import React from 'react';

import WorkingWithUsIntro from './WorkingWithUsIntro';
import WorkingWithUsProcess from './WorkingWithUsProcess';
import ContactUsSection from '../contactus/ContactUsSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';

const WorkingWithUs = () => (
  <>
    <WorkingWithUsIntro />
    <WorkingWithUsProcess />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUs;
