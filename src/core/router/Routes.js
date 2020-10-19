/*
 * @flow
 */

export const ABOUT :string = '/about';
export const PRODUCTS :string = '/products';

export const CARE :string = `${PRODUCTS}/care`;
export const PCM :string = `${PRODUCTS}/pretrialcasemanagement`;
export const RESEARCH_HUB :string = `${PRODUCTS}/researchhub`;
export const CHRONICLE :string = `${PRODUCTS}/chronicle`;

export const TERMS_OF_SERVICE :string = '/termsofservice';
export const PRIVACY_POLICY :string = '/privacy';

const ROOT :'/' = '/';
const GOVERNMENT :'/government' = '/government';
const RESEARCH :'/research' = '/research';
const PLATFORM :'/platform' = '/platform';
const WORKING_WITH_US :'/working-with-us' = '/working-with-us';

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PLATFORM_GOVERNMENT :'/platform/government' = `${PLATFORM}${GOVERNMENT}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PLATFORM_RESEARCH :'/platform/research' = `${PLATFORM}${RESEARCH}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const WORKING_WITH_US_GOVERNMENT :'/working-with-us/government' = `${WORKING_WITH_US}${GOVERNMENT}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const WORKING_WITH_US_RESEARCH :'/working-with-us/research' = `${WORKING_WITH_US}${RESEARCH}`;

export {
  GOVERNMENT,
  PLATFORM,
  PLATFORM_GOVERNMENT,
  PLATFORM_RESEARCH,
  RESEARCH,
  ROOT,
  WORKING_WITH_US,
  WORKING_WITH_US_GOVERNMENT,
  WORKING_WITH_US_RESEARCH,
};
