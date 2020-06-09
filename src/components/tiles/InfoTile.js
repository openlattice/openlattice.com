/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

type Props = {
  align ?:string;
  children :Node;
  className ?:string;
  maxWidth ?:{|
    sm ?:number;
    md ?:number;
    lg ?:number;
  |};
  withBorder ?:boolean;
};

const getComputedStyles = ({ align, maxWidth, withBorder } :Props) => {

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

  let smMaxWidth;
  if (maxWidth && maxWidth.sm) {
    smMaxWidth = `${maxWidth.sm}px`;
  }

  let mdMaxWidth;
  if (maxWidth && maxWidth.md) {
    mdMaxWidth = `${maxWidth.md}px`;
  }

  let lgMaxWidth;
  if (maxWidth && maxWidth.lg) {
    lgMaxWidth = `${maxWidth.lg}px`;
  }

  return css`
    align-items: ${alignItems};
    border: ${border};
    border-radius: ${borderRadius};
    padding: ${padding};

    @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
      max-width: ${smMaxWidth};
    }

    @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
      max-width: ${mdMaxWidth};
    }

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      max-width: ${lgMaxWidth};
    }
  `;
};

const InfoTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${getComputedStyles}

  > a {
    margin-bottom: 0;
    margin-top: auto;
  }

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
  maxWidth,
  withBorder,
} :Props) => (
  <InfoTileWrapper align={align} className={className} maxWidth={maxWidth} withBorder={withBorder}>
    {children}
  </InfoTileWrapper>
);

InfoTile.defaultProps = {
  align: 'center',
  children: undefined,
  className: undefined,
  maxWidth: undefined,
  withBorder: false,
};

export default InfoTile;
