/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import Intro from '../intro/Intro';
import Services from '../services/Services';
import Technology from '../technology/Technology';
import Connect from '../connect/Connect';

/*
 * styled components
 */

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 800px;
  position: relative;
`;

const AppHeaderOuterWrapper = styled.header`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  min-width: 800px;
  position: relative;
`;

const AppHeaderInnerWrapper = styled.div`
  align-items: center;
  background-color: #fefefe;
  border-bottom: 1px solid #c5d5e5;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  height: 100px;
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: normal;
  margin: 0;
`;

const Logo = styled.img`
  position: absolute;
  left: 50px;
`;


const AppContainer = () => (
  <AppWrapper>
    <Intro />
    <Services />
    <Technology />
    <Connect />
  </AppWrapper>
);

export default AppContainer;
