/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import CorePlatformSection from './CorePlatformSection';
import PlatformOverviewSection from './PlatformOverviewSection';

import FooterSection from '../footer/FooterSection';
import { BarsCircleIcon, LockCircleIcon, QuestionCircleIcon } from '../../assets/svg/circle-icons';
import { PlatformLayersGraphic } from '../../assets/svg/graphics';
import {
  ContentGrid,
  GraphicShot,
  PageSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  Tile,
  Typography,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const PlatformResearchPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography textAlign="center" variant="h1">
            The OpenLattice Platform
          </Typography>
          <Typography textAlign="center" maxWidth={{ lg: 800 }} variant="h6">
            Finally, an easier way to run research studies.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PlatformOverviewSection />
    <PageSection>
      <SectionContent margin={{ b: 0, t: 0 }}>
        <ContentGrid align={{ v: 'start' }}>
          <Tile align={{ h: 'center' }}>
            <BarsCircleIcon />
            <Typography textAlign="center" variant="h5">
              You want to collaborate on research studies.
            </Typography>
            <Typography textAlign="center" variant="body1">
              You know this will mean your research team can leverage more expertise, access more data, run more
              analyses, draw more conclusions at tighter intervals, and impact broader populations.
            </Typography>
          </Tile>
          <Tile align={{ h: 'center' }}>
            <QuestionCircleIcon />
            <Typography maxWidth={{ lg: 300 }} textAlign="center" variant="h5">
              But, how do you get past the data sharing complications?
            </Typography>
            <Typography textAlign="center" variant="body1">
              Other methods of data sharing often don’t even work. When they do, they’re tedious to manage. You end up
              spending too much of your time jumping through privacy and compliance hoops.
            </Typography>
          </Tile>
          <Tile align={{ h: 'center' }}>
            <LockCircleIcon />
            <Typography maxWidth={{ lg: 300 }} textAlign="center" variant="h5">
              Simplify data collaboration with one platform.
            </Typography>
            <Typography textAlign="center" variant="body1">
              With OpenLattice, researchers can securely and easily share and access data across organizational
              boundaries. This means you can now smoothly collaborate where  previously difficult or impossible.
            </Typography>
          </Tile>
        </ContentGrid>
      </SectionContent>
      <SectionContent>
        <SolidButton onClick={openBeacon}>Schedule a Call</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <ContentGrid align={{ h: 'start' }}>
          <Tile>
            <Typography maxWidth={{ lg: 450 }} variant="h2">
              Built from the ground up to meet complex requirements
            </Typography>
            <Typography maxWidth={{ lg: 450 }} variant="body2">
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

export default PlatformResearchPage;
