// @flow

import * as Routes from '../../core/router/Routes';

import PCMLogo from '../../assets/svg/menu/pcm-logo.svg';
import CARELogo from '../../assets/svg/menu/care-logo.svg';
import OLLogo from '../../assets/svg/menu/ol-logo.svg';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';

export const helpCenterLink :string = 'https://help.openlattice.com';
export const contactUsLink :string = 'https://calendly.com/openlattice/openlattice-web-request';

const horizontalMenuActiveStyles = {
  color: NEUTRALS.GRAY_06
};
const verticalMenuActiveStyles = {
  color: PURPLES.PP05
};

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

const PRODUCT_MENU_ITEMS :Object[] = [
  {
    BLURB: 'Manage a person moving through pretrial system',
    ICON: PCMLogo,
    NAME: 'Pretrial Case Management',
    ROUTE: Routes.PCM,
  },
  {
    BLURB: 'Collect and utilize behavioral health data',
    ICON: CARELogo,
    NAME: 'CARE',
    ROUTE: Routes.CARE,
  },
  {
    BLURB: 'Collaborative human-centered research tool',
    ICON: OLLogo,
    NAME: 'Chronicle',
    ROUTE: Routes.CHRONICLE,
  },
  {
    BLURB: 'Cloud-based Management Information System',
    ICON: OLLogo,
    NAME: 'Research Hub',
    ROUTE: Routes.RESEARCH_HUB,
  },
];

const TARGET = '_blank';

export {
  MENU_HEADERS,
  MENU_ROUTES,
  PRODUCT_MENU_ITEMS,
  TARGET,
  horizontalMenuActiveStyles,
  verticalMenuActiveStyles,
};
