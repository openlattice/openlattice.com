/*
 * @flow
 */

import styled, { css } from 'styled-components';

import ContentGrid from './ContentGrid';

import { GRID_GAP, PAGE_PADDING } from '../../core/style/Sizes';

type Props = {
  gridGap ?:number;
  reverseOrderOnWrap ?:boolean;
};

const getComputedStyles = ({ gridGap = GRID_GAP, reverseOrderOnWrap } :Props) => {

  // NOTE: 240 is the column min width before the grid would wrap, i.e. minmax(240px, 1fr)
  // TODO: 240 should be configurable
  const twoColumnsMinWidth = (2 * 240) + gridGap + (2 * PAGE_PADDING);

  return css`
    @media only screen and (min-width: ${twoColumnsMinWidth}px) {
      grid-template-columns: 1fr 1fr;
    }

    > div {
      @media only screen and (max-width: ${twoColumnsMinWidth - 1}px) {
        &:nth-of-type(1) {
          order: ${reverseOrderOnWrap ? 2 : 1};
        }

        &:nth-of-type(2) {
          order: ${reverseOrderOnWrap ? 1 : 2};
        }
      }
    }
  `;
};

const FeatureGrid = styled(ContentGrid)`
  ${getComputedStyles}
`;

export default FeatureGrid;
