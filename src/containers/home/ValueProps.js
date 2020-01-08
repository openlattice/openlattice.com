/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import * as Routes from '../../core/router/Routes';
import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreInternalLink } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import { VALUE_PROP_DESCRIPTIONS, VALUE_PROP_HEADERS } from './ValuePropsConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 128px auto 204px auto;
  }
`;

const ValuePropsOuterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: auto;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 0 -24px;
    width: ${CONTENT_WIDTH}px;
  }
`;

const ValuePropsInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const ValuePropWrapper = styled.div`
  height: 232px;
  margin: 24px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 336px;
  }
`;

const ValuePropHeader = styled(SectionHeader)`
  font-size: 25px;
  margin-bottom: 0;
  width: 100%;
`;

const Text = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  position: absolute;
  top: 88px;
`;

const LearnMoreWrapper = styled(LearnMoreInternalLink)`
  bottom: 0;
  left: 106px;
  position: absolute;
  right: 107px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 12px;
    left: 120px;
    right: 120px;
  }
`;

const ValueProps = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <ValuePropsOuterWrapper>
        <ValuePropsInnerWrapper>
          <ValuePropWrapper>
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.SECURE[0] }
              <br />
              { VALUE_PROP_HEADERS.SECURE[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.SECURE }</Text>
            <LearnMoreWrapper to={Routes.ROOT}>Learn more</LearnMoreWrapper>
          </ValuePropWrapper>
          <ValuePropWrapper>
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.ACTIONABLE[0] }
              <br />
              { VALUE_PROP_HEADERS.ACTIONABLE[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.ACTIONABLE }</Text>
            <LearnMoreWrapper to={Routes.ROOT}>Learn more</LearnMoreWrapper>
          </ValuePropWrapper>
          <ValuePropWrapper>
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.TRANSPARENCY[0] }
              <br />
              { VALUE_PROP_HEADERS.TRANSPARENCY[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.TRANSPARENCY }</Text>
            <LearnMoreWrapper to={Routes.ROOT}>Learn more</LearnMoreWrapper>
          </ValuePropWrapper>
        </ValuePropsInnerWrapper>
      </ValuePropsOuterWrapper>
    </Content>
  </PageSection>
);

export default ValueProps;
