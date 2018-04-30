import React from 'react';
import styled from 'styled-components';

import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import StyledButton from '../../components/buttons/StyledButton';
import StyledButtonPrimary from '../../components/buttons/StyledButtonPrimary';
import OpenLatticeLogo from '../../assets/images/logo-white@3x.png';


const StyledHeaderContainer = StyledContainerHorizontal.extend`
  justify-content: space-between;
  padding-top: 22px;
`;

const StyledNavWrapper = styled.span`
  display: flex;
`;

const StyledButtonsWrapper = styled.span`
  align-items: center;
  display: flex;
`;

const Logo = styled.img`
  margin-right: 40px;
`;

const Link = styled.span`
  color: #ffffff;
  cursor: pointer;
  font-family: Roboto, 'Open Sans';
  font-size: 14px;
  line-height: 43px;
  margin-right: 40px;
`;

const StyledHeaderButton = StyledButton.extend`
  margin-right: 10px;
`;

const Header = () => (
  <StyledHeaderContainer>
    <StyledNavWrapper>
      <Logo src={OpenLatticeLogo} height="43" />
      <Link>About</Link>
      <Link>Help</Link>
    </StyledNavWrapper>
    <StyledButtonsWrapper>
      <StyledHeaderButton>
        Log In
      </StyledHeaderButton>
      <StyledButtonPrimary>
        Sign Up
      </StyledButtonPrimary>
    </StyledButtonsWrapper>
  </StyledHeaderContainer>
);

export default Header;
