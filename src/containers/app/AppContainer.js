/*
 * @flow
 */

import React from 'react';
import { Route, Switch } from 'react-router';

import * as Routes from '../../core/router/Routes';

import About from '../about/About';
import AppHomePage from './AppHomePage';
import CareProductPage from '../products/CareProductPage';
import ChronicleProductPage from '../products/ChronicleProductPage';
import GalleryProductPage from '../platform/GalleryProductPage';
import OrganizationsProductPage from '../platform/OrganizationsProductPage';
import OtherServicesPage from '../platform/OtherServicesPage';
import PCMProductPage from '../products/PCMProductPage';
import Platform from '../platform/Platform';
import PrivacyPolicy from '../footer/privacy/PrivacyPolicy';
import Products from '../products/ProductsPage';
import TermsOfService from '../footer/termsofservice/TermsOfService';
import WorkingWithUs from '../workingwithus/WorkingWithUs';

const AppContainer = () => (
  <Switch>
    <Route exact path={Routes.PRIVACY_POLICY} component={PrivacyPolicy} />
    <Route exact path={Routes.TERMS_OF_SERVICE} component={TermsOfService} />
    <Route exact path={Routes.CHRONICLE} component={ChronicleProductPage} />
    <Route exact path={Routes.GALLERY} component={GalleryProductPage} />
    <Route exact path={Routes.OTHER_SERVICES} component={OtherServicesPage} />
    <Route exact path={Routes.ORGANIZATIONS} component={OrganizationsProductPage} />
    <Route exact path={Routes.CARE} component={CareProductPage} />
    <Route exact path={Routes.PCM} component={PCMProductPage} />
    <Route exact path={Routes.PRODUCTS} component={Products} />
    <Route exact path={Routes.PLATFORM} component={Platform} />
    <Route exact path={Routes.WORKING_WITH_US} component={WorkingWithUs} />
    <Route exact path={Routes.ABOUT} component={About} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
