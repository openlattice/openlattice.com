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
  align ?:string;
  maxWidth ?:{|
    sm ?:number;
    md ?:number;
    lg ?:number;
  |};
};

const getComputedMediaQueries = ({ align, maxWidth } :Props) => {

  let alignItems = 'center';
  if (align === 'left') {
    alignItems = 'flex-start';
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
  margin: 64px 0 100px 0;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
  ${getComputedMediaQueries}
`;

export default SectionContent;
