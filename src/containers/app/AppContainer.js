/*
 * @flow
 */

import React from 'react';

import {
  LatticeLuxonUtils,
  MuiPickersUtilsProvider,
  ThemeProvider,
  lightTheme,
} from 'lattice-ui-kit';
import { Route, Switch } from 'react-router';

import AboutPage from '../about/AboutPage';
import HomePage from '../home/HomePage';
import PlatformPage from '../platform/PlatformPage';
import PrivacyPolicy from '../footer/privacy/PrivacyPolicy';
import Products from '../products/ProductsPage';
import ResearchHubProductPage from '../products/ResearchHubProductPage';
import TermsOfService from '../footer/termsofservice/TermsOfService';
import WorkingWithUsPage from '../workingwithus/WorkingWithUsPage';
import * as Routes from '../../core/router/Routes';
import { CAREProductPage } from '../products/care';
import { ChronicleProductPage } from '../products/chronicle';
import { PCMProductPage } from '../products/pcm';

const AppContainer = () => (
  <ThemeProvider theme={lightTheme}>
    <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
      <Switch>
        <Route exact path={Routes.PRIVACY_POLICY} component={PrivacyPolicy} />
        <Route exact path={Routes.TERMS_OF_SERVICE} component={TermsOfService} />
        <Route exact path={Routes.RESEARCH_HUB} component={ResearchHubProductPage} />
        <Route exact path={Routes.CHRONICLE} component={ChronicleProductPage} />
        <Route exact path={Routes.CARE} component={CAREProductPage} />
        <Route exact path={Routes.PCM} component={PCMProductPage} />
        <Route exact strict path={Routes.PRODUCTS} component={Products} />
        <Route exact path={Routes.PLATFORM} component={PlatformPage} />
        <Route exact path={Routes.WORKING_WITH_US} component={WorkingWithUsPage} />
        <Route exact path={Routes.ABOUT} component={AboutPage} />
        <Route component={HomePage} />
      </Switch>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default AppContainer;
