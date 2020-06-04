/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled, { css } from 'styled-components';

const getComputedStyles = ({ align }) => {

  let alignItems = 'center';
  if (align === 'left') {
    alignItems = 'flex-start';
  }

  return css`
    align-items: ${alignItems};
  `;
};

const InfoTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getComputedStyles}

  > img,
  svg {
    margin-bottom: 24px;
  }

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: ${({ align }) => align};
  }
`;

type Props = {
  align ?:string;
  children :Node;
  className ?:string;
};

const InfoTile = ({ align, children, className } :Props) => {

  return (
    <InfoTileWrapper align={align} className={className}>
      {children}
    </InfoTileWrapper>
  );
};

InfoTile.defaultProps = {
  align: 'center',
  children: undefined,
  className: undefined,
};

export default InfoTile;
