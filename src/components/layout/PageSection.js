/*
 * @flow
 */

import React, { type Node } from 'react';

import styled, { css } from 'styled-components';

import { PAGE_SECTION_MIN_WIDTH } from '../../core/style/Constants';

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

const PageSectionInnerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  min-width: ${PAGE_SECTION_MIN_WIDTH}px;
  padding: 0 50px;
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
