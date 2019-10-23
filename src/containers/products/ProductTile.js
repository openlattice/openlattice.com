/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import {
  N1,
  N2,
  N4,
  PP4
} from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const TileWrapper = styled(Link)`
  background-color: ${N1};
  height: 322px;
  margin: 15px;
  padding: 30px;
  position: relative;
  width: 100%;
  text-decoration: none;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 300px;
  }
`;

const Icon = styled.img`
  margin-bottom: 30px;
`;

const Title = styled.div`
  color: ${N4};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
  top: 88px;
`;

const Body = styled.div`
  color: ${N2};
  font-size: 14px;
  line-height: 19px;
  top: 151px;
  margin-bottom: 20px;
`;

const LearnMoreButton = styled.div`
  align-items: center;
  color: ${PP4};
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: flex-start;
  position: absolute;
  bottom: 30px;
  span {
    margin-right: 8px;
  }
`;

type Props = {
  body :string;
  icon :string;
  route :string;
  title :string;
};

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
    <LearnMoreButton>
      <span>Learn more</span>
      <FontAwesomeIcon icon={faChevronRight} color={PP4} size="xs" />
    </LearnMoreButton>
  </TileWrapper>
);

// $FlowFixMe
export default withRouter(ProductTile);
