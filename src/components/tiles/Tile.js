/*
 * @flow
 */

import { Colors } from 'lattice-ui-kit';
import type { ComponentType } from 'react';

import styled from 'styled-components';

const { NEUTRAL } = Colors;

const Tile :ComponentType<{|
  align ?:{|
    h ?:'start' | 'center' | 'end';
    v ?:'start' | 'center' | 'end';
  |};
  children ?:any;
  gap ?:number;
  maxWidth ?:number;
  withBorder ?:boolean;
|}> = styled.div`
  align-items: ${({ align }) => ((align && align.v) ? align.v : 'start')};
  border: ${({ withBorder }) => (withBorder ? `1px solid ${NEUTRAL.N100}` : undefined)};
  border-radius: ${({ withBorder }) => (withBorder ? '3px' : undefined)};
  display: grid;
  grid-gap: ${({ gap }) => (gap ? `${gap}px` : '24px')};
  justify-items: ${({ align }) => ((align && align.h) ? align.h : 'start')};
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : undefined)};
  padding: ${({ withBorder }) => (withBorder ? '32px' : undefined)};
`;

export default Tile;
