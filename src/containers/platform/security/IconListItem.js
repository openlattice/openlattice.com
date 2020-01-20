/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../../../components/headers/PageHeaders';
import { NEUTRALS } from '../../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';

const ItemWrapper = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  height: 110px;
  justify-content: space-between;
  margin: 24px;
  position: relative;
  text-decoration: none;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 528px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    justify-content: flex-start;
    margin: 24px 0;
  }
`;

const Icon = styled.img`
  height: 96px;
  width: 96px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    height: 60px;
    width: 60px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 48px;
    width: 48px;
  }
`;

const TextWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 384px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    box-sizing: border-box;
    padding-left: 30px;
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const ItemTitle = styled(SectionHeader)`
  align-self: flex-start;
  font-size: 18px;
  text-align: left;
  margin-bottom: 8px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 18px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 16px;
  }
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 14px;
  font-weight: normal;
  line-height: 150%;
  text-align: left;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 12px;
  }
`;

type Props = {
  body :string;
  icon :string;
  title :string;
};

const IconListItem = ({
  body,
  icon,
  title
} :Props) => (
  <ItemWrapper>
    <Icon src={icon} />
    <TextWrapper>
      <ItemTitle>
        { title }
      </ItemTitle>
      <Body>
        { body }
      </Body>
    </TextWrapper>
  </ItemWrapper>
);

export default IconListItem;
