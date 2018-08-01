/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';

import { N1, N2 } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

/*
 * styled components
 */
const bgColorMixin = ({ bgColor }) => {
  if (bgColor) {
    return css`
      background-color: ${bgColor};
    `;
  }
  return css`
    background: none;
  `;
};


const CTAWrapper = styled.div`
  color: ${N2};
  display: flex;
  flex: 0 0 auto;
  font-size: 15px;
  font-weight: semi-bold;
  height: 45px;
  justify-content: center;
  line-height: 20px;
  margin: 0 0 30px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 0;
  }
`;

const LeftWrapper = styled.div`
  align-items: center;
  background-color: ${N1};
  border-radius: 2px 0 0 2px;
  display: flex;
  width: 304px;
  padding: 15px 15px;

  @media only screen and (max-width: 500px) {
    display: none;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    padding: 15px 30px;
  }
`;

const RightWrapper = styled.div`
  align-items: center;
  background-color: ${N1};
  border-radius: 0 2px 2px 0;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  width: 200px;
  ${props => bgColorMixin(props)}

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 161px;
  }
`;

const ActionLink = styled.a`
  color: ${N1};
  font-weight: bold;
  text-decoration: none;
`;

const Icon = styled.img`
  margin-right: 20px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}) {
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

const ConnectCTA = ({
  bgColor,
  copyLeft,
  copyRight,
  icon,
  target
} :Props) => (
  <CTAWrapper>
    <LeftWrapper>
      <Icon src={icon} alt="icon" />
      <span>
        { copyLeft }
      </span>
    </LeftWrapper>
    <RightWrapper bgColor={bgColor}>
      <ActionLink href={target}>
        { copyRight }
      </ActionLink>
    </RightWrapper>
  </CTAWrapper>
);

export default ConnectCTA;
