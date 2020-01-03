/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import type { Node } from 'react';

import AppMenu from '../headers/AppMenu';

import { MEDIA_QUERY_MD, PAGE_SECTION_WIDTH, WINDOW_EDGE_PADDING } from '../../core/style/Sizes';

/*
 * styled components
 */

// TODO: bgSize is a quick add, we can probably handle this much better
const bgImageMixin = ({ bgColor, bgImage, bgSize }) => {
  if (bgImage) {
    return css`
      background-image: url(${bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: ${bgSize || 'cover'};
    `;
  }
  if (bgColor) {
    return css`
      background-color: ${bgColor};
      background-size: ${bgSize || 'auto'};
    `;
  }
  return css`
    background: none;
  `;
};

// "min-width" because this container needs to stretch to 100% of the width of the window
export const PageSectionOuterWrapper = styled.section`
  display: flex;
  justify-content: center;
  min-width: 100%;
  position: relative;
`;

// "padding" adds space between the window edge and the content when the window size is really small
export const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 24px 32px 0 32px;
  position: relative;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    padding: 0 ${WINDOW_EDGE_PADDING}px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    align-items: stretch;
    width: ${PAGE_SECTION_WIDTH}px;
  }
`;

const PageSectionBackgroundWrapper = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  ${(props) => bgImageMixin(props)}
`;

/*
 * types
 */

type Props = {
  bgColor ? :string;
  bgComponent ? :Node;
  bgImage ? :string;
  bgSize ? :string;
  children :Node;
  includeMenu :?boolean;
}

/*
 * components
 */

// TODO: PageSection needs to support responsive layouts
const PageSection = ({
  bgColor,
  bgComponent,
  bgImage,
  bgSize,
  children,
  includeMenu
} :Props) => (
  <PageSectionOuterWrapper>
    <PageSectionBackgroundWrapper bgColor={bgColor} bgImage={bgImage} bgSize={bgSize}>
      { bgComponent }
    </PageSectionBackgroundWrapper>
    <PageSectionInnerWrapper>
      {
        includeMenu && <AppMenu />
      }
      { children }
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: undefined,
  bgComponent: undefined,
  bgImage: undefined,
  bgSize: undefined,
  includeMenu: false
};

export default PageSection;
