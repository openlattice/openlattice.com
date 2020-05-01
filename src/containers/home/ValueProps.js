/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreExternalLink } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import {
  CONTENT_WIDTH,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_TECH_SM
} from '../../core/style/Sizes';
import {
  VALUE_PROP_DESCRIPTIONS,
  VALUE_PROP_HEADERS,
  VALUE_PROP_ICONS,
  VALUE_PROP_LINKS,
} from './ValuePropsConsts';
import { TARGET } from '../../components/headers/MenuConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px 0 100px 0;
  width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 128px auto 204px auto;
  }
`;

const ValuePropsOuterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: -24px -24px;
    width: ${CONTENT_WIDTH}px;
  }
`;

const ValuePropsInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-right: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const ValuePropWrapper = styled.div`
  height: 295px;
  margin: 24px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 336px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-right: 0;
    margin-left: 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }
  }
`;

const ValuePropHeader = styled(SectionHeader)`
  font-size: 25px;
  margin-bottom: 0;
  width: 100%;
  top: 63px;
  position: absolute;
`;

const Text = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  position: absolute;
  top: 151px;
`;

const LearnMoreWrapper = styled(LearnMoreExternalLink)`
  bottom: 0;
  left: 106px;
  position: absolute;
  right: 107px;

  @media only screen and (max-width: 411px) {
    font-size: 12px;
  }
`;

const ValueProps = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <ValuePropsOuterWrapper>
        <ValuePropsInnerWrapper>
          <ValuePropWrapper>
            <img src={VALUE_PROP_ICONS.INTEGRATIONS} alt="" />
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.INTEGRATIONS[0] }
              <br />
              { VALUE_PROP_HEADERS.INTEGRATIONS[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.INTEGRATIONS }</Text>
            <LearnMoreWrapper
                href={VALUE_PROP_LINKS.INTEGRATIONS}
                target={TARGET}>
              Learn more
            </LearnMoreWrapper>
          </ValuePropWrapper>
          <ValuePropWrapper>
            <img src={VALUE_PROP_ICONS.SHARING} alt="" />
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.SHARING[0] }
              <br />
              { VALUE_PROP_HEADERS.SHARING[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.SHARING }</Text>
            <LearnMoreWrapper
                href={VALUE_PROP_LINKS.SHARING}
                target={TARGET}>
              Learn more
            </LearnMoreWrapper>
          </ValuePropWrapper>
          <ValuePropWrapper>
            <img src={VALUE_PROP_ICONS.APPS} alt="" />
            <ValuePropHeader>
              { VALUE_PROP_HEADERS.APPS[0] }
              <br />
              { VALUE_PROP_HEADERS.APPS[1] }
            </ValuePropHeader>
            <Text>{ VALUE_PROP_DESCRIPTIONS.APPS }</Text>
            <LearnMoreWrapper
                href={VALUE_PROP_LINKS.APPS}
                target={TARGET}>
              Learn more
            </LearnMoreWrapper>
          </ValuePropWrapper>
        </ValuePropsInnerWrapper>
      </ValuePropsOuterWrapper>
    </Content>
  </PageSection>
);

export default ValueProps;
