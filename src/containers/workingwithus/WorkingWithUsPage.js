/*
 * @flow
 */

import React from 'react';

import IntegrationSection from './IntegrationSection';
import WorkingWithUsIntroSection from './WorkingWithUsIntroSection';
import WorkingWithUsProcess from './WorkingWithUsProcess';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const WorkingWithUsPage = () => (
  <>
    <ScrollToTopOnMount />
    <WorkingWithUsIntroSection />
    <IntegrationSection />
    <WorkingWithUsProcess />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUsPage;
