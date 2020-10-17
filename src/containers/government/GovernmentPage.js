/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import {
  COLLABORATE,
  CONNECT_INTO_PLATFORM,
  COST_EFFECTIVE,
  DISCOVER,
  GET_COMPLETE_INFO,
  GET_TIMELY_INFO,
  HAVE_A_GOAL,
  MODERN_PLATFORM,
  RECEIVE_NOTIFICATIONS,
  SEE_SHARE_INFO,
  SHARE_INFO_SECURELY,
  WHAT_DATA,
  WHAT_UP_TO_DATE_INFO,
  WHERE_YOU_LOOKING,
  WHO_NEEDS_INFO,
} from './constants/language';
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
  Header,
  InfoTile,
  PageSection,
  QuotesSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  SubHeader,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { NEUTRAL } = Colors;

const PAGE_SUB_HEADER = 'The OpenLattice data integration platform gives jurisdictions the flexibility to work with'
  + ' any systems, departments, jurisdictions, and even researchers of choice, and full control over how to use data'
  + ' to achieve goals.';

const GovernmentPage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRAL.N50}>
      <SectionContent margin="20vh 0" maxWidth={{ sm: 450, lg: 700 }}>
        <Header>Modern. Safe. Flexible.</Header>
        <SubHeader>{PAGE_SUB_HEADER}</SubHeader>
        <SolidButton onClick={openBeacon}>Chat with us</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <PlatformStackGraphic />
          </GraphicShot>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>{MODERN_PLATFORM}</Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>{CONNECT_INTO_PLATFORM}</SubHeader>
            <SubHeader as="h5" color={NEUTRAL.N700}>{HAVE_A_GOAL}</SubHeader>
            <SolidButton onClick={openBeacon}>Chat with a Team Member</SolidButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Header color={NEUTRAL.N800}>Get more from your data</Header>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>{GET_COMPLETE_INFO}</Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>{SEE_SHARE_INFO}</SubHeader>
            <SubHeader as="h5" color={NEUTRAL.N700}>{WHAT_DATA}</SubHeader>
            <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
          </InfoTile>
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
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>{SHARE_INFO_SECURELY}</Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>{COLLABORATE}</SubHeader>
            <SubHeader as="h5" color={NEUTRAL.N700}>{WHO_NEEDS_INFO}</SubHeader>
            <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid>
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>{GET_TIMELY_INFO}</Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>{RECEIVE_NOTIFICATIONS}</SubHeader>
            <SubHeader as="h5" color={NEUTRAL.N700}>{WHAT_UP_TO_DATE_INFO}</SubHeader>
            <SolidButton onClick={openBeacon}>Request Pricing</SolidButton>
          </InfoTile>
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
          <InfoTile align="left">
            <Header as="h2" color={NEUTRAL.N800}>{COST_EFFECTIVE}</Header>
            <SubHeader as="h5" color={NEUTRAL.N700}>{DISCOVER}</SubHeader>
            <SubHeader as="h5" color={NEUTRAL.N700}>{WHERE_YOU_LOOKING}</SubHeader>
            <SolidButton onClick={openBeacon}>Request Pricing</SolidButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <QuotesSection quotes={QUOTES} />
    <PageSection>
      <SectionContent margin="20vh 0">
        <Header>Get a demo</Header>
        <SubHeader>Find out how OpenLattice can help your jurisdiction.</SubHeader>
        <SolidButton onClick={openBeacon}>Request a Demo</SolidButton>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default GovernmentPage;
