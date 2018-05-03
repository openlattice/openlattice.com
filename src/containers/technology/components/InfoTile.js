/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { GRAY_TXT_COLOR_2, TILE_BG_COLOR_1 } from '../../../core/style/Constants';

const TileWrapper = styled.div`
  align-items: flex-start;
  background-color: ${TILE_BG_COLOR_1};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  min-height: 250px;
  padding: 40px;
  width: 300px;
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Body = styled.span`
  color: ${GRAY_TXT_COLOR_2};
  font-size: 14px;
`;

type Props = {
  body :string;
  icon :string;
  title :string;
}

const InfoTile = (props :Props) => (
  <TileWrapper>
    <Icon src={props.icon} />
    <Title>{props.title}</Title>
    <Body>{props.body}</Body>
  </TileWrapper>
);

export default InfoTile;
