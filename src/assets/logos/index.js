/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import CFRLogoPNG from './42cfrp2.png';
import CJISLogoPNG from './cjis.png';
import FERPALogoPNG from './ferpa.png';
import HIPAALogoPNG from './hipaa.png';

type Props = {
  className ?:string;
  width ?:string;
};

const CFRLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="cfr-logo" className={className} src={CFRLogoPNG} width={width} />
);

const CJISLogo = ({ className = '', width = 64 } :Props) => (
  <img alt="cjis-logo" className={className} src={CJISLogoPNG} width={width} />
);

const FERPALogo = ({ className = '', width = 64 } :Props) => (
  <img alt="ferpa-logo" className={className} src={FERPALogoPNG} width={width} />
);

const HIPAALogo = ({ className = '', width = 64 } :Props) => (
  <img alt="hipaa-logo" className={className} src={HIPAALogoPNG} width={width} />
);

export {
  CFRLogo,
  CJISLogo,
  FERPALogo,
  HIPAALogo,
};
