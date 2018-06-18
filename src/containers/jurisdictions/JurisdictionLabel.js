import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { N2, PP4 } from '../../core/style/Colors';

const LabelWrapper = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: absolute;
`;

const LocationLabel = styled.span`
  color: ${PP4};
  font-weight: 600;
  margin-bottom: 4px;
`;

const PopulationLabel = styled.span`
  color: ${N2};
  font-weight: normal;
`;

const CountyLabel = LabelWrapper.extend`
  left: ${props => `${props.x}px` || null};
  top: ${props => `${props.y}px` || null};
`;


const JurisdictionLabel = ({
  x, y, location, population
}) => (
  <CountyLabel x={x} y={y}>
    <LocationLabel>
      { location }
    </LocationLabel>
    <PopulationLabel>
      { population }
    </PopulationLabel>
  </CountyLabel>
);

JurisdictionLabel.propTypes = {
  x: PropTypes.string.isRequired,
  y: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired
};

export default JurisdictionLabel;
