/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors, Typography } from 'lattice-ui-kit';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import CorePlatformSection from './CorePlatformSection';
import PlatformOverviewSection from './PlatformOverviewSection';

import FooterSection from '../footer/FooterSection';
import { BarsCircleIcon, LockCircleIcon, QuestionCircleIcon } from '../../assets/svg/circle-icons';
import { PlatformLayersGraphic } from '../../assets/svg/graphics';
import {
  ContentGrid,
  GraphicShot,
  Header,
  InfoTile,
  PageSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  SubHeader,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

// TODO: kill InfoTile, replace with grid-based Tile
const Tile = styled.div`
  display: grid;
  grid-gap: ${({ gap }) => (gap ? `${gap}px` : '24px')};
`;

const PlatformGovernmentPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="20vh 0" maxWidth={{ sm: 450, lg: 700 }}>
        <Header>The Modern OpenLattice Platform</Header>
        <SubHeader>Finally, a safe and easy way to get actionable insights to public servants.</SubHeader>
      </SectionContent>
    </PageSection>
    <PlatformOverviewSection />
    <PageSection>
      <SectionContent>
        <ContentGrid align={{ v: 'start' }}>
          <InfoTile>
            <BarsCircleIcon />
            <Typography gutterBottom variant="h2">
              You want to make more data-driven decisions.
            </Typography>
            <Typography variant="body1">
              You know this will mean more effective and efficient services, more informed policy, and stronger
              communities.
            </Typography>
          </InfoTile>
          <InfoTile>
            <QuestionCircleIcon />
            <Typography gutterBottom variant="h2">
              But it’s so complex, where do you start?
            </Typography>
            <Typography variant="body1">
              Departments use different systems in different ways.  How do you connect your systems and people, without
              overloading them with information they don’t need, all while keeping public data safe and planning for the
              future?
            </Typography>
          </InfoTile>
          <InfoTile>
            <LockCircleIcon />
            <Typography gutterBottom variant="h2">
              Simplify safe data integration with one platform.
            </Typography>
            <Typography variant="body1">
              OpenLattice provides a modern, scalable platform that gives jurisdictions full control over their data,
              and the flexibility to work with any systems and data partners while meeting top security standards.
            </Typography>
          </InfoTile>
        </ContentGrid>
      </SectionContent>
      <SectionContent>
        <SolidButton onClick={openBeacon}>Schedule a Call</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <ContentGrid>
          <Tile>
            <Typography variant="h1">
              Built from the ground up to meet complex requirements
            </Typography>
            <Typography variant="body1">
              Meeting security and compliance requirements is difficult. The OpenLattice platform takes care of it for
              you.
            </Typography>
            <div>
              <SolidButton onClick={openBeacon}>Chat with a Team Member</SolidButton>
            </div>
          </Tile>
          <GraphicShot>
            <PlatformLayersGraphic />
          </GraphicShot>
        </ContentGrid>
      </SectionContent>
    </PageSection>
    <ComplianceAndSecuritySection />
    <CorePlatformSection />
    <PageSection>
      <SectionContent>
        <SolidButton onClick={openBeacon}>Ask About a Free Trial</SolidButton>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default PlatformGovernmentPage;
