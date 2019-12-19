/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { LearnMoreInternalLink } from '../../../components/controls/index';
import { NEUTRALS } from '../../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';

const TileWrapper = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_10};
  border-radius: 3px;
  height: 374px;
  margin: 24px;
  position: relative;
  width: 100%;
  text-decoration: none;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 336px;
  }
`;

const Icon = styled.img`
  left: 143px;
  position: absolute;
  right: 143px;
  top: 40px;
`;

const Title = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 22px;
  font-weight: 600;
  left: 0;
  line-height: 150%;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 122px;
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 14px;
  left: 32px;
  line-height: 140%;
  margin-bottom: 32px;
  position: absolute;
  right: 32px;
  text-align: center;
  top: 174px;
`;

const TileLearnMoreButton = styled(LearnMoreInternalLink)`
  bottom: 40px;
  position: absolute;
  left: 106px;
  right: 107px;
`;

type Props = {
  body :string;
  icon :string;
  route :string;
  title :string;
};

const FeatureTile = ({
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
    <TileLearnMoreButton to={route}>
      Learn more
    </TileLearnMoreButton>
  </TileWrapper>
);

export default FeatureTile;
