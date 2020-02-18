// @flow
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { NEUTRALS } from '../../../core/style/Colors';

const buttonStyles = css`
  border-radius: 45px;
  border: 1px solid ${NEUTRALS.GRAY_09};
  box-sizing: border-box;
  color: ${NEUTRALS.GRAY_07};
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const LearnMoreInternalLink = styled(NavLink)`
  ${buttonStyles}
`;

const LearnMoreExternalLink = styled.a`
  ${buttonStyles}
`;

export { LearnMoreExternalLink, LearnMoreInternalLink };
