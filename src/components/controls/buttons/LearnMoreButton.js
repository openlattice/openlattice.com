/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import OutlineButton, { getComputedStyles } from './OutlineButton';

const OutlineButtonNavLink = styled(NavLink).attrs({
  color: 'default'
})`
  ${getComputedStyles}
`;

const LEARN_MORE :'Learn more' = 'Learn more';

type Props = {
  children :any;
  className ?:string;
  href ?:string;
  onClick :() => void;
  to ?:string;
};

const LearnMoreButton = ({
  children,
  className,
  href,
  onClick,
  to,
} :Props) => {

  if (href) {
    return (
      <OutlineButton as="a" className={className} href={href} target="_blank">
        {children}
      </OutlineButton>
    );
  }

  if (to) {
    return (
      <OutlineButtonNavLink className={className} to={to}>
        {children}
      </OutlineButtonNavLink>
    );
  }

  return (
    <OutlineButton className={className} onClick={onClick}>
      {children}
    </OutlineButton>
  );
};

LearnMoreButton.defaultProps = {
  className: undefined,
  children: LEARN_MORE,
  href: undefined,
  onClick: () => {},
  to: undefined,
};

export default LearnMoreButton;
