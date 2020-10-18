/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors, Typography } from 'lattice-ui-kit';

import ProcessSection from './ProcessSection';

import FooterSection from '../footer/FooterSection';
import {
  Header,
  PageSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  SubHeader,
} from '../../components';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const ProcessStepContentGrid = styled.div`
  display: grid;
  grid-gap: 24px;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto;
  justify-content: center;
  margin: 0 auto;
  max-width: 336px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: auto auto;
  }
`;

const WorkingWithUsResearchPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="25vh 0" maxWidth={{ lg: 1000 }}>
        <Header color={NEUTRAL.N800}>
          Our implementation experience means you get data insights faster.
        </Header>
        <SubHeader color={NEUTRAL.N800} maxWidth={700}>
          Our team’s experience integrating highly sensitive data from all kinds of source systems means we’ve seen
          the bumps in the road and can guide you through. That means an easier implementation process for you and a
          faster way to get the insights you need.
        </SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent maxWidth={{ lg: 700 }}>
        <Header color={NEUTRAL.N800}>
          Set your studies up for success today and tomorrow
        </Header>
        <SubHeader color={NEUTRAL.N800}>
          When you can get the right data to the right researchers at the right time, the chances of running a clean,
          successful, and impactful study improve.  Here’s the simple, 4-step process we recommend researchers use
          when working with OpenLattice.
        </SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <ProcessSection>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Broaden your proposal
          </Typography>
          <Typography variant="body1">
            If you could enlist new research partners and collect data from almost any locale, what would that do for
            your research proposal? For your conclusions? Now that data collaboration is no longer a challenge, you
            can go broader.
          </Typography>
          <Typography variant="body1">
            Work with OpenLattice team members to determine whether to use the platform by itself or also use the
            Chronicle app to help you achieve your goals.
          </Typography>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Collect & Integrate Data
          </Typography>
          <div>
            <Typography gutterBottom variant="h6">
              Collect and Connect
            </Typography>
            <Typography variant="body1">
              Work with OpenLattice team members to determine what partners to onboard, what data from prior studies
              to integrate, what new data to collect, what existing data collection systems to connect, and what
              analysis and data visualization systems to connect to run your study.
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="h6">
              Set up Permissions and Notifications
            </Typography>
            <Typography variant="body1">
              Determine what research partners can access what data, and when they need to see it. OpenLattice can
              work closely with you to ensure compliance with IRB, HIPAA, or whatever compliance regulations apply
              to you.
            </Typography>
          </div>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Collaborate & Analyze
          </Typography>
          <Typography variant="body1">
            Whether you use the materialized views and data analysis tools OpenLattice offers, or whether you’d like
            to connect your own tools for analysis, you can analyze the collaborative data in near real-time.
          </Typography>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Publish & Expand
          </Typography>
          <Typography variant="body1">
            You’ve published--Congratulations!  Make the data publicly available so others can build on top of it.
            What’s your next research undertaking?  A pilot study, a larger-scale study, or replicating a study?
            Let OpenLattice help you easily pivot or expand your collaborative studies.
          </Typography>
          <div>
            <SolidButton onClick={openBeacon}>Chat with a Team Member</SolidButton>
          </div>
        </ProcessStepContentGrid>
      </ProcessSection>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Header color={NEUTRAL.N800}>
          Want to get technical?
        </Header>
        <SubHeader color={NEUTRAL.N800}>
          Our technical implementation process was invented to streamline and simplify. Want to know more? Reach out
          or dig deeper on our model for project teams, timelines, data sharing agreements, and integrations.
        </SubHeader>
        <ButtonsGrid>
          <SolidButton onClick={openBeacon}>Learn More</SolidButton>
          <SolidButton onClick={openBeacon}>Contact Us</SolidButton>
        </ButtonsGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default WorkingWithUsResearchPage;
