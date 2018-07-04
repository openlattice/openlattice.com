import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import JurisdictionLabel from './JurisdictionLabel';
import JurisdictionLine from './JurisdictionLine';
import JurisdictionTarget from './JurisdictionTarget';


const JurisdictionLabelSet = ({ jurisdiction }) => (
  <Fragment>
    <JurisdictionLabel
        x={jurisdiction.X_LABEL}
        y={jurisdiction.Y_LABEL}
        location={jurisdiction.LOCATION}
        population={jurisdiction.POPULATION} />
    <JurisdictionLine
        x={jurisdiction.X_LINE}
        y={jurisdiction.Y_LINE}
        x1={jurisdiction.X1_LINE}
        y1={jurisdiction.Y1_LINE}
        x2={jurisdiction.X2_LINE}
        y2={jurisdiction.Y2_LINE} />
    <JurisdictionTarget
        x={jurisdiction.X_TARGET}
        y={jurisdiction.Y_TARGET} />
  </Fragment>
);

JurisdictionLabelSet.propTypes = {
  jurisdiction: PropTypes.shape({
    X_LABEL: PropTypes.string.isRequired,
    Y_LABEL: PropTypes.string.isRequired,
    X_LINE: PropTypes.string.isRequired,
    Y_LINE: PropTypes.string.isRequired,
    X1_LINE: PropTypes.string.isRequired,
    Y1_LINE: PropTypes.string.isRequired,
    X2_LINE: PropTypes.string.isRequired,
    Y2_LINE: PropTypes.string.isRequired,
    X_TARGET: PropTypes.string.isRequired,
    Y_TARGET: PropTypes.string.isRequired,
    LOCATION: PropTypes.string.isRequired,
    POPULATION: PropTypes.string.isRequired
  }).isRequired
};

export default JurisdictionLabelSet;
