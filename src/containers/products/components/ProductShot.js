/*
 * @flow
 */

import styled from 'styled-components';

import { NEUTRALS } from '../../../core/style/Colors';
import { CONTENT_WIDTH } from '../../../core/style/Sizes';

const ProductShot = styled.div`
  align-self: center;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
  z-index: 100;

  > img {
    border-radius: 2px;
    border: 1px solid ${NEUTRALS.GRAY_09};
    box-shadow: 0 10px 30px rgba(48, 47, 57, 0.05);
    margin-bottom: -30%;
    width: 100%;
  }
`;

export default ProductShot;
