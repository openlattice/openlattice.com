/*
 * @flow
 */

import styled from 'styled-components';

import PCMFeatureShot1PNG from './pcm-feature-shot-1.png';
import PCMFeatureShot2PNG from './pcm-feature-shot-2.png';
import PCMProductShotPNG from './pcm-product-shot.png';

const PCMFeatureShot1 = styled.img.attrs({
  alt: 'pcm-feature-shot-1',
  src: PCMFeatureShot1PNG,
})``;

const PCMFeatureShot2 = styled.img.attrs({
  alt: 'pcm-feature-shot-2',
  src: PCMFeatureShot2PNG,
})``;

const PCMProductShot = styled.img.attrs({
  alt: 'pcm-product-shot',
  src: PCMProductShotPNG,
})``;

export {
  PCMFeatureShot1,
  PCMFeatureShot2,
  PCMProductShot,
};
