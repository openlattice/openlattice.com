/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, N4, PP1 } from '../../core/style/Colors';

const TileWrapper = styled.div`
  background-color: ${PP1};
  border-radius: 2px;
  height: 267px;
  margin: 15px;
  padding: 40px;
  position: relative;
  width: 300px;
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: ${N4};
  font-size: 20px;
  margin-bottom: 15px;
  top: 88px;
`;

const Body = styled.div`
  color: ${N2};
  font-size: 14px;
  top: 151px;
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
