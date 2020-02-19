// @flow

import AstrometricsImage from '../../assets/images/astrometrics-feature-img.png';
import AstrometricsLogo from '../../assets/logos/products/astrometrics-logo.svg';
import CWPImage from '../../assets/images/cwp-feature-img.png';
import CWPLogo from '../../assets/logos/products/cwp-logo.png';
import CareLogo from '../../assets/logos/care-logo.svg';
import OLLogo from '../../assets/logos/placeholder-logo.svg';
import PCMLogo from '../../assets/logos/pcm-logo.svg';
import ReferralsImage from '../../assets/images/referrals-feature-img.png';
import SteppingUpImage from '../../assets/images/stepping-up-feature-img.png';
import SteppingUpLogo from '../../assets/logos/products/stepping-up-logo.png';

const PRODUCT_ICONS :Object = {
  ASTROMETRICS: AstrometricsLogo,
  CARE: CareLogo,
  CHRONICLE: OLLogo,
  CWP: CWPLogo,
  PCM: PCMLogo,
  REFERRALS: OLLogo,
  RESEARCH_HUB: OLLogo,
  STEPPING_UP: SteppingUpLogo,
};

const PRODUCT_TITLES :Object = {
  ASTROMETRICS: 'Astrometrics',
  CARE: 'CARE',
  CHRONICLE: 'Chronicle',
  CWP: 'Community Work Program',
  PCM: 'Pretrial Case Management',
  REFERRALS: 'Referrals',
  RESEARCH_HUB: 'Research Hub',
  STEPPING_UP: 'Stepping Up',
};

const PUBLIC_SAFETY :string = 'Public safety';
const RESEARCH :string = 'Research';
const JUSTICE :string = 'Justice';
const BEHAVIORAL_HEALTH :string = 'Behavioral health';
const HEALTH :string = 'Health';

const PRODUCT_SUBTITLES :Object = {
  ASTROMETRICS: [PUBLIC_SAFETY],
  CARE: [PUBLIC_SAFETY, BEHAVIORAL_HEALTH],
  CHRONICLE: [RESEARCH],
  CWP: [JUSTICE],
  PCM: [PUBLIC_SAFETY, JUSTICE],
  REFERRALS: [HEALTH],
  RESEARCH_HUB: [RESEARCH],
  STEPPING_UP: [BEHAVIORAL_HEALTH, RESEARCH],
};

const PRODUCT_DESCRIPTIONS :Object = {
  ASTROMETRICS: (`Our platform supports geospatial workflows at scale. It enables law enforcement
    agencies to perform audited, map-based searches of ALPR data.`),
  CARE: (`A tool for collecting behavioral health report data, viewing historical data,
    and performing analysis.`),
  CHRONICLE: (`Manage enrollment, consent, and multi-sensor data collection for collaborative
    human centered research studies in highly regulated areas.`),
  CWP: (`A data driven tool for your jurisdiction to manage participation and completion of
    alternative sentences to community services.`),
  PCM: (`Manage a person moving through the pretrial court system, from a public safety
    assessment, to initial apperance, to tracking their outcomes.`),
  REFERRALS: (`Enable service providers to manage their own inbound and outbound referrals,
    as well as wait-time and other customer service-focused analytics.`),
  RESEARCH_HUB: (`A secure, cloud-based Management Information System (MIS) that securely
    integrates, indexes, and links highly variable and sensitive data across disparate sources.`),
  STEPPING_UP: (`Visualize and link data from across silos to see how different subsets of
    individuals affected by mental illness interact across social services.`),
};

const PRODUCT_IMAGES :Object = {
  ASTROMETRICS: AstrometricsImage,
  CWP: CWPImage,
  REFERRALS: ReferralsImage,
  STEPPING_UP: SteppingUpImage,
};

export {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_IMAGES,
  PRODUCT_SUBTITLES,
  PRODUCT_TITLES,
};
