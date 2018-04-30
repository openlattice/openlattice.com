import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import StyledContainerVertical from '../../components/layout/StyledContainerVertical';
import ButtonCTASplit from '../../components/buttons/ButtonCTASplit';
import HandshakeIcon from '../../assets/images/handshake-icon@3x.png';
import { StyledTitleMd, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px 0 40px 0;
  max-width: 550px;
`;

const StyledTitleServices = StyledTitleMd.extend`
  width: 279px;
  height: 36px;
  font-family: Chivo;
  font-size: 30px;
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
  height: 21px;
  opacity: 0.9;
  font-family: Roboto;
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
  background-color: #000000;
`;

const StyledConnectContainerHorizontal = StyledContainerHorizontal.extend`
  justify-content: space-between;
`;

const StyledCTAWrapper = StyledContainerVertical.extend`
  align-content: flex-end;
  align-items: center;
  height: 110px;
  justify-content: space-between;
  width: 465px;
`;

const Connect = () => (
  <HomepageSection background='#6124e2' paddingBottom='190px'>
    <StyledContainerHorizontal>
      <StyledContentBlock>
        <StyledImage src={HandshakeIcon} />
        <StyledTitleMd color='#000000'>
          {`Let's work together.`}
        </StyledTitleMd>
        <StyledContentBody color='#6f788a'>
          {`Have a project in mind or want to learn more?`}
        </StyledContentBody>
      </StyledContentBlock>
      <StyledCTAWrapper>
        <ButtonCTASplit background='#ff58b4' color='#ffffff' copy='Find a date on Calendly' cta='Schedule a Call' />
        <ButtonCTASplit background='#361876' color='#ffffff' copy='info@openlattice.com' cta='Write an Email' />
      </StyledCTAWrapper>
    </StyledContainerHorizontal>
  </HomepageSection>
);

export default Connect;
