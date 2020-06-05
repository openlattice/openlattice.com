/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import GDPRLogoSVG from './eu-gdpr-logo.svg';
import SecureCloudLogoSVG from './secure-cloud-logo.svg';
import SecureDataLogoSVG from './secure-data-logo.svg';
import SecureLoginLogoSVG from './secure-login-logo.svg';

type Props = {
  className ?:string;
  width ?:string;
};

const GDPRLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="eu-gdpr-logo" className={className} src={GDPRLogoSVG} width={width} />
);

const SecureCloudLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="secure-cloud-logo" className={className} src={SecureCloudLogoSVG} width={width} />
);

const SecureDataLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="secure-data-logo" className={className} src={SecureDataLogoSVG} width={width} />
);

const SecureLoginLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="secure-login-logo" className={className} src={SecureLoginLogoSVG} width={width} />
);

export {
  GDPRLogo,
  SecureCloudLogo,
  SecureDataLogo,
  SecureLoginLogo,
};
