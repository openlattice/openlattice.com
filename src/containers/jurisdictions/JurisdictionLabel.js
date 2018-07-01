import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { N2, PP4 } from '../../core/style/Colors';
import {
  MEDIA_QUERY_JUR_SM,
  MEDIA_QUERY_JUR_MD,
  MEDIA_QUERY_JUR_LG
} from '../../core/style/Sizes';

const LabelWrapper = styled.span`
  display: flex;
  flex-basis: 4%;
  flex-direction: column;
  font-size: 12px;
  line-height: 17px;
  margin: 0 10px 20px 10px;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) {
    flex-basis: 10%;
    font-size: 14px;
    line-height: 19px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_MD}px) {
    flex-basis: 20%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    position: absolute;
    left: ${props => `${props.x}px`};
    margin: 0;
    top: ${props => `${props.y}px`};
  }
`;

const LocationLabel = styled.span`
  color: ${PP4};
  font-weight: normal;
  margin-bottom: 4px;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_MD}px) {
    font-weight: 600;
  }
`;

const PopulationLabel = styled.span`
  color: ${N2};
  display: none;
  font-weight: normal;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_MD}px) {
    display: block;
  }
`;


const JurisdictionLabel = ({
  x, y, location, population
}) => (
  <LabelWrapper x={x} y={y}>
    <LocationLabel>
      { location }
    </LocationLabel>
    <PopulationLabel>
      { population }
    </PopulationLabel>
  </LabelWrapper>
);

JurisdictionLabel.propTypes = {
  x: PropTypes.string,
  y: PropTypes.string,
  location: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired
};

JurisdictionLabel.defaultProps = {
  x: undefined,
  y: undefined
};

export default JurisdictionLabel;
