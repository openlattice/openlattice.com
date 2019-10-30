// @flow

import CareIcon from '../../assets/logos/care-logo.svg';
import GalleryIcon from '../../assets/logos/gallery-logo.svg';
import OrganizationsIcon from '../../assets/logos/organizations-logo.svg';
import PCMIcon from '../../assets/logos/pcm-logo.svg';
import PlaceholderIcon from '../../assets/logos/placeholder-logo.svg';

const PRODUCT_ICONS :Object = {
  CARE: CareIcon,
  GALLERY: GalleryIcon,
  ORGANIZATIONS: OrganizationsIcon,
  OTHER_PRODUCTS: PlaceholderIcon,
  OTHER_SERVICES: PlaceholderIcon,
  PCM: PCMIcon,
};

const PRODUCT_TITLES :Object = {
  CARE: 'Care',
  GALLERY: 'Gallery',
  ORGANIZATIONS: 'Organizations',
  OTHER_PRODUCTS: 'Other products',
  OTHER_SERVICES: 'Other services',
  PCM: 'Pretrial Case Management',
};

const PRODUCT_DESCRIPTIONS :Object = {
  CARE: (`A tool for collecting behavioral health report data, viewing historical data, and
    performing analysis.`),
  GALLERY: (`Access, explore, and analyze your data - search for datasets, traverse connections between
    datasets, identify top utilizers, and perform analysis.`),
  ORGANIZATIONS: (`Access and manage your organizations – manage roles and permissions of members and
    entity sets within the organizations.`),
  OTHER_PRODUCTS: (`Explore other products we offer to link data across behavioral health services,
    criminal justice, and public safety.`),
  OTHER_SERVICES: 'Explore other services we offer to securely store, manage, and analyze your data.',
  PCM: (`Manage a person moving through the pretrial court system, from a public safety assessment,
    to initial appearance, to tracking their outcomes (judge’s decision).`),
};

export {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_TITLES,
};
