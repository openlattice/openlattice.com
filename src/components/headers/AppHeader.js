// @flow
import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../assets/images/logo-white.png';
import { MEDIA_QUERY_MD, WINDOW_EDGE_PADDING } from '../../core/style/Sizes';
import { N0, N4, N5 } from '../../core/style/Colors';
import * as Routes from '../../core/router/Routes';

const helpLink = 'https://help.openlattice.com';
const scheduleACallLink = 'https://calendly.com/openlattice/openlattice-web-request';

const activeLinkStyles = {
  color: N0,
  fontWeight: 600,
};

const Header = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${WINDOW_EDGE_PADDING}px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const MenuInternalLink = styled(NavLink)`
  color: ${N5};
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  color: ${N5};
  margin-right: 30px;
  text-decoration: none;
`;

const ScheduleACallButton = styled.a`
  background-color: ${N0};
  border-radius: 16px;
  color: ${N4};
  display: inline-block;
  font-weight: 600;
  padding: 7px 13px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const AppHeader = () => (
  <Header>
    <Link to={Routes.ROOT}>
      <img src={logoImg} alt="OpenLattice Logo" height={50} />
    </Link>
    <Menu>
      <MenuInternalLink activeStyle={activeLinkStyles} to={Routes.PRODUCTS}>Products</MenuInternalLink>
      <MenuExternalLink href={helpLink} target="_blank">Help</MenuExternalLink>
      <ScheduleACallButton href={scheduleACallLink} target="_blank">Schedule a call</ScheduleACallButton>
    </Menu>
  </Header>
);

export default AppHeader;
