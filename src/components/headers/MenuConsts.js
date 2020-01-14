// @flow

import * as Routes from '../../core/router/Routes';

export const helpCenterLink :string = 'https://help.openlattice.com';
export const contactUsLink :string = 'https://calendly.com/openlattice/openlattice-web-request';

const MENU_HEADERS :Object = {
  ABOUT: 'About',
  CONTACT_US: 'Contact us',
  HELP_CENTER: 'Help Center',
  PLATFORM: 'Platform',
  PRODUCTS: 'Products',
  WORKING_WITH_US: 'Working with us',
};

const MENU_ROUTES :Object = {
  ABOUT: Routes.ABOUT,
  CONTACT_US: contactUsLink,
  HELP_CENTER: helpCenterLink,
  PLATFORM: Routes.PLATFORM,
  PRODUCTS: Routes.PRODUCTS,
  ROOT: Routes.ROOT,
  WORKING_WITH_US: Routes.WORKING_WITH_US,
};

const TARGET = '_blank';

export {
  MENU_HEADERS,
  MENU_ROUTES,
  TARGET
};
