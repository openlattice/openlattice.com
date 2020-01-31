/*
 * @flow
 */

import React from 'react';

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
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUs;
