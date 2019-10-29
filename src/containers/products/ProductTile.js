/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { StyleUtils } from 'lattice-ui-kit';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';

import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const { getStyleVariation } = StyleUtils;

const bodyStyleVariation = getStyleVariation('section', {
  default: '151px',
  corePlatform: '151px',
  products: '182px',
});

const TileWrapper = styled(Link)`
  background-color: ${NEUTRALS.GRAY01};
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
  color: ${NEUTRALS.BLACK};
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  top: 88px;
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY02};
  font-size: 14px;
  left: 30px;
  line-height: normal;
  position: absolute;
  right: 30px;
  top: ${bodyStyleVariation};
`;

const LearnMoreButton = styled.div`
  align-items: center;
  color: ${PURPLES.PP05};
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
  section :string;
  title :string;
};

const ProductTile = ({
  body,
  icon,
  route,
  section,
  title,
} :Props) => (
  <TileWrapper to={route}>
    <Icon src={icon} />
    <Title>
      { title }
    </Title>
    <Body section={section}>
      { body }
    </Body>
    <LearnMoreButton>
      <span>Learn more</span>
      <FontAwesomeIcon icon={faChevronRight} color={PURPLES.PP05} size="xs" />
    </LearnMoreButton>
  </TileWrapper>
);

// $FlowFixMe
export default withRouter(ProductTile);
