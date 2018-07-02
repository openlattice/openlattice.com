/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { N2, PP0 } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';


const TileWrapper = styled.div`
  align-items: center;
  background-color: ${PP0};
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 15px 15px 0 15px;
  min-height: 100px;
  width: 300px;
  padding: 40px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 465px;
  }
`;

const Icon = styled.img`
  margin-right: 15px;
`;

const Body = styled.span`
  color: ${N2};
  font-size: 14px;
  line-height: 19px;
`;

type Props = {
  body :string;
  icon :string;
}

const FooterTile = ({ body, icon } :Props) => (
  <TileWrapper>
    <Icon src={icon} />
    <Body>
      { body }
    </Body>
  </TileWrapper>
);

export default FooterTile;
