import React, { Fragment } from 'react';

import Image02 from '../../assets/images/02_data_sharing_agreements.png';

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
          {
            `OpenLattice, Inc. recognizes the institutional, legal, and technical challenges of 
            establishing data sharing agreements among stakeholders, adhering to various laws and 
            regulations, and navigating homegrown or legacy data infrastructure. Our approach has 
            been to gather data sharing agreements in progressive and piecemeal fashion, using a 
            "Hub-Spoke-Wheel" model.`
          }
        </Body>
      </BodyWrapper>
      <SectionItem>
        <ListItemTitle>
          Hub
        </ListItemTitle>
        <ListItemText>
          {
            `OpenLattice establishes 1:1 agreements with each agency.`
          }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          Spokes
        </ListItemTitle>
        <ListItemText>
          {
            `BAA for HIPAA covered entities`
          }
        </ListItemText>
        <ListItemText>
          {
            `BAA + QSOA for 42 CFR Part 2 covered providers`
          }
        </ListItemText>
        <ListItemText>
          {
            `CJIS for Criminal Justice data`
          }
        </ListItemText>
        <ListItemText>
          {
            `FERPA for student data`
          }
        </ListItemText>
        <ListItemText>
          {
            `Standard OpenLattice Terms of Service for other organizations`
          }
        </ListItemText>
      </SectionItem>
      <SectionItem>
        <ListItemTitle>
          Wheel
        </ListItemTitle>
        <ListItemText>
          {
            `An agreement governs data use across entire collaborative. The OpenLattice platform 
            is the mechanism for implementing agreement.`
          }
        </ListItemText>
      </SectionItem>
    </ContentRight>
  </Fragment>
);

export default Content02;
