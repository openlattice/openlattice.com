/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PURPLES } from '../../core/style/Colors';

const PurpleAnchor = styled.a`
  color: ${PURPLES.PP08};
  text-decoration: none;
`;

const PurpleNavLink = styled(NavLink)`
  color: ${PURPLES.PP08};
  text-decoration: none;
`;

type Props = {
  children :Node;
  className ?:string;
  href ?:string;
  to ?:string;
};

const PurpleLink = ({
  children,
  className,
  href,
  to,
} :Props) => {

  if (to) {
    return (
      <PurpleNavLink className={className} to={to}>
        {children}
      </PurpleNavLink>
    );
  }

  return (
    <PurpleAnchor className={className} href={href} target="_blank">
      {children}
    </PurpleAnchor>
  );
};

PurpleLink.defaultProps = {
  className: undefined,
  children: undefined,
  href: undefined,
  to: undefined,
};

export default PurpleLink;
