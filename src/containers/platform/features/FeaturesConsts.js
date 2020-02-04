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
  EXPLORATION: (`Access, explore, and analyze your data - search for datasets, traverse
    connections between datasets, identify top utilizers, and perform analysis.`),
  INTEGRATION: (`Integrate currently siloed databases securely through the OpenLattice platform.
    All data is instantly analyzable and aggregated.`),
  LINKING: (`Link datasets using our advanced artificial intelligence method, allowing for
    data deduplication within or over datasets.`),
  PERMISSIONS_MANAGEMENT: (`Access and manage your organization's members, roles, permissions,
    and entity set access all in one simple interface.`),
  STANDARDIZATION: (`Standardize your integrated data using our Entity Data Model (EDM)
    designed by our data scientists to utilize previously siloed datasets.`),
  STORAGE: (`Securely store all data in an encrypted database, allowing for a single system
    of record across all analytical platforms and applications.`),
};

const FEATURE_LINKS :Object = {
  EXPLORATION: 'https://help.openlattice.com/article/80-top-utilizer-tool',
  INTEGRATION: 'https://help.openlattice.com/article/78-how-is-openlattice-different-from-other-data-integration',
  LINKING: 'https://help.openlattice.com/article/87-data-linking-with-artificial-intelligence',
  PERMISSIONS_MANAGEMENT: 'https://help.openlattice.com/article/45-how-to-manage-permissions-in-your-datasets',
  STANDARDIZATION: 'https://help.openlattice.com/article/20-the-openlattice-standardized-entity-data-model',
  STORAGE: 'https://help.openlattice.com/article/16-privacy-security',
};

export {
  FEATURE_DESCRIPTIONS,
  FEATURE_ICONS,
  FEATURE_LINKS,
  FEATURE_TITLES
};
