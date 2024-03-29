/*
 * @flow
 */

import React from 'react';

import {
  AlfoncePhoto,
  BlakePhoto,
  BrandonPhoto,
  GiuliaPhoto,
  HristoPhoto,
  JoePhoto,
  KimPhoto,
  MandyPhoto,
  MatthewPhoto,
  RekaPhoto,
  SolomonPhoto,
  ToddPhoto,
  YuePhoto,
} from '../../../assets/team';

// repeat roles
const ACCOUNT :string = 'Account Executive';
const DATA_SCIENTIST :string = 'Data Scientist';
// const DESIGNER :string = 'Product Designer';
const SOFTWARE_ENGINEER :string = 'Software Engineer';

const ALFONCE :TeamMemberType = {
  NAME: 'Alfonce Nzioka',
  ROLE: SOFTWARE_ENGINEER,
  PHOTO: <AlfoncePhoto />,
};

const BLAKE :TeamMemberType = {
  NAME: 'Blake Freitas',
  ROLE: 'Product Management Lead',
  PHOTO: <BlakePhoto />,
};

const BRANDON :TeamMemberType = {
  NAME: 'Brandon Wright',
  ROLE: 'Product Manager',
  PHOTO: <BrandonPhoto />,
};

const GIULIA :TeamMemberType = {
  NAME: 'Giulia Campana',
  ROLE: SOFTWARE_ENGINEER,
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

const REKA :TeamMemberType = {
  NAME: 'Réka Halmai',
  ROLE: 'Data Scientist Intern',
  PHOTO: <RekaPhoto />,
};

const SOLOMON :TeamMemberType = {
  NAME: 'Solomon Tang',
  ROLE: SOFTWARE_ENGINEER,
  PHOTO: <SolomonPhoto />,
};

const TODD :TeamMemberType = {
  NAME: 'Todd Bergman',
  ROLE: SOFTWARE_ENGINEER,
  PHOTO: <ToddPhoto />,
};

const YUE :TeamMemberType = {
  NAME: 'Yue Li',
  ROLE: DATA_SCIENTIST,
  PHOTO: <YuePhoto />,
};

const TEAM_MEMBERS :TeamMemberType[] = [
  MATTHEW,
  HRISTO,
  KIM,
  BRANDON,
  JOE,
  SOLOMON,
  TODD,
  GIULIA,
  BLAKE,
  MANDY,
  ALFONCE,
  YUE,
  REKA,
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
