import React from 'react';
import styled from 'styled-components';

import StyledIntroContainer from './components/StyledIntroContainer';
import { StyledTitleLg, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  max-width: 550px;
`;

const StyledContentBody = StyledBody.extend`
  max-width: 400px;
`;


const Intro = () => (
  <StyledIntroContainer>
    <StyledContentBlock>
      <StyledTitleLg color={'#F1F1F1'}>
        Modern data infrastructure for core societal institutions.
      </StyledTitleLg>
      <StyledContentBody color={'#F1F1F1'}>
        {`
          We believe core societal institutions should have modern data tools 
          to better serve all citizens.
        `}
      </StyledContentBody>
    </StyledContentBlock>
  </StyledIntroContainer>
);

export default Intro;
