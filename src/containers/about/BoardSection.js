/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageSection from '../../components/layout/NewPageSection';
import { SectionHeader } from '../../components/headers/PageHeaders';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { BOARD_MEMBERS } from './TeamMemberConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 100px;
    width: 1104px;
  }
`;

const Header = styled(SectionHeader)`
  margin-bottom: 50px;
`;

const Person = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  margin: 24px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
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

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
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

const BoardMembersOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 1104px;
  }
`;

const BoardMembersInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 100%;
  }
`;

const MeetTheBoard = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <Header>Our board</Header>
      <BoardMembersOuterWrapper>
        <BoardMembersInnerWrapper>
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
        </BoardMembersInnerWrapper>
      </BoardMembersOuterWrapper>
    </Content>
  </PageSection>
);

export default MeetTheBoard;
