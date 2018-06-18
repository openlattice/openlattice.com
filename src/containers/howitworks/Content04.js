import React, { Fragment } from 'react';

import Image04 from '../../assets/images/04_specific_services.png';

import { CONTENT_04 } from './Constants';

import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItem,
  ListItemNumber,
  ListItemText
} from './style';


const Content04 = () => (
  <ContentWrapper>
    <ContentLeft src={Image04} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          { CONTENT_04.BODY_01 }
        </Body>
        <Body>
          { CONTENT_04.BODY_02 }
        </Body>
      </BodyWrapper>
      <ListItem>
        <ListItemNumber>
          { CONTENT_04.LIST_ITEM_01.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_04.LIST_ITEM_01.TEXT }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          { CONTENT_04.LIST_ITEM_02.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_04.LIST_ITEM_02.TEXT }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          { CONTENT_04.LIST_ITEM_03.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_04.LIST_ITEM_03.TEXT }
        </ListItemText>
      </ListItem>
    </ContentRight>
  </ContentWrapper>
);

export default Content04;
