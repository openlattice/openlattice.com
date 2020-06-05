/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { TEAM_MEMBERS } from './constants';

import PageSection from '../../components/layout/NewPageSection';
import {
  Header,
  SectionContent,
  SectionContentGrid,
  SubHeader,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

const OurTeamSection = styled(SectionContent)`
  margin: 0;
`;

const TeamMember = styled.div`
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

const TeamMemberPhoto = styled.div`
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

const TeamMemberName = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  position: absolute;
  text-align: center;
  top: 336px;
  width: 100%;
`;

const TeamMemberRole = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 13px;
  line-height: 150%;
  position: absolute;
  text-align: center;
  top: 360px;
  width: 100%;
`;

const TEAM_STATEMENT = 'The OpenLattice team brings together a diverse group of individuals with knowledge and'
  + ' experience across government data solutions, policy-making, criminal justice, healthcare, and data science.';

const MeetTheTeam = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <OurTeamSection maxWidth={{ sm: 528, md: 720 }}>
      <Header as="h2">Our team</Header>
      <SubHeader align="left" as="h5">{TEAM_STATEMENT}</SubHeader>
    </OurTeamSection>
    <SectionContent>
      <SectionContentGrid>
        {
          TEAM_MEMBERS.map((teamMember :Object, index :number) => {
            if (index > -1 && index < 3) {
              let founderText = 'Founder &';
              if (index === 1 || index === 2) founderText = 'Co-Founder &';
              return (
                <TeamMember key={teamMember.NAME}>
                  <TeamMemberPhoto headshot={teamMember.PHOTO} />
                  <TeamMemberName>{teamMember.NAME}</TeamMemberName>
                  <TeamMemberRole>
                    {founderText}
                    <br />
                    {teamMember.ROLE}
                  </TeamMemberRole>
                </TeamMember>
              );
            }
            return (
              <TeamMember key={teamMember.NAME}>
                <TeamMemberPhoto headshot={teamMember.PHOTO} />
                <TeamMemberName>{teamMember.NAME}</TeamMemberName>
                <TeamMemberRole>{teamMember.ROLE}</TeamMemberRole>
              </TeamMember>
            );
          })
        }
      </SectionContentGrid>
    </SectionContent>
  </PageSection>
);

export default MeetTheTeam;
