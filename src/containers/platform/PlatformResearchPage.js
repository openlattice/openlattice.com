/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors, Typography } from 'lattice-ui-kit';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import CorePlatformSection from './CorePlatformSection';

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

const PlatformResearchPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="20vh 0" maxWidth={{ sm: 450, lg: 700 }}>
        <Header>The Modern OpenLattice Platform</Header>
        <SubHeader>Finally, an easier way to run research studies.</SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <SectionContent margin="24px 0">
          <Typography variant="h2">
            Feed Data In
          </Typography>
          <Typography variant="body1">
            Pull together data from any systems you’d like.
          </Typography>
        </SectionContent>
        <SectionContent margin="24px 0">
          <Typography variant="h2">
            Build On Top
          </Typography>
          <Typography variant="body1">
            Use open APIs to connect any tools you’d like.
          </Typography>
        </SectionContent>
        <SectionContent margin="24px 0">
          <Typography variant="h2">
            Get Data Out
          </Typography>
          <Typography variant="body1">
            Connect visualization and analysis tools of your choice.
          </Typography>
        </SectionContent>
        <SectionContent margin="24px 0">
          <Typography variant="h2">
            Share Data
          </Typography>
          <Typography variant="body1">
            Ensure those who need certain data can access it.
          </Typography>
        </SectionContent>
        <SectionContent margin="24px 0">
          <Typography variant="h2">
            While Fully Compliant
          </Typography>
          <Typography variant="body1">
            Meet pretty much any compliance out there.
          </Typography>
        </SectionContent>
        <SectionContent margin="24px 0">
          <SolidButton onClick={openBeacon}>Just Ask</SolidButton>
        </SectionContent>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <ContentGrid align={{ v: 'start' }}>
          <InfoTile>
            <BarsCircleIcon />
            <Typography gutterBottom variant="h2">
              You want to collaborate on research studies.
            </Typography>
            <Typography variant="body1">
              You know this will mean your research team can leverage more expertise, access more data, run more
              analyses, draw more conclusions at tighter intervals, and impact broader populations.
            </Typography>
          </InfoTile>
          <InfoTile>
            <QuestionCircleIcon />
            <Typography gutterBottom variant="h2">
              But, how do you get past the data sharing complications?
            </Typography>
            <Typography variant="body1">
              Other methods of data sharing often don’t even work. When they do, they’re tedious to manage. You end up
              spending too much of your time jumping through privacy and compliance hoops.
            </Typography>
          </InfoTile>
          <InfoTile>
            <LockCircleIcon />
            <Typography gutterBottom variant="h2">
              Simplify data collaboration with one platform.
            </Typography>
            <Typography variant="body1">
              With OpenLattice, researchers can securely and easily share and access data across organizational
              boundaries. This means you can now smoothly collaborate where  previously difficult or impossible.
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
              Meeting security and compliance requirements is difficult. The OpenLattice Platform takes care of it for
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

export default PlatformResearchPage;
