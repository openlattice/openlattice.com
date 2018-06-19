import React, { Fragment } from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { TITLE, SUBTITLE } from './Constants';
import TabDisplay from './TabDisplay';

import { N1 } from '../../core/style/Colors';

const Content = styled.div`
  margin: 80px 0 100px 0;
  max-width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    display: block;
    margin: 140px 0 140px 0;
  }
`;

const StyledCroppedSubtitle = StyledSectionSubTitle.extend`
  margin-bottom: 60px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 46%;
  }
`;

const HowItWorksSection = () => (
  <Fragment>
    <PageSection bgColor={N1}>
      <Content>
        <StyledSectionTitle>
          { TITLE }
        </StyledSectionTitle>
        <StyledCroppedSubtitle>
          { SUBTITLE }
        </StyledCroppedSubtitle>
        <TabDisplay />
      </Content>
    </PageSection>
  </Fragment>
);

export default HowItWorksSection;
