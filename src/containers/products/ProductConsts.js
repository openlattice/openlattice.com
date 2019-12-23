// @flow

import PCMLogo from '../../assets/logos/pcm-logo.svg';
import CareLogo from '../../assets/logos/care-logo.svg';
import OLLogo from '../../assets/logos/placeholder-logo.svg';

const PRODUCT_ICONS :Object = {
  PCM: PCMLogo,
  CARE: CareLogo,
  RESEARCH_HUB: OLLogo,
  CHRONICLE: OLLogo,
};

const PRODUCT_TITLES :Object = {
  PCM: 'Pretrial Case Management',
  CARE: 'CARE',
  RESEARCH_HUB: 'Research Hub',
  CHRONICLE: 'Chronicle',
};

const PUBLIC_SAFETY :string = 'Public safety';
const RESEARCH :string = 'Research';
const JUSTICE :string = 'Justice';
const BEHAVIORAL_HEALTH :string = 'Behavioral health';

const PRODUCT_SUBTITLES :Object = {
  PCM: [PUBLIC_SAFETY, JUSTICE],
  CARE: [PUBLIC_SAFETY, BEHAVIORAL_HEALTH],
  RESEARCH_HUB: [RESEARCH],
  CHRONICLE: [RESEARCH],
};

const PRODUCT_DESCRIPTIONS :Object = {
  PCM: (`Manage a person moving through the pretrial court system, from a public safety
    assessment, to initial apperance, to tracking their outcomes (judge’s decision).`),
  CARE: (`A tool for collecting behavioral health report data, viewing historical data,
    and performing analysis.`),
  RESEARCH_HUB: (`A secure, cloud-based Management Information System (MIS) that securely
  integrates, indexes, and links highly variable and sensitive data across disparate sources.`),
  CHRONICLE: (`Manage enrollment, consent, and multi-sensor data collection for collaborative
    human centered research studies in highly regulated areas.`),
};

export {
  PRODUCT_DESCRIPTIONS,
  PRODUCT_ICONS,
  PRODUCT_SUBTITLES,
  PRODUCT_TITLES
};
