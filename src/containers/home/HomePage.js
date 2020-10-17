/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { Colors } from 'lattice-ui-kit';

import OurCustomersSection from './OurCustomersSection';
import QuotesSection from './QuotesSection';
import {
  AUTOMATE_NOTIFICATIONS,
  COLLECT_AND_CONNECT,
  COLLECT_DATA_VIA_APPS,
  CONNECT_ALL_THE_THINGS,
  GET_NOTIFIED,
  NOTIFY_OTHERS,
  OL_EASY_INFO,
  OL_ENSURES_ACCESS,
  OL_PROTECTS_DATA,
  PUT_DATA_RIGHT_PEOPLE,
  SEE_ACCESS,
  SET_ACCESS,
} from './constants/language';

import FooterSection from '../footer/FooterSection';
import { StatueOfLibertyPNG } from '../../assets/images/home';
import {
  RightDataGraphic,
  RightPeopleGraphic,
  RightTimeGraphic,
} from '../../assets/svg/graphics';
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
import { NEUTRALS } from '../../core/style/Colors';
import { openBeacon } from '../../utils/Utils';

const { PURPLE } = Colors;

const PurpleText = styled.span`
  color: ${PURPLE.P300};
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const HomePage = () => (
  <>
    <ScrollToTop />
    <PageSection bgColor={NEUTRALS.GRAY_05} bgImage={StatueOfLibertyPNG}>
      <SectionContent align={{ h: 'end' }} margin="20vh 0">
        <Header>With liberty and</Header>
        <Header>
          {'justice '}
          <Underline>for all.</Underline>
        </Header>
        <SubHeader>Data tools for those who serve the public.</SubHeader>
        <SolidButton onClick={openBeacon}>Chat with us</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Header>Get the right data to the right people at the right time</Header>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <FeatureGrid>
          <InfoTile align="left">
            <PurpleText>RIGHT DATA</PurpleText>
            <Header as="h2">{COLLECT_AND_CONNECT}</Header>
            <SubHeader as="h5">{CONNECT_ALL_THE_THINGS}</SubHeader>
            <SubHeader as="h5">{COLLECT_DATA_VIA_APPS}</SubHeader>
            <SubHeader as="h5">{OL_PROTECTS_DATA}</SubHeader>
            <SolidButton onClick={openBeacon}>Get a Demo</SolidButton>
          </InfoTile>
          <GraphicShot>
            <RightDataGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <RightPeopleGraphic />
          </GraphicShot>
          <InfoTile align="left">
            <PurpleText>RIGHT PEOPLE</PurpleText>
            <Header as="h2">{PUT_DATA_RIGHT_PEOPLE}</Header>
            <SubHeader as="h5">{SET_ACCESS}</SubHeader>
            <SubHeader as="h5">{SEE_ACCESS}</SubHeader>
            <SubHeader as="h5">{OL_ENSURES_ACCESS}</SubHeader>
            <SolidButton onClick={openBeacon}>Get a Demo</SolidButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid>
          <InfoTile align="left">
            <PurpleText>RIGHT TIME</PurpleText>
            <Header as="h2">{GET_NOTIFIED}</Header>
            <SubHeader as="h5">{NOTIFY_OTHERS}</SubHeader>
            <SubHeader as="h5">{AUTOMATE_NOTIFICATIONS}</SubHeader>
            <SubHeader as="h5">{OL_EASY_INFO}</SubHeader>
            <SolidButton onClick={openBeacon}>Get a Demo</SolidButton>
          </InfoTile>
          <GraphicShot>
            <RightTimeGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <QuotesSection />
    <OurCustomersSection />
    <FooterSection />
  </>
);

export default HomePage;
