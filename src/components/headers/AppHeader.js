// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import logoImg from '../../assets/images/logo-white.png';
import { MEDIA_QUERY_MD, WINDOW_EDGE_PADDING } from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';
import * as Routes from '../../core/router/Routes';

const helpLink = 'https://help.openlattice.com';
const scheduleACallLink = 'https://calendly.com/openlattice/openlattice-web-request';

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
  color: ${(props) => props.color};
  margin-right: 30px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const MenuExternalLink = styled.a`
  color: ${(props) => props.color};
  margin-right: 30px;
  text-decoration: none;
`;

const ScheduleACallButton = styled.a`
  background-color: ${NEUTRALS.WHITE};
  border-radius: 16px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  display: inline-block;
  font-weight: 600;
  padding: 7px 13px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

type Props = {
  logo ? :string;
  menuStyles ? :Object;
};

const AppHeader = ({ logo, menuStyles } :Props) => (
  <Header>
    <Link to={Routes.ROOT}>
      <img src={logo} alt="OpenLattice Logo" height={50} />
    </Link>
    <Menu>
      <MenuInternalLink
          activeStyle={menuStyles.activeStyles}
          color={menuStyles.menuFontColor}
          to={Routes.PRODUCTS}>
        Products
      </MenuInternalLink>
      <MenuExternalLink
          color={menuStyles.menuFontColor}
          href={helpLink}
          target="_blank">
        Help
      </MenuExternalLink>
      {
        menuStyles.includeScheduleACallButton
        && (
          <ScheduleACallButton
              color={menuStyles.scheduleColor}
              href={scheduleACallLink}
              target="_blank">
            Schedule a call
          </ScheduleACallButton>
        )
      }
    </Menu>
  </Header>
);

AppHeader.defaultProps = {
  menuStyles: {
    activeStyles: {
      color: NEUTRALS.WHITE,
      fontWeight: 600
    },
    includeScheduleACallButton: false,
    menuFontColor: NEUTRALS.GRAY_04,
    scheduleBorderColor: undefined,
    scheduleColor: NEUTRALS.BLACK,
  },
  logo: logoImg,
};

export default AppHeader;
