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

const COMPLIANCE_DESCRIPTIONS :Object = {
  CJIS: (`Compliant with FBI’s Criminal Justice Information Services (CJIS) security
    policy to protect sensitive information like fingerprints and criminal backgrounds.`),
  GDPR: (`Compliant with the EU’s General Data Protection Regulation to protect data
    and privacy in the European Union and European Economic Area.`),
  HIPAA: (`Compliant with Health Insurance Portability and Accountability Act to protect
    patients’ medical records and relevant information from various care providers.`),
  CFR: (`Compliant with 42 CFR Part 2 to protect the privacy of substance use disorder
    patient records by prohibiting unauthorized disclosures of patient records.`),
  FERPA: (`Compliant with Family Educational Rights and Privacy Act to protect
    privacy of educational information and records being accessed by public entities.`),
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
  ENCRYPTION: (`Your data is securely managed at every stage of implementation in accordance
    with industry best practices.`),
  LOGIN: (`Link your authentication protocols through a single sign-on integration
    eliminating the need for another password or use our natively supported authentication.`),
  CLOUD: (`Your data is securely stored in AWS cloud storage which is more reliable, scalable,
    and secure than traditional on-premises storage systms.`),
};

export {
  COMPLIANCE_DESCRIPTIONS,
  COMPLIANCE_ICONS,
  COMPLIANCE_TITLES,
  SECURITY_DESCRIPTIONS,
  SECURITY_ICONS,
  SECURITY_TITLES
};
