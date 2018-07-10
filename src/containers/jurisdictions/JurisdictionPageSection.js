/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionLabelSet from './JurisdictionLabelSet';
import mapImage from '../../assets/images/map.png';
import { PageSectionInnerWrapper, PageSectionOuterWrapper } from '../../components/layout/PageSection';
import { MEDIA_QUERY_JUR_LG } from '../../core/style/Sizes';

import {
  DANE,
  FRANKLIN,
  PORTLAND,
  MIDDLESEX,
  HUDSON,
  BERKS,
  BALTIMORE,
  LAKE,
  JOHNSON,
  POLK,
  CALIFORNIA,
  PENNINGTON,
  MINNEHAHA
} from './Constants';


/*
 * constants
 */

const jurisdictions = [
  DANE,
  FRANKLIN,
  PORTLAND,
  MIDDLESEX,
  HUDSON,
  BERKS,
  BALTIMORE,
  LAKE,
  JOHNSON,
  POLK,
  CALIFORNIA,
  PENNINGTON,
  MINNEHAHA
];


/*
 * styled components
 */

const PageSectionBackgroundWrapper = styled.div`
  background-image: url(${mapImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1100px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    background-size: auto;
  }
`;

const LabelSets = styled.div`
  display: none;
  height: 100%;
  position: relative;
  max-width: 1300px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    display: block;
  }
`;


/*
 * components
 */

// Renders full label sets only at large browser size
const renderLabelSets = () => (
  jurisdictions.map(jurisdiction => (
    <JurisdictionLabelSet
        jurisdiction={jurisdiction}
        key={jurisdiction.LOCATION} />
  ))
);

type Props = {
  children :Node;
}

const JurisdictionPageSection = ({ children } :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper>
      <LabelSets>
        { renderLabelSets() }
      </LabelSets>
    </PageSectionBackgroundWrapper>
    <PageSectionInnerWrapper>
      { children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

export default JurisdictionPageSection;
