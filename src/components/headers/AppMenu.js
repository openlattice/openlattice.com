// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import OlLogo from '../../assets/logos/ol-logo-header.png';

import { MENU_HEADERS, MENU_ROUTES } from './MenuConsts';
import { NEUTRALS, PURPLES } from '../../core/style/Colors';

const menuActiveColor = {
  color: NEUTRALS.GRAY_06
};

const menuItemStyles = css`
  color: ${NEUTRALS.GRAY_08};
  margin-right: 40px;
  text-decoration: none;
`;

const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 24px 32px 0 32px;
  width: 100%;
`;

const MenuItemsWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
`;

const MenuInternalLink = styled(NavLink)`
  ${menuItemStyles}

  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  ${menuItemStyles}
`;

const ScheduleACallButton = styled.a`
  background-color: ${NEUTRALS.WHITE};
  border-radius: 23px;
  border: 1px solid ${PURPLES.PP08};
  color: ${PURPLES.PP08};
  display: inline-block;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const AppMenu = () => (
  <MenuWrapper>
    <Link to={MENU_ROUTES.ROOT}>
      <img src={OlLogo} alt="OpenLattice" height={40} />
    </Link>
    <MenuItemsWrapper>
      <MenuInternalLink
          activeStyle={menuActiveColor}
          to={MENU_ROUTES.ABOUT}>
        { MENU_HEADERS.ABOUT }
      </MenuInternalLink>
      <MenuInternalLink
          activeStyle={menuActiveColor}
          to={MENU_ROUTES.WORKING_WITH_US}>
        { MENU_HEADERS.WORKING_WITH_US }
      </MenuInternalLink>
      <MenuInternalLink
          activeStyle={menuActiveColor}
          to={MENU_ROUTES.PLATFORM}>
        { MENU_HEADERS.PLATFORM }
      </MenuInternalLink>
      <MenuInternalLink
          activeStyle={menuActiveColor}
          to={MENU_ROUTES.PRODUCTS}>
        { MENU_HEADERS.PRODUCTS }
      </MenuInternalLink>
      <MenuExternalLink
          activeStyle={menuActiveColor}
          href={MENU_ROUTES.HELP_CENTER}
          target="_blank">
        { MENU_HEADERS.HELP_CENTER }
      </MenuExternalLink>
      <ScheduleACallButton
          activeStyle={menuActiveColor}
          href={MENU_ROUTES.SCHEDULE_A_CALL}
          target="_blank">
        { MENU_HEADERS.SCHEDULE_A_CALL }
      </ScheduleACallButton>
    </MenuItemsWrapper>
  </MenuWrapper>
);

export default AppMenu;
