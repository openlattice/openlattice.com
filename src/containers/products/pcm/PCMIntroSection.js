/*
 * @flow
 */

import React from 'react';

import { PCMProductShot } from '../../../assets/images/pcm';
import { PCMIcon } from '../../../assets/svg/icons';
import { ProductIntroSection } from '../components';

const INTRO_HEADER = `Reduce time spent on risk
assessments while
measuring their impact`;

const INTRO_SUBHEADER = `Autofill risk assessments and focus on managing supervision and
tracking outcomes to measure effectiveness.`;

const PCMIntroSection = () => (
  <ProductIntroSection
      introHeader={INTRO_HEADER}
      introSubHeader={INTRO_SUBHEADER}
      productIcon={PCMIcon}
      productName="Pretrial Case Management"
      productShot={PCMProductShot} />
);

export default PCMIntroSection;
