/*
 * @flow
 */

import React, { Fragment } from 'react';

import IntroSection from '../intro/IntroSection';
import ServicesSection from '../services/ServicesSection';
import TechnologySection from '../technology/TechnologySection';
import ConnectSection from '../connect/ConnectSection';
import FooterSection from '../footer/FooterSection';

const AppContainer = () => (
  <Fragment>
    <IntroSection />
    <ServicesSection />
    <TechnologySection />
    <ConnectSection />
    <FooterSection />
  </Fragment>
);

export default AppContainer;
