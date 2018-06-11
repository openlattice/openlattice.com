import React, { Fragment } from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';

import {
  N1,
  PP2,
  PP3,
  PP4
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin: 80px 0 100px 0;
  max-width: 100%;
  height: 425px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    max-width: 50%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 525px;
    margin: 140px 0 0 0;
  }
`;

const HowItWorksSection = () => (
  <Fragment>
    <PageSection bgColor={N1}>
      <Content>
        <StyledSectionTitle>
          How It Works
        </StyledSectionTitle>
        <StyledSectionSubTitle>
          {
            `As a public benefit corporation, OpenLattice enables precision government by linking individual-level data 
            across currently siloed criminal justice, healthcare, and social services information at little or no cost.`
          }
        </StyledSectionSubTitle>
      </Content>
    </PageSection>
  </Fragment>
);

export default HowItWorksSection;
