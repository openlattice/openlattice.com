// @flow
import styled, { css } from 'styled-components';

import { LearnMoreInternalLink } from '../../../components/controls/index';
import { NEUTRALS } from '../../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';

const tileWrapperStyles = css`
  border: 1px solid ${NEUTRALS.GRAY_10};
  border-radius: 3px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  text-decoration: none;
`;

const TileWrapper = styled.div`
  height: 400px;
  margin: 24px;
  ${tileWrapperStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 528px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    :nth-of-type(odd) {
      margin-left: 0;
    }

    :nth-of-type(even) {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 460px;
    margin: 24px -24px;
  }
`;

const Icon = styled.img`
  left: 240px;
  position: absolute;
  right: 240px;
  top: 48px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    left: 46%;
    right: 0;
  }
`;

const titleStyles = css`
  color: ${NEUTRALS.GRAY_06};
  font-size: 24px;
  font-weight: 600;
  line-height: 150%;
  text-align: center;
`;

const Title = styled.div`
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  top: 120px;
  ${titleStyles}
`;

const BetaTitle = styled(Title)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const subtitlesStyles = css`
  color: ${NEUTRALS.GRAY_08};
  display: flex;
  font-size: 13px;
  font-weight: 600;
  justify-content: center;
  line-height: 150%;
  text-transform: uppercase;

  :last-of-type {
    margin-right: 0;
  }
`;

const Subtitle = styled.div`
  left: 0;
  position: absolute;
  right: 0;
  top: 164px;
  ${subtitlesStyles}
`;

const bodyStyles = css`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
`;

const Body = styled.div`
  left: 40px;
  position: absolute;
  right: 40px;
  top: 208px;
  ${bodyStyles}
`;

const TileLearnMoreButton = styled(LearnMoreInternalLink)`
  background-color: ${NEUTRALS.GRAY_18};
  border: none;
  bottom: 48px;
  left: 203px;
  position: absolute;
  right: 202px;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    left: 110px;
    right: 110px;
  }
`;

export {
  BetaTitle,
  Body,
  Icon,
  Subtitle,
  TileLearnMoreButton,
  TileWrapper,
  Title,
  bodyStyles,
  subtitlesStyles,
  tileWrapperStyles,
  titleStyles,
};
