import React from 'react';

import ProblemDefinitionImage from '../../assets/images/01_problem_definition.png';

import { CONTENT_01 } from './Constants';

import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItem,
  ListItemNumber,
  ListItemText
} from './Style';


const Content01 = () => (
  <ContentWrapper>
    <ContentLeft src={ProblemDefinitionImage} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          { CONTENT_01.BODY }
        </Body>
      </BodyWrapper>
      <ListItem>
        <ListItemNumber>
          { CONTENT_01.LIST_ITEM_01.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_01.LIST_ITEM_01.TEXT }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          { CONTENT_01.LIST_ITEM_02.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_01.LIST_ITEM_02.TEXT }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          { CONTENT_01.LIST_ITEM_03.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_01.LIST_ITEM_03.TEXT }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          { CONTENT_01.LIST_ITEM_04.TITLE }
        </ListItemNumber>
        <ListItemText>
          { CONTENT_01.LIST_ITEM_04.TEXT }
        </ListItemText>
      </ListItem>
    </ContentRight>
  </ContentWrapper>
);

export default Content01;
