/*
 * @flow
 */

import React from 'react';

import {
  BetaTitle,
  Body,
  Icon,
  Subtitle,
  TileLearnMoreButton,
  TileWrapper,
  Title,
} from './styled/StyledTileComponents';
import { Tag } from '../../components/tags/Tag';
import { PRODUCT_TITLES } from './ProductConsts';

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
  <TileWrapper>
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
