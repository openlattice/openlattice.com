/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Intro from '../intro/Intro';
import Services from '../services/Services';
import Technology from '../technology/Technology';
import Connect from '../connect/Connect';
import Footer from '../footer/Footer';

/*
 * styled components
 */

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 960px;
  position: relative;
`;

const AppContainer = () => (
  <AppWrapper>
    <Intro />
    <Services />
    <Technology />
    <Connect />
    <Footer />
  </AppWrapper>
);

export default AppContainer;
