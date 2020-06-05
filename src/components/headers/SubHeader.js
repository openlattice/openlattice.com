/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const FONT_SIZE_LG = {
  h4: '20px',
  h5: '18px',
  h6: '16px',
};

const FONT_WEIGHT = {
  h4: '500',
  h5: 'normal',
  h6: 'normal',
};

const StyledSubHeader = styled.h4`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  font-weight: ${({ as }) => FONT_WEIGHT[as]};
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  text-align: ${({ align }) => (align || 'center')};
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
  | 'h4'
  | 'h5'
  | 'h6';

type Props = {
  align ?:string;
  as ?:AS;
  children :Node;
  className ?:string;
};

const Header = ({
  align,
  as,
  children,
  className,
} :Props) => (
  <StyledSubHeader align={align} as={as} className={className}>{children}</StyledSubHeader>
);

Header.defaultProps = {
  align: 'center',
  as: 'h4',
  className: undefined,
};

export default Header;
