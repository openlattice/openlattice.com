/*
 * @flow
 */

/* eslint-disable react/require-default-props */

import React from 'react';

import OurCustomersMapSVG from './our-customers-map.svg';
import PlatformLayersSVG from './platform-layers.svg';

type Props = {
  className ?:string;
  width ?:string;
};

const OurCustomersMapGraphic = ({ className = '', width } :Props) => (
  <img alt="our-customers-map-graphic" className={className} src={OurCustomersMapSVG} width={width} />
);

const PlatformLayersGraphic = ({ className = '', width } :Props) => (
  <img alt="platform-layers" className={className} src={PlatformLayersSVG} width={width} />
);

export {
  OurCustomersMapGraphic,
  PlatformLayersGraphic,
};
