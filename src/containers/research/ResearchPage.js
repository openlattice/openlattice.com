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
  Header,
  InfoTile,
  PageSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  SubHeader,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const Container = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="25vh 0">
        <Header color={NEUTRAL.N800}>
          Keep collaborative science advancing
        </Header>
        <SubHeader color={NEUTRAL.N800} maxWidth={700}>
          Get the data you need when you need it, collaborate on research, and spend more of your time on the fun stuff.
        </SubHeader>
        <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Header color={NEUTRAL.N800}>Modern. Safe. Flexible.</Header>
        <SubHeader color={NEUTRAL.N800} maxWidth={700}>
          The OpenLattice data integration platform and applications make it safe, fast, and easy to manage study
          participation, collect data, and share data with your research data partners.
        </SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin="0">
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <PlatformStackGraphic />
          </GraphicShot>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              A modern, sophisticated data integration platform
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Connect all of your data collection, analysis, and visualization systems into one powerful platform.
              Through Open APIs, you can build apps and tools on the platform to leverage its security, flexibility,
              and scalability.
            </SubHeader>
            <SolidButton onClick={openBeacon}>Learn more</SolidButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent maxWidth={{ lg: 700 }}>
        <Header color={NEUTRAL.N800}>
          Finally, a smarter way to run collaborative studies.
        </Header>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin="0">
        <FeatureGrid align={{ v: 'start' }}>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get more data
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Since it’s safe and easy to collaborate on research data, you can get more data from wider locales,
              leverage more expertise, run more analyses, draw more conclusions at tighter intervals, and ultimately
              impact broader populations.
            </SubHeader>
          </InfoTile>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get a more secure way to share data
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Collaborate where privacy and compliance limitations made it previously difficult or impossible.
              Protect the privacy of your study’s participants, ensure the research teams you collaborate with are
              able to access and share the right level of data, and easily meet compliance standards.
            </SubHeader>
          </InfoTile>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get study participation and communication automated
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Use the optional OpenLattice App, Chronicle, to take the hassle out of onboarding/offboarding
              participants. Plus see your study data in real time, and send participants automatic notifications
              of your choice.
            </SubHeader>
          </InfoTile>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get notified of important data
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Receive notifications when data you should see becomes available. Send one-tap or automatic notifications
              to others who need the information you’ve come across.
            </SubHeader>
          </InfoTile>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get a flexible way to collect and analyze data
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Collaborate with the freedom to choose. Use data collection tools of your choice, including the optional
              participant management app Chronicle. Plus, use any analysis tools of your choice.
            </SubHeader>
          </InfoTile>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>
              Get a more efficient way to work
            </Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>
              Spend less time jumping through hoops and more time on the fun stuff in science. Other methods of
              research data sharing, when they work at all, require too much time and management. OpenLattice makes
              your job faster and easier.
            </SubHeader>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="200px 0" maxWidth={{ lg: 700 }}>
        <Header color={NEUTRAL.N800}>
          Collaborate with data partners of your choice
        </Header>
        <SubHeader color={NEUTRAL.N800}>
          Researchers can securely and easily share and access data, whether across universities, with independent
          labs, or with governments. This means you can now smoothly collaborate where it was previously difficult or
          impossible.
        </SubHeader>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin="200px 0">
        <Header>Get a demo</Header>
        <SubHeader>Find out how OpenLattice can help your jurisdiction.</SubHeader>
        <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default Container;
