// @flow
import ApplicationDeployment from '../../assets/svg/home/application-deployment.svg';
import DataSharing from '../../assets/svg/home/data-sharing.svg';
import Integrations from '../../assets/svg/home/integration.svg';

const VALUE_PROP_ICONS :Object = {
  APPS: ApplicationDeployment,
  INTEGRATIONS: Integrations,
  SHARING: DataSharing,
};

const VALUE_PROP_HEADERS :Object = {
  APPS: ['Application', 'deployment'],
  INTEGRATIONS: ['Intelligent', 'data integrations'],
  SHARING: ['Data sharing', 'and collaboration'],
};

const VALUE_PROP_DESCRIPTIONS :Object = {
  APPS: (`Leverage our existing applications or develop your own on top of our open APIs to utilize
    previously siloed datasets.`),
  INTEGRATIONS: (`Integrate and standardize siloed databases intelligently through our platform to
    utilize analyzable and aggregated data.`),
  SHARING: (`Granular access controls let organizations share datasets without compromising ownership,
    visibility, or security.`),
};

const VALUE_PROP_LINKS :Object = {
  APPS: 'https://help.openlattice.com/article/32-introduction-to-openlattice-for-jurisdictions',
  INTEGRATIONS: 'https://help.openlattice.com/article/78-how-is-openlattice-different-from-other-data-integration',
  SHARING: 'https://help.openlattice.com/article/24-data-sharing-and-roles',
};

export {
  VALUE_PROP_DESCRIPTIONS,
  VALUE_PROP_HEADERS,
  VALUE_PROP_ICONS,
  VALUE_PROP_LINKS,
};
