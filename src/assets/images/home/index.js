/*
 * @flow
 */

import styled from 'styled-components';

import DataSecurityAndCompliancePNG from './data-security-and-compliance.png';
import GenerateDatasetsPNG from './generate-datasets.png';
import ManageAccessPNG from './manage-access.png';
import SecureAuditLogPNG from './secure-audit-log.png';
import ShareDataPNG from './share-data.png';
import StatueOfLibertyPNG from './statue-of-liberty.png';

const DataSecurityAndComplianceImg = styled.img.attrs({
  alt: 'data-security-and-compliance',
  src: DataSecurityAndCompliancePNG,
})``;

const GenerateDatasetsImg = styled.img.attrs({
  alt: 'generate-datasets',
  src: GenerateDatasetsPNG,
})``;

const ManageAccessImg = styled.img.attrs({
  alt: 'manage-access-and-permissions',
  src: ManageAccessPNG,
})``;

const SecureAuditLogImg = styled.img.attrs({
  alt: 'secure-audit-log',
  src: SecureAuditLogPNG,
})``;

const ShareDataImg = styled.img.attrs({
  alt: 'share-data',
  src: ShareDataPNG,
})``;

export {
  DataSecurityAndComplianceImg,
  GenerateDatasetsImg,
  ManageAccessImg,
  SecureAuditLogImg,
  ShareDataImg,
  StatueOfLibertyPNG,
};
