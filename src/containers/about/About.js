/*
 * @flow
 */

import React from 'react';

import AboutIntro from './AboutIntro';
import BoardSection from './BoardSection';
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
    <BoardSection />
    <MeetTheTeam />
    <InvestorsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default About;
