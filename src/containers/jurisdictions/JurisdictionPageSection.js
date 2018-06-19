/*
 * @flow
 */

import React, { type Node } from 'react';

import styled from 'styled-components';

import JurisdictionLabelSet from './JurisdictionLabelSet';
import JurisdictionLabel from './JurisdictionLabel';
import mapImage from '../../assets/images/map.png';

import {
  PAGE_SECTION_MIN_WIDTH,
  WINDOW_EDGE_PADDING,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_JUR_LG
} from '../../core/style/Sizes';
import { N2, PP4 } from '../../core/style/Colors';

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

// "min-width" because this container needs to stretch to 100% of the width of the window
const PageSectionOuterWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

// "padding" adds space between the window edge and the content when the window size is really small
const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 ${WINDOW_EDGE_PADDING}px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    align-items: stretch;
    width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

const PageSectionBackgroundWrapper = styled.div`
  background-image: url(${mapImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 900px;
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
 * types
 */

type Props = {
  children :Node;
}

/*
 * components
 */

// Renders full label sets only at large browser size
const renderLabelSets = () => (
  jurisdictions.map((jurisdiction, i) => <JurisdictionLabelSet jurisdiction={jurisdiction} key={i} />)
);

const JurisdictionPageSection = (props :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper>
      <LabelSets>
        { renderLabelSets() }
      </LabelSets>
    </PageSectionBackgroundWrapper>
    <PageSectionInnerWrapper>
      { props.children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

export default JurisdictionPageSection;
