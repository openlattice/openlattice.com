// @flow

import PurpleMergeIcon from '../../assets/svg/purple-merge-icon.svg';

const FEATURE_ICONS :Object = {
  INTEGRATION: PurpleMergeIcon,
  LINKING: PurpleMergeIcon,
  STORAGE: PurpleMergeIcon,
  STANDARDIZATION: PurpleMergeIcon,
  EXPLORATION: PurpleMergeIcon,
  PERMISSIONS_MANAGEMENT: PurpleMergeIcon,
};

const FEATURE_TITLES :Object = {
  INTEGRATION: 'Data Integration',
  LINKING: 'Data Linking',
  STORAGE: 'Data Storage',
  STANDARDIZATION: 'Data Standardization',
  EXPLORATION: 'Data Exploration',
  PERMISSIONS_MANAGEMENT: 'Permissions Management',
};

const FEATURE_DESCRIPTIONS :Object = {
  INTEGRATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  LINKING: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  STORAGE: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  STANDARDIZATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  EXPLORATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  PERMISSIONS_MANAGEMENT: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
};

export {
  FEATURE_DESCRIPTIONS,
  FEATURE_ICONS,
  FEATURE_TITLES
};
