/*
 * @flow
 */

import styled from 'styled-components';

import BullpenPNG from './bullpen.png';
import GovTechPNG from './gov-tech.png';
import HarrisonMetalPNG from './harrison-metal.png';
import PointNinePNG from './point-nine.png';
import UrbanInnovationPNG from './urban-innovation.png';

const BullpenLogo = styled.img.attrs({
  alt: 'bullpen-capital-logo',
  src: BullpenPNG,
})`
  max-width: 240px;
`;

const GovTechLogo = styled.img.attrs({
  alt: 'govtech-fund-logo',
  src: GovTechPNG,
})`
  max-width: 116px;
`;

const HarrisonMetalLogo = styled.img.attrs({
  alt: 'harrison-metal-logo',
  src: HarrisonMetalPNG,
})`
  max-width: 132px;
`;

const PointNineLogo = styled.img.attrs({
  alt: 'point-nine-capital-logo',
  src: PointNinePNG,
})`
  max-width: 141px;
`;

const UrbanInnovationLogo = styled.img.attrs({
  alt: 'urban-innovation-fund-logo',
  src: UrbanInnovationPNG,
})`
  max-width: 181px;
`;

export {
  BullpenLogo,
  GovTechLogo,
  HarrisonMetalLogo,
  PointNineLogo,
  UrbanInnovationLogo,
};
