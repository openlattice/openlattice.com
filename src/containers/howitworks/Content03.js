import React, { Fragment } from 'react';

import Image03 from '../../assets/images/03_establishing_data_access.png';

import {
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItemText,
  SectionItem,
  ListItemTitle
} from './style';


const Content03 = () => (
  <Fragment>
    <ContentLeft bgImage={Image03} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          {
            `We have created standardized data models for key database types (e.g., Records Management 
            Systems) to alleviate the challenges of bespoke data integrations. Users can simply map 
            fields from source systems onto the OpenLattice schema.`
          }
        </Body>
        <Body>
          {
            `This greatly reduces costs and complexity such that OpenLattice is able to offer deeply 
            discounted or free data integration services for qualifying customers.`
          }
        </Body>
      </BodyWrapper>
      <SectionItem>
        <ListItemTitle>
          Key Decisions
        </ListItemTitle>
        <ListItemText>
          {
            `Frequency of updates, data model elements, and mechanism of transport (direct vs. indirect).`
          }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          Common Issues
        </ListItemTitle>
        <ListItemText>
          {
            `Security concerns, privacy concerns, performance concerns, licensing & insurance when 
            dealing with 3rd party vendors, and data access when dealing with proprietary interfaces or formats.`
          }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          Breaking Through
        </ListItemTitle>
        <ListItemText>
          {
            `Persistence and properly incentivize third parties.`
          }
        </ListItemText>
      </SectionItem>
    </ContentRight>
  </Fragment>
);

export default Content03;
