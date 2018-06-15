import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

import { N0, PP4 } from '../../core/style/Colors';

const TargetSVG = styled.svg`
  left: ${props => props.x || null};
  position: absolute;
  top: ${props => props.y || null};
`;

const JurisdictionTarget = ({ x, y }) => (
  <TargetSVG x={x} y={y}>
    <circle cx="4.5" cy="4.5" r="4.5" fill={PP4} />
    <circle cx="4.5" cy="4.5" r="3.5" fill={N0} />
    <circle cx="4.5" cy="4.5" r="2.5" fill={PP4} />
  </TargetSVG>
);

export default JurisdictionTarget;
