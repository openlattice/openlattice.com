/*
 * @flow
 */

import styled, { css } from 'styled-components';

import {
  CONTENT_WIDTH,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_SM,
} from '../../core/style/Sizes';

type Props = {
  align ?:{
    h ?:'start' | 'center' | 'end';
    v ?:'start' | 'center' | 'end';
  };
  margin ?:string;
  maxWidth ?:{|
    sm ?:number;
    md ?:number;
    lg ?:number;
  |};
  vertical ?:boolean;
};

const getComputedStyles = ({
  align = {},
  margin,
  maxWidth,
  vertical = true,
} :Props) => {

  let alignVertical = 'center';
  if (align.v === 'start') {
    alignVertical = 'flex-start';
  }
  else if (align.v === 'end') {
    alignVertical = 'flex-end';
  }

  let alignHorizontal = 'center';
  if (align.h === 'start') {
    alignHorizontal = 'flex-start';
  }
  else if (align.h === 'end') {
    alignHorizontal = 'flex-end';
  }

  const alignItems = vertical ? alignHorizontal : alignVertical;
  const justifyContent = vertical ? alignVertical : alignHorizontal;

  let finalMargin = '100px 0';
  if (margin) {
    finalMargin = margin;
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
    justify-content: ${justifyContent};
    margin: ${finalMargin};

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

const SectionContent = styled.div`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical === false ? 'row' : 'column')};
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
  ${getComputedStyles}
`;

export default SectionContent;
