/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors } from 'lattice-ui-kit';

import ComplianceAndSecuritySection from './ComplianceAndSecuritySection';
import HowItWorksSection from './HowItWorksSection';
import ResearchersSection from './ResearchersSection';
import { QUOTES } from './constants/quotes';

import FooterSection from '../footer/FooterSection';
import { LaptopImg } from '../../assets/images/home';
import {
  CloudSecureCircleIcon,
  DBSyncCircleIcon,
  DotGridCircleIcon,
  LinkCircleIcon,
  SearchCircleIcon,
} from '../../assets/svg/circle-icons';
import { PlatformStackGraphic } from '../../assets/svg/graphics';
import {
  ContentGrid,
  FeatureGrid,
  GraphicShot,
  LearnMoreButton,
  PageSection,
  QuotesSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  Tile,
  Typography,
} from '../../components';
import { PRODUCTS_CHRONICLE } from '../../core/router/Routes';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const TileGrid = styled(ContentGrid)`
  align-items: stretch;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(328px, 1fr));
  }

  ${Tile} {
    /* NOTE: 328px is very carfully chosen and is tightly coupled with the media query */
    max-width: 384px;

    @media (min-width: ${MEDIA_QUERY_MD}px) {
      &:nth-child(even) {
        margin: 0 auto 0 0;
      }

      &:nth-child(odd) {
        margin: 0 0 0 auto;
      }
    }
  }
`;

const HomePage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography variant="h1">
              Modern tools for modern research.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Bridge the gap between data collection and analysis and expand your research possiblities with Chronicle’s
              streamlined workflows and integrations.
            </Typography>
            <SolidButton onClick={openBeacon}>Learn more</SolidButton>
          </Tile>
          <GraphicShot>
            <PlatformStackGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography maxWidth={{ lg: 576 }} variant="h2">
              Collect, Analyze and Advance Your Research with Chronicle.
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 528 }} variant="body2">
              We’re creating new ways for academic researchers to collect, analyze and advance their research with
              Chronicle - a modern  Study Management tool that expands research capabilities. Chronicle enables
              researchers and primary investigators to better understand participant behavior and unlocks new insights
              with mobile functionality, ecological momentary assessment features, and customizable study management
              workflows.
            </Typography>
          </Tile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent margin={{ b: 0, t: 100 }}>
        <TileGrid>
          <Tile align={{ h: 'start' }}>
            <DBSyncCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Discover More
            </Typography>
            <Typography textAlign="left" variant="body1">
              Enable participants to share data through a simple mobile application and access new streams of
              information, such as time use diaries and 3rd party sensors.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <LinkCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Real-time Insights
            </Typography>
            <Typography textAlign="left" variant="body1">
              {`Advance your research using our ecological momentary assessment features to measure participant's
              behaviors and experiences in real-time.`}
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <CloudSecureCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Simplified Study Management
            </Typography>
            <Typography textAlign="left" variant="body1">
              Streamline participant enrollment and participation with study management features and researcher
              roles and permissions.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <SearchCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Improved Accuracy
            </Typography>
            <Typography textAlign="left" variant="body1">
              Standardized data collection that can be viewed in a clean, simple, and intuitive way on our Chronicle
              Dashboard or exported to a preferred statistical tool to increase study confidence.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <DotGridCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Access to Experts
            </Typography>
            <Typography textAlign="left" variant="body1">
              Connect with a team of data science experts to help clean, integrate and analyze your results.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
        </TileGrid>
      </SectionContent>
    </PageSection>
    <HowItWorksSection />
    <ResearchersSection />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: 0, t: 0 }}>
        <FeatureGrid>
          <Tile>
            <Typography variant="h1">
              Expand Your Research Possibilities
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Contact our team to see how we can help with your data collection and study management needs.
            </Typography>
            <SolidButton onClick={openBeacon}>Get Started</SolidButton>
          </Tile>
          <GraphicShot>
            <LaptopImg />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <QuotesSection quotes={QUOTES} />
    <ComplianceAndSecuritySection />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography variant="h2">
              Stay up to date on our latest features and research collaborations!
            </Typography>
          </Tile>
          <Tile>
            <SolidButton onClick={openBeacon}>Stay connected</SolidButton>
          </Tile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default HomePage;
