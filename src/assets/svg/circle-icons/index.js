/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import AnonymousSVG from './anonymous.svg';
import BarsSVG from './bars.svg';
import CheckSVG from './check.svg';
import CloudSVG from './cloud.svg';
import CloudSecureSVG from './cloud-secure.svg';
import DBSyncSVG from './database-sync.svg';
import DotGridSVG from './dot-grid.svg';
import KeySVG from './key.svg';
import LinkSVG from './link.svg';
import LockSVG from './lock.svg';
import LogsSVG from './logs.svg';
import MergeSVG from './merge.svg';
import PlatformStackSVG from './platform-stack.svg';
import PointerSVG from './pointer.svg';
import SearchSVG from './search.svg';
import SelectSVG from './select.svg';
import SyncSVG from './sync.svg';
import User1SVG from './user-1.svg';
import Users2SVG from './users-2.svg';
import Users2SolidSVG from './users-2-solid.svg';

type Props = {
  className ?:string;
  width ?:string;
};

const AnonymousCircleIcon = ({ className = '', width = 64 } :Props) => (
  <img alt="anonymous-circle-icon" className={className} src={AnonymousSVG} width={width} />
);

const BarsCircleIcon = ({ className = '', width = 64 } :Props) => (
  <img alt="bars-circle-icon" className={className} src={BarsSVG} width={width} />
);

const CheckCircleIcon = ({ className = '', width = 64 } :Props) => (
  <img alt="check-circle-icon" className={className} src={CheckSVG} width={width} />
);

const CloudCircleIcon = ({ className = '', width = 64 } :Props) => (
  <img alt="cloud-circle-icon" className={className} src={CloudSVG} width={width} />
);

const CloudSecureCircleIcon = ({ className = '', width = 64 } :Props) => (
  <img alt="cloud-secure-circle-icon" className={className} src={CloudSecureSVG} width={width} />
);

const DBSyncCircleIcon = ({ className = '', width } :Props) => (
  <img alt="database-sync-circle-icon" className={className} src={DBSyncSVG} width={width} />
);

const DotGridCircleIcon = ({ className = '', width } :Props) => (
  <img alt="dot-grid-circle-icon" className={className} src={DotGridSVG} width={width} />
);

const KeyCircleIcon = ({ className = '', width } :Props) => (
  <img alt="key-circle-icon" className={className} src={KeySVG} width={width} />
);

const LinkCircleIcon = ({ className = '', width } :Props) => (
  <img alt="link-circle-icon" className={className} src={LinkSVG} width={width} />
);

const LockCircleIcon = ({ className = '', width } :Props) => (
  <img alt="lock-circle-icon" className={className} src={LockSVG} width={width} />
);

const LogsCircleIcon = ({ className = '', width } :Props) => (
  <img alt="logs-circle-icon" className={className} src={LogsSVG} width={width} />
);

const MergeArrowCircleIcon = ({ className = '', width } :Props) => (
  <img alt="merge-arrow-circle-icon" className={className} src={MergeSVG} width={width} />
);

const PlatformStackCircleIcon = ({ className = '', width } :Props) => (
  <img alt="platform-stack-circle-icon" className={className} src={PlatformStackSVG} width={width} />
);

const PointerCircleIcon = ({ className = '', width } :Props) => (
  <img alt="pointer-circle-icon" className={className} src={PointerSVG} width={width} />
);

const SearchCircleIcon = ({ className = '', width } :Props) => (
  <img alt="search-circle-icon" className={className} src={SearchSVG} width={width} />
);

const SelectCircleIcon = ({ className = '', width } :Props) => (
  <img alt="select-circle-icon" className={className} src={SelectSVG} width={width} />
);

const SyncCircleIcon = ({ className = '', width } :Props) => (
  <img alt="sync-circle-icon" className={className} src={SyncSVG} width={width} />
);

const UserCircleIcon = ({ className = '', width } :Props) => (
  <img alt="user-1-circle-icon" className={className} src={User1SVG} width={width} />
);

const Users2CircleIcon = ({ className = '', width } :Props) => (
  <img alt="users-2-circle-icon" className={className} src={Users2SVG} width={width} />
);

const Users2SolidCircleIcon = ({ className = '', width } :Props) => (
  <img alt="users-2-solid-circle-icon" className={className} src={Users2SolidSVG} width={width} />
);

export {
  AnonymousCircleIcon,
  BarsCircleIcon,
  CheckCircleIcon,
  CloudCircleIcon,
  CloudSecureCircleIcon,
  DBSyncCircleIcon,
  DotGridCircleIcon,
  KeyCircleIcon,
  LinkCircleIcon,
  LockCircleIcon,
  LogsCircleIcon,
  MergeArrowCircleIcon,
  PlatformStackCircleIcon,
  PointerCircleIcon,
  SearchCircleIcon,
  SelectCircleIcon,
  SyncCircleIcon,
  UserCircleIcon,
  Users2CircleIcon,
  Users2SolidCircleIcon,
};
