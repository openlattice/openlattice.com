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
  margin: 140px 0 40px 80px;
  max-width: 550px;
`;

const StyledTitleIntro = StyledTitleLg.extend`
  width: 548px;
  height: 96px;
  font-family: Chivo;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const StyledContentBody = StyledBody.extend`
  width: 465px;
  height: 48px;
  font-family: Roboto;
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


const Intro = () => (
  <HomepageSection image={Splash} paddingBottom='190px'>
    <Header />
    <StyledContentBlock>
      <StyledTitleLg color='#F1F1F1'>
        Modern data infrastructure for core societal institutions
      </StyledTitleLg>
      <StyledContentBody color='#F1F1F1'>
        {`
          We believe core societal institutions should have modern data tools 
          to better serve all citizens.
        `}
      </StyledContentBody>
      <StyledButtonCallToAction>
        Schedule a call on calendly
      </StyledButtonCallToAction>
    </StyledContentBlock>
  </HomepageSection>
);

export default Intro;
