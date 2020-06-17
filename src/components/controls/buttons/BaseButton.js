/*
 * @flow
 */

import styled, { css } from 'styled-components';

const borderRadius = ({ radius }) => (
  radius ? `${radius}px` : '20px'
);

const getComputedStyles = () => css`
  border-radius: ${borderRadius};
  border: 1px solid;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  outline: none;
  padding: 7px 18px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const BaseButton = styled.button`
  ${getComputedStyles}
`;

export default BaseButton;
export {
  getComputedStyles,
};
