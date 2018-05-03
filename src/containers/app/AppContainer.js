/*
 * @flow
 */

import React, { Fragment } from 'react';

import IntroSection from '../intro/IntroSection';
import ServicesSection from '../services/ServicesSection';
import TechnologySection from '../technology/TechnologySection';
import Connect from '../connect/Connect';
import Footer from '../footer/Footer';

const AppContainer = () => (
  <Fragment>
    <IntroSection />
    <ServicesSection />
    <TechnologySection />
  </Fragment>
);

export default AppContainer;
