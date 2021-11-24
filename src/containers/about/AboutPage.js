/*
 * @flow
 */

import React from 'react';

import AboutIntroSection from './AboutIntroSection';
import HistorySection from './HistorySection';
import InvestorsSection from './InvestorsSection';
import MissionSection from './MissionSection';
import TeamSection from './TeamSection';

import FooterSection from '../footer/FooterSection';
import { ScrollToTop } from '../../components';

const About = () => (
  <>
    <ScrollToTop />
    <AboutIntroSection />
    <MissionSection />
    <HistorySection />
    <TeamSection />
    <InvestorsSection />
    <FooterSection />
  </>
);

export default About;
