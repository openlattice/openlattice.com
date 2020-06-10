/*
 * @flow
 */

import styled from 'styled-components';

import ChronicleFeatureShot1PNG from './chronicle-feature-shot-1.png';
import ChronicleFeatureShot2PNG from './chronicle-feature-shot-2.png';
import ChronicleFeatureShot3PNG from './chronicle-feature-shot-3.png';
import ChronicleProductShotPNG from './chronicle-product-shot.png';

const ChronicleFeatureShot1 = styled.img.attrs({
  alt: 'chronicle-feature-shot-1',
  src: ChronicleFeatureShot1PNG,
})``;

const ChronicleFeatureShot2 = styled.img.attrs({
  alt: 'chronicle-feature-shot-2',
  src: ChronicleFeatureShot2PNG,
})``;

const ChronicleFeatureShot3 = styled.img.attrs({
  alt: 'chronicle-feature-shot-3',
  src: ChronicleFeatureShot3PNG,
})``;

const ChronicleProductShot = styled.img.attrs({
  alt: 'chronicle-product-shot',
  src: ChronicleProductShotPNG,
})``;

export {
  ChronicleFeatureShot1,
  ChronicleFeatureShot2,
  ChronicleFeatureShot3,
  ChronicleProductShot,
};
