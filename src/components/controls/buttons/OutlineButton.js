/*
 * @flow
 */

import styled, { css } from 'styled-components';
import { StyleUtils } from 'lattice-ui-kit';

import {
  getComputedStyles as baseButtonComputedStyles,
} from './BaseButton';

import { NEUTRALS, PURPLES } from '../../../core/style/Colors';

const { getStyleVariation } = StyleUtils;

const getHoverBackgroundColor = getStyleVariation('color', {
  default: 'transparent',
  primary: PURPLES.PP11,
});

const getBorderColor = getStyleVariation('color', {
  default: NEUTRALS.GRAY_09,
  primary: PURPLES.PP09,
});

const getHoverBorderColor = getStyleVariation('color', {
  default: NEUTRALS.GRAY_18,
  primary: PURPLES.PP09,
});

const getColor = getStyleVariation('color', {
  default: NEUTRALS.GRAY_07,
  primary: PURPLES.PP09,
});

const getHoverColor = getStyleVariation('color', {
  default: NEUTRALS.GRAY_07,
  primary: PURPLES.PP10,
});

const getFocusBoxShadowColor = getStyleVariation('color', {
  default: NEUTRALS.GRAY_18,
  primary: PURPLES.PP10,
});

const getComputedStyles = () => css`
  ${baseButtonComputedStyles}
  background-color: transparent;
  border-color: ${getBorderColor};
  color: ${getColor};

  &:hover {
    background-color: ${getHoverBackgroundColor};
    border-color: ${getHoverBorderColor};
    color: ${getHoverColor};
  }

  &:focus {
    box-shadow: ${getFocusBoxShadowColor} 0 0 0 1px;
  }
`;

const OutlineButton = styled.button`
  ${getComputedStyles}
`;

OutlineButton.defaultProps = {
  color: 'default',
};

export default OutlineButton;
export {
  getComputedStyles,
};
