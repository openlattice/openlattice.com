/*
 * @flow
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';

import IntroSection from '../intro/IntroSection';
import ServicesSection from '../services/ServicesSection';
import Technology from '../technology/Technology';
import Connect from '../connect/Connect';
import Footer from '../footer/Footer';

/*
 * styled components
 */

// const AppWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-width: 960px;
//   position: relative;
// `;

const AppContainer = () => (
  <Fragment>
    <IntroSection />
    <ServicesSection />
  </Fragment>
);

export default AppContainer;
