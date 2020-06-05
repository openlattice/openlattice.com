/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';

type Props = {
  align ?:string;
  children :Node;
  className ?:string;
  withBorder ?:boolean;
};

const getComputedStyles = ({ align, withBorder } :Props) => {

  let alignItems = 'center';
  if (align === 'left') {
    alignItems = 'flex-start';
  }

  let border;
  let borderRadius;
  let padding;
  if (withBorder) {
    border = `1px solid ${NEUTRALS.GRAY_10};`;
    borderRadius = '3px';
    padding = '32px';
  }

  return css`
    align-items: ${alignItems};
    border: ${border};
    border-radius: ${borderRadius};
    padding: ${padding};
  `;
};

const InfoTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const InfoTile = ({
  align,
  children,
  className,
  withBorder,
} :Props) => (
  <InfoTileWrapper align={align} className={className} withBorder={withBorder}>
    {children}
  </InfoTileWrapper>
);

InfoTile.defaultProps = {
  align: 'center',
  children: undefined,
  className: undefined,
  withBorder: false,
};

export default InfoTile;
