import React, { Fragment } from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import TabDisplay from './TabDisplay';

import { N1 } from '../../core/style/Colors';

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
        <TabDisplay />
      </Content>
    </PageSection>
  </Fragment>
);

export default HowItWorksSection;
