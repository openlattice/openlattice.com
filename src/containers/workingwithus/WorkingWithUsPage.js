/*
 * @flow
 */

import React from 'react';

import IntegrationSection from './IntegrationSection';
import ProcessSection from './ProcessSection';
import WorkingWithUsIntroSection from './WorkingWithUsIntroSection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const WorkingWithUsPage = () => (
  <>
    <ScrollToTop />
    <WorkingWithUsIntroSection />
    <IntegrationSection />
    <ProcessSection />
    <FooterSection />
  </>
);

export default WorkingWithUsPage;
