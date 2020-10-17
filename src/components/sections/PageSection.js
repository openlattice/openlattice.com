/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled, { css } from 'styled-components';

import { CONTENT_WIDTH, PAGE_PADDING } from '../../core/style/Sizes';

const getComputedStyles = ({ bgColor, bgImage }) => {

  let bg;
  let bgSize;
  if (bgImage) {
    bg = `url(${bgImage}) no-repeat center center`;
    bgSize = 'cover';
  }

  return css`
    background-color: ${bgColor || 'white'};
    background: ${bg};
    background-size: ${bgSize};
  `;
};

const PageSectionOuterWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
  ${getComputedStyles}
`;

const PageSectionInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  /* max-width: ${CONTENT_WIDTH}px; */
  min-width: 0;
  padding: ${PAGE_PADDING}px;
  position: relative;
  width: 100%;
`;

type Props = {
  bgColor :string;
  bgImage :any;
  children :Node;
  className ?:string;
};

const PageSection = ({
  bgColor,
  bgImage,
  children,
  className,
} :Props) => (
  <PageSectionOuterWrapper bgColor={bgColor} bgImage={bgImage} className={className}>
    <PageSectionInnerWrapper>
      {children}
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: 'white',
  bgImage: undefined,
  className: undefined,
};

export default PageSection;
