/*
 * @flow
 */

import styled from 'styled-components';

import BullpenPNG from './bullpen.png';
import GovTechPNG from './gov-tech.png';
import HarrisonMetalPNG from './harrison-metal.png';
import PointNinePNG from './point-nine.png';
import UrbanInnovationPNG from './urban-innovation.png';

const BullpenLogo = styled.img.attrs({ src: BullpenPNG })`
  max-width: 240px;
`;

const GovTechLogo = styled.img.attrs({ src: GovTechPNG })`
  max-width: 116px;
`;

const HarrisonMetalLogo = styled.img.attrs({ src: HarrisonMetalPNG })`
  max-width: 132px;
`;

const PointNineLogo = styled.img.attrs({ src: PointNinePNG })`
  max-width: 141px;
`;

const UrbanInnovationLogo = styled.img.attrs({ src: UrbanInnovationPNG })`
  max-width: 181px;
`;

export {
  BullpenLogo,
  GovTechLogo,
  HarrisonMetalLogo,
  PointNineLogo,
  UrbanInnovationLogo,
};
