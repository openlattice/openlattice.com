import React, { Fragment } from 'react';

import Image04 from '../../assets/images/04_specific_services.png';

import {
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItem,
  ListItemNumber,
  ListItemText
} from './style';


const Content04 = () => (
  <Fragment>
    <ContentLeft bgImage={Image04} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          {
            `Once data is integrated, we match individuals using deep learning across data sets from criminal 
            justice, health care, and social services.`
          }
        </Body>
        <Body>
          {
            `Customers can leverage existing OpenLattice solutions or develop their own against unified individual 
            profiles that respect applicable access control rules. Exisiting usecases:`
          }
        </Body>
      </BodyWrapper>
      <ListItem>
        <ListItemNumber>
          01
        </ListItemNumber>
        <ListItemText>
          {
            `Portland (Maine) is assessing, monitoring, and managing opioid-impacted individuals across police, 
            hospitals, clinics, and jail.`
          }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          02
        </ListItemNumber>
        <ListItemText>
          {
            `Minnehaha & Pennington County, SD automated risk assessments for pre-trial release decisions and 
            monitors released individuals.`
          }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          03
        </ListItemNumber>
        <ListItemText>
          {
            `Baltimore, Portland (Maine), and Johnson County (Iowa) are monitoring behavioral health associated 
            criminal justice incidents.`
          }
        </ListItemText>
      </ListItem>
    </ContentRight>
  </Fragment>
);

export default Content04;
