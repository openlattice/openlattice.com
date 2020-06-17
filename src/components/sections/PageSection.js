/*
 * @flow
 */

import React from 'react';
import type { Node } from 'react';

import styled from 'styled-components';

import { CONTENT_WIDTH, PAGE_PADDING } from '../../core/style/Sizes';

const PageSectionOuterWrapper = styled.section`
  align-items: center;
  background-color: ${({ bgColor }) => (bgColor || 'white')};
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: center;
  position: relative;
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
  bgColor ?:string;
  children :Node;
  className ?:string;
};

const PageSection = ({
  bgColor,
  children,
  className,
} :Props) => (
  <PageSectionOuterWrapper bgColor={bgColor} className={className}>
    <PageSectionInnerWrapper>
      {children}
    </PageSectionInnerWrapper>
  </PageSectionOuterWrapper>
);

PageSection.defaultProps = {
  bgColor: 'white',
  className: undefined,
};

export default PageSection;
