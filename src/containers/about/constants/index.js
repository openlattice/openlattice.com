/*
 * @flow
 */

import React from 'react';

import {
  BlakePhoto,
  BrandonPhoto,
  DrewPhoto,
  GiuliaPhoto,
  HristoPhoto,
  JoePhoto,
  KatherinePhoto,
  KimPhoto,
  MandyPhoto,
  MatthewPhoto,
  ShireenPhoto,
  SolomonPhoto,
  ToddPhoto,
} from '../../../assets/team';

// repeat roles
const ACCOUNT :string = 'Account Executive';
// const DATA_SCIENTIST :string = 'Data Scientist';
const DESIGNER :string = 'Product Designer';
const FRONTEND :string = 'Frontend Software Engineer';

const BLAKE :TeamMemberType = {
  NAME: 'Blake Freitas',
  ROLE: 'Customer Success Engineer',
  PHOTO: <BlakePhoto />,
};

const BRANDON :TeamMemberType = {
  NAME: 'Brandon Wright',
  ROLE: 'Customer Success Manager',
  PHOTO: <BrandonPhoto />,
};

const DREW :TeamMemberType = {
  NAME: 'Drew Bailey',
  ROLE: 'Senior Software Engineer',
  PHOTO: <DrewPhoto />,
};

const GIULIA :TeamMemberType = {
  NAME: 'Giulia Campana',
  ROLE: FRONTEND,
  PHOTO: <GiuliaPhoto />,
};

const HRISTO :TeamMemberType = {
  COFOUNDER: true,
  NAME: 'Hristo Oskov',
  ROLE: 'Engineer',
  PHOTO: <HristoPhoto />,
};

const JOE :TeamMemberType = {
  NAME: 'Joe Savino',
  ROLE: 'Operations Manager',
  PHOTO: <JoePhoto />,
};

const KATHERINE :TeamMemberType = {
  COFOUNDER: true,
  NAME: 'Katherine Bernstein',
  ROLE: 'Software Engineer',
  PHOTO: <KatherinePhoto />,
};

const KIM :TeamMemberType = {
  NAME: 'Kim Engie',
  ROLE: 'Data Science Manager',
  PHOTO: <KimPhoto />,
};

const MANDY :TeamMemberType = {
  NAME: 'Mandy Schow',
  ROLE: ACCOUNT,
  PHOTO: <MandyPhoto />,
};

const MATTHEW :TeamMemberType = {
  FOUNDER: true,
  NAME: 'Matthew Tamayo-Rios',
  ROLE: 'Chief Executive Officer',
  PHOTO: <MatthewPhoto />,
};

const SHIREEN :TeamMemberType = {
  NAME: 'Shireen Aziz',
  ROLE: DESIGNER,
  PHOTO: <ShireenPhoto />,
};

const SOLOMON :TeamMemberType = {
  NAME: 'Solomon Tang',
  ROLE: FRONTEND,
  PHOTO: <SolomonPhoto />,
};

const TODD :TeamMemberType = {
  NAME: 'Todd Bergman',
  ROLE: FRONTEND,
  PHOTO: <ToddPhoto />,
};

const TEAM_MEMBERS :TeamMemberType[] = [
  MATTHEW,
  HRISTO,
  KATHERINE,
  KIM,
  BRANDON,
  JOE,
  SOLOMON,
  TODD,
  GIULIA,
  BLAKE,
  DREW,
  SHIREEN,
  MANDY,
];

// const MATTHEW_BOARD :TeamMemberType = {
//   LI: 'https://www.linkedin.com/in/matthewtrios',
//   NAME: 'Matthew Tamayo-Rios',
//   ROLE: 'Chief Executive Officer',
//   PHOTO: <MatthewPhoto />,
// };
//
// const BOARD_MEMBERS :TeamMemberType[] = [
//   MATTHEW_BOARD,
// ];

export {
  // BOARD_MEMBERS,
  TEAM_MEMBERS,
};
