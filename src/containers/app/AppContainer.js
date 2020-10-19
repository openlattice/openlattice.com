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

import { AppNav } from '../../components';
import { Routes } from '../../core/router';
import { AboutPage } from '../about';
import { GovernmentPage } from '../government';
import { HomePage } from '../home';
import { PlatformPage } from '../platform';
import { PrivacyPolicyPage } from '../privacy';
import { ProductsPage } from '../products';
import { CAREProductPage } from '../products/care';
import { ChronicleProductPage } from '../products/chronicle';
import { PCMProductPage } from '../products/pcm';
import { ResearchHubProductPage } from '../products/research-hub';
import { ResearchPage } from '../research';
import { TermsOfServicePage } from '../terms';
import { WorkingWithUsGovernmentPage, WorkingWithUsResearchPage } from '../workingwithus';

const AppContainer = () => (
  <ThemeProvider theme={lightTheme}>
    <MuiPickersUtilsProvider utils={LatticeLuxonUtils}>
      <AppNav />
      <Switch>
        <Route exact path={Routes.PRIVACY_POLICY} component={PrivacyPolicyPage} />
        <Route exact path={Routes.TERMS_OF_SERVICE} component={TermsOfServicePage} />
        <Route exact path={Routes.RESEARCH_HUB} component={ResearchHubProductPage} />
        <Route exact path={Routes.CHRONICLE} component={ChronicleProductPage} />
        <Route exact path={Routes.CARE} component={CAREProductPage} />
        <Route exact path={Routes.PCM} component={PCMProductPage} />
        <Route exact strict path={Routes.PRODUCTS} component={ProductsPage} />
        <Route exact path={Routes.PLATFORM} component={PlatformPage} />
        <Route exact path={Routes.ABOUT} component={AboutPage} />
        <Route exact path={Routes.GOVERNMENT} component={GovernmentPage} />
        <Route exact path={Routes.RESEARCH} component={ResearchPage} />
        <Route exact path={Routes.WORKING_WITH_US_GOVERNMENT} component={WorkingWithUsGovernmentPage} />
        <Route exact path={Routes.WORKING_WITH_US_RESEARCH} component={WorkingWithUsResearchPage} />
        <Route component={HomePage} />
      </Switch>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default AppContainer;
