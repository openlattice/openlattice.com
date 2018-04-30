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


const Technology = () => (
  <HomepageSection background='#ffffff' paddingBottom='190px'>
    <StyledContentBlock>
      <StyledTitleMd color='#000000'>
        Our Technology
      </StyledTitleMd>
      <StyledContentBody color='#6f788a'>
        {`
          OpenLattice, Inc. provides a perpetually free tier of core 
          services to all interested parties. Ultimately, these tools 
          help build cross-sector data partnerships, powered by secure 
          and accurate data linkage technology.  These tools also enable 
          more tailored products to governmental workflows, described below. 
        `}
      </StyledContentBody>
    </StyledContentBlock>
  </HomepageSection>
);

export default Technology;
