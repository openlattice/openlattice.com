/*
 * @flow
 */

import React from 'react';
import { Route, Switch } from 'react-router';

import * as Routes from '../../core/router/Routes';

import AppHomePage from './AppHomePage';
import ProductsPage from '../products/ProductsPage';
import HolodeckPage from '../products/HolodeckPage';
import RideAlongPage from '../products/RideAlongPage';
import PSAPage from '../products/PSAPage';
import PCMPage from '../products/PCMPage';
import ChroniclePage from '../products/ChroniclePage';
import ECRPage from '../products/ECRPage';

const AppContainer = () => (
  <Switch>
    <Route exact path={Routes.PRODUCTS} component={ProductsPage} />
    <Route exact path={Routes.HOLODECK} component={HolodeckPage} />
    <Route exact path={Routes.RIDE_ALONG} component={RideAlongPage} />
    <Route exact path={Routes.PSA} component={PSAPage} />
    <Route exact path={Routes.PCM} component={PCMPage} />
    <Route exact path={Routes.CHRONICLE} component={ChroniclePage} />
    <Route exact path={Routes.ECR} component={ECRPage} />
    <Route component={AppHomePage} />
  </Switch>
);

export default AppContainer;
