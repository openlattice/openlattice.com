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

const PlatformGovernmentPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography textAlign="center" variant="h1">
            The OpenLattice Platform
          </Typography>
          <Typography textAlign="center" maxWidth={{ lg: 800 }} variant="h6">
            Finally, a safe and easy way to get actionable insights to public servants.
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
              You want to make more data-driven decisions.
            </Typography>
            <Typography textAlign="center" variant="body1">
              You know this will mean more effective and efficient services, more informed policy, and stronger
              communities.
            </Typography>
          </Tile>
          <Tile align={{ h: 'center' }}>
            <QuestionCircleIcon />
            <Typography maxWidth={{ lg: 300 }} textAlign="center" variant="h5">
              But it’s so complex, where do you start?
            </Typography>
            <Typography textAlign="center" variant="body1">
              Departments use different systems in different ways.  How do you connect your systems and people, without
              overloading them with information they don’t need, all while keeping public data safe and planning for the
              future?
            </Typography>
          </Tile>
          <Tile align={{ h: 'center' }}>
            <LockCircleIcon />
            <Typography maxWidth={{ lg: 300 }} textAlign="center" variant="h5">
              Simplify safe data integration with one platform.
            </Typography>
            <Typography textAlign="center" variant="body1">
              OpenLattice provides a modern, scalable platform that gives jurisdictions full control over their data,
              and the flexibility to work with any systems and data partners while meeting top security standards.
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

export default PlatformGovernmentPage;
