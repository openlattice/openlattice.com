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

const WorkingWithUsGovernmentPage = () => (
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
            Set up to thrive today and tomorrow
          </Typography>
          <Typography maxWidth={{ lg: 1100 }} textAlign="center" variant="h6">
            When you have the data you need when you need it, the chances of achieving your goals dramatically improve.
            Here’s the simple, 5-step process we recommend jurisdictions use when working with OpenLattice.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <ProcessSection>
        <Tile>
          <Typography variant="h4">
            Choose a Goal
          </Typography>
          <Typography variant="body2">
            What do you want to accomplish? De-escalate encounters in law enforcement? Reduce recidivism?
            Connect the public to vetted childcare providers? Be bold!
          </Typography>
          <Typography variant="body2">
            Work with OpenLattice team members to determine whether to use the platform by itself or the platform and
            an existing application to help you achieve your goals.
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
              Work with OpenLattice team members to determine what new data to collect, what existing data collection
              systems to connect, and what additional analysis and visualization systems you’d like to connect to help
              you achieve your goal.
            </Typography>
          </div>
          <div>
            <Typography variant="h6">
              Set up Permissions and Notifications
            </Typography>
            <Typography variant="body2">
              Determine what job titles and departments can access what types of data, and when they need to see it.
              OpenLattice can work closely with you to ensure compliance with the regulations that apply to you.
            </Typography>
          </div>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Get Insights and Act
          </Typography>
          <Typography variant="body2">
            As you see from the data what works (and what doesn’t), you get better and better at fine-tuning your
            efforts.
          </Typography>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Track and Adjust
          </Typography>
          <Typography variant="body2">
            When you accomplish your goal, announce your progress and new achievements to interested parties, like the
            public. When you’ve got the numbers to show the impact you’ve made, people can better understand and
            support your progress.
          </Typography>
          <Typography variant="body2">
            When you’ve accomplished one goal, on to the next!  As you set new goals, get new data, or bring on new
            data partners, easily scale out the OpenLattice technology and your new data-driven processes.
          </Typography>
        </Tile>
        <Tile>
          <Typography variant="h4">
            Showcase & Scale
          </Typography>
          <Typography variant="body2">
            You’ve accomplished your goal--Congratulations!  Time to showcase. When you’ve got solid numbers to show
            your progress, people can better understand, support, and fund your critical initiatives.
          </Typography>
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
            <a href="https://help.openlattice.com/article/96-our-implementation-plan">
              <SolidButton>
                Learn More
              </SolidButton>
            </a>
            <SolidButton onClick={openBeacon}>Contact Us</SolidButton>
          </ButtonsGrid>
        </Tile>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default WorkingWithUsGovernmentPage;
