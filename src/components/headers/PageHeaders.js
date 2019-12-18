// @flow
import styled, { css } from 'styled-components';

import { NEUTRALS, PURPLES } from '../../core/style/Colors';

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
  font-size: 56px;
  font-weight: bold;
  line-height: 115%;
  margin-bottom: 24px;
  ${sharedStyles}
`;

const PageDescription = styled.h3`
  color: ${NEUTRALS.GRAY_07};
  font-size: 20px;
  font-weight: normal;
  line-height: 150%;
  margin-bottom: 32px;
  ${sharedStyles}
`;

const SectionHeader = styled.h2`
  color: ${NEUTRALS.GRAY_06};
  font-weight: 600;
  font-size: 36px;
  line-height: 140%;
  margin-bottom: 24px;
  ${sharedStyles}
`;

export {
  PageDescription,
  PageIntro,
  PageTitle,
  SectionHeader
};
