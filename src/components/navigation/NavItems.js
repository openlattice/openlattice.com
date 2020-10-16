/*
 * @flow
 */

import React, { useState } from 'react';

import styled from 'styled-components';
import { faChevronDown } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Portal } from 'lattice-ui-kit';

import NavItem from './NavItem';
import NavLink from './NavLink';
import ProductNavItems from './ProductNavItems';

import { Routes } from '../../core/router';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';
import { ContactUsButton } from '../controls';

const NavItemsWrapper = styled.div`
  align-items: ${({ inDrawer }) => (inDrawer ? 'stretch' : 'center')};
  color: ${({ inDrawer }) => (inDrawer ? NEUTRALS.GRAY_07 : NEUTRALS.GRAY_08)};
  display: flex;
  flex-direction: ${({ inDrawer }) => (inDrawer ? 'column' : 'row')};
  margin: ${({ inDrawer }) => (inDrawer ? '8px 0' : 0)};

  ${NavItem} {
    color: ${({ inDrawer }) => (inDrawer ? NEUTRALS.GRAY_07 : NEUTRALS.GRAY_08)};
    line-height: ${({ inDrawer }) => (inDrawer ? '3.5' : '1.5')};
    padding: ${({ inDrawer }) => (inDrawer ? '0 24px' : '0')};

    &:hover {
      color: ${NEUTRALS.GRAY_07};
      cursor: pointer;
    }
  }

  ${ContactUsButton} {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: ${({ inDrawer }) => (inDrawer ? '30px' : 0)};
  }

  > a,
  > div {
    margin-right: ${({ inDrawer }) => (inDrawer ? 0 : '30px')};

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      margin-right: ${({ inDrawer }) => (inDrawer ? 0 : '40px')};
    }
  }
`;

const PortalOuterWrapper = styled.div`
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const PortalInnerWrapper = styled.div`
  background-color: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 16px 0;
  position: absolute;
  top: 70px;
  right: 100px;
`;

type Props = {
  inDrawer ?:boolean;
};

const NavItems = ({ inDrawer } :Props) => {

  const [isPortalOpen, setIsPortalOpen] = useState(false);

  const toggleProductsPortal = () => {
    setIsPortalOpen(!isPortalOpen);
  };

  return (
    <>
      <NavItemsWrapper inDrawer={inDrawer}>
        <NavLink to={Routes.GOVERNMENT}>
          <NavItem>Government</NavItem>
        </NavLink>
        <NavLink to={Routes.WORKING_WITH_US}>
          <NavItem>Working with us</NavItem>
        </NavLink>
        <NavLink to={Routes.PLATFORM}>
          <NavItem>Platform</NavItem>
        </NavLink>
        {
          inDrawer
            ? (
              <NavLink to={Routes.PRODUCTS}>
                <NavItem>Product Overview</NavItem>
              </NavLink>
            )
            : (
              <NavItem onClick={toggleProductsPortal}>
                <span>Products</span>
                <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: '8px' }} />
              </NavItem>
            )
        }
        {
          inDrawer && <ProductNavItems />
        }
        <a href="https://help.openlattice.com" rel="noreferrer" target="_blank">
          <NavItem>
            Help Center
          </NavItem>
        </a>
        <ContactUsButton onClick={openBeacon} />
      </NavItemsWrapper>
      {
        isPortalOpen && (
          <Portal>
            <PortalOuterWrapper onClick={toggleProductsPortal}>
              <PortalInnerWrapper>
                <ProductNavItems inPortal />
              </PortalInnerWrapper>
            </PortalOuterWrapper>
          </Portal>
        )
      }
    </>
  );
};

NavItems.defaultProps = {
  inDrawer: false,
};

export default NavItems;
