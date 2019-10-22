// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo-white.png';
import { WINDOW_EDGE_PADDING } from '../../core/style/Sizes';
import { N0 } from '../../core/style/Colors';
import * as Routes from '../../core/router/Routes';

const helpLink = 'https://help.openlattice.com';

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: space-between;
  margin-top: ${WINDOW_EDGE_PADDING}px;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const MenuInternalLink = styled(Link)`
  color: ${N0};
  margin-left: 30px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  color: ${N0};
  margin-left: 30px;
  text-decoration: none;
`;

const AppHeader = () => (
  <Header>
    <img src={logoImg} alt="OpenLattice Logo" height={50} />
    <Menu>
      <MenuInternalLink to={Routes.PRODUCTS}>Products</MenuInternalLink>
      <MenuExternalLink href={helpLink}>Help</MenuExternalLink>
    </Menu>
  </Header>
);

export default AppHeader;
