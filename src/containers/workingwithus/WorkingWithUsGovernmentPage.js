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

const WorkingWithUsGovernmentPage = () => (
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
          Set up to thrive today and tomorrow
        </Header>
        <SubHeader color={NEUTRAL.N800}>
          When you have the data you need when you need it, the chances of achieving your goals dramatically improve.
          Here’s the simple, 5-step process we recommend jurisdictions use when working with OpenLattice.
        </SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <ProcessSection>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Choose a Goal
          </Typography>
          <Typography variant="body1">
            What do you want to accomplish? De-escalate encounters in law enforcement? Reduce recidivism?
            Connect the public to vetted childcare providers? Be bold!
          </Typography>
          <Typography variant="body1">
            Work with OpenLattice team members to determine whether to use the platform by itself or the platform and
            an existing application to help you achieve your goals.
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
              Work with OpenLattice team members to determine what new data to collect, what existing data collection
              systems to connect, and what additional analysis and visualization systems you’d like to connect to help
              you achieve your goal.
            </Typography>
          </div>
          <div>
            <Typography gutterBottom variant="h6">
              Set up Permissions and Notifications
            </Typography>
            <Typography variant="body1">
              Determine what job titles and departments can access what types of data, and when they need to see it.
              OpenLattice can work closely with you to ensure compliance with the regulations that apply to you.
            </Typography>
          </div>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Get Insights and Act
          </Typography>
          <Typography variant="body1">
            As you see from the data what works (and what doesn’t), you get better and better at fine-tuning your
            efforts.
          </Typography>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Track and Adjust
          </Typography>
          <Typography variant="body1">
            When you accomplish your goal, announce your progress and new achievements to interested parties, like the
            public. When you’ve got the numbers to show the impact you’ve made, people can better understand and
            support your progress.
          </Typography>
          <Typography variant="body1">
            When you’ve accomplished one goal, on to the next!  As you set new goals, get new data, or bring on new
            data partners, easily scale out the OpenLattice technology and your new data-driven processes.
          </Typography>
        </ProcessStepContentGrid>
        <ProcessStepContentGrid>
          <Typography color={NEUTRAL.N800} variant="h2">
            Showcase & Scale
          </Typography>
          <Typography variant="body1">
            You’ve accomplished your goal--Congratulations!  Time to showcase. When you’ve got solid numbers to show
            your progress, people can better understand, support, and fund your critical initiatives.
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

export default WorkingWithUsGovernmentPage;
