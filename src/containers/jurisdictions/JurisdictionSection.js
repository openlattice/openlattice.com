/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionPageSection from './JurisdictionPageSection';
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

const JurisdictionLabels = styled.div`
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

const LabelWrapper = styled.span`
  display: flex;
  flex-basis: 4%;
  flex-direction: column;
  font-size: 12px;
  margin: 0 10px 20px 10px;

  @media only screen and (min-width: 530px) {
    flex-basis: 10%;
    font-size: 14px;
  }

  @media only screen and (min-width: 900px) {
    flex-basis: 20%;
  }
`;

const LocationLabel = styled.span`
  color: ${PP4};
  font-weight: normal;
  margin-bottom: 4px;

  @media only screen and (min-width: 900px) {
    font-weight: 600;
  }
`;

const PopulationLabel = styled.span`
  color: ${N2};
  display: none;
  font-weight: normal;

  @media only screen and (min-width: 900px) {
    display: block;
  }
`;


// Renders simple labels at smaller browser size
const renderLabels = () => {
  return jurisdictions.map((jurisdiction, i) => {
    return (
      <LabelWrapper>
        <LocationLabel>
          { jurisdiction.LOCATION }
        </LocationLabel>
        <PopulationLabel>
          { jurisdiction.POPULATION }
        </PopulationLabel>
      </LabelWrapper>
    );
  });
};


const JurisdictionSection = () => (
  <JurisdictionPageSection>
    <Content>
      <Title>
        { TITLE }
      </Title>
      <JurisdictionLabels>
        { renderLabels() }
      </JurisdictionLabels>
    </Content>
  </JurisdictionPageSection>
);

export default JurisdictionSection;
