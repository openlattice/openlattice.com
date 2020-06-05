/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';

import { GRID_GAP, MEDIA_QUERY_LG } from '../../core/style/Sizes';

type Props = {
  align ?:string;
};

const getComputedStyles = ({ align = 'left' } :Props) => {

  let alignItems = 'center';
  if (align === 'left') {
    alignItems = 'flex-start';
  }

  return css`
    align-items: ${alignItems};
  `;
};

const getComputedOrdering = ({ children, reverseOrderOnMobile }) => {

  const items = React.Children.count(children);
  const order = React.Children.map(children, (c, i) => (
    `&:nth-of-type(${i + 1}) {
      order: ${reverseOrderOnMobile ? items - i : (i + 1)};
    }`
  ));

  return css`
    ${order}
  `;
};

const SectionContentGrid = styled.div`
  display: grid;
  grid-gap: ${GRID_GAP}px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  width: 100%;
  ${getComputedStyles}

  > div {
    max-width: 528px;

    @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
      ${getComputedOrdering}
    }
  }
`;

export default SectionContentGrid;
