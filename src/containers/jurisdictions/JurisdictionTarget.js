// @flow
import React from 'react';

import styled from 'styled-components';

import { N0, PP4 } from '../../core/style/Colors';

const TargetSVG = styled.svg`
  left: ${({ x }) => `${x}px` || null};
  position: absolute;
  top: ${({ y }) => `${y}px` || null};
`;

type Props = {
  x :string;
  y :string;
};

const JurisdictionTarget = ({
  x,
  y,
} :Props) => (
  <TargetSVG x={x} y={y}>
    <circle cx="4.5" cy="4.5" r="4.5" fill={PP4} />
    <circle cx="4.5" cy="4.5" r="3.5" fill={N0} />
    <circle cx="4.5" cy="4.5" r="2.5" fill={PP4} />
  </TargetSVG>
);

export default JurisdictionTarget;
