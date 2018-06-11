import React, { Fragment } from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';

import {
  N1,
  PP1,
  PP2,
  PP3,
  PP4
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin: 80px 0 100px 0;
  max-width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 140px 0 140px 0;
  }
`;

const StyledCroppedSubtitle = StyledSectionSubTitle.extend`
  width: 46%;
  margin-bottom: 60px;
`;

const TabDisplayWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TabDisplayNavigation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TabItem = styled.span`
  border-bottom: 5px solid #b4add1;
  padding: 10px 0;
  text-align: center;
  width: 25%;
`;

const TabDisplayContentWrapper = styled.div`
  background: blue;
  display: flex;
  height: 500px;
  width: 100%;
`;


const HowItWorksSection = () => (
  <Fragment>
    <PageSection bgColor={N1}>
      <Content>
        <StyledSectionTitle>
          How It Works
        </StyledSectionTitle>
        <StyledCroppedSubtitle>
          {
            `As a public benefit corporation, OpenLattice enables precision government by linking individual-level data 
            across currently siloed criminal justice, healthcare, and social services information at little or no cost.`
          }
        </StyledCroppedSubtitle>
        <TabDisplayWrapper>
          <TabDisplayNavigation>
            <TabItem>
              01 Problem Definition
            </TabItem>
            <TabItem>
              02 Data Sharing Agreements
            </TabItem>
            <TabItem>
              03 Establishing Data Access
            </TabItem>
            <TabItem>
              04 Specific Services
            </TabItem>
          </TabDisplayNavigation>
          <TabDisplayContentWrapper />
        </TabDisplayWrapper>
      </Content>
    </PageSection>
  </Fragment>
);

export default HowItWorksSection;
