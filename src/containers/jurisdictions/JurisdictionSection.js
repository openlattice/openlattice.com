/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionPageSection from './JurisdictionPageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { N3 } from '../../core/style/Colors';
import { TITLE } from './Constants';

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


const JurisdictionSection = () => (
  <JurisdictionPageSection>
    <Content>
      <Title>
        { TITLE }
      </Title>
    </Content>
  </JurisdictionPageSection>
);

export default JurisdictionSection;
