/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { StyleUtils } from 'lattice-ui-kit';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreExternalLink } from '../../components/controls/index';
import { TARGET } from '../../components/headers/MenuConsts';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { WORKING_WITH_US_DESCRIPTIONS, WORKING_WITH_US_GRAPHICS, WORKING_WITH_US_STEPS } from './WorkingWithUsConsts';

const { getStyleVariation } = StyleUtils;
const implementationPlanLink :string = 'https://help.openlattice.com/article/96-our-implementation-plan';

const getAlignSelfStyle = getStyleVariation('align', {
  default: 'flex-end',
  center: 'center',
  start: 'flex-start'
});

const getMarginTop = getStyleVariation('marginTop', {
  default: '0',
  huge: '66px',
  large: '24px',
  medium: '17px',
  small: '7px'
});

const columnFlex = css`
  display: flex;
  flex-direction: column;
`;

const PageContent = styled.div`
  align-items: center;
  ${columnFlex}
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 200px auto;
    width: 1097px;
  }
`;

const SectionDescription = styled.div`
  color: ${NEUTRALS.GRAY_17};
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 40px;
  text-align: center;
  width: 528px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
    width: 100%;
  }
`;

const ListWrapper = styled.div`
  margin-top: 104px;
  width: 100%;
`;

const ListItemOuterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  margin-top: ${getMarginTop};
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

const NumberOneOuterWrapper = styled(ListItemOuterWrapper)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 408px;
  }
`;

const ListItemInnerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: column;
  }
`;

const ListNumberAndTextWrapper = styled.div`
  align-items: flex-start;
  align-self: ${getAlignSelfStyle};
  display: flex;
  justify-content: space-between;
  margin-top: ${getMarginTop};
  width: 576px;

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const NumberWrapper = styled.div`
  align-items: flex-start;
  ${columnFlex}
  justify-content: center;
  margin-right: 56px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-right: 28px;
  }
`;

const NumberBubble = styled.div`
  align-items: center;
  background-color: ${PURPLES.PP08};
  border-radius: 50%;
  color: ${NEUTRALS.WHITE};
  display: flex;
  font-size: 20px;
  font-weight: 600;
  height: 40px;
  justify-content: center;
  line-height: 150%;
  margin-bottom: 24px;
  text-align: center;
  width: 40px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 16px;
    height: 30px;
    width: 30px;
  }
`;

const NumberLine = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_09};
  color: ${NEUTRALS.GRAY_09};
  height: 299px;
  margin-left: 50%;
  width: 0;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    border: 0;
    height: 0;
  }
`;

const TextWrapper = styled.div`
  align-items: flex-start;
  ${columnFlex}
  justify-content: center;
  width: 480px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const Graphic = styled.img`
  align-self: flex-start;
  margin-top: ${getMarginTop};

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    align-self: center;
    margin-top: 0;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 100%;
    width: 100%;
  }
`;

const ListItemTitle = styled(SectionHeader)`
  font-size: 26px;
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
`;

const ListItemDescription = styled.div`
  color: ${NEUTRALS.GRAY_17};
  font-size: 18px;
  font-weight: 500;
  line-height: 150%;
  text-align: left;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
`;

const WorkingWithUsProcess = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <PageContent>
      <SectionHeader>How do you start working with us?</SectionHeader>
      <SectionDescription>
        {`As a public benefit corporation, OpenLattice enables precision government by
          linking individual-level data across currently siloed criminal justice,
          healthcare, and social services information at little or no cost.`}
      </SectionDescription>
      <LearnMoreExternalLink href={implementationPlanLink} target={TARGET}>Learn more</LearnMoreExternalLink>
      <ListWrapper>
        <NumberOneOuterWrapper>
          <ListItemInnerWrapper>
            <ListNumberAndTextWrapper align="default">
              <NumberWrapper>
                <NumberBubble>1</NumberBubble>
                <NumberLine />
              </NumberWrapper>
              <TextWrapper>
                <ListItemTitle>{ WORKING_WITH_US_STEPS.PROBLEM_DEFINITION }</ListItemTitle>
                <ListItemDescription>{ WORKING_WITH_US_DESCRIPTIONS.PROBLEM_DEFINITION }</ListItemDescription>
              </TextWrapper>
            </ListNumberAndTextWrapper>
            <Graphic src={WORKING_WITH_US_GRAPHICS.PROBLEM_DEFINITION} alt="" align="start" />
          </ListItemInnerWrapper>
        </NumberOneOuterWrapper>
        <ListItemOuterWrapper marginTop="large">
          <ListItemInnerWrapper>
            <ListNumberAndTextWrapper>
              <NumberWrapper>
                <NumberBubble>2</NumberBubble>
                <NumberLine />
              </NumberWrapper>
              <TextWrapper>
                <ListItemTitle>{ WORKING_WITH_US_STEPS.DATA_SHARING_AGREEMENTS }</ListItemTitle>
                <ListItemDescription>
                  { WORKING_WITH_US_DESCRIPTIONS.DATA_SHARING_AGREEMENTS }
                </ListItemDescription>
              </TextWrapper>
            </ListNumberAndTextWrapper>
            <Graphic src={WORKING_WITH_US_GRAPHICS.DATA_SHARING_AGREEMENTS} alt="" align="start" marginTop="huge" />
          </ListItemInnerWrapper>
        </ListItemOuterWrapper>
        <ListItemOuterWrapper>
          <ListItemInnerWrapper>
            <ListNumberAndTextWrapper align="start" marginTop="large">
              <NumberWrapper>
                <NumberBubble>3</NumberBubble>
                <NumberLine />
              </NumberWrapper>
              <TextWrapper>
                <ListItemTitle>{ WORKING_WITH_US_STEPS.DATA_PIPELINES }</ListItemTitle>
                <ListItemDescription>{ WORKING_WITH_US_DESCRIPTIONS.DATA_PIPELINES }</ListItemDescription>
              </TextWrapper>
            </ListNumberAndTextWrapper>
            <Graphic src={WORKING_WITH_US_GRAPHICS.DATA_PIPELINES} alt="" align="start" />
          </ListItemInnerWrapper>
        </ListItemOuterWrapper>
        <ListItemOuterWrapper marginTop="medium">
          <ListItemInnerWrapper>
            <ListNumberAndTextWrapper align="start" marginTop="small">
              <NumberWrapper>
                <NumberBubble>4</NumberBubble>
              </NumberWrapper>
              <TextWrapper>
                <ListItemTitle>{ WORKING_WITH_US_STEPS.DEPLOY_APPS }</ListItemTitle>
                <ListItemDescription>{ WORKING_WITH_US_DESCRIPTIONS.DEPLOY_APPS }</ListItemDescription>
              </TextWrapper>
            </ListNumberAndTextWrapper>
            <Graphic src={WORKING_WITH_US_GRAPHICS.DEPLOY_APPS} alt="" align="start" />
          </ListItemInnerWrapper>
        </ListItemOuterWrapper>
      </ListWrapper>
    </PageContent>
  </PageSection>
);

export default WorkingWithUsProcess;
