/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import OrgsPageSection from './OrgsPageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PK0 } from '../../core/style/Colors';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { N3 } from '../../core/style/Colors';
import mapImage from '../../assets/images/map.png';


const Content = styled.div`
  color: #fff;
  display: block;
  flex-direction: column;
  height: 729px;
  margin: 120px 0 0 0;
  max-width: 100%;
  text-align: center;
`;

const Title = StyledSectionTitle.extend`
  color: ${N3};

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    max-width: 60%;
  }
`;

const OrgsSection = () => (
  <OrgsPageSection bgImage={mapImage}>
    <Content>
      <Title>
        {
          `Leading innovation with organizations and jurisdictions nationwide.`
        }
      </Title>
    </Content>
  </OrgsPageSection>
);

export default OrgsSection;
