// @flow

import Andrea from '../../assets/team/andrea.png';
import Andy from '../../assets/team/andy.png';
import Blake from '../../assets/team/blake.png';
import Brandon from '../../assets/team/brandon.png';
import David from '../../assets/team/david.png';
import Drew from '../../assets/team/drew.png';
import Giulia from '../../assets/team/giulia.png';
import Giuliana from '../../assets/team/giuliana.png';
import Hristo from '../../assets/team/hristo.png';
import Jason from '../../assets/team/jason.png';
import Joe from '../../assets/team/joe.png';
import Joke from '../../assets/team/joke.png';
import Julia from '../../assets/team/julia.png';
import Katherine from '../../assets/team/katherine.png';
import Kim from '../../assets/team/kim.png';
import Mandy from '../../assets/team/mandy.png';
import Matthew from '../../assets/team/matthew.png';
import Mollie from '../../assets/team/mollie.png';
import Nicholas from '../../assets/team/nicholas.png';
import Patrick from '../../assets/team/patrick.png';
import Paul from '../../assets/team/paul.png';
import Piper from '../../assets/team/piper.png';
import Ron from '../../assets/team/ron.png';
import Ryan from '../../assets/team/ryan.png';
import Shireen from '../../assets/team/shireen.png';
import Solomon from '../../assets/team/solomon.png';
import Todd from '../../assets/team/todd.png';

// repeat roles
const ACCOUNT :string = 'Account Executive';
const DATA_ENGINEER :string = 'Data Engineer';
const DATA_SCIENTIST :string = 'Data Scientist';
const DESIGNER :string = 'Product Designer';
const FRONTEND :string = 'Frontend Software Engineer';

const ANDREA :Object = {
  NAME: 'Andrea Fowles',
  ROLE: ACCOUNT,
  PHOTO: Andrea,
};

const ANDY :Object = {
  NAME: 'Andy Doyle',
  ROLE: ACCOUNT,
  PHOTO: Andy,
};

const BLAKE :Object = {
  NAME: 'Blake Freitas',
  ROLE: 'Customer Success Engineer',
  PHOTO: Blake,
};

const BRANDON :Object = {
  NAME: 'Brandon Wright',
  ROLE: 'Customer Success Manager',
  PHOTO: Brandon,
};

const DAVID :Object = {
  NAME: 'David Terrell',
  ROLE: 'Senior Staff Software Engineer',
  PHOTO: David,
};

const DREW :Object = {
  NAME: 'Drew Bailey',
  ROLE: 'Senior Software Engineer',
  PHOTO: Drew,
};

const GIULIA :Object = {
  NAME: 'Giulia Campana',
  ROLE: FRONTEND,
  PHOTO: Giulia,
};

const GIULIANA :Object = {
  NAME: 'Giuliana Anglin',
  ROLE: 'Senior Marketing Manager',
  PHOTO: Giuliana,
};

const HRISTO :Object = {
  NAME: 'Hristo Oskov',
  ROLE: 'Engineer',
  PHOTO: Hristo,
};

const JASON :Object = {
  NAME: 'Jason Twohy',
  ROLE: 'Data Integration',
  PHOTO: Jason,
};

const JOE :Object = {
  NAME: 'Joe Savino',
  ROLE: 'Operations Manager',
  PHOTO: Joe,
};

const JOKE :Object = {
  NAME: 'Joke Durnez',
  ROLE: 'Machine Learning Engineer',
  PHOTO: Joke,
};

const JULIA :Object = {
  NAME: 'Julia Joosz',
  ROLE: DATA_ENGINEER,
  PHOTO: Julia,
};

const KATHERINE :Object = {
  NAME: 'Katherine Bernstein',
  ROLE: 'Software Engineer',
  PHOTO: Katherine,
};

const KIM :Object = {
  NAME: 'Kim Engie',
  ROLE: 'Data Science Manager',
  PHOTO: Kim,
};

const MANDY :Object = {
  NAME: 'Mandy Schow',
  ROLE: ACCOUNT,
  PHOTO: Mandy,
};

const MATTHEW :Object = {
  NAME: 'Matthew Tamayo-Rios',
  ROLE: 'Chief Executive Officer',
  PHOTO: Matthew,
};

const MATTHEW_BOARD :Object = {
  NAME: 'Matthew Tamayo-Rios',
  ROLE: 'Chief Executive Officer',
  PHOTO: Matthew,
};

const MOLLIE :Object = {
  NAME: 'Mollie Epstein',
  ROLE: DATA_SCIENTIST,
  PHOTO: Mollie,
};

const NICHOLAS :Object = {
  NAME: 'Nicholas Hobbs',
  ROLE: DATA_SCIENTIST,
  PHOTO: Nicholas,
};

const PATRICK :Object = {
  NAME: 'Patrick Grady',
  ROLE: 'Impetus Advisors',
  PHOTO: Patrick,
};

const PAUL :Object = {
  NAME: 'Paul Kim',
  ROLE: DESIGNER,
  PHOTO: Paul,
};

const PIPER :Object = {
  NAME: 'Piper Keyes',
  ROLE: DATA_ENGINEER,
  PHOTO: Piper,
};

const RON :Object = {
  NAME: 'Ron Bouganim',
  ROLE: 'Govtech Fund',
  PHOTO: Ron,
};

const RYAN :Object = {
  NAME: 'Ryan Weese',
  ROLE: ACCOUNT,
  PHOTO: Ryan,
};

const SHIREEN :Object = {
  NAME: 'Shireen Aziz',
  ROLE: DESIGNER,
  PHOTO: Shireen,
};

const SOLOMON :Object = {
  NAME: 'Solomon Tang',
  ROLE: FRONTEND,
  PHOTO: Solomon,
};

const TODD :Object = {
  NAME: 'Todd Bergman',
  ROLE: FRONTEND,
  PHOTO: Todd,
};


const TEAM_MEMBERS :Object[] = [
  MATTHEW,
  HRISTO,
  KATHERINE,
  KIM,
  BRANDON,
  JOE,
  GIULIANA,
  DAVID,
  MOLLIE,
  PAUL,
  JOKE,
  SOLOMON,
  TODD,
  PIPER,
  JULIA,
  GIULIA,
  JASON,
  BLAKE,
  DREW,
  SHIREEN,
  ANDY,
  NICHOLAS,
  RYAN,
  ANDREA,
  MANDY,
];

const BOARD_MEMBERS :Object[] = [
  MATTHEW_BOARD,
  PATRICK,
  RON,
];

/* eslint-disable import/prefer-default-export */
export {
  BOARD_MEMBERS,
  TEAM_MEMBERS,
};
