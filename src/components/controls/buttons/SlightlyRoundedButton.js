/*
 * @flow
 */

import styled from 'styled-components';

import { NEUTRALS } from '../../../core/style/Colors';

const SlightlyRoundedButton = styled.button`
  background-color: ${NEUTRALS.WHITE};
  border: 1px solid ${NEUTRALS.GRAY_10};
  border-radius: 5px;
  color: ${NEUTRALS.GRAY_08};
  padding: 5px 10px;
`;

export default SlightlyRoundedButton;
