// @flow

import DataExploration from '../../../assets/svg/platform/data-exploration.svg';
import DataIntegration from '../../../assets/svg/platform/data-integration.svg';
import DataLinking from '../../../assets/svg/platform/data-linking.svg';
import DataStandardization from '../../../assets/svg/platform/data-standardization.svg';
import DataStorage from '../../../assets/svg/platform/data-storage.svg';
import Permissions from '../../../assets/svg/platform/permissions.svg';

const FEATURE_ICONS :Object = {
  EXPLORATION: DataExploration,
  INTEGRATION: DataIntegration,
  LINKING: DataLinking,
  PERMISSIONS_MANAGEMENT: Permissions,
  STANDARDIZATION: DataStandardization,
  STORAGE: DataStorage,
};

const FEATURE_TITLES :Object = {
  EXPLORATION: 'Data Exploration',
  INTEGRATION: 'Data Integration',
  LINKING: 'Data Linking',
  PERMISSIONS_MANAGEMENT: 'Permissions Management',
  STANDARDIZATION: 'Data Standardization',
  STORAGE: 'Data Storage',
};

const FEATURE_DESCRIPTIONS :Object = {
  EXPLORATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  INTEGRATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  LINKING: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  PERMISSIONS_MANAGEMENT: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  STANDARDIZATION: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
  STORAGE: (`Placeholder text - Access and manage your organizations - manage
    roles and permissions of members and entity sets within the organizations.`),
};

export {
  FEATURE_DESCRIPTIONS,
  FEATURE_ICONS,
  FEATURE_TITLES
};
