/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionPageSection from './JurisdictionPageSection';
import JurisdictionLabel from './JurisdictionLabel';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { MEDIA_QUERY_MD, MEDIA_QUERY_JUR_SM, MEDIA_QUERY_JUR_LG } from '../../core/style/Sizes';
import { N3 } from '../../core/style/Colors';

import {
  TITLE,
  DANE,
  FRANKLIN,
  PORTLAND,
  MIDDLESEX,
  HUDSON,
  BERKS,
  BALTIMORE,
  LAKE,
  JOHNSON,
  POLK,
  CALIFORNIA,
  PENNINGTON,
  MINNEHAHA
} from './Constants';


/*
 * constants
 */

const jurisdictions = [
  DANE,
  FRANKLIN,
  PORTLAND,
  MIDDLESEX,
  HUDSON,
  BERKS,
  BALTIMORE,
  LAKE,
  JOHNSON,
  POLK,
  CALIFORNIA,
  PENNINGTON,
  MINNEHAHA
];

const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 446.5px;
  margin: 120px 0 0 0;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    height: 729px;
  }
`;

const Title = StyledSectionTitle.extend`
  color: ${N3};

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    max-width: 60%;
  }
`;

const Labels = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: flex-start;
  margin: 0 0 30px 0;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) {
    margin: 30px 0 30px 0;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    display: none;
  }
`;


// Renders simple labels at < large browser size
const renderLabels = () => (
  jurisdictions.map(jurisdiction => (
    <JurisdictionLabel
        location={jurisdiction.LOCATION}
        population={jurisdiction.POPULATION}
        key={jurisdiction.LOCATION} />
  ))
);


const JurisdictionSection = () => (
  <JurisdictionPageSection>
    <Content>
      <Title>
        { TITLE }
      </Title>
      <Labels>
        { renderLabels() }
      </Labels>
    </Content>
  </JurisdictionPageSection>
);

export default JurisdictionSection;
