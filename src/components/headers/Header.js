/*
 * @flow
 */

import styled, { css } from 'styled-components';
import { Colors } from 'lattice-ui-kit';

import { MEDIA_QUERY_LG, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const { NEUTRAL } = Colors;

const FONT_SIZE_LG = {
  h1: '56px',
  h2: '36px',
  h3: '24px',
  h4: '20px',
  h5: '16px',
};

const FONT_SIZE_SM = {
  h1: '36px',
  h2: '24px',
  h3: '20px',
  h4: '18px',
  h5: '16px',
};

const MARGIN_BOTTOM = {
  h1: '24px',
  h2: '16px',
  h3: '16px',
  h4: '16px',
  h5: '8px',
};

type Props = {
  align ?:string;
  as ?:string;
};

const getComputedStyles = ({ align = 'center', as = 'h1' } :Props) => (
  css`
    font-size: ${FONT_SIZE_SM[as]};
    font-weight: ${(as === 'h1' ? 'bold' : 600)};
    line-height: ${(as === 'h1' ? 1.15 : 1.5)};
    margin-bottom: ${MARGIN_BOTTOM[as]};
    text-align: ${align};

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      font-size: ${FONT_SIZE_LG[as]};
    }
  `
);

const Header = styled.h1`
  align-items: center;
  color: ${NEUTRAL.N900};
  display: flex;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  word-break: break-word;
  ${getComputedStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    white-space: normal;
  }
`;

export default Header;
