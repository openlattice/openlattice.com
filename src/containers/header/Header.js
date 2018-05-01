import React from 'react';
import styled from 'styled-components';

import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import OpenLatticeLogo from '../../assets/images/logo-white@3x.png';

const StyledHeaderContainer = StyledContainerHorizontal.extend`
  justify-content: space-between;
  padding-top: 22px;
`;

const StyledNavWrapper = styled.span`
  display: flex;
`;

const Logo = styled.img`
  margin-right: 40px;
`;

const Header = () => (
  <StyledHeaderContainer>
    <StyledNavWrapper>
      <Logo src={OpenLatticeLogo} height="43" />
    </StyledNavWrapper>
  </StyledHeaderContainer>
);

export default Header;
