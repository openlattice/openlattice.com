// @flow
import React from 'react';

import styled from 'styled-components';

import { PP4 } from '../../core/style/Colors';

const Line = styled.svg`
  left: ${({ x }) => x || null}px;
  position: absolute;
  top: ${({ y }) => y || null}px;
`;

type Props = {
  x :number;
  y :number;
  x1 :number;
  y1 :number;
  x2 :number;
  y2 :number;
};

const JurisdictionLine = ({
  x,
  y,
  x1,
  y1,
  x2,
  y2,
} :Props) => {
  const width = Math.max(x1, x2);
  const height = Math.max(y, y2);

  return (
    <Line x={x} y={y} width={width} height={height}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={PP4} />
    </Line>
  );
};

export default JurisdictionLine;
