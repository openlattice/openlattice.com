/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../../../components/headers/PageHeaders';
import { NEUTRALS } from '../../../core/style/Colors';
import { MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';

const ItemWrapper = styled.div`
  align-items: center;
  border-radius: 3px;
  display: flex;
  height: 110px;
  justify-content: space-between;
  margin: 24px;
  position: relative;
  text-decoration: none;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 528px;
  }
`;

const Icon = styled.img`
  height: 96px;
  width: 96px;
`;

const TextWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 384px;
`;

const ItemTitle = styled(SectionHeader)`
  align-self: flex-start;
  font-size: 18px;
  text-align: left;
`;

const Body = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 14px;
  font-weight: normal;
  line-height: 150%;
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
