/*
 * @flow
 */

import styled from 'styled-components';

import DataSecurityAndCompliancePNG from './data-security-and-compliance.png';
import LaptopPNG from './laptop.png';
import StatueOfLibertyJPG from './statue-of-liberty.jpg';

const DataSecurityAndComplianceImg = styled.img.attrs({
  alt: 'data-security-and-compliance',
  src: DataSecurityAndCompliancePNG,
})``;

const LaptopImg = styled.img.attrs({
  alt: 'laptop',
  src: LaptopPNG,
})``;

export {
  DataSecurityAndComplianceImg,
  LaptopImg,
  StatueOfLibertyJPG,
};
