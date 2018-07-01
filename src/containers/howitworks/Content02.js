import React from 'react';

import Image02 from '../../assets/images/02_data_sharing_agreements.png';

import { CONTENT_02 } from './Constants';

import {
  ContentWrapper,
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItemText,
  ListItemLink,
  SectionItem,
  ListItemTitle
} from './style';


const Content02 = () => (
  <ContentWrapper>
    <ContentLeft src={Image02} />
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
        <div>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.BAA_LINK }
              target="_blank">
            { `BAA` }
          </ListItemLink>
          <ListItemText>
            { ` for ` }
          </ListItemText>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.HIPAA_LINK }
              target="_blank">
            { `HIPAA` }
          </ListItemLink>
          <ListItemText>
            { ` covered entities` }
          </ListItemText>
        </div>
        <div>
          <ListItemText>
            { `BAA + ` }
          </ListItemText>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.QSOA_LINK }
              target="_blank">
              { `QSOA` }
          </ListItemLink>
          <ListItemText>
            { ` for ` }
          </ListItemText>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.CFR_LINK }
              target="_blank">
            { `42 CFR Part 2` }
          </ListItemLink>
          <ListItemText>
            { ` covered providers` }
          </ListItemText>
        </div>
        <div>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.CJIS_LINK }
              target="_blank">
            { `CJIS` }
          </ListItemLink>
          <ListItemText>
            { ` for Criminal Justice data`}
          </ListItemText>
        </div>
        <div>
          <ListItemLink
              href={ CONTENT_02.LIST_ITEM_02.FERPA_LINK }
              target="_blank">
            { `FERPA` }
          </ListItemLink>
          <ListItemText>
            { ` for student data` }
          </ListItemText>
        </div>
        <div>
          <ListItemText>
            { `Standard OpenLattice Terms of Service for other organizations` }
          </ListItemText>
        </div>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          { CONTENT_02.LIST_ITEM_03.TITLE }
        </ListItemTitle>
        <ListItemText>
          { CONTENT_02.LIST_ITEM_03.TEXT }
        </ListItemText>
      </SectionItem>
    </ContentRight>
  </ContentWrapper>
);

export default Content02;
