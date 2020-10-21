/*
 * @flow
 */

import styled, { css } from 'styled-components';

import {
  GRID_GAP,
  MEDIA_QUERY_SM,
} from '../../core/style/Sizes';

type Props = {
  align ?:{
    h ?:'start' | 'center' | 'end';
    v ?:'start' | 'center' | 'end';
  };
  children :any;
  gridGap ?:number;
  reverseOrderOnWrap ?:boolean;
};

const getComputedStyles = ({ align = {}, gridGap = GRID_GAP } :Props) => {

  let alignItems = 'center'; // normal?
  if (align.v === 'start') {
    alignItems = 'flex-start';
  }
  else if (align.v === 'end') {
    alignItems = 'flex-end';
  }

  let justifyItems = 'center';
  if (align.h === 'start') {
    justifyItems = 'flex-start';
  }
  else if (align.h === 'end') {
    justifyItems = 'flex-end';
  }

  return css`
    align-items: ${alignItems};
    justify-items: ${justifyItems};
    grid-gap: ${gridGap}px;
  `;
};

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  ${getComputedStyles}

  > div {
    max-width: 528px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export default ContentGrid;
