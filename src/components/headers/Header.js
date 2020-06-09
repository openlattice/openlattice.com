/*
 * @flow
 */

import styled, { css } from 'styled-components';

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

type Props = {
  align ?:string;
  as ?:string;
};

const getComputedStyles = ({ align = 'center', as = 'h1' } :Props) => (
  css`
    font-size: ${FONT_SIZE_SM[as]};
    font-weight: ${FONT_WEIGHT[as]};
    line-height: ${LINE_HEIGHT[as]};
    margin-bottom: ${MARGIN_BOTTOM[as]};
    text-align: ${align};

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      font-size: ${FONT_SIZE_LG[as]};
    }
  `
);

const Header = styled.h1`
  align-items: center;
  color: ${NEUTRALS.GRAY_06};
  display: flex;
  margin: 0;
  padding: 0;
  white-space: normal;
  word-break: break-word;
  ${getComputedStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    white-space: pre-wrap;
  }
`;

export default Header;
