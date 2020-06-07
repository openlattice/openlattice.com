/*
 * @flow
 */

import React from 'react';

import IntegrationSection from './IntegrationSection';
import ProcessSection from './ProcessSection';
import WorkingWithUsIntroSection from './WorkingWithUsIntroSection';

import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const WorkingWithUsPage = () => (
  <>
    <ScrollToTopOnMount />
    <WorkingWithUsIntroSection />
    <IntegrationSection />
    <ProcessSection />
    <FooterSectionWithPageLinks />
  </>
);

export default WorkingWithUsPage;
