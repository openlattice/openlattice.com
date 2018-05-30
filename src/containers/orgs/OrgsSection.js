/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PK0 } from '../../core/style/Colors';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { N3 } from '../../core/style/Colors';
import mapImage from '../../assets/images/map.png';

  // display: block;
  // margin: 80px 0 100px 0;
  // max-width: 100%;
  // height: 425px;

  // @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
  //   max-width: 50%;
  // }

  // @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
  //   height: 525px;
  //   margin: 140px 0 0 0;
  // }
const Content = styled.div`
  color: #fff;
  display: block;
  flex-direction: column;
  height: 849px;
  margin: 120px 0 0 0;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    max-width: 60%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
  }
`;

const Title = StyledSectionTitle.extend`
  color: ${N3};
`;

const OrgsSection = () => (
  <PageSection bgImage={mapImage}>
    <Content>
      <Title>
        Leading innovation with organizations and jurisdictions nationwide.
      </Title>
    </Content>
  </PageSection>
);

export default OrgsSection;
