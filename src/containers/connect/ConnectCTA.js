/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';

import { GRAY_TXT_COLOR_2 } from '../../core/style/Constants';

/*
 * styled components
 */

const CTAWrapper = styled.div`
  color: ${GRAY_TXT_COLOR_2};
  display: flex;
  flex: 0 0 auto;
  font-size: 15px;
  line-height: 18px;
`;

const LeftWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px 0 0 2px;
  display: flex;
  flex: 1;
  padding: 15px 30px;
`;

const RightWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  padding: 15px 30px;
  width: 180px;
  ${(props) => {
    if (props.bgColor) {
      return css`background-color: ${props.bgColor};`;
    }
    return css`background: none`;
  }}
`;

const ActionLink = styled.a`
  color: #fff;
  font-weight: 500;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: 20px;
`;

/*
 * types
 */

type Props = {
  bgColor :string;
  copyLeft :string;
  copyRight :string;
  icon :string;
  target :string;
}

/*
 * components
 */

const ConnectCTA = (props :Props) => (
  <CTAWrapper>
    <LeftWrapper>
      <Icon src={props.icon} alt="icon" />
      <span>{props.copyLeft}</span>
    </LeftWrapper>
    <RightWrapper bgColor={props.bgColor}>
      <ActionLink href={props.target}>{ props.copyRight }</ActionLink>
    </RightWrapper>
  </CTAWrapper>
);

export default ConnectCTA;
