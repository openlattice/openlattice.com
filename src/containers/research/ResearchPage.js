/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import FooterSection from '../footer/FooterSection';
import { PlatformStackGraphic } from '../../assets/svg/graphics';
import {
  FeatureGrid,
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

const Container = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography textAlign="center" variant="h1">
            Keep collaborative science advancing
          </Typography>
          <Typography textAlign="center" maxWidth={{ lg: 720 }} variant="h6">
            Get the data you need when you need it, collaborate on research, and spend more of your time on the fun
            stuff.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Tile align={{ h: 'center' }}>
          <Typography component="h2" textAlign="center" variant="h1">
            Modern. Safe. Flexible.
          </Typography>
          <Typography textAlign="center" variant="h6">
            The OpenLattice data integration platform and applications make it safe, fast, and easy to manage study
            participation, collect data, and share data with your research data partners.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin={{ b: 0, t: 0 }}>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <PlatformStackGraphic />
          </GraphicShot>
          <Tile>
            <Typography variant="h2">
              A modern, sophisticated data integration platform
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Connect all of your data collection, analysis, and visualization systems into one powerful platform.
              Through Open APIs, you can build apps and tools on the platform to leverage its security, flexibility,
              and scalability.
            </Typography>
            <SolidButton onClick={openBeacon}>Learn more</SolidButton>
          </Tile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Typography component="h2" maxWidth={{ lg: 700 }} variant="h1">
          Finally, a smarter way to run collaborative studies.
        </Typography>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin={{ b: 0, t: 0 }}>
        <FeatureGrid align={{ h: 'start', v: 'start' }}>
          <Tile>
            <Typography variant="h2">
              Get more data
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Since it’s safe and easy to collaborate on research data, you can get more data from wider locales,
              leverage more expertise, run more analyses, draw more conclusions at tighter intervals, and ultimately
              impact broader populations.
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 420 }} variant="h2">
              Get a more secure way to share data
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Collaborate where privacy and compliance limitations made it previously difficult or impossible.
              Protect the privacy of your study’s participants, ensure the research teams you collaborate with are
              able to access and share the right level of data, and easily meet compliance standards.
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 420 }} variant="h2">
              Get study participation and communication automated
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Use the optional OpenLattice App, Chronicle, to take the hassle out of onboarding/offboarding
              participants. Plus see your study data in real time, and send participants automatic notifications
              of your choice.
            </Typography>
          </Tile>
          <Tile>
            <Typography variant="h2">
              Get notified of important data
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Receive notifications when data you should see becomes available. Send one-tap or automatic notifications
              to others who need the information you’ve come across.
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 480 }} variant="h2">
              Get a flexible way to collect and analyze data
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Collaborate with the freedom to choose. Use data collection tools of your choice, including the optional
              participant management app Chronicle. Plus, use any analysis tools of your choice.
            </Typography>
          </Tile>
          <Tile>
            <Typography maxWidth={{ lg: 480 }} variant="h2">
              Get a more efficient way to work
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Spend less time jumping through hoops and more time on the fun stuff in science. Other methods of
              research data sharing, when they work at all, require too much time and management. OpenLattice makes
              your job faster and easier.
            </Typography>
          </Tile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin={{ b: '15vh', t: '15vh' }}>
        <Tile align={{ h: 'center' }}>
          <Typography component="h2" maxWidth={{ lg: 720 }} textAlign="center" variant="h1">
            Collaborate with data partners of your choice
          </Typography>
          <Typography maxWidth={{ lg: 720 }} textAlign="center" variant="h6">
            Researchers can securely and easily share and access data, whether across universities, with independent
            labs, or with governments. This means you can now smoothly collaborate where it was previously difficult or
            impossible.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default Container;
