/*
 * @flow
 */

import React from 'react';

import AboutIntroSection from './AboutIntroSection';
import FooterSection from '../footer/FooterSection';
import InvestorsSection from './InvestorsSection';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const About = () => (
  <>
    <ScrollToTopOnMount />
    <AboutIntroSection />
    <MissionSection />
    <TeamSection />
    <InvestorsSection />
    <FooterSection />
  </>
);

export default About;
