import React from 'react';
import styled from 'styled-components';

import StyledContainerHorizontal from '../../../components/layout/StyledContainerHorizontal';

const StyledTile = styled.div`
  width: 465px;
  height: 104px;
  border-radius: 2px;
  background-color: #f8f8fc;
  padding: 40px 0 0 40px;
`;

const StyledImage = styled.img`
  width: 39px;
  height: 24px;
  object-fit: contain;
  background-color: #000000;
  margin-right: 15px;
`;

const StyledBody = styled.div`
  width: 312px;
  height: 18px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #6f788a;
`;

const FooterTile = ({ body, image }) => (
  <StyledTile>
    <StyledContainerHorizontal>
      <StyledImage src={ image } />
      <StyledBody>{ body }</StyledBody>
    </StyledContainerHorizontal>
  </StyledTile>
);

export default FooterTile;
