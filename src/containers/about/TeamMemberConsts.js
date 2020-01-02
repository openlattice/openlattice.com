// @flow

import Blake from '../../assets/team/blake.png';
import Brandon from '../../assets/team/brandon.png';
import Drew from '../../assets/team/drew.png';
import Giulia from '../../assets/team/giulia.png';
import Giuliana from '../../assets/team/giuliana.png';
import Hristo from '../../assets/team/hristo.png';
import Jason from '../../assets/team/jason.png';
import Joe from '../../assets/team/joe.png';
import Joke from '../../assets/team/joke.png';
import Julia from '../../assets/team/julia.png';
import Kim from '../../assets/team/kim.png';
import Matthew from '../../assets/team/matthew.png';
import Mollie from '../../assets/team/mollie.png';
import Paul from '../../assets/team/paul.png';
import Piper from '../../assets/team/piper.png';
import Ryan from '../../assets/team/ryan.png';
import Shireen from '../../assets/team/shireen.png';
import Solomon from '../../assets/team/solomon.png';
import Todd from '../../assets/team/todd.png';

const TEAM_PHOTOS :Object = {
  ANDY: '',
  BLAKE: Blake,
  BRANDON: Brandon,
  DAVID: '',
  DREW: Drew,
  GIULIA: Giulia,
  GIULIANA: Giuliana,
  HRISTO: Hristo,
  JASON: Jason,
  JOE: Joe,
  JOKE: Joke,
  JULIA: Julia,
  KATHERINE: '',
  KIM: Kim,
  MATTHEW: Matthew,
  MOLLIE: Mollie,
  NICHOLAS: '',
  PAUL: Paul,
  PIPER: Piper,
  RYAN: Ryan,
  SHIREEN: Shireen,
  SOLOMON: Solomon,
  TAYLOR: '',
  TODD: Todd,
};

const TEAM_NAMES :Object = {
  ANDY: 'Andy Doyle',
  BLAKE: 'Blake Freitas',
  BRANDON: 'Brandon Wright',
  DAVID: 'David Terrell',
  DREW: 'Drew Bailey',
  GIULIA: 'Giulia Campana',
  GIULIANA: 'Giuliana Anglin',
  HRISTO: 'Hristo Oskov',
  JASON: 'Jason Twohy',
  JOE: 'Joe Savino',
  JOKE: 'Joke Durnez',
  JULIA: 'Julia Joosz',
  KATHERINE: 'Katherine Bernstein',
  KIM: 'Kim Engie',
  MATTHEW: 'Matthew Tamayo-Rios',
  MOLLIE: 'Mollie Epstein',
  NICHOLAS: 'Nicholas Hobbs',
  PAUL: 'Paul Kim',
  PIPER: 'Piper Keyes',
  RYAN: 'Ryan Weese',
  SHIREEN: 'Shireen Aziz',
  SOLOMON: 'Solomon Tang',
  TAYLOR: 'Taylor Parker',
  TODD: 'Todd Bergman',
};

// repeat roles
const ACCOUNT :string = 'Account Executive';
const DATA_ENGINEER :string = 'Data Engineer';
const DATA_SCIENTIST :string = 'Data Scientist';
const DESIGNER :string = 'Product Designer';
const FRONTEND :string = 'Frontend Software Engineer';

const TEAM_ROLES :Object = {
  ANDY: ACCOUNT,
  BLAKE: 'Customer Success Engineer',
  BRANDON: 'Customer Success Manager',
  DAVID: 'Senior Staff Software Engineer',
  DREW: 'Senior Software Engineer',
  GIULIA: FRONTEND,
  GIULIANA: 'Senior Marketing Manager',
  HRISTO: 'Co-founder & \nApplication Products Lead',
  JASON: 'Data Integration',
  JOE: 'Operations Manager',
  JOKE: 'Machine Learning Engineer',
  JULIA: DATA_ENGINEER,
  KATHERINE: 'Co-founder & \nSoftware Engineer',
  KIM: 'Data Science Manager',
  MATTHEW: 'Founder & \nChief Executive Officer',
  MOLLIE: DATA_SCIENTIST,
  NICHOLAS: DATA_SCIENTIST,
  PAUL: DESIGNER,
  PIPER: DATA_ENGINEER,
  RYAN: ACCOUNT,
  SHIREEN: DESIGNER,
  SOLOMON: FRONTEND,
  TAYLOR: ACCOUNT,
  TODD: FRONTEND,
};

export {
  TEAM_NAMES,
  TEAM_PHOTOS,
  TEAM_ROLES
};
