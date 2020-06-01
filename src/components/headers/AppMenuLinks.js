// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';

import {
  MENU_HEADERS,
  MENU_ROUTES,
  TARGET,
  horizontalMenuActiveStyles,
} from './MenuConsts';
import { NEUTRALS } from '../../core/style/Colors';

type MenuStylesProps = {
  isSmallScreen :boolean;
};

const menuItemStyles = (props :MenuStylesProps) => (props.isSmallScreen
  ? css`
    color: ${NEUTRALS.GRAY_03};
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0;
    text-decoration: none;
  `
  : css`
  color: ${NEUTRALS.GRAY_08};
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  margin-right: 40px;
  text-decoration: none;
`);

const MenuInternalLink = styled(NavLink)`
  ${menuItemStyles}

  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  ${menuItemStyles}
  margin-bottom: ${(props) => (props.isSmallScreen ? '40px' : 0)};
`;

const ProductsWrapper = styled.div`
  ${menuItemStyles}
  align-items: center;
  color: ${(props) => (props.active ? horizontalMenuActiveStyles.color : NEUTRALS.GRAY_08)};
  display: flex;
`;

const ProductsMenuTitle = styled.div`
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }
`;

type LinkProps = {
  activeStyle :Object;
  isSmallScreen :boolean;
};

const AboutLink = ({ activeStyle, isSmallScreen } :LinkProps) => (
  <MenuInternalLink
      activeStyle={activeStyle}
      isSmallScreen={isSmallScreen}
      to={MENU_ROUTES.ABOUT}>
    { MENU_HEADERS.ABOUT }
  </MenuInternalLink>
);

const WorkingWithUsLink = ({ activeStyle, isSmallScreen } :LinkProps) => (
  <MenuInternalLink
      activeStyle={activeStyle}
      isSmallScreen={isSmallScreen}
      to={MENU_ROUTES.WORKING_WITH_US}>
    { MENU_HEADERS.WORKING_WITH_US }
  </MenuInternalLink>
);

const PlatformLink = ({ activeStyle, isSmallScreen } :LinkProps) => (
  <MenuInternalLink
      activeStyle={activeStyle}
      isSmallScreen={isSmallScreen}
      to={MENU_ROUTES.PLATFORM}>
    { MENU_HEADERS.PLATFORM }
  </MenuInternalLink>
);

const ProductsLink = ({ activeStyle, isSmallScreen } :LinkProps) => (
  <MenuInternalLink
      exact
      activeStyle={activeStyle}
      isSmallScreen={isSmallScreen}
      to={MENU_ROUTES.PRODUCTS}>
    { MENU_HEADERS.PRODUCTS }
  </MenuInternalLink>
);

const HelpCenterLink = ({ activeStyle, isSmallScreen } :LinkProps) => (
  <MenuExternalLink
      activeStyle={activeStyle}
      isSmallScreen={isSmallScreen}
      href={MENU_ROUTES.HELP_CENTER}
      target={TARGET}>
    { MENU_HEADERS.HELP_CENTER }
  </MenuExternalLink>
);

type HeaderMenuProductsProps = {
  openProductsMenu :(isOpen :boolean) => void;
  productsMenuIsOpen :boolean;
};

const HeaderMenuProducts = ({ openProductsMenu, productsMenuIsOpen } :HeaderMenuProductsProps) => (
  <ProductsWrapper
      active={productsMenuIsOpen}
      onClick={() => openProductsMenu(!productsMenuIsOpen)}>
    <ProductsMenuTitle>
      { MENU_HEADERS.PRODUCTS }
    </ProductsMenuTitle>
    <FontAwesomeIcon
        color={productsMenuIsOpen ? horizontalMenuActiveStyles.color : NEUTRALS.GRAY_08}
        icon={faChevronDown} />
  </ProductsWrapper>
);

export {
  AboutLink,
  HeaderMenuProducts,
  HelpCenterLink,
  MenuInternalLink,
  PlatformLink,
  ProductsLink,
  WorkingWithUsLink,
  menuItemStyles,
};
