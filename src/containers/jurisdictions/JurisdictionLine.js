import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { PP4 } from '../../core/style/Colors';

const Line = styled.svg`
  left: ${({ x }) => x || null}px;
  position: absolute;
  top: ${({ y }) => y || null}px;
`;


const JurisdictionLine = ({
  x, y, x1, y1, x2, y2
}) => {
  const width = Math.max(x1, x2);
  const height = Math.max(y, y2);

  return (
    <Line x={x} y={y} width={width} height={height}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={PP4} />
    </Line>
  );
};

JurisdictionLine.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  x1: PropTypes.string.isRequired,
  y1: PropTypes.string.isRequired,
  x2: PropTypes.string.isRequired,
  y2: PropTypes.string.isRequired
};

export default JurisdictionLine;
