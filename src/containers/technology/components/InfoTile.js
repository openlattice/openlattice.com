import React from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 300px;
  height: 263px;
  border-radius: 2px;
  background-color: #eeeef9;
  padding: 40px 0 0 40px;
`;

const StyledImage = styled.img`
  width: 38px;
  height: 27px;
  object-fit: contain;
  margin-bottom: 21px;
`;

const StyledTitle = styled.div`
  width: 220px;
  height: 48px;
  font-family: Chivo;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  margin-bottom: 15px;
`;

const StyledBody = styled.div`
  width: 220px;
  height: 72px;
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

const InfoTile = ({ title, body, image }) => (
  <StyledTile>
    <StyledImage src={ image } />
    <StyledTitle>{ title }</StyledTitle>
    <StyledBody>{ body }</StyledBody>
  </StyledTile>
);

export default InfoTile;
