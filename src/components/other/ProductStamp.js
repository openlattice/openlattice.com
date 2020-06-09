/*
 * @flow
 */

import styled from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const ProductStamp = styled.div`
  align-items: center;
  background-color: ${NEUTRALS.WHITE};
  border-radius: 281px;
  color: ${NEUTRALS.GRAY_06};
  display: flex;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 24px;
  padding: 12px 16px;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    font-size: 20px;
    padding: 12px 20px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 24px;
    padding: 12px 24px;
  }

  > img {
    width: 32px;

    @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
      width: 36px;
    }

    @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
      width: 40px;
    }
  }

  > span {
    margin-left: 12px;
  }
`;

export default ProductStamp;
