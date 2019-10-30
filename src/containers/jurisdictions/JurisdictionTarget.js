// @flow
import React from 'react';

import styled from 'styled-components';

import { NEUTRALS, PURPLES } from '../../core/style/Colors';

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
    <circle cx="4.5" cy="4.5" r="4.5" fill={PURPLES.PP05} />
    <circle cx="4.5" cy="4.5" r="3.5" fill={NEUTRALS.WHITE} />
    <circle cx="4.5" cy="4.5" r="2.5" fill={PURPLES.PP05} />
  </TargetSVG>
);

export default JurisdictionTarget;
