import React, { Fragment } from 'react';

import Image02 from '../../assets/images/02_data_sharing_agreements.png';

import { CONTENT_02 } from './Constants';

import {
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItemText,
  SectionItem,
  ListItemTitle
} from './style';


const Content02 = () => (
  <Fragment>
    <ContentLeft bgImage={Image02} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          { CONTENT_02.BODY }
        </Body>
      </BodyWrapper>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_02.LIST_ITEM_01.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_01.TEXT }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_02.LIST_ITEM_02.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_02.TEXT }
        </ListItemText>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_03.TITLE }
        </ListItemText>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_03.TEXT }
        </ListItemText>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_04.TITLE }
        </ListItemText>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_04.TEXT }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_02.LIST_ITEM_05.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_05.TEXT }
        </ListItemText>
      </SectionItem>
    </ContentRight>
  </Fragment>
);

export default Content02;
