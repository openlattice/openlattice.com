/*
 * @flow
 */

import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

import { PAGE_SECTION_MIN_WIDTH, WINDOW_EDGE_PADDING, MEDIA_QUERY_SM } from '../../core/style/Sizes';

/*
 * styled components
 */

const bgImageMixin = (props) => {
  if (props.bgImage) {
    return css`
      background-image: url(${props.bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
  }
  else if (props.bgColor) {
    return css`
      background-color: ${props.bgColor};
    `;
  }
  return css`
    background: none
  `;
};

// "min-width" because this container needs to stretch to 100% of the width of the window
const PageSectionOuterWrapper = styled.section`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  min-width: 100%;
  position: relative;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    min-width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

// "padding" adds space between the window edge and the content when the window size is really small
const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 100%;
  padding: 0 ${WINDOW_EDGE_PADDING}px;
  position: relative;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    align-items: stretch;
    width: ${PAGE_SECTION_MIN_WIDTH}px;
  }
`;

const PageSectionBackgroundWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  ${props => bgImageMixin(props)}
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

const PageSection = (props :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper bgColor={props.bgColor} bgImage={props.bgImage}>
      { props.bgComponent }
    </PageSectionBackgroundWrapper>
    <PageSectionInnerWrapper>
      { props.children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgComponent: undefined,
  bgImage: undefined
};

export default PageSection;
