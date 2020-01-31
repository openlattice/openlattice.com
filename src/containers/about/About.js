/*
 * @flow
 */

import React from 'react';

import AboutIntro from './AboutIntro';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import InvestorsSection from './InvestorsSection';
import MeetTheTeam from './MeetTheTeam';
import MissionSection from './MissionSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const About = () => (
  <>
    <ScrollToTopOnMount />
    <AboutIntro />
    <MissionSection />
    <MeetTheTeam />
    <InvestorsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default About;
