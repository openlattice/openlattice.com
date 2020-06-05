/*
 * @flow
 */

import React from 'react';

import AboutIntroSection from './AboutIntroSection';
import BoardSection from './BoardSection';
import FooterSectionWithPageLinks from '../footer/FooterSectionWithPageLinks';
import InvestorsSection from './InvestorsSection';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

const About = () => (
  <>
    <ScrollToTopOnMount />
    <AboutIntroSection />
    <MissionSection />
    <BoardSection />
    <TeamSection />
    <InvestorsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default About;
