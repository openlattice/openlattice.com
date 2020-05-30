/*
 * @flow
 */

import React from 'react';

import IntegrationAnimationSection from './IntegrationAnimationSection';
import WorkingWithUsIntro from './WorkingWithUsIntro';
import WorkingWithUsProcess from './WorkingWithUsProcess';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

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
