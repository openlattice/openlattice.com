/*
 * @flow
 */

import styled from 'styled-components';
import { Colors, StyleUtils } from 'lattice-ui-kit';

const { NEUTRAL } = Colors;
const { getStyleVariation } = StyleUtils;

const getTagColor = getStyleVariation('tagType', {
  comingSoon: NEUTRAL.N700
});

const Tag = styled.div`
  background-color: ${getTagColor};
  border-radius: 3px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  line-height: 150%;
  margin-left: 12px;
  padding: 1px 5px;
  text-transform: uppercase;
`;

export default Tag;
