import React, { type Node, Fragment } from 'react';

import styled from 'styled-components';

import { N0, N2, PP4 } from '../../core/style/Colors';

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

export default JurisdictionLabelSet;
