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

const About = () => (
  <>
    <AboutIntro />
    <MissionSection />
    <MeetTheTeam />
    <InvestorsSection />
    <ContactUsSection />
    <FooterSectionWithPageLinks />
  </>
);

export default About;
