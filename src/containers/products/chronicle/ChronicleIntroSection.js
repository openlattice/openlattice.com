/*
 * @flow
 */

import React from 'react';

import { ProductIntroSection } from '../components';

import { ChronicleProductShot } from '../../../assets/images/chronicle';
import { OpenLatticeIcon } from '../../../assets/svg/icons';

const INTRO_HEADER = `Manage participants, data
collection, and compliance for
your human-centered research study`;

const INTRO_SUBHEADER = 'Chronicle gives your research team new options to run multiple phases of your study.'
  + ' Chronicle includes an optional participant mobile app, a flexible dashboard to see and manage participation'
  + ' and communication with participants, and an integration with ResearchHub, where all data storage is secure'
  + ' and HIPAA and GDPR compliant.';

const ChronicleIntroSection = () => (
  <ProductIntroSection
      introHeader={INTRO_HEADER}
      introSubHeader={INTRO_SUBHEADER}
      productIcon={OpenLatticeIcon}
      productName="Chronicle"
      productShot={ChronicleProductShot} />
);

export default ChronicleIntroSection;
