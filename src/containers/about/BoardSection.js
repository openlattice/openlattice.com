/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BOARD_MEMBERS } from './constants';

import PageSection from '../../components/layout/NewPageSection';
import { Header, SectionContent, SectionContentGrid } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

const Person = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  margin: 24px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    width: 240px;
  }
`;

const PersonPhoto = styled.div`
  background-image: url(${(props) => props.headshot});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 320px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    width: 240px;
  }
`;

const PersonName = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  position: absolute;
  text-align: center;
  top: 336px;
  width: 100%;
`;

const PersonRole = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 13px;
  line-height: 150%;
  position: absolute;
  text-align: center;
  top: 360px;
  width: 100%;
`;

const PersonLI = styled.a`
  color: ${NEUTRALS.GRAY_07};
  position: absolute;
  top: 385px;
`;

const MeetTheBoard = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <Header as="h2">Our board</Header>
      <SectionContentGrid>
        {
          BOARD_MEMBERS.map((teamMember :Object) => (
            <Person key={teamMember.NAME}>
              <PersonPhoto headshot={teamMember.PHOTO} />
              <PersonName>{teamMember.NAME}</PersonName>
              <PersonRole>{teamMember.ROLE}</PersonRole>
              <PersonLI href={teamMember.LI}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </PersonLI>
            </Person>
          ))
        }
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default MeetTheBoard;
