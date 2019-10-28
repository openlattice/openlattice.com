// @flow

import AstrometricsIcon from '../../assets/logos/astrometrics-logo.svg';
import CWPIcon from '../../assets/logos/cwp-logo.svg';
import CareIcon from '../../assets/logos/care-logo.svg';
import GalleryIcon from '../../assets/logos/gallery-logo.svg';
import OrganizationsIcon from '../../assets/logos/organizations-logo.svg';
import PCMIcon from '../../assets/logos/pcm-logo.svg';
import PlaceholderIcon from '../../assets/logos/placeholder-logo.svg';
import SteppingUpIcon from '../../assets/logos/stepping-up-logo.svg';

const PRODUCT_ICONS :Oject = {
  ASTROMETRICS: AstrometricsIcon,
  CARE: CareIcon,
  CHRONICLE: PlaceholderIcon,
  CWP: CWPIcon,
  GALLERY: GalleryIcon,
  HOLODECK: '',
  ORGANIZATIONS: OrganizationsIcon,
  OTHER_SERVICES: PlaceholderIcon,
  PCM: PCMIcon,
  REFERRALS: PlaceholderIcon,
  RESEARCH_HUB: PlaceholderIcon,
  STEPPING_UP: SteppingUpIcon,
};

const PRODUCT_TITLES :Object = {
  ASTROMETRICS: 'Astrometrics',
  CARE: 'Care',
  CHRONICLE: 'Chronicle',
  CWP: 'Community Work Program',
  GALLERY: 'Gallery',
  HOLODECK: 'Holodeck',
  ORGANIZATIONS: 'Organizations',
  OTHER_SERVICES: 'Other services',
  PCM: 'Pretrial Case Management',
  REFERRALS: 'Referrals',
  RESEARCH_HUB: 'Research Hub',
  STEPPING_UP: 'SteppingUp Dashboard',
};

const PRODUCT_DESCRIPTIONS :Object = {
  ASTROMETRICS: (`Astrometrics gathers all integrated ALPR data for authorized users to search,
      investigate, set alerts, and create reports on vehicles of interest.`),
  CARE: (`A tool for collecting behavioral health report data, viewing historical data, and
    performing analysis.`),
  CHRONICLE: 'Create and manage studies, participants, and devices, and access study data.',
  CWP: (`Manage a person as they complete sentenced community service hours, from scheduling
    them at work sites to tracking their outcome in the program.`),
  GALLERY: (`Access, explore, and analyze your data - search for datasets, traverse connections between
    datasets, identify top utilizers, and perform analysis.`),
  HOLODECK: (`Holodeck allows you to explore your data — search a dataset, traverse connections between
    datasets, identify top utilizers, and perform analysis.`),
  ORGANIZATIONS: (`Access and manage your organizations – manage roles and permissions of members and
    entity sets within the organizations.`),
  OTHER_SERVICES: 'Explore other services we offer to securely store, manage, and analyze your data.',
  PCM: (`Manage a person moving through the pretrial court system, from a public safety assessment,
    to initial appearance, to tracking their outcomes (judge’s decision).`),
  REFERRALS: (`Allow case workers, first responders, and other providers to identify and suggest services
    for their clients, manage a person's referrals, and share with other providers.`),
  RESEARCH_HUB: (`Securely integrate, index, and link highly variable and sensitive data across disparate sources
    (e.g., Medicaid, DDS, Child Welfare), enabling longitudinal analysis of social services and human outcomes.`),
  STEPPING_UP: (`Visualize and link data across sources to see how different subsets of individuals
    affected by mental illness interact across social services.`),
};

export {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_TITLES,
};
