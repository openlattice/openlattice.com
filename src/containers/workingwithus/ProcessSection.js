/*
 * @flow
 */

import React, { Children } from 'react';

import styled from 'styled-components';

import { SectionContent } from '../../components';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

const ProcessStepsSectionContent = styled(SectionContent)`
  margin: 0;

  div:first-child {
    margin-top: 0;
  }
`;

const ProcessSteps = styled.div`
  width: 100%;
`;

const StepTile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  height: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: auto 1fr;
    grid-gap: 48px;
  }
`;

const StepBubble = styled.div`
  display: flex;
  height: 100%;
  justify-self: center;

  > span {
    align-items: center;
    background-color: ${PURPLES.PP08};
    border-radius: 50%;
    color: white;
    display: flex;
    flex: 0 0 auto;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    justify-content: center;
    width: 40px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    flex-direction: column;

    > div {
      background-color: ${NEUTRALS.GRAY_09};
      content: '';
      height: 100%;
      margin: 24px auto;
      width: 1px;
    }
  }
`;

const StepContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    align-items: flex-start;
  }
`;

const ProcessSection = ({ children } :{ children :any }) => (
  <ProcessStepsSectionContent>
    {
      Children.map(children, (child, index) => (
        <ProcessSteps>
          <StepTile>
            <StepBubble>
              <span>{index + 1}</span>
              {
                (index + 1) < Children.count(children) && (
                  <div />
                )
              }
            </StepBubble>
            <StepContent>
              {child}
            </StepContent>
          </StepTile>
        </ProcessSteps>
      ))
    }
  </ProcessStepsSectionContent>
);

export default ProcessSection;
