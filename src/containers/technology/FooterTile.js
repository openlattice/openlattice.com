/*
 * @flow
 */

import React, { Node } from 'react';

import styled from 'styled-components';

import { N2, PP0 } from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM, MEDIA_QUERY_LG } from '../../core/style/Sizes';


const TileWrapper = styled.div`
  align-items: center;
  background-color: ${PP0};
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 15px;
  min-height: 100px;
  width: 100%;
  padding: 40px;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 465px;
  }
`;

const Icon = styled.img`
  margin-right: 15px;
`;

type Props = {
  children :Node;
  icon :string;
}

const FooterTile = ({ icon, children } :Props) => (
  <TileWrapper>
    <Icon src={icon} />
    { children }
  </TileWrapper>
);

export default FooterTile;
