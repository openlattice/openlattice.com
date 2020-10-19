/*
 * @flow
 */

import styled from 'styled-components';

const NavItem = styled.div`
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: 500;
  margin-left: ${({ inDrawer }) => (inDrawer ? '30px' : 0)};
`;

export default NavItem;
