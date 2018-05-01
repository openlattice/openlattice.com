import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import Header from '../header/Header';
import Splash from '../../assets/images/splash_01.jpg';
import StyledButtonCallToAction from '../../components/buttons/StyledButtonCallToAction';
import { StyledTitleLg, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px 0 0 80px;
  max-width: 550px;
`;

const StyledContentBody = StyledBody.extend`
  width: 465px;
  height: 48px;
  font-family: Roboto, 'Open Sans';
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Link = StyledButtonCallToAction.withComponent('a');
const ScheduleLink = Link.extend`
  text-decoration: none;
`;

const Intro = () => (
  <HomepageSection image={Splash} paddingBottom="190px">
    <Header />
    <StyledContentBlock>
      <StyledTitleLg color="#F1F1F1">
        Foundational tools to better serve all citizens
      </StyledTitleLg>
      <StyledContentBody color="#F1F1F1">
        {`
          We believe core societal institutions should have modern data tools
          to better serve all citizens.
        `}
      </StyledContentBody>
      <ScheduleLink href="https://calendly.com/openlattice/openlattice-website-request/04-30-2018">
        Schedule a call on calendly
      </ScheduleLink>
    </StyledContentBlock>
  </HomepageSection>
);

export default Intro;
