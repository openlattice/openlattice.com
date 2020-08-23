/*
 * @flow
 */

import styled from 'styled-components';

import AstrometricsIconSVG from './astrometrics-icon.svg';
import CAREIconSVG from './care-icon.svg';
import CWPIconSVG from './cwp-icon.svg';
import OpenLatticeIconSVG from './ol-icon.svg';
import PCMIconSVG from './pcm-icon.svg';
import SteppingUpIconSVG from './stepping-up-icon.svg';

const AstrometricsIcon = styled.img.attrs({
  alt: 'astrometrics-icon',
  src: AstrometricsIconSVG,
})``;

const CAREIcon = styled.img.attrs({
  alt: 'care-icon',
  src: CAREIconSVG,
})``;

const CWPIcon = styled.img.attrs({
  alt: 'cwp-icon',
  src: CWPIconSVG,
})``;

const OpenLatticeIcon = styled.img.attrs({
  alt: 'openlattice-icon',
  src: OpenLatticeIconSVG,
})``;

const PCMIcon = styled.img.attrs({
  alt: 'pretrial-case-management-icon',
  src: PCMIconSVG,
})``;

const SteppingUpIcon = styled.img.attrs({
  alt: 'stepping-up-icon',
  src: SteppingUpIconSVG,
})``;

export {
  AstrometricsIcon,
  CAREIcon,
  CWPIcon,
  OpenLatticeIcon,
  PCMIcon,
  SteppingUpIcon,
};
