/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import { QUOTES } from './constants/quotes';

import FooterSection from '../footer/FooterSection';
import {
  CostChartGraphic,
  JaneSmithDataGraphic,
  NotificationsGraphic,
  PermissionsGraphic,
  PlatformStackGraphic,
} from '../../assets/svg/graphics';
import {
  FeatureGrid,
  GraphicShot,
  PageSection,
  QuotesSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  Tile,
  Typography,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const GovernmentPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography textAlign="center" variant="h1">
            Modern. Safe. Flexible.
          </Typography>
          <Typography textAlign="center" maxWidth={{ lg: 800 }} variant="h6">
            The OpenLattice data integration platform gives jurisdictions the flexibility to work with any systems,
            departments, jurisdictions, and even researchers of choice, and full control over how to use data to
            achieve goals.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <PlatformStackGraphic />
          </GraphicShot>
          <Tile>
            <Typography variant="h2">
              A modern, powerful data integration platform
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Connect all of your data collection, analysis, and visualization systems into one powerful platform.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Have a specific goal in mind?  Want to build apps and tools to help you achieve those goals, but need a
              secure, flexible, scalable data backend?  Through Open APIs, you can build apps and tools on the
              platform. Check out the apps jurisdictions have commissioned to achieve specific goals.
            </Typography>
          </Tile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Typography component="h2" variant="h1">
          Get more from your data
        </Typography>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography variant="h2">
              Get more complete information
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              See and share the best available information at any level: from the point of interaction with an
              individual to the protocol and policy decisions that affect entire populations.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              What data would help your jurisdiction meet its goals?
            </Typography>
          </Tile>
          <GraphicShot>
            <JaneSmithDataGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <PermissionsGraphic />
          </GraphicShot>
          <Tile>
            <Typography maxWidth={{ lg: 420 }} variant="h2">
              Get a more secure way to share information
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Collaborate using the safest technology so that you can easily meet any compliance requirements and
              ensure the privacy of the public you serve.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Who do you need to securely receive information from or send it to?
            </Typography>
          </Tile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Typography maxWidth={{ lg: 420 }} variant="h2">
              Get more timely actionable information
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Receive notifications when data you should see becomes available. Send one-tap or automatic notifications
              to others who need the information you’ve come across.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              What up-to-the-minute information would you like to receive?
            </Typography>
            <SolidButton onClick={openBeacon}>Request Pricing</SolidButton>
          </Tile>
          <GraphicShot>
            <NotificationsGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <CostChartGraphic />
          </GraphicShot>
          <Tile>
            <Typography variant="h2">
              Get a more cost effective way to meet your goals
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Discover ways to be more efficient and improve outcomes for individuals.  Meanwhile, leverage and extend
              the life of your jurisdiction’s existing systems without replacing tools or creating workflows.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Where are you looking to be more effective, more efficient, or both?
            </Typography>
            <SolidButton onClick={openBeacon}>Request Pricing</SolidButton>
          </Tile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <QuotesSection quotes={QUOTES} />
    <FooterSection />
  </>
);

export default GovernmentPage;
