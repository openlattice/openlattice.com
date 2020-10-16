/*
 * @flow
 */

import React, { useEffect, useRef, useState } from 'react';

import styled, { css } from 'styled-components';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Drawer } from 'lattice-ui-kit';
import { useLocation } from 'react-router';

import NavItem from './NavItem';
import NavItems from './NavItems';
import NavLink from './NavLink';

import { OpenLatticeLogo } from '../../assets/svg/logos';
import { Routes } from '../../core/router';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, PAGE_PADDING } from '../../core/style/Sizes';

const DRAWER_BREAKPOINT = 960;

const getComputedStyles = ({ isNavFixed }) => {

  let boxShadow = 'none';
  let padding = `24px ${PAGE_PADDING}px`;
  let position = 'relative';
  if (isNavFixed) {
    boxShadow = '0 5px 20px rgba(0, 0, 0, 0.05)';
    padding = `16px ${PAGE_PADDING}px`;
    position = 'fixed';
  }

  return css`
    box-shadow: ${boxShadow};
    padding: ${padding};
    position: ${position};
  `;
};

const NavigationWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  height: 64px;
`;

const Navigation = styled.nav`
  align-items: center;
  background-color: white;
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  z-index: 1000;
  ${getComputedStyles}

  ${OpenLatticeLogo} {
    height: 30px;
    margin-right: 32px;

    @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
      height: 40px;
    }
  }
`;

const NavigationToggleWrapper = styled.div`
  align-items: center;
  color: ${NEUTRALS.GRAY_07};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  height: 32px;
  justify-content: center;
  margin-right: -9px; /* the icon is 14px wide, this div is 32px wide, so there's 9px on each side of the icon */
  width: 32px;

  &:hover {
    color: ${NEUTRALS.GRAY_07};
  }
`;

const AppNav = () => {

  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [forceDrawer, setForceDrawer] = useState(window.innerWidth < DRAWER_BREAKPOINT);
  const ref :{ current :HTMLElement | null } = useRef(null);

  const handleOnResize = () => {
    const windowWidth = window.innerWidth;
    setForceDrawer(windowWidth < DRAWER_BREAKPOINT);
    if (windowWidth >= DRAWER_BREAKPOINT) {
      setIsDrawerOpen(false);
    }
  };

  const handleOnScroll = () => {
    if (ref.current) {
      setIsNavFixed(ref.current.getBoundingClientRect().top < -8);
    }
  };

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location]);

  useEffect(() => {
    window.addEventListener('resize', handleOnResize);
    window.addEventListener('scroll', handleOnScroll);
    return () => {
      window.removeEventListener('resize', handleOnResize);
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, []);

  return (
    <>
      <NavigationWrapper isNavFixed={isNavFixed} ref={ref}>
        <Navigation isNavFixed={isNavFixed}>
          <NavLink to={Routes.ROOT}>
            <NavItem>
              <OpenLatticeLogo />
            </NavItem>
          </NavLink>
          <>
            {
              !forceDrawer && !isDrawerOpen && (
                <NavItems />
              )
            }
            {
              forceDrawer && (
                <NavigationToggleWrapper onClick={() => setIsDrawerOpen(true)}>
                  <FontAwesomeIcon icon={faBars} />
                </NavigationToggleWrapper>
              )
            }
          </>
        </Navigation>
      </NavigationWrapper>
      {
        forceDrawer && (
          <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} side="right">
            <NavItems inDrawer />
          </Drawer>
        )
      }
    </>
  );
};

export default AppNav;
