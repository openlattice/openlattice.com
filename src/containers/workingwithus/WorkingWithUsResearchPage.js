/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors } from 'lattice-ui-kit';

import ProcessSection from './ProcessSection';

import FooterSection from '../footer/FooterSection';
import {
  PageSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  Tile,
  Typography,
} from '../../components';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

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
      <SectionContent margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography maxWidth={{ lg: 1000 }} textAlign="center" variant="h1">
            Our implementation experience means you get data insights faster.
          </Typography>
          <Typography maxWidth={{ lg: 720 }} textAlign="center" variant="h6">
            Our team’s experience integrating highly sensitive data from all kinds of source systems means we’ve seen
            the bumps in the road and can guide you through. That means an easier implementation process for you and a
            faster way to get the insights you need.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Tile align={{ h: 'center' }}>
          <Typography component="h2" maxWidth={{ lg: 720 }} textAlign="center" variant="h1">
            Set your studies up for success today and tomorrow
          </Typography>
          <Typography maxWidth={{ lg: 1100 }} textAlign="center" variant="h6">
            When you can get the right data to the right researchers at the right time, the chances of running a clean,
            successful, and impactful study improve.  Here’s the simple, 4-step process we recommend researchers use
            when working with OpenLattice.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <ProcessSection>
        <Tile>
          <Typography variant="h4">
            Broaden your proposal
          </Typography>
          <Typography variant="body2">
            If you could enlist new research partners and collect data from almost any locale, what would that do for
            your research proposal? For your conclusions? Now that data collaboration is no longer a challenge, you
            can go broader.
          </Typography>
          <Typography variant="body2">
            Work with OpenLattice team members to determine whether to use the platform by itself or also use the
            Chronicle app to help you achieve your goals.
          </Typography>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Collect & Integrate Data
          </Typography>
          <div>
            <Typography variant="h6">
              Collect and Connect
            </Typography>
            <Typography variant="body2">
              Work with OpenLattice team members to determine what partners to onboard, what data from prior studies
              to integrate, what new data to collect, what existing data collection systems to connect, and what
              analysis and data visualization systems to connect to run your study.
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              Set up Permissions and Notifications
            </Typography>
            <Typography variant="body2">
              Determine what research partners can access what data, and when they need to see it. OpenLattice can
              work closely with you to ensure compliance with IRB, HIPAA, or whatever compliance regulations apply
              to you.
            </Typography>
          </div>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Collaborate & Analyze
          </Typography>
          <Typography variant="body2">
            Whether you use the materialized views and data analysis tools OpenLattice offers, or whether you’d like
            to connect your own tools for analysis, you can analyze the collaborative data in near real-time.
          </Typography>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Publish & Expand
          </Typography>
          <Typography variant="body2">
            You’ve published--Congratulations!  Make the data publicly available so others can build on top of it.
            What’s your next research undertaking?  A pilot study, a larger-scale study, or replicating a study?
            Let OpenLattice help you easily pivot or expand your collaborative studies.
          </Typography>
          <div>
            <SolidButton onClick={openBeacon}>Chat with a Team Member</SolidButton>
          </div>
        </Tile>
      </ProcessSection>
    </PageSection>
    <PageSection>
      <SectionContent margin={{ b: '20vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography component="h2" textAlign="center" variant="h1">
            Want to get technical?
          </Typography>
          <Typography maxWidth={{ lg: 1000 }} textAlign="center" variant="h6">
            Our technical implementation process was invented to streamline and simplify. Want to know more? Reach out
            or dig deeper on our model for project teams, timelines, data sharing agreements, and integrations.
          </Typography>
          <ButtonsGrid>
            <SolidButton onClick={openBeacon}>Learn More</SolidButton>
            <SolidButton onClick={openBeacon}>Contact Us</SolidButton>
          </ButtonsGrid>
        </Tile>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default WorkingWithUsResearchPage;
