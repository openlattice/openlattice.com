/*
 * @flow
 */

import React from 'react';

import IntegrationSection from './IntegrationSection';
import ProcessSection from './ProcessSection';
import WorkingWithUsIntroSection from './WorkingWithUsIntroSection';

import FooterSection from '../footer/FooterSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const WorkingWithUsPage = () => (
  <>
    <ScrollToTopOnMount />
    <WorkingWithUsIntroSection />
    <IntegrationSection />
    <ProcessSection />
    <FooterSection />
  </>
);

export default WorkingWithUsPage;
