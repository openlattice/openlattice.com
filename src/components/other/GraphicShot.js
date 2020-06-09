/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';

type Props = {
  align ?:string;
  maxWidth ?:number;
  withBorder ?:boolean;
};

const getComputedStyles = ({ align } :Props) => {

  let justifyContent = 'center';
  if (align === 'left') {
    justifyContent = 'flex-start';
  }
  else if (align === 'right') {
    justifyContent = 'flex-end';
  }
  return css`
    justify-content: ${justifyContent};
  `;
};

const GraphicShot = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  ${getComputedStyles}

  > img {
    border: ${({ withBorder }) => (withBorder ? `1px solid ${NEUTRALS.GRAY_10}` : undefined)};
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : undefined)};
    width: 100%;
  }
`;

export default GraphicShot;
