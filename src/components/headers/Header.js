/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const FONT_WEIGHT = {
  h1: 'bold',
  h2: '600',
  h3: '600',
};

const FONT_SIZE_LG = {
  h1: '56px',
  h2: '36px',
  h3: '24px',
};

const FONT_SIZE_SM = {
  h1: '36px',
  h2: '24px',
  h3: '20px',
};

const LINE_HEIGHT = {
  h1: '1.15',
};

const MARGIN_BOTTOM = {
  h1: '24px',
  h2: '16px',
  h3: '16px',
};

const StyledHeader = styled.h1`
  color: ${NEUTRALS.GRAY_06};
  font-size: ${({ as }) => FONT_SIZE_SM[as]};
  font-weight: ${({ as }) => FONT_WEIGHT[as]};
  line-height: ${({ as }) => LINE_HEIGHT[as]};
  margin: 0;
  margin-bottom: ${({ as }) => MARGIN_BOTTOM[as]};
  padding: 0;
  text-align: center;
  white-space: normal;
  word-break: break-word;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    white-space: pre-wrap;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    font-size: ${({ as }) => FONT_SIZE_LG[as]};
  }
`;

type AS =
  | 'h1'
  | 'h2'
  | 'h3';

type Props = {
  as ?:AS;
  children :Node;
  className ?:string;
};

const Header = ({
  as,
  children,
  className,
} :Props) => (
  <StyledHeader as={as} className={className}>{children}</StyledHeader>
);

Header.defaultProps = {
  as: 'h1',
  className: undefined,
};

export default Header;
