/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, PP0 } from '../../core/style/Colors';

const TileWrapper = styled.div`
  align-items: center;
  background-color: ${PP0};
  border-radius: 2px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin: 15px;
  max-width: 465px;
  min-height: 100px;
  min-width: 300px;
  padding: 0 40px;
`;

const Icon = styled.img`
  margin-right: 15px;
`;

const Body = styled.span`
  color: ${N2};
  font-size: 14px;
`;

type Props = {
  body :string;
  icon :string;
}

const FooterTile = (props :Props) => (
  <TileWrapper>
    <Icon src={props.icon} />
    <Body>{props.body}</Body>
  </TileWrapper>
);

export default FooterTile;
