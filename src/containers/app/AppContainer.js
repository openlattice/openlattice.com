/*
 * @flow
 */

import React from 'react';
import { Route, Switch } from 'react-router';

import * as Routes from '../../core/router/Routes';

import AppHomePage from './AppHomePage';
import AstrometricsProductPage from '../products/AstrometricsProductPage';
import CWPProductPage from '../products/CWPProductPage';
import CareProductPage from '../products/CareProductPage';
import ChronicleProductPage from '../products/ChronicleProductPage';
import PCMProductPage from '../products/PCMProductPage';
import ProductsPage from '../products/ProductsPage';
import ReferralsProductPage from '../products/ReferralsProductPage';
import SteppingUpProductPage from '../products/SteppingUpProductPage';
import GalleryProductPage from '../platform/GalleryProductPage';
import OrganizationsProductPage from '../platform/OrganizationsProductPage';
import ResearchHubProductPage from '../platform/ResearchHubProductPage';
import OtherServicesProductPage from '../platform/OtherServicesProductPage';

const AppContainer = () => (
  <Switch>
    <Route exact path={Routes.GALLERY} component={GalleryProductPage} />
    <Route exact path={Routes.OTHER_SERVICES} component={OtherServicesProductPage} />
    <Route exact path={Routes.ORGANIZATIONS} component={OrganizationsProductPage} />
    <Route exact path={Routes.RESEARCH_HUB} component={ResearchHubProductPage} />
    <Route exact path={Routes.ASTROMETRICS} component={AstrometricsProductPage} />
    <Route exact path={Routes.CARE} component={CareProductPage} />
    <Route exact path={Routes.CHRONICLE} component={ChronicleProductPage} />
    <Route exact path={Routes.CWP} component={CWPProductPage} />
    <Route exact path={Routes.PCM} component={PCMProductPage} />
    <Route exact path={Routes.REFERRALS} component={ReferralsProductPage} />
    <Route exact path={Routes.STEPPING_UP} component={SteppingUpProductPage} />
    <Route exact path={Routes.PRODUCTS} component={ProductsPage} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
