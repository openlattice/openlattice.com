/*
 * @flow
 */

import styled from 'styled-components';

import OpenLatticeLogoSVG from './ol-logo-header.svg';
import GDPRLogoSVG from './eu-gdpr-logo.svg';
import SecureCloudLogoSVG from './secure-cloud-logo.svg';
import SecureDataLogoSVG from './secure-data-logo.svg';
import SecureLoginLogoSVG from './secure-login-logo.svg';

const GDPRLogo = styled.img.attrs(({ width }) => ({
  alt: 'eu-gdpr-logo',
  src: GDPRLogoSVG,
  width: width || 64,
}))``;

const OpenLatticeLogo = styled.img.attrs(() => ({
  alt: 'openlattice-logo',
  src: OpenLatticeLogoSVG,
}))``;

const SecureCloudLogo = styled.img.attrs(({ width }) => ({
  alt: 'secure-cloud-logo',
  src: SecureCloudLogoSVG,
  width: width || 64,
}))``;

const SecureDataLogo = styled.img.attrs(({ width }) => ({
  alt: 'secure-data-logo',
  src: SecureDataLogoSVG,
  width: width || 64,
}))``;

const SecureLoginLogo = styled.img.attrs(({ width }) => ({
  alt: 'secure-login-logo',
  src: SecureLoginLogoSVG,
  width: width || 64,
}))``;

export {
  GDPRLogo,
  OpenLatticeLogo,
  SecureCloudLogo,
  SecureDataLogo,
  SecureLoginLogo,
};
