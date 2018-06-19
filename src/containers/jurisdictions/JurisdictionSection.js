/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionPageSection from './JurisdictionPageSection';
import JurisdictionLabel from './JurisdictionLabel';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { N2, N3, PP4 } from '../../core/style/Colors';
import { TITLE } from './Constants';

import {
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

  @media only screen and (min-width: 1300px) {
    height: 729px;
  }
`;

const Title = StyledSectionTitle.extend`
  color: ${N3};

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
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

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin: 30px 0 30px 0;
  }

  @media only screen and (min-width: 1300px) {
    display: none;
  }
`;


// Renders simple labels at < large browser size
const renderLabels = () => {
  return jurisdictions.map((jurisdiction, i) => {
    return (
      <JurisdictionLabel location={jurisdiction.LOCATION} population={jurisdiction.POPULATION} key={i} />
    );
  });
};


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
