import React from 'react';
import styled from 'styled-components';

import StyledButton from './StyledButton';
import StyledContainerHorizontal from '../layout/StyledContainerHorizontal';

const StyledButtonLeft = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 2px 0 0 2px;
  color: #838383;
  font-family: Roboto;
  font-size: 15px;
  height: 45px;
  vertical-align: middle;
  width: 304px;
`;

const StyledButtonRight = StyledButton.extend`
  background: ${props => props.background || '#f1f1f1'};
  border-radius: 0 2px 2px 0;
  color: ${props => props.color || '#000000'};
  height: 45px;
  width: 161px;
`;

const ButtonCTASplit = ({ background, color, copy, cta }) => (
  <StyledContainerHorizontal>
    <StyledButtonLeft>{ copy }</StyledButtonLeft>
    <StyledButtonRight background={background} color={color}>{ cta }</StyledButtonRight>
  </StyledContainerHorizontal>
);

export default ButtonCTASplit;
