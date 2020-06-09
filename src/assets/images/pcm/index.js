/*
 * @flow
 */


import styled from 'styled-components';

import PCMFeatureShot1PNG from './pcm-feature-shot-1.png';
import PCMFeatureShot2PNG from './pcm-feature-shot-2.png';

const PCMFeatureShot1 = styled.img.attrs({
  alt: 'pcm-feature-shot-1',
  src: PCMFeatureShot1PNG,
})``;

const PCMFeatureShot2 = styled.img.attrs({
  alt: 'pcm-feature-shot-2',
  src: PCMFeatureShot2PNG,
})``;

export {
  PCMFeatureShot1,
  PCMFeatureShot2,
};
