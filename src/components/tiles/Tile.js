/*
 * @flow
 */

import styled from 'styled-components';
import type { ComponentType } from 'react';

const Tile :ComponentType<{|
  align ?:{|
    h ?:'start' | 'center' | 'end';
    v ?:'start' | 'center' | 'end';
  |};
  children ?:any;
  gap ?:number;
  maxWidth ?:number;
|}> = styled.div`
  align-items: ${({ align }) => ((align && align.v) ? align.v : 'start')};
  display: grid;
  grid-gap: ${({ gap }) => (gap ? `${gap}px` : '24px')};
  justify-items: ${({ align }) => ((align && align.h) ? align.h : 'start')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : undefined)};
`;

export default Tile;
