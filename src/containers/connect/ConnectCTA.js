/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';

import { N2 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

/*
 * styled components
 */

const CTAWrapper = styled.div`
  color: ${N2};
  display: flex;
  flex: 0 0 auto;
  font-size: 15px;
  height: 45px;
  justify-content: center;
  line-height: 18px;
  margin: 0 0 30px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 0;
  }
`;

const LeftWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 2px 0 0 2px;
  display: flex;
  width: 304px;
  padding: 15px 15px;

  @media only screen and (max-width: 500px) {
    display: none;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    padding: 15px 30px;
  }
`;

const RightWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  width: 161px;
  ${(props) => {
    if (props.bgColor) {
      return css`background-color: ${props.bgColor};`;
    }
    return css`background: none`;
  }}
`;

const ActionLink = styled.a`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: 20px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}) {
    margin-right: 20px;
  }
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
