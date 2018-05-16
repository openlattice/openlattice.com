/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, PP0 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const TileWrapper = styled.div`
  align-items: center;
  background-color: ${PP0};
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 15px;
  min-height: 100px;
  padding: 0 40px;
  width: 465px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 0;
  }
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
