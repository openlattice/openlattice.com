/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import DataSecurityAndCompliancePNG from './data-security-and-compliance.png';
import GenerateDatasetsPNG from './generate-datasets.png';
import ManageAccessPNG from './manage-access.png';
import SecureAuditLogPNG from './secure-audit-log.png';
import ShareDataPNG from './share-data.png';

type Props = {
  className ?:string;
  width ?:string;
};

const DataSecurityAndComplianceImg = ({ className = '', width } :Props) => (
  <img alt="data-security-and-compliance" className={className} src={DataSecurityAndCompliancePNG} width={width} />
);

const GenerateDatasetsImg = ({ className = '', width } :Props) => (
  <img alt="generate-datasets" className={className} src={GenerateDatasetsPNG} width={width} />
);

const ManageAccessImg = ({ className = '', width } :Props) => (
  <img alt="manage-access-and-permissions" className={className} src={ManageAccessPNG} width={width} />
);

const SecureAuditLogImg = ({ className = '', width } :Props) => (
  <img alt="secure-audit-log" className={className} src={SecureAuditLogPNG} width={width} />
);

const ShareDataImg = ({ className = '', width } :Props) => (
  <img alt="share-data" className={className} src={ShareDataPNG} width={width} />
);

export {
  DataSecurityAndComplianceImg,
  GenerateDatasetsImg,
  ManageAccessImg,
  SecureAuditLogImg,
  ShareDataImg,
};
