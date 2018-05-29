/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, PP0 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';


const TileWrapper = styled.div`
  align-items: flex-start;
  background-color: ${PP0};
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 15px 15px 0 15px;
  min-height: 100px;
  width: 300px;
  padding: 40px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 465px;
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
