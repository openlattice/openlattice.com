/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { GRAY_TXT_COLOR_2, TILE_BG_COLOR_2 } from '../../core/style/Constants';

const TileWrapper = styled.div`
  align-items: center;
  background-color: ${TILE_BG_COLOR_2};
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  min-height: 100px;
  padding: 0 40px;
  width: 465px;
`;

const Icon = styled.img`
  margin-right: 15px;
`;

const Body = styled.span`
  color: ${GRAY_TXT_COLOR_2};
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
