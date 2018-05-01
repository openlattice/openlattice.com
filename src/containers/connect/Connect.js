import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import StyledContainerVertical from '../../components/layout/StyledContainerVertical';
import ButtonCTASplit from '../../components/buttons/ButtonCTASplit';
import CallIcon from '../../assets/images/call-icon.svg';
import EmailIcon from '../../assets/images/email-icon.svg';
import HandshakeIcon from '../../assets/images/handshake-icon@3x.png';
import { StyledTitleMd, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
  max-width: 550px;
`;

const StyledContentBody = StyledBody.extend`
  width: 465px;
  height: 21px;
  opacity: 0.9;
  font-family: Roboto, 'Open Sans';
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #eeeef9;
`;

const StyledImage = styled.img`
  width: 76px;
  height: 46px;
  object-fit: contain;
`;

const StyledCTAWrapper = StyledContainerVertical.extend`
  align-content: flex-end;
  align-items: center;
  height: 110px;
  justify-content: space-between;
  padding: 0;
  width: 465px;
`;

const Connect = () => (
  <HomepageSection background="#6124e2">
    <StyledContainerHorizontal>
      <StyledContentBlock>
        <StyledImage src={HandshakeIcon} />
        <StyledTitleMd color="#fff">
          { 'Let\'s work together.' }
        </StyledTitleMd>
        <StyledContentBody color="#6f788a">
          { 'Have a project in mind or want to learn more?' }
        </StyledContentBody>
      </StyledContentBlock>
      <StyledCTAWrapper>
        <ButtonCTASplit
            background="#ff58b4"
            icon={CallIcon}
            copy="Find a date on Calendly"
            cta="Schedule a Call"
            link="https://calendly.com/openlattice/openlattice-website-request/04-30-2018" />
        <ButtonCTASplit
            background="#361876"
            icon={EmailIcon}
            copy="info@openlattice.com"
            cta="Write an Email"
            email="info@openlattice.com" />
      </StyledCTAWrapper>
    </StyledContainerHorizontal>
  </HomepageSection>
);

export default Connect;
