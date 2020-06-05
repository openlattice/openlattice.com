/*
 * @flow
 */

import React from 'react';

import IntegrationAnimationSection from './IntegrationAnimationSection';
import WorkingWithUsIntroSection from './WorkingWithUsIntroSection';
import WorkingWithUsProcess from './WorkingWithUsProcess';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const WorkingWithUsPage = () => (
  <>
    <ScrollToTopOnMount />
    <WorkingWithUsIntroSection />
    <IntegrationAnimationSection />
    <WorkingWithUsProcess />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUsPage;
