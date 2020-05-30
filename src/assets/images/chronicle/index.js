/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import ChronicleAndroidAppPNG from './chronicle-android-app.png';
import ChronicleParticipantsTablePNG from './chronicle-participants-table.png';
import ChronicleStudyDetailsPNG from './chronicle-study-details.png';
import MetaTablePNG from './meta-table.png';

type Props = {
  className ?:string;
};

// const ChronicleAndroidApp = ({ className = '' } :Props) => (
//   <img alt="chronicle-android-app-screenshot" className={className} src={ChronicleAndroidAppPNG} />
// );

const ChronicleParticipantsTableImg = ({ className = '' } :Props) => (
  <img alt="chronicle-participants-table-screenshot" className={className} src={ChronicleParticipantsTablePNG} />
);

// const ChronicleStudyDetails = ({ className = '' } :Props) => (
//   <img alt="chronicle-study-details-screenshot" className={className} src={ChronicleStudyDetailsPNG} />
// );

// const MetaTable = ({ className = '' } :Props) => (
//   <img alt="chronicle-study-details-screenshot" className={className} src={MetaTablePNG} />
// );

export {
  // ChronicleAndroidApp,
  ChronicleAndroidAppPNG,
  ChronicleParticipantsTableImg,
  ChronicleParticipantsTablePNG,
  // ChronicleStudyDetails,
  ChronicleStudyDetailsPNG,
  // MetaTable,
  MetaTablePNG,
};
