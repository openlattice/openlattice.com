/*
 * @flow
 */

import React from 'react';
import { Route, Switch } from 'react-router';

import * as Routes from '../../core/router/Routes';

import AppHomePage from './AppHomePage';
import CareProductPage from '../products/CareProductPage';
import GalleryProductPage from '../platform/GalleryProductPage';
import OrganizationsProductPage from '../platform/OrganizationsProductPage';
import OtherProductsPage from '../products/OtherProductsPage';
import OtherServicesPage from '../platform/OtherServicesPage';
import PCMProductPage from '../products/PCMProductPage';
import ProductsPage from '../products/ProductsPage';

const AppContainer = () => (
  <Switch>
    <Route exact path={Routes.GALLERY} component={GalleryProductPage} />
    <Route exact path={Routes.OTHER_SERVICES} component={OtherServicesPage} />
    <Route exact path={Routes.ORGANIZATIONS} component={OrganizationsProductPage} />
    <Route exact path={Routes.CARE} component={CareProductPage} />
    <Route exact path={Routes.PCM} component={PCMProductPage} />
    <Route exact path={Routes.OTHER_PRODUCTS} component={OtherProductsPage} />
    <Route exact path={Routes.PRODUCTS} component={ProductsPage} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
