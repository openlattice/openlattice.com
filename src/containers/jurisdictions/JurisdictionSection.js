/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import JurisdictionLabel from './JurisdictionLabel';
import JurisdictionLabelSet from './JurisdictionLabelSet';
import PageSection from '../../components/layout/PageSection';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import mapImage from '../../assets/images/map.png';
import { MEDIA_QUERY_MD, MEDIA_QUERY_JUR_SM, MEDIA_QUERY_JUR_LG } from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';

import {
  TITLE,
  DANE,
  MIDDLESEX,
  HUDSON,
  BERKS,
  JOHNSON,
  CALIFORNIA,
  PENNINGTON,
  MINNEHAHA,
  WASPC
} from './Constants';


/*
 * constants
 */

const jurisdictions = [
  WASPC,
  PENNINGTON,
  MINNEHAHA,
  CALIFORNIA,
  DANE,
  JOHNSON,
  BERKS,
  HUDSON,
  MIDDLESEX,
];

const Content = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 598.4px;
  margin: 120px 0 0 0;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    height: 729px;
  }
`;

const Title = styled(StyledSectionTitle)`
  color: ${NEUTRALS.GRAY03};

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

const LabelSets = styled.div`
  display: none;
  height: 100%;
  margin: auto;
  max-width: 1300px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_LG}px) {
    display: block;
  }
`;

// Renders simple labels at < large browser size
const renderLabels = () => (
  jurisdictions.map((jurisdiction) => (
    <JurisdictionLabel
        location={jurisdiction.LOCATION}
        population={jurisdiction.POPULATION}
        key={jurisdiction.LOCATION} />
  ))
);

// Renders full label sets only at large browser size
const renderLabelSets = () => (
  jurisdictions.map((jurisdiction) => (
    <JurisdictionLabelSet
        jurisdiction={jurisdiction}
        key={jurisdiction.LOCATION} />
  ))
);

const LabelsWithTargets = (
  <LabelSets>
    { renderLabelSets() }
  </LabelSets>
);

// TODO: bgSize="auto" works well enough for now, but it can be improved
const JurisdictionSection = () => (
  <PageSection bgComponent={LabelsWithTargets} bgImage={mapImage} bgSize="auto">
    <Content>
      <Title>
        { TITLE }
      </Title>
      <Labels>
        { renderLabels() }
      </Labels>
    </Content>
  </PageSection>
);

export default JurisdictionSection;
