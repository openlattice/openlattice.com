// @flow

import CAREIconSVG from '../../assets/svg/icons/care-icon.svg';
import OpenLatticeIconSVG from '../../assets/svg/circle-icons/ol-icon.svg';
import PCMIconSVG from '../../assets/svg/icons/pcm-icon.svg';
import * as Routes from '../../core/router/Routes';
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
    ICON: PCMIconSVG,
    NAME: 'Pretrial Case Management',
    ROUTE: Routes.PCM,
  },
  {
    BLURB: 'Collect and utilize behavioral health data',
    ICON: CAREIconSVG,
    NAME: 'CARE',
    ROUTE: Routes.CARE,
  },
  {
    BLURB: 'Collaborative human-centered research tool',
    ICON: OpenLatticeIconSVG,
    NAME: 'Chronicle',
    ROUTE: Routes.CHRONICLE,
  },
  {
    BLURB: 'Cloud-based Management Information System',
    ICON: OpenLatticeIconSVG,
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
