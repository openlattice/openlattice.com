// @flow
import GenerateDatasets from '../../assets/images/home/generate-datasets.png';
import ManageAccess from '../../assets/images/home/manage-access.png';
import SecureAuditLog from '../../assets/images/home/secure-audit-log.png';
import ShareData from '../../assets/images/home/share-data.png';
import ShareDataIcon1 from '../../assets/svg/home/share-data-1.svg';
import ShareDataIcon2 from '../../assets/svg/home/share-data-2.svg';
import ShareDataIcon3 from '../../assets/svg/home/share-data-3.svg';
import ManageAccess1 from '../../assets/svg/home/manage-access-1.svg';
import ManageAccess2 from '../../assets/svg/home/manage-access-2.svg';
import ManageAccess3 from '../../assets/svg/home/manage-access-3.svg';
import GenerateDatasets1 from '../../assets/svg/home/generate-datasets-1.svg';
import GenerateDatasets2 from '../../assets/svg/home/generate-datasets-2.svg';
import GenerateDatasets3 from '../../assets/svg/home/generate-datasets-3.svg';
import SecureAudit1 from '../../assets/svg/home/secure-audit-1.svg';
import PurpleMergeIcon from '../../assets/productfeatureicons/small-purple-merge.svg';
import DataSecurityAndCompliance from '../../assets/images/home/data-security-and-compliance.png';

const SHARE_DATA :Object = {
  DESCRIPTION: (`Collaborate across providers to make decisions grounded in a more holistic
    view of how your constituents interact with the spectrum of services in your
    jurisdiction.`),
  GRAPHIC: ShareData,
  GRAPHIC_DIMENSIONS: {
    normalHeight: '494px',
    normalWidth: '528px',
    smallHeight: '321.1px',
    smallWidth: '343.2px',
  },
  ICONS: [
    ShareDataIcon1,
    ShareDataIcon2,
    ShareDataIcon3,
  ],
  SUB_FEATURES: [
    'Integrate siloed data',
    'Standardize integrated data',
    'Easily share & collaborate',
  ],
  TITLE: 'Share data to make better decisions',
};

const MANAGE_ACCESS :Object = {
  DESCRIPTION: (`Protect sensitive data by controlling what users are allowed to see and securely
    define what is shared across organizations.`),
  GRAPHIC: ManageAccess,
  GRAPHIC_DIMENSIONS: {
    normalHeight: '483px',
    normalWidth: '576px',
    smallHeight: '313.95px',
    smallWidth: '374.4px',
  },
  ICONS: [
    ManageAccess1,
    ManageAccess2,
    ManageAccess3,
  ],
  SUB_FEATURES: [
    'Role-based access',
    'Granular control down to the field level',
    'Easily configured with just a few clicks',
  ],
  TITLE: 'Manage access & permissions',
};

const GENERATE_DATASETS :Object = {
  DESCRIPTION: (`Respect your citizen's privacy and maintain regulatory compliance while aggregating
  and analyzing data to better understand the community you serve.`),
  GRAPHIC: GenerateDatasets,
  GRAPHIC_DIMENSIONS: {
    normalHeight: '356px',
    normalWidth: '432px',
    smallHeight: '231.4px',
    smallWidth: '280.8px',
  },
  ICONS: [
    GenerateDatasets1,
    GenerateDatasets2,
    GenerateDatasets3,
  ],
  SUB_FEATURES: [
    'Anonymize personal information',
    'Compliance-friendly infrastructure',
    'Top privacy & security standards',
  ],
  TITLE: 'Generate de-identified datasets',
};

const SECURE_AUDIT_LOG :Object = {
  DESCRIPTION: (`Protect against improper use of data by always knowing what users are doing
    with datasets.`),
  GRAPHIC: SecureAuditLog,
  GRAPHIC_DIMENSIONS: {
    normalHeight: '454px',
    normalWidth: '528px',
    smallHeight: '295.1px',
    smallWidth: '343.2px',
  },
  ICONS: [
    SecureAudit1,
    GenerateDatasets2,
    ManageAccess1,
  ],
  SUB_FEATURES: [
    'Every read, write, search, and delete is logged',
    'Tamper-resistant',
    'Restricted, role-based access',
  ],
  TITLE: 'Secure audit log',
};

const DATA_SECURITY :Object = {
  DESCRIPTION: (`Respect your citizen's privacy and maintain regulatory compliance while aggregating and
    analyzing data to better understand the community you serve.`),
  GRAPHIC: DataSecurityAndCompliance,
  GRAPHIC_DIMENSIONS: {
    normalHeight: '576px',
    normalWidth: '576px',
    smallHeight: '288px',
    smallWidth: '288px',
  },
  ICONS: [
    PurpleMergeIcon,
    PurpleMergeIcon,
    PurpleMergeIcon,
  ],
  SUB_FEATURES: [
    'Generate de-identified datasets',
    'Compliance-friendly infrastructure',
    'Top privacy & security standards',
  ],
  TITLE: 'Data security & compliance',
};

export {
  DATA_SECURITY,
  GENERATE_DATASETS,
  MANAGE_ACCESS,
  SECURE_AUDIT_LOG,
  SHARE_DATA,
};
