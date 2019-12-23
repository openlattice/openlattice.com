// @flow

import * as Routes from '../../core/router/Routes';

export const helpCenterLink :string = 'https://help.openlattice.com';
export const scheduleACallLink :string = 'https://calendly.com/openlattice/openlattice-web-request';

const MENU_HEADERS :Object = {
  ABOUT: 'About',
  WORKING_WITH_US: 'Working with us',
  PLATFORM: 'Platform',
  PRODUCTS: 'Products',
  HELP_CENTER: 'Help Center',
  SCHEDULE_A_CALL: 'Schedule a Call'
};

const MENU_ROUTES :Object = {
  ABOUT: Routes.ABOUT,
  WORKING_WITH_US: Routes.WORKING_WITH_US,
  PLATFORM: Routes.PLATFORM,
  PRODUCTS: Routes.PRODUCTS,
  HELP_CENTER: helpCenterLink,
  ROOT: Routes.ROOT,
  SCHEDULE_A_CALL: scheduleACallLink
};

const TARGET = '_blank';

export {
  MENU_HEADERS,
  MENU_ROUTES,
  TARGET
};
