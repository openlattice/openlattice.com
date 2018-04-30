import React from 'react';
import styled from 'styled-components';

import StyledIntroContainer from './components/StyledIntroContainer';
import HomepageSection from '../../components/layout/HomepageSection';
import Header from '../header/Header';
import StyledButtonCallToAction from '../../components/buttons/StyledButtonCallToAction';
import { StyledTitleLg, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px 0 40px 80px;
  max-width: 550px;
`;

const StyledContentBody = StyledBody.extend`
  max-width: 400px;
  margin-bottom: 40px;
`;


const Intro = () => (
  <HomepageSection background='#5E4BD6' paddingBottom='190px'>
    <Header />
    <StyledContentBlock>
      <StyledTitleLg color='#F1F1F1'>
        Modern data infrastructure for core societal institutions.
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
