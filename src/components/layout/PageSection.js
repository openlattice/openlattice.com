/*
 * @flow
 */

import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

import { PAGE_SECTION_MIN_WIDTH, WINDOW_EDGE_PADDING } from '../../core/style/Constants';

/*
 * styled components
 */

// "min-width" because this container needs to stretch to 100% of the width of the window
const PageSectionOuterWrapper = styled.section`
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: center;
  min-width: ${PAGE_SECTION_MIN_WIDTH}px;
  position: relative;
  ${(props) => {
    if (props.bgImage) {
      return css`
        background-image: url(${props.bgImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `;
    }
    else if (props.bgColor) {
      return css`background-color: ${props.bgColor};`;
    }
    return css`background: none`;
  }}
`;

// "padding" adds space between the window edge and the content when the window size is really small
const PageSectionInnerWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: ${PAGE_SECTION_MIN_WIDTH}px;
  padding: 0 ${WINDOW_EDGE_PADDING}px;
  position: relative;
`;

/*
 * types
 */

type Props = {
  bgColor ? :string;
  bgImage ? :string;
  children :Node;
}

/*
 * components
 */

const PageSection = (props :Props) => (
  <PageSectionOuterWrapper bgColor={props.bgColor} bgImage={props.bgImage}>
    <PageSectionInnerWrapper>
      { props.children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgImage: undefined
};

export default PageSection;
