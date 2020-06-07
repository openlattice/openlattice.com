/*
 * @flow
 */

import styled, { css } from 'styled-components';

type Props = {
  align ?:string;
  maxWidth ?:number;
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
    max-width: ${({ maxWidth }) => (`${maxWidth}px` || undefined)};
    width: 100%;
  }
`;

export default GraphicShot;
