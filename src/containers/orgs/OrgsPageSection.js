/*
 * @flow
 */

import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

import JurisdictionLabelSet from './JurisdictionLabelSet';
import JurisdictionLabel from './JurisdictionLabel';
import JurisdictionLine from './JurisdictionLine';
import JurisdictionTarget from './JurisdictionTarget';

import { PAGE_SECTION_MIN_WIDTH, WINDOW_EDGE_PADDING, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { N0, N2, PP4 } from '../../core/style/Colors';

import {
  DANE_COUNTY,
  FRANKLIN_COUNTY
} from './Constants';


/*
 * constants
 */

const jurisdictions = [
  DANE_COUNTY,
  FRANKLIN_COUNTY
];


/*
 * styled components
 */

const bgImageMixin = (props) => {
  if (props.bgImage) {
    return css`
      background-image: url(${props.bgImage});
      background-position: center;
      background-repeat: no-repeat;
    `;
  }
  else if (props.bgColor) {
    return css`
      background-color: ${props.bgColor};
    `;
  }
  return css`
    background: none;
  `;
};

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

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    align-items: stretch;
    width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

const PageSectionBackgroundWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  ${props => bgImageMixin(props)}
`;

const SVGWrapper = styled.div`
  height: 100%;
  position: relative;
  text-align: left;
  max-width: 1300px;
  width: 100%;
`;


/*
 * types
 */

type Props = {
  bgColor ? :string;
  bgComponent ? :Node;
  bgImage ? :string;
  children :Node;
}

/*
 * components
 */

const renderLabelSets = () => {
  return jurisdictions.map(jurisdiction => <JurisdictionLabelSet jurisdiction={jurisdiction} />);
};

const OrgsPageSection = (props :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper bgColor={props.bgColor} bgImage={props.bgImage}>
      <SVGWrapper>
        { renderLabelSets() }
      </SVGWrapper>
    </PageSectionBackgroundWrapper>
    <PageSectionInnerWrapper>
      { props.children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

OrgsPageSection.defaultProps = {
  bgColor: undefined,
  bgComponent: undefined,
  bgImage: undefined
};

export default OrgsPageSection;
