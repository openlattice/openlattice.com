/*
 * @flow
 */

import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

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

const Path = styled.svg`
  position: absolute;
`;

const DaneCountyPath = Path.extend`
  top: 326px;
  left: 656px;
`;

const FranklinCountyPath = Path.extend`
  top: 328px;
  left: 807px;
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

const OrgsPageSection = (props :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper bgColor={props.bgColor} bgImage={props.bgImage}>
      <SVGWrapper>
        <JurisdictionLabel
            x={DANE_COUNTY.X_LABEL}
            y={DANE_COUNTY.Y_LABEL}
            location={DANE_COUNTY.LOCATION}
            population={DANE_COUNTY.POPULATION} />
        <JurisdictionLine
            x={DANE_COUNTY.X_LINE}
            y={DANE_COUNTY.Y_LINE}
            x1={DANE_COUNTY.X1_LINE}
            y1={DANE_COUNTY.Y1_LINE}
            x2={DANE_COUNTY.X2_LINE}
            y2={DANE_COUNTY.Y2_LINE} />
        <JurisdictionTarget x={DANE_COUNTY.X_TARGET} y={DANE_COUNTY.Y_TARGET} />
        <JurisdictionLabel
            x={FRANKLIN_COUNTY.X_LABEL}
            y={FRANKLIN_COUNTY.Y_LABEL}
            location={FRANKLIN_COUNTY.LOCATION}
            population={FRANKLIN_COUNTY.POPULATION} />
        <JurisdictionLine
            x={FRANKLIN_COUNTY.X_LINE}
            y={FRANKLIN_COUNTY.Y_LINE}
            x1={FRANKLIN_COUNTY.X1_LINE}
            y1={FRANKLIN_COUNTY.Y1_LINE}
            x2={FRANKLIN_COUNTY.X2_LINE}
            y2={FRANKLIN_COUNTY.Y2_LINE} />
        <JurisdictionTarget x={FRANKLIN_COUNTY.X_TARGET} y={FRANKLIN_COUNTY.Y_TARGET} />
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
