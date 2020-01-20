// @flow
import ActionableData from '../../assets/svg/home/actionable-data.svg';
import SecureData from '../../assets/svg/home/secure-data.svg';
import Transparency from '../../assets/svg/home/transparency.svg';

const VALUE_PROP_ICONS :Object = {
  ACTIONABLE: ActionableData,
  SECURE: SecureData,
  TRANSPARENCY: Transparency,
};

const VALUE_PROP_HEADERS :Object = {
  ACTIONABLE: ['Actionable data for', 'social policy'],
  SECURE: ['Secure', 'data integration'],
  TRANSPARENCY: ['Transparency and', 'data integrity']
};

const VALUE_PROP_DESCRIPTIONS :Object = {
  ACTIONABLE: (`Placeholder - standardized data sets for jail, police, and rehab
    center data allow us to integrate with government agency...`),
  SECURE: (`End-to-end encryption ensures data is securely stored at all times,
    both in our database and in transit.`),
  TRANSPARENCY: (`Tamper-proof audit trail ensures every search, read, and write is
    logged, guarding against unlawful or malicious use.`),
};

export {
  VALUE_PROP_DESCRIPTIONS,
  VALUE_PROP_HEADERS,
  VALUE_PROP_ICONS,
};
