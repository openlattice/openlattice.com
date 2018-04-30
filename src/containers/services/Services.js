import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import { StyledTitleMd, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px 0 40px 0;
  max-width: 550px;
`;

const StyledTitleServices = StyledTitleMd.extend`
  width: 465px;
  height: 72px;
  font-family: Chivo;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const StyledContentBody = StyledBody.extend`
  width: 465px;
  height: 88px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #6f788a;
  margin-bottom: 40px;
`;


const Services = () => (
  <HomepageSection background='#f1f1f1' paddingBottom='190px'>
    <StyledContentBlock>
      <StyledTitleMd color='#000000'>
        Better understand how services are delivered and consumed
      </StyledTitleMd>
      <StyledContentBody color='#6f788a'>
        {`
          Bring together data across public safety, health systems, 
          and social services to enable technologies that streamline 
          operations, identify those most in need of help, test 
          appropriate interventions, and improve human outcomes.
        `}
      </StyledContentBody>
    </StyledContentBlock>
  </HomepageSection>
);

export default Services;
