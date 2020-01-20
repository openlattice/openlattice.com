/*
 * @flow
 */

import React from 'react';

import AboutIntro from './AboutIntro';
import ContactUsSection from '../contactus/ContactUsSection';
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
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default About;
