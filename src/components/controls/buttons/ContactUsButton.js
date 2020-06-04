// @flow
import styled from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../core/style/Colors';

const ContactUsWhite = styled.a`
  border-radius: 23px;
  border: 1px solid ${PURPLES.PP08};
  color: ${PURPLES.PP08};
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  padding: 7px 18px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const ContactUsPurple = styled(ContactUsWhite)`
  align-self: center;
  background-color: ${PURPLES.PP08};
  border: none;
  color: ${NEUTRALS.WHITE};
  padding: 8px 18px;
`;

export {
  ContactUsPurple,
  ContactUsWhite
};
