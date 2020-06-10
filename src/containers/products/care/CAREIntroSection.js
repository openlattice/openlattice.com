/*
 * @flow
 */

import React from 'react';

import { CAREProductShot } from '../../../assets/images/care';
import { CAREIcon } from '../../../assets/svg/icons';
import { ProductIntroSection } from '../components';

const INTRO_HEADER = `Facilitate safe and effective
interactions between patrol
officers and individuals`;

const INTRO_SUBHEADER = `A mobile-friendly, real-time data platform that enables
patrol officers, dispatchers, and their community
partners to better assist the vulnerable populations.`;

const CAREIntroSection = () => (
  <ProductIntroSection
      introHeader={INTRO_HEADER}
      introSubHeader={INTRO_SUBHEADER}
      productIcon={CAREIcon}
      productName="CARE"
      productShot={CAREProductShot} />
);

export default CAREIntroSection;
