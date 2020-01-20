// @flow
import CJISIcon from '../../../assets/logos/compliance/cjis.png';
import CFRIcon from '../../../assets/logos/compliance/42cfr.png';
import FERPAIcon from '../../../assets/logos/compliance/ferpa.png';
import HIPAAIcon from '../../../assets/logos/compliance/hipaa.png';
import GDPRIcon from '../../../assets/logos/compliance/gdpr.png';
import EncryptionIcon from '../../../assets/logos/security/encryption.png';
import LoginIcon from '../../../assets/logos/security/login.png';
import CloudIcon from '../../../assets/logos/security/cloud.png';

const COMPLIANCE_ICONS :Object = {
  CJIS: CJISIcon,
  GDPR: GDPRIcon,
  HIPAA: HIPAAIcon,
  CFR: CFRIcon,
  FERPA: FERPAIcon,
};

const COMPLIANCE_TITLES :Object = {
  CJIS: 'CJIS',
  GDPR: 'GDPR',
  HIPAA: 'HIPAA',
  CFR: '42 CFR Part 2',
  FERPA: 'FERPA'
};

const placeholderText :string = `Access, explore, and analyze your data - search
for datasets, traverse connections between datasets, identify top utilizers, and perform analysis.`;

const COMPLIANCE_DESCRIPTIONS :Object = {
  CJIS: placeholderText,
  GDPR: placeholderText,
  HIPAA: placeholderText,
  CFR: placeholderText,
  FERPA: placeholderText,
};

const SECURITY_ICONS :Object = {
  ENCRYPTION: EncryptionIcon,
  LOGIN: LoginIcon,
  CLOUD: CloudIcon,
};

const SECURITY_TITLES :Object = {
  ENCRYPTION: 'Encryption at rest and in transit',
  LOGIN: 'Secure login',
  CLOUD: 'Secure cloud storage',
};

const SECURITY_DESCRIPTIONS :Object = {
  ENCRYPTION: placeholderText,
  LOGIN: placeholderText,
  CLOUD: placeholderText,
};

export {
  COMPLIANCE_DESCRIPTIONS,
  COMPLIANCE_ICONS,
  COMPLIANCE_TITLES,
  SECURITY_DESCRIPTIONS,
  SECURITY_ICONS,
  SECURITY_TITLES
};
