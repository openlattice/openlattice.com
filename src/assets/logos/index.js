/*
 * @flow
 */

import styled from 'styled-components';

import BCMLogoPNG from './research-logos/Baylor-College-of-Medicine.png';
import BYULogoPNG from './research-logos/BYU.png';
import CFRLogoPNG from './42cfrp2.png';
import CJISLogoPNG from './cjis.png';
import FERPALogoPNG from './ferpa.png';
import GeorgetownLogoPNG from './research-logos/Georgetown-University.png';
import HIPAALogoPNG from './hipaa.png';
import MichiganLogoPNG from './research-logos/University-of-Michigan.png';
import RuhrLogoPNG from './research-logos/Ruhr.png';
import SainteAnneLogoPNG from './research-logos/Universite-Sainte-Anne.png';
import Soc2LogoPNG from './soc2.png';
import UCDenverLogoPNG from './research-logos/UC-Denver.png';
import USCLogoPNG from './research-logos/U-of-South-Carolina.png';
import WisconsinLogoPNG from './research-logos/University-of-Wisconsin-Madison.png';

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

const Soc2Logo = styled.img.attrs(({ width }) => ({
  alt: 'soc2-logo',
  src: Soc2LogoPNG,
  width: width || 64,
}))``;

// University Logos:

const BCMLogo = styled.img.attrs(({ width }) => ({
  alt: 'bcm-logo',
  src: BCMLogoPNG,
  width: width || 300,
}))``;

const BYULogo = styled.img.attrs(({ width }) => ({
  alt: 'byu-logo',
  src: BYULogoPNG,
  width: width || 300,
}))``;

const GeorgetownLogo = styled.img.attrs(({ width }) => ({
  alt: 'georgetown-logo',
  src: GeorgetownLogoPNG,
  width: width || 389,
}))``;

const MichiganLogo = styled.img.attrs(({ width }) => ({
  alt: 'michigan-logo',
  src: MichiganLogoPNG,
  width: width || 316,
}))``;

const RuhrLogo = styled.img.attrs(({ width }) => ({
  alt: 'ruir-logo',
  src: RuhrLogoPNG,
  width: width || 300,
}))``;

const SainteAnneLogo = styled.img.attrs(({ width }) => ({
  alt: 'sainte-anne-logo',
  src: SainteAnneLogoPNG,
  width: width || 64,
}))``;

const UCDenverLogo = styled.img.attrs(({ width }) => ({
  alt: 'uc-denver-logo',
  src: UCDenverLogoPNG,
  width: width || 473,
}))``;

const USCLogo = styled.img.attrs(({ width }) => ({
  alt: 'usc-logo',
  src: USCLogoPNG,
  width: width || 375,
}))``;

const WisconsinLogo = styled.img.attrs(({ width }) => ({
  alt: 'wisconsin-logo',
  src: WisconsinLogoPNG,
  width: width || 316,
}))``;

export {
  BCMLogo,
  BYULogo,
  CFRLogo,
  CJISLogo,
  FERPALogo,
  GeorgetownLogo,
  HIPAALogo,
  MichiganLogo,
  RuhrLogo,
  SainteAnneLogo,
  Soc2Logo,
  UCDenverLogo,
  USCLogo,
  WisconsinLogo,
};
