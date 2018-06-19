import React from 'react';

import Image03 from '../../assets/images/03_establishing_data_access.png';

import { CONTENT_03 } from './Constants';

import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItemText,
  SectionItem,
  ListItemTitle
} from './style';


const Content03 = () => (
  <ContentWrapper>
    <ContentLeft src={Image03} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          { CONTENT_03.BODY_01 }
        </Body>
        <Body>
          { CONTENT_03.BODY_02 }
        </Body>
      </BodyWrapper>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_03.LIST_ITEM_01.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_03.LIST_ITEM_01.TEXT }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_03.LIST_ITEM_02.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_03.LIST_ITEM_02.TEXT }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_03.LIST_ITEM_03.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_03.LIST_ITEM_03.TEXT }
        </ListItemText>
      </SectionItem>
    </ContentRight>
  </ContentWrapper>
);

export default Content03;
