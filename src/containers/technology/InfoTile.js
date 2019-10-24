/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const TileWrapper = styled.div`
  background-color: ${PURPLES.PP02};
  border-radius: 2px;
  height: 267px;
  margin: 15px;
  padding: 40px;
  position: relative;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: ${NEUTRALS.BLACK};
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 15px;
  top: 88px;
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY02};
  font-size: 14px;
  line-height: 19px;
  top: 151px;
`;

type Props = {
  body :string;
  icon :string;
  title :string;
}

const InfoTile = ({ body, icon, title } :Props) => (
  <TileWrapper>
    <Icon src={icon} />
    <Title>
      { title }
    </Title>
    <Body>
      { body }
    </Body>
  </TileWrapper>
);

export default InfoTile;
