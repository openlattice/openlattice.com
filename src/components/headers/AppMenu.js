// @flow
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { faLongArrowRight } from '@fortawesome/pro-regular-svg-icons';

import OlLogo from '../../assets/logos/ol-logo-header.svg';

import { ContactUsWhite } from '../controls/index';
import {
  MENU_HEADERS,
  MENU_ROUTES,
  PRODUCT_MENU_ITEMS,
  TARGET
} from './MenuConsts';
import { NEUTRALS } from '../../core/style/Colors';
import {
  MEDIA_QUERY_LG,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_TECH_SM,
  PAGE_SECTION_WIDTH
} from '../../core/style/Sizes';

const menuActiveColor = {
  color: NEUTRALS.GRAY_06
};

const StickyWrapper = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 52px;
  margin-top: 8px;
  position: relative;
  width: 100%;
  z-index: 2000;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 312px;
  }
`;

const menuItemStyles = css`
  color: ${NEUTRALS.GRAY_08};
  font-size: 16px;
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
  max-width: 100%;
  top: 0;
  z-index: 2000;
  ${(props) => (props.isSticky ? css`
     background-color: ${NEUTRALS.WHITE};
     box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
     margin: 0 -32px;
     padding: 16px 32px;
     position: fixed;
     left: 32px;
     right: 32px;
  `
    : `
  background-color: ${props.bgColor};
  box-shadow: none;
  margin: 0;
  padding: 16px 0;
  position: relative;
  left: auto;
  right: auto;
  `
  )}

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

const ProductsWrapper = styled.div`
  ${menuItemStyles}
  align-items: center;
  color: ${(props) => (props.active ? menuActiveColor.color : NEUTRALS.GRAY_08)};
  display: flex;
`;

const ProductsMenuTitle = styled.div`
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const ProductsMenuWrapper = styled.div`
  background-color: ${NEUTRALS.WHITE};
  border-radius: 3px;
  box-shadow: 0 5px 20px rgba(47, 45, 62, 0.05);
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  right: 9%;
  top: 56px;
  width: 441px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    top: 220px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    top: 220px;
    width: 100%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    left: 46%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    left: 52%;
  }

  @media only screen and (min-width: 1268px) {
    left: 60%;
  }

  @media only screen and (min-width: ${PAGE_SECTION_WIDTH}px) {
    left: 70%;
  }
`;

const ProductsMenuInnerWrapper = styled.div`
  padding: 16px 0;
  width: 100%;
`;

const ProductOverviewRow = styled.div`
  align-items: center;
  border-bottom: 1px solid ${NEUTRALS.GRAY_09};
  display: flex;
  padding: 32px;
`;

const productsMenuTextStyles = css`
  color: ${NEUTRALS.GRAY_06};
  font-weight: 600;
  line-height: 100%;

  &:hover {
    cursor: pointer;
  }
`;

const ProductOverviewLink = styled(MenuInternalLink)`
  font-size: 16px;
  margin-right: 8px;
  ${productsMenuTextStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 16px;
    margin-bottom: 0;
    margin-right: 8px;
  }
`;

const ProductRow = styled.div`
  display: flex;
  padding: 16px 32px;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    padding-bottom: 32px;
  }
`;

const ProductRowTextWrapper = styled(NavLink)`
  display: flex;
  flex-direction: column;
  left: 84px;
  position: absolute;
  text-decoration: none;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    right: 32px;
  }
`;

const ProductName = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
  ${productsMenuTextStyles}
`;

const ProductBlurb = styled.div`
  color: ${NEUTRALS.GRAY_08};
  font-size: 14px;
  line-height: 17px;
`;

type Props = {
  bgColor ? :string;
};

const AppMenu = ({ bgColor } :Props) => {
  const [productsMenuIsOpen, openProductsMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const ref = useRef({});
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <StickyWrapper bgColor={bgColor} isSticky={isSticky} ref={ref}>
      <MenuWrapper bgColor={bgColor} isSticky={isSticky}>
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
          <ProductsWrapper
              active={productsMenuIsOpen}
              onClick={() => openProductsMenu(!productsMenuIsOpen)}>
            <ProductsMenuTitle>
              { MENU_HEADERS.PRODUCTS }
            </ProductsMenuTitle>
            <FontAwesomeIcon
                color={productsMenuIsOpen ? menuActiveColor.color : NEUTRALS.GRAY_08}
                icon={faChevronDown} />
          </ProductsWrapper>
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
        {
          productsMenuIsOpen && (
            <ProductsMenuWrapper>
              <ProductOverviewRow>
                <ProductOverviewLink to={MENU_ROUTES.PRODUCTS}>Product overview</ProductOverviewLink>
                <FontAwesomeIcon color={NEUTRALS.GRAY_06} icon={faLongArrowRight} />
              </ProductOverviewRow>
              <ProductsMenuInnerWrapper>
                {
                  PRODUCT_MENU_ITEMS.map((item :Object) => (
                    <ProductRow key={item.NAME}>
                      <img src={item.ICON} alt="" />
                      <ProductRowTextWrapper to={item.ROUTE}>
                        <ProductName>{ item.NAME }</ProductName>
                        <ProductBlurb>{ item.BLURB }</ProductBlurb>
                      </ProductRowTextWrapper>
                    </ProductRow>
                  ))
                }
              </ProductsMenuInnerWrapper>
            </ProductsMenuWrapper>
          )
        }
      </MenuWrapper>
    </StickyWrapper>
  );
};

AppMenu.defaultProps = {
  bgColor: NEUTRALS.GRAY_05,
};

export default AppMenu;
