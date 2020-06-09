/*
 * @flow
 */

import styled from 'styled-components';
import { StyleUtils } from 'lattice-ui-kit';

import { NEUTRALS, PINKS } from '../../core/style/Colors';

const { getStyleVariation } = StyleUtils;

const getTagColor = getStyleVariation('tagType', {
  beta: PINKS.PINK02,
  comingSoon: NEUTRALS.GRAY_13
});

const Tag = styled.div`
  background-color: ${getTagColor};
  border-radius: 3px;
  color: ${NEUTRALS.WHITE};
  font-size: 10px;
  font-weight: bold;
  line-height: 150%;
  margin-left: 12px;
  padding: 1px 5px;
  text-transform: uppercase;
`;

export default Tag;
