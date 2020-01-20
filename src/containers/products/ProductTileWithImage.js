/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';
import { StyleUtils } from 'lattice-ui-kit';
import type { Element } from 'react';

import {
  bodyStyles,
  subtitlesStyles,
  titleStyles,
  tileWrapperStyles,
} from './styled/StyledTileComponents';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { PRODUCT_TITLES } from './ProductConsts';

const {
  ASTROMETRICS,
  CWP,
  REFERRALS,
  STEPPING_UP,
} = PRODUCT_TITLES;

const { getStyleVariation } = StyleUtils;

const getHeight = getStyleVariation('height', {
  default: 389,
  [ASTROMETRICS]: 391,
});

const getWidth = getStyleVariation('width', {
  [ASTROMETRICS]: 552,
  [CWP]: 551,
  [REFERRALS]: 551,
  [STEPPING_UP]: 550,
});

const getIconDimensions = getStyleVariation('iconDimensions', {
  [ASTROMETRICS]: { height: '44px', width: '44px' },
  [CWP]: { height: '48px', width: '40.79px' },
  [REFERRALS]: { height: '48px', width: '25px' },
  [STEPPING_UP]: { height: '40px', width: '40px' }
});

const LongTileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0;
  margin-bottom: 48px;
  ${tileWrapperStyles}
  width: calc(${getWidth}px + 2px);

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    height: ${getHeight}px;
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: calc(calc(${getWidth}px * 0.65) + 2px);
  }
`;

const ProductDescriptionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 48px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    height: 100%;
  }
`;

const Image = styled.img`
  height: ${getHeight}px;
  width: ${getWidth}px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: calc(${getHeight}px * 0.65);
    width: calc(${getWidth}px * 0.65);
  }
`;

const Icon = styled.img`
  height: ${getIconDimensions}.height;
  width: ${getIconDimensions}.width;
`;

const ProductTitle = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  width: 100%;
  ${titleStyles}
`;

const ProductSubtitle = styled.div`
  margin-bottom: 24px;
  width: 100%;
  ${subtitlesStyles}
`;

const ProductBody = styled.div`
  margin: 0 48px 32px 48px;
  width: 100%;
  ${bodyStyles}
`;

const ScheduleACall = styled.div`
  border-radius: 5px;
  border: 1px solid ${NEUTRALS.GRAY_10};
  box-sizing: border-box;
  color: ${NEUTRALS.GRAY_08};
  font-size: 14px;
  line-height: 150%;
  padding: 5px 10px;
  width: 222px;
`;

type Props = {
  body :string;
  icon :string;
  image :string;
  index :number;
  subtitles :string[];
  title :string;
};

const ProductTileWithImage = ({
  body,
  icon,
  image,
  index,
  subtitles,
  title
} :Props) => {

  const productDescription :Element<*> = (
    <ProductDescriptionWrapper>
      <Icon src={icon} iconDimensions={title} />
      <ProductTitle>{ title }</ProductTitle>
      <ProductSubtitle>
        { subtitles.join(' • ') }
      </ProductSubtitle>
      <ProductBody>
        { body }
      </ProductBody>
      <ScheduleACall>
        Schedule a call to learn more
      </ScheduleACall>
    </ProductDescriptionWrapper>
  );

  const productImage :Element<*> = (
    <Image src={image} height={title} width={title} />
  );

  const height :string = title === ASTROMETRICS ? ASTROMETRICS : 'default';

  if (index % 2 === 0) {
    return (
      <LongTileWrapper height={height} width={title}>
        { productDescription }
        { productImage }
      </LongTileWrapper>
    );
  }
  return (
    <LongTileWrapper height={height} width={title}>
      { productImage }
      { productDescription }
    </LongTileWrapper>
  );
};

export default ProductTileWithImage;
