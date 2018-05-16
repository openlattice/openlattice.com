/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, PP1 } from '../../core/style/Colors';

const TileWrapper = styled.div`
  align-items: flex-start;
  background-color: ${PP1};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 15px;
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
  color: ${N2};
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
