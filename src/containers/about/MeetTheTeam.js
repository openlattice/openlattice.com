/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { TEAM_NAMES, TEAM_PHOTOS, TEAM_ROLES } from './TeamMemberConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 196px;
    width: 1104px;
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
      <TeamMembersOuterWrapper>
        <TeamMembersInnerWrapper>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.MATTHEW} />
            <TeamMemberName>{TEAM_NAMES.MATTHEW}</TeamMemberName>
            <TeamMemberRole>
              Founder &
              <br />
              {TEAM_ROLES.MATTHEW}
            </TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.HRISTO} />
            <TeamMemberName>{TEAM_NAMES.HRISTO}</TeamMemberName>
            <TeamMemberRole>
              Co-founder &
              <br />
              {TEAM_ROLES.HRISTO}
            </TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.KATHERINE} />
            <TeamMemberName>{TEAM_NAMES.KATHERINE}</TeamMemberName>
            <TeamMemberRole>
              Co-founder &
              <br />
              {TEAM_ROLES.KATHERINE}
            </TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.KIM} />
            <TeamMemberName>{TEAM_NAMES.KIM}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.KIM}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.BRANDON} />
            <TeamMemberName>{TEAM_NAMES.BRANDON}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.BRANDON}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.JOE} />
            <TeamMemberName>{TEAM_NAMES.JOE}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.JOE}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.GIULIANA} />
            <TeamMemberName>{TEAM_NAMES.GIULIANA}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.GIULIANA}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.DAVID} />
            <TeamMemberName>{TEAM_NAMES.DAVID}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.DAVID}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.MOLLIE} />
            <TeamMemberName>{TEAM_NAMES.MOLLIE}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.MOLLIE}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.PAUL} />
            <TeamMemberName>{TEAM_NAMES.PAUL}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.PAUL}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.JOKE} />
            <TeamMemberName>{TEAM_NAMES.JOKE}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.JOKE}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.SOLOMON} />
            <TeamMemberName>{TEAM_NAMES.SOLOMON}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.SOLOMON}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.TODD} />
            <TeamMemberName>{TEAM_NAMES.TODD}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.TODD}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.PIPER} />
            <TeamMemberName>{TEAM_NAMES.PIPER}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.PIPER}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.JULIA} />
            <TeamMemberName>{TEAM_NAMES.JULIA}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.JULIA}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.GIULIA} />
            <TeamMemberName>{TEAM_NAMES.GIULIA}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.GIULIA}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.JASON} />
            <TeamMemberName>{TEAM_NAMES.JASON}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.JASON}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.BLAKE} />
            <TeamMemberName>{TEAM_NAMES.BLAKE}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.BLAKE}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.DREW} />
            <TeamMemberName>{TEAM_NAMES.DREW}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.DREW}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.SHIREEN} />
            <TeamMemberName>{TEAM_NAMES.SHIREEN}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.SHIREEN}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.ANDY} />
            <TeamMemberName>{TEAM_NAMES.ANDY}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.ANDY}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.NICHOLAS} />
            <TeamMemberName>{TEAM_NAMES.NICHOLAS}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.NICHOLAS}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.RYAN} />
            <TeamMemberName>{TEAM_NAMES.RYAN}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.RYAN}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.ANDREA} />
            <TeamMemberName>{TEAM_NAMES.ANDREA}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.ANDREA}</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberPhoto headshot={TEAM_PHOTOS.MANDY} />
            <TeamMemberName>{TEAM_NAMES.MANDY}</TeamMemberName>
            <TeamMemberRole>{TEAM_ROLES.MANDY}</TeamMemberRole>
          </TeamMember>
        </TeamMembersInnerWrapper>
      </TeamMembersOuterWrapper>
    </Content>
  </PageSection>
);

export default MeetTheTeam;
