/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import TeamGrid from './components/TeamGrid';
import { BOARD_MEMBERS, TEAM_MEMBERS } from './constants';

import PageSection from '../../components/layout/NewPageSection';
import { Header, SectionContent, SubHeader } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';

const SectionContentNoMargin = styled(SectionContent)`
  margin: 0;
`;

const TEAM_STATEMENT = 'The OpenLattice team brings together a diverse group of individuals with knowledge and'
  + ' experience across government data solutions, policy-making, criminal justice, healthcare, and data science.';

const TeamSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContentNoMargin>
      <Header as="h2">Our board</Header>
    </SectionContentNoMargin>
    <SectionContent>
      <TeamGrid members={BOARD_MEMBERS} />
    </SectionContent>
    <SectionContentNoMargin maxWidth={{ sm: 528, md: 720 }}>
      <Header as="h2">Our team</Header>
      <SubHeader align="left" as="h5">{TEAM_STATEMENT}</SubHeader>
    </SectionContentNoMargin>
    <SectionContent>
      <TeamGrid members={TEAM_MEMBERS} />
    </SectionContent>
  </PageSection>
);

export default TeamSection;
