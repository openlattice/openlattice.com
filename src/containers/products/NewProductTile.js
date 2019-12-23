/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { LearnMoreInternalLink } from '../../components/controls/index';
import { Tag } from '../../components/tags/Tag';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { PRODUCT_TITLES } from './ProductConsts';

const TileWrapper = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_10};
  border-radius: 3px;
  box-sizing: border-box;
  height: 400px;
  margin: 24px;
  position: relative;
  width: 100%;
  text-decoration: none;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 528px;
  }
`;

const Icon = styled.img`
  left: 240px;
  position: absolute;
  right: 240px;
  top: 48px;
`;

const Title = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 24px;
  font-weight: 600;
  left: 0;
  line-height: 150%;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  text-align: center;
  top: 120px;
`;

const BetaTitle = styled(Title)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Subtitle = styled.div`
  color: ${NEUTRALS.GRAY_08};
  display: flex;
  font-size: 13px;
  font-weight: 600;
  justify-content: center;
  left: 0;
  line-height: 150%;
  position: absolute;
  right: 0;
  text-transform: uppercase;
  top: 164px;

  :last-of-type {
    margin-right: 0;
  }
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 16px;
  left: 48px;
  line-height: 150%;
  position: absolute;
  right: 48px;
  text-align: center;
  top: 208px;
`;

const TileLearnMoreButton = styled(LearnMoreInternalLink)`
  background-color: ${NEUTRALS.GRAY_15};
  border: none;
  bottom: 48px;
  left: 203px;
  position: absolute;
  right: 202px;
  text-align: center;
`;

type Props = {
  body :string;
  icon :string;
  route :string;
  subtitles :string[];
  title :string;
};

const ProductTile = ({
  body,
  icon,
  route,
  subtitles,
  title
} :Props) => (
  <TileWrapper to={route}>
    <Icon src={icon} />
    {
      title === PRODUCT_TITLES.RESEARCH_HUB
        ? (
          <BetaTitle>
            <div>{ title }</div>
            <Tag tagType="beta">BETA</Tag>
          </BetaTitle>
        )
        : (
          <Title>
            { title }
          </Title>
        )
    }
    <Subtitle>
      { subtitles.join(' • ') }
    </Subtitle>
    <Body>
      { body }
    </Body>
    <TileLearnMoreButton to={route}>
      Learn more
    </TileLearnMoreButton>
  </TileWrapper>
);

export default ProductTile;
