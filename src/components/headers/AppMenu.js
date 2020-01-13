// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import OlLogo from '../../assets/logos/ol-logo-header.svg';

import { ContactUsWhite } from '../controls/index';
import { MENU_HEADERS, MENU_ROUTES, TARGET } from './MenuConsts';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const menuActiveColor = {
  color: NEUTRALS.GRAY_06
};

const menuItemStyles = css`
  color: ${NEUTRALS.GRAY_08};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-right: 40px;
  text-decoration: none;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 12px;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const MenuWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  max-width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MenuItemsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
  }
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
          target={TARGET}>
        { MENU_HEADERS.HELP_CENTER }
      </MenuExternalLink>
      <ContactUsWhite
          activeStyle={menuActiveColor}
          href={MENU_ROUTES.CONTACT_US}
          target={TARGET}>
        { MENU_HEADERS.CONTACT_US }
      </ContactUsWhite>
    </MenuItemsWrapper>
  </MenuWrapper>
);

export default AppMenu;
