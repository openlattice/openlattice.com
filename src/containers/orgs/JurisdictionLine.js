import React, { type Node } from 'react';

import styled from 'styled-components';

import { PP4 } from '../../core/style/Colors';

const Line = styled.svg`
  left: ${props => props.x || null}px;
  position: absolute;
  top: ${props => props.y || null}px;
`;


const JurisdictionLine = ({ x, y, x1, y1, x2, y2 }) => {
  const width = Math.max(x1, x2);
  const height = Math.max(y, y2);

  return(
    <Line x={x} y={y} width={width} height={height}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={PP4} />
    </Line>
  );
};

export default JurisdictionLine;
