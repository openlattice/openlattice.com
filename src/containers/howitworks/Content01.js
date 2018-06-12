import React, { Fragment } from 'react';

import Image01 from '../../assets/images/01_problem_definition.png';
import {
  ContentLeft,
  ContentRight,
  BodyWrapper,
  Body,
  ListItem,
  ListItemNumber,
  ListItemText
} from './style';


const Content01 = () => (
  <Fragment>
    <ContentLeft bgImage={Image01} />
    <ContentRight>
      <BodyWrapper>
        <Body>
          {
            `Identify a clear problem and who your stakeholders are. The problem may be a rise in
             drug overdoses in recent years, overcrowding in county jails, or the need for a 
             shared case management interface across related behavioral health agencies. Some 
             common problems jurisdictions are tackling with OpenLattice:`
          }
        </Body>
      </BodyWrapper>
      <ListItem>
        <ListItemNumber>
          01
        </ListItemNumber>
        <ListItemText>
          {
            `Identify and assist people who repeatedly cycle through county services, consuming a 
            disproportionate amount of social resources.`
          }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          02
        </ListItemNumber>
        <ListItemText>
          {
            'Inform policy decisions based on how government services are delivered and consumed.'
          }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          03
        </ListItemNumber>
        <ListItemText>
          {
            'Collaborate with academic researchers while protecting privacy.'
          }
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemNumber>
          04
        </ListItemNumber>
        <ListItemText>
          {
            `Increase interagency coordination, and therefore strengthen the continuum of care 
            for citizens with mental health histories who might now be served by a variety of 
            community health and public safety organizations in fragmented ways.`
          }
        </ListItemText>
      </ListItem>
    </ContentRight>
  </Fragment>
);

export default Content01;
