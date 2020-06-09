/*
 * @flow
 */

import styled from 'styled-components';

import CFRLogoPNG from './42cfrp2.png';
import CJISLogoPNG from './cjis.png';
import FERPALogoPNG from './ferpa.png';
import HIPAALogoPNG from './hipaa.png';

const CFRLogo = styled.img.attrs(({ width }) => ({
  alt: 'cfr-logo',
  src: CFRLogoPNG,
  width: width || 64,
}))``;

const CJISLogo = styled.img.attrs(({ width }) => ({
  alt: 'cjis-logo',
  src: CJISLogoPNG,
  width: width || 64,
}))``;

const FERPALogo = styled.img.attrs(({ width }) => ({
  alt: 'ferpa-logo',
  src: FERPALogoPNG,
  width: width || 64,
}))``;

const HIPAALogo = styled.img.attrs(({ width }) => ({
  alt: 'hipaa-logo',
  src: HIPAALogoPNG,
  width: width || 64,
}))``;

export {
  CFRLogo,
  CJISLogo,
  FERPALogo,
  HIPAALogo,
};
