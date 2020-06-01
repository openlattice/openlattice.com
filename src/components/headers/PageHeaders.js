import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';

const sharedStyles = css`
  align-self: center;
  margin-top: 0;
  text-align: center;
`;

const PageTitle = styled.p`
  color: ${PURPLES.PP08};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 16px;
  ${sharedStyles}
`;

const PageIntro = styled.h1`
  color: ${NEUTRALS.GRAY_06};
  font-size: 24px;
  font-weight: bold;
  line-height: 115%;
  margin-bottom: 24px;
  ${sharedStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    font-size: 32px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 48px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    font-size: 56px;
  }
`;

const PageDescription = styled.h3`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  font-weight: normal;
  line-height: 150%;
  margin-bottom: 32px;
  ${sharedStyles}

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    font-size: 18px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 20px;
  }
`;

const SectionHeader = styled.h2`
  color: ${NEUTRALS.GRAY_06};
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  margin-bottom: 24px;
  ${sharedStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 26px;
  }
`;

export {
  PageDescription,
  PageIntro,
  PageTitle,
  SectionHeader
};
