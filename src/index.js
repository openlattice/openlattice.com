/*
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { ConnectedRouter } from 'connected-react-router/immutable';
import { normalize } from 'polished';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { createGlobalStyle } from 'styled-components';

import AppContainer from './containers/app/AppContainer';
import initializeReduxStore from './core/redux/ReduxStore';
import initializeRouterHistory from './core/router/RouterHistory';
import * as Routes from './core/router/Routes';
import { NEUTRALS } from './core/style/Colors';

/* eslint-disable */
const NormalizeCSS = createGlobalStyle`
  ${normalize()}
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: ${NEUTRALS.WHITE};
    color: ${NEUTRALS.GRAY_03};
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    line-height: normal;
    width: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  #app {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
/* eslint-enable */

const routerHistory = initializeRouterHistory();
const reduxStore = initializeReduxStore(routerHistory);

const APP_ROOT_NODE = document.getElementById('app');
if (APP_ROOT_NODE) {
  ReactDOM.render(
    <Provider store={reduxStore}>
      <>
        <ConnectedRouter history={routerHistory}>
          <Route path={Routes.ROOT} component={AppContainer} />
        </ConnectedRouter>
        <NormalizeCSS />
        <GlobalStyle />
      </>
    </Provider>,
    APP_ROOT_NODE
  );
}
