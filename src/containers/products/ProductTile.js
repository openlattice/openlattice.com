/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { N2, N4, PP1 } from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const TileWrapper = styled(Link)`
  background-color: ${PP1};
  border-radius: 2px;
  height: 267px;
  margin: 15px;
  padding: 40px;
  position: relative;
  width: 100%;
  text-decoration: none;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }
`;

const Icon = styled.img`
  margin-bottom: 20px;
`;

const Title = styled.div`
  color: ${N4};
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 15px;
  top: 88px;
`;

const Body = styled.div`
  color: ${N2};
  font-size: 14px;
  line-height: 19px;
  top: 151px;
`;

type Props = {
  body :string;
  icon :string;
  route :string;
  title :string;
}

const ProductTile = ({
  body,
  icon,
  route,
  title,
} :Props) => (
  <TileWrapper to={route}>
    <Icon src={icon} />
    <Title>
      { title }
    </Title>
    <Body>
      { body }
    </Body>
  </TileWrapper>
);

export default withRouter(ProductTile);
