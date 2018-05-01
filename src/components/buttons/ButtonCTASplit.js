import React from 'react';
import styled from 'styled-components';

import StyledButton from './StyledButton';
import StyledContainerHorizontal from '../layout/StyledContainerHorizontal';

const StyledButtonLeft = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 2px 0 0 2px;
  color: #838383;
  display: flex;
  font-family: Roboto;
  font-size: 15px;
  height: 45px;
  padding-left: 30px;
  width: 304px;
`;

const StyledButtonRight = StyledButton.extend`
  background: ${props => props.background || '#f1f1f1'};
  border-radius: 0 2px 2px 0;
  color: #fff;
  height: 45px;
  text-decoration: none;
  width: 161px;
`;

const Link = StyledButtonRight.withComponent('a');

const Icon = styled.img`
  margin-right: 20px;
`;

const ButtonCTASplit = ({ background, icon, copy, cta, link, email }) => (
  <StyledContainerHorizontal>
    <StyledButtonLeft>
      <Icon src={icon} alt="icon" />
      { copy }
    </StyledButtonLeft>
    { link && <Link href={link} background={background}>{ cta }</Link> }
    { email && <Link href={`mailto:${link}`} background={background}>{ cta }</Link> }
  </StyledContainerHorizontal>
);

export default ButtonCTASplit;
