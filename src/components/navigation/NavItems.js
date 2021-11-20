/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import NavItem from './NavItem';
import NavLink from './NavLink';

import { Routes } from '../../core/router';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';
import { OutlineButton } from '../controls';

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

  ${OutlineButton} {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: ${({ inDrawer }) => (inDrawer ? '30px' : 0)};
  }

  > a,
  > div {
    margin-right: ${({ inDrawer }) => (inDrawer ? 0 : '30px')};

    @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
      margin-right: ${({ inDrawer }) => (inDrawer ? 0 : '38px')};
    }
  }
`;

type Props = {
  inDrawer ?:boolean;
};

const NavItems = ({ inDrawer } :Props) => (
  <>
    <NavItemsWrapper inDrawer={inDrawer}>
      <NavLink to={Routes.PRODUCTS_CHRONICLE}>
        <NavItem>Chronicle</NavItem>
      </NavLink>
      <NavLink to={Routes.ABOUT}>
        <NavItem>About Us</NavItem>
      </NavLink>
      <OutlineButton color="primary" onClick={openBeacon}>
        Get Started
      </OutlineButton>
    </NavItemsWrapper>
  </>
);

NavItems.defaultProps = {
  inDrawer: false,
};

export default NavItems;
