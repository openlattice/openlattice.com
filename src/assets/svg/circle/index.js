/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import BarsSVG from './bars.svg';
import MergeSVG from './merge.svg';
import UserSVG from './user.svg';

type Props = {
  className ?:string;
};

const BarsCircleIcon = ({ className = '' } :Props) => (
  <img alt="user-circle-icon" className={className} src={BarsSVG} />
);

const MergeArrowCircleIcon = ({ className = '' } :Props) => (
  <img alt="user-circle-icon" className={className} src={MergeSVG} />
);

const UserCircleIcon = ({ className = '' } :Props) => (
  <img alt="user-circle-icon" className={className} src={UserSVG} />
);

export {
  BarsCircleIcon,
  MergeArrowCircleIcon,
  UserCircleIcon,
};
