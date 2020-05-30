/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import BarsSVG from './bars.svg';
import MergeSVG from './merge.svg';
import User1SVG from './user-1.svg';

type Props = {
  className ?:string;
};

const BarsCircleIcon = ({ className = '' } :Props) => (
  <img alt="bars-circle-icon" className={className} src={BarsSVG} />
);

const MergeArrowCircleIcon = ({ className = '' } :Props) => (
  <img alt="merge-arrow-circle-icon" className={className} src={MergeSVG} />
);

const UserCircleIcon = ({ className = '' } :Props) => (
  <img alt="user-1-circle-icon" className={className} src={User1SVG} />
);

export {
  BarsCircleIcon,
  MergeArrowCircleIcon,
  UserCircleIcon,
};
