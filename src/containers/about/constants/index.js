/*
 * @flow
 */

import Andrea from '../../../assets/team/andrea.png';
import Blake from '../../../assets/team/blake.png';
import Brandon from '../../../assets/team/brandon.png';
import David from '../../../assets/team/david.png';
import Drew from '../../../assets/team/drew.png';
import Giulia from '../../../assets/team/giulia.png';
import Hristo from '../../../assets/team/hristo.png';
import Jason from '../../../assets/team/jason.png';
import Joe from '../../../assets/team/joe.png';
import Joke from '../../../assets/team/joke.png';
import Katherine from '../../../assets/team/katherine.png';
import Kim from '../../../assets/team/kim.png';
import Lynn from '../../../assets/team/lynn.png';
import Mandy from '../../../assets/team/mandy.png';
import Matthew from '../../../assets/team/matthew.png';
import Mollie from '../../../assets/team/mollie.png';
import Nicholas from '../../../assets/team/nicholas.png';
import Shireen from '../../../assets/team/shireen.png';
import Solomon from '../../../assets/team/solomon.png';
import Todd from '../../../assets/team/todd.png';

// repeat roles
const ACCOUNT :string = 'Account Executive';
const DATA_SCIENTIST :string = 'Data Scientist';
const DESIGNER :string = 'Product Designer';
const FRONTEND :string = 'Frontend Software Engineer';

const ANDREA = {
  NAME: 'Andrea Fowles',
  ROLE: ACCOUNT,
  PHOTO: Andrea,
};

const BLAKE = {
  NAME: 'Blake Freitas',
  ROLE: 'Customer Success Engineer',
  PHOTO: Blake,
};

const BRANDON = {
  NAME: 'Brandon Wright',
  ROLE: 'Customer Success Manager',
  PHOTO: Brandon,
};

const DAVID = {
  NAME: 'David Terrell',
  ROLE: 'Senior Staff Software Engineer',
  PHOTO: David,
};

const DREW = {
  NAME: 'Drew Bailey',
  ROLE: 'Senior Software Engineer',
  PHOTO: Drew,
};

const GIULIA = {
  NAME: 'Giulia Campana',
  ROLE: FRONTEND,
  PHOTO: Giulia,
};

const HRISTO = {
  NAME: 'Hristo Oskov',
  ROLE: 'Engineer',
  PHOTO: Hristo,
};

const JASON = {
  NAME: 'Jason Twohy',
  ROLE: 'Data Integration',
  PHOTO: Jason,
};

const JOE = {
  NAME: 'Joe Savino',
  ROLE: 'Operations Manager',
  PHOTO: Joe,
};

const JOKE = {
  NAME: 'Joke Durnez',
  ROLE: 'Machine Learning Engineer',
  PHOTO: Joke,
};

const KATHERINE = {
  NAME: 'Katherine Bernstein',
  ROLE: 'Software Engineer',
  PHOTO: Katherine,
};

const KIM = {
  NAME: 'Kim Engie',
  ROLE: 'Data Science Manager',
  PHOTO: Kim,
};

const LYNN = {
  LI: 'https://www.linkedin.com/in/lynn-overmann-325bb432',
  NAME: 'Lynn Overmann',
  ROLE: 'Opportunity Insights',
  PHOTO: Lynn,
};

const MANDY = {
  NAME: 'Mandy Schow',
  ROLE: ACCOUNT,
  PHOTO: Mandy,
};

const MATTHEW = {
  NAME: 'Matthew Tamayo-Rios',
  ROLE: 'Chief Executive Officer',
  PHOTO: Matthew,
};

const MATTHEW_BOARD = {
  LI: 'https://www.linkedin.com/in/matthewtrios',
  NAME: 'Matthew Tamayo-Rios',
  ROLE: 'Chief Executive Officer',
  PHOTO: Matthew,
};

const MOLLIE = {
  NAME: 'Mollie Epstein',
  ROLE: DATA_SCIENTIST,
  PHOTO: Mollie,
};

const NICHOLAS = {
  NAME: 'Nicholas Hobbs',
  ROLE: DATA_SCIENTIST,
  PHOTO: Nicholas,
};

const SHIREEN = {
  NAME: 'Shireen Aziz',
  ROLE: DESIGNER,
  PHOTO: Shireen,
};

const SOLOMON = {
  NAME: 'Solomon Tang',
  ROLE: FRONTEND,
  PHOTO: Solomon,
};

const TODD = {
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
  DAVID,
  MOLLIE,
  JOKE,
  SOLOMON,
  TODD,
  GIULIA,
  JASON,
  BLAKE,
  DREW,
  SHIREEN,
  NICHOLAS,
  ANDREA,
  MANDY,
];

const BOARD_MEMBERS :Object[] = [
  MATTHEW_BOARD,
  LYNN,
];

export {
  BOARD_MEMBERS,
  TEAM_MEMBERS,
};
