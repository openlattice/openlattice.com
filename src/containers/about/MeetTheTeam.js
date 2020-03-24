/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import { SectionHeader } from '../../components/headers/PageHeaders';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { TEAM_MEMBERS } from './TeamMemberConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 100px;
    width: 1104px;
  }
`;

const ContentBlock = styled.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 104px;
  width: 720px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const Text = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
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

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
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

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
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

const TeamMembersOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  margin: auto;
  max-width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 1104px;
  }
`;

const TeamMembersInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
`;

const MeetTheTeam = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <ContentBlock>
        <SectionHeader>Our team</SectionHeader>
        <Text>
          {`The OpenLattice team brings together a diverse group of individuals with
            knowledge and experience across government data solutions, policy-making,
            criminal justice, healthcare, and data science.`}
        </Text>
      </ContentBlock>
      <TeamMembersOuterWrapper>
        <TeamMembersInnerWrapper>
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
        </TeamMembersInnerWrapper>
      </TeamMembersOuterWrapper>
    </Content>
  </PageSection>
);

export default MeetTheTeam;
