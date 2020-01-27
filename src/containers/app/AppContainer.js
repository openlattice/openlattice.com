/*
 * @flow
 */

import React from 'react';
import { Route, Switch } from 'react-router';

import * as Routes from '../../core/router/Routes';

import About from '../about/About';
import AppHomePage from '../home/AppHomePage';
import CareProductPage from '../products/CareProductPage';
import ChronicleProductPage from '../products/ChronicleProductPage';
import PCMProductPage from '../products/PCMProductPage';
import Platform from '../platform/Platform';
import PrivacyPolicy from '../footer/privacy/PrivacyPolicy';
import Products from '../products/ProductsPage';
import ResearchHubProductPage from '../products/ResearchHubProductPage';
import TermsOfService from '../footer/termsofservice/TermsOfService';
import WorkingWithUs from '../workingwithus/WorkingWithUs';

const AppContainer = () => (
  <Switch>
    <Route exact path={Routes.PRIVACY_POLICY} component={PrivacyPolicy} />
    <Route exact path={Routes.TERMS_OF_SERVICE} component={TermsOfService} />
    <Route exact path={Routes.RESEARCH_HUB} component={ResearchHubProductPage} />
    <Route exact path={Routes.CHRONICLE} component={ChronicleProductPage} />
    <Route exact path={Routes.CARE} component={CareProductPage} />
    <Route exact path={Routes.PCM} component={PCMProductPage} />
    <Route exact path={Routes.RESEARCH_HUB} component={ResearchHubProductPage} />
    <Route exact path={Routes.PRODUCTS} component={Products} />
    <Route exact path={Routes.PLATFORM} component={Platform} />
    <Route exact path={Routes.WORKING_WITH_US} component={WorkingWithUs} />
    <Route exact path={Routes.ABOUT} component={About} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
