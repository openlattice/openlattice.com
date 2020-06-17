/*
 * @flow
 */

import styled from 'styled-components';

import BaseButton from './BaseButton';
import { PURPLES } from '../../../core/style/Colors';

const SolidButton = styled(BaseButton)`
  background-color: ${PURPLES.PP09};
  border-color: ${PURPLES.PP09};
  color: white;

  &:hover {
    background-color: ${PURPLES.PP10};
    border-color: ${PURPLES.PP10};
    color: white;
  }

  &:focus {
    box-shadow: ${PURPLES.PP10} 0 0 0 1px;
  }
`;

export default SolidButton;
