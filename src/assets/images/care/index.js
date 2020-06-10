/*
 * @flow
 */

import styled from 'styled-components';

import CAREFeatureShot1PNG from './care-feature-shot-1.png';
import CAREFeatureShot2PNG from './care-feature-shot-2.png';
import CAREProductShotPNG from './care-product-shot.png';

const CAREFeatureShot1 = styled.img.attrs({
  alt: 'care-feature-shot-1',
  src: CAREFeatureShot1PNG,
})``;

const CAREFeatureShot2 = styled.img.attrs({
  alt: 'care-feature-shot-2',
  src: CAREFeatureShot2PNG,
})``;

const CAREProductShot = styled.img.attrs({
  alt: 'care-product-shot',
  src: CAREProductShotPNG,
})``;

export {
  CAREFeatureShot1,
  CAREFeatureShot2,
  CAREProductShot,
};
