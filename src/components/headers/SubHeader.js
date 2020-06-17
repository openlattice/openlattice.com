/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_SM } from '../../core/style/Sizes';

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

type Props = {
  align ?:string;
  as ?:string;
};

const getComputedStyles = ({ align = 'center', as = 'h4' } :Props) => (
  css`
    font-weight: ${FONT_WEIGHT[as]};
    text-align: ${align};

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      font-size: ${FONT_SIZE_LG[as]};
    }
  `
);

const SubHeader = styled.h4`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  margin: 0;
  margin-bottom: 32px;
  padding: 0;
  white-space: pre-wrap;
  word-break: break-word;
  ${getComputedStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    white-space: normal;
  }
`;

export default SubHeader;
