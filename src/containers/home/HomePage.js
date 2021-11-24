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
import { LaptopImg, PhoneImg } from '../../assets/images/home';
import {
  PurpleCheckCircleIcon,
  PurpleCycleCircleIcon,
  PurpleLinkCircleIcon,
  PurpleMergeCircleIcon,
  PurpleSearchCircleIcon,
} from '../../assets/svg/circle-icons';
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
            <Typography maxWidth={{ lg: 565 }} variant="h1">
              The end-to-end platform for behavioral research
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Spend less time on administration and more time on science.
            </Typography>
            <SolidButton onClick={openBeacon}>Learn more</SolidButton>
          </Tile>
          <GraphicShot>
            <PhoneImg />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography maxWidth={{ lg: 576 }} textAlign="center" variant="h2">
              Streamline your research study with Chronicle
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 528 }} variant="body2">
              Enroll participants, collect consent, track protocol compliance, compensate participants, and
              integrate passive sensing, experience sampling, surveys and other data sources for
              analysis in one secure platform.
            </Typography>
          </Tile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent margin={{ b: 0, t: 100 }}>
        <TileGrid>
          <Tile align={{ h: 'start' }}>
            <PurpleSearchCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Manage Participants
            </Typography>
            <Typography textAlign="left" variant="body1">
              Enroll, collect consent, track protocol compliance, and easily compensate participants in your study.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <PurpleCycleCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Integrated Data Collection
            </Typography>
            <Typography textAlign="left" variant="body1">
              Bring all your data together in one place whether you are using our survey and passive sensing tools or
              third-party solutions for ecological momentary assessment or experience sampling.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <PurpleMergeCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Automated Reporting
            </Typography>
            <Typography textAlign="left" variant="body1">
              Researcher dashboard automatically notifies you of any irregularities in data collections and lets you
              easily generate reports for oversight bodies such as IRBs and to comply with 45 CFR Part 46.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <PurpleCheckCircleIcon width="50" />
            <Typography textAlign="left" variant="h6">
              Secure Platform
            </Typography>
            <Typography textAlign="left" variant="body1">
              Our platform meets standards for GDPR, HIPAA, 42 CFR Part 2, CJIS, FERPA, and has successfully completed
              SOC2 Type II with CSA Star mappings for all 5 categories.
            </Typography>
            <LearnMoreButton href={PRODUCTS_CHRONICLE} />
          </Tile>
          <Tile align={{ h: 'start' }}>
            <PurpleLinkCircleIcon width="50" />
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
