/*
 * @flow
 */

const ROOT :'/' = '/';

const ABOUT :'/about' = '/about';
const GOVERNMENT :'/government' = '/government';
const PLATFORM :'/platform' = '/platform';
const PRIVACY_POLICY :'/privacy' = '/privacy';
const PRODUCTS :'/products' = '/products';
const RESEARCH :'/research' = '/research';
const TERMS_OF_SERVICE :'/terms-of-service' = '/terms-of-service';
const WORKING_WITH_US :'/working-with-us' = '/working-with-us';

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PLATFORM_GOVERNMENT :'/platform/government' = `${PLATFORM}${GOVERNMENT}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PLATFORM_RESEARCH :'/platform/research' = `${PLATFORM}${RESEARCH}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_ASTROMETRICS :'/products/astrometrics' = `${PRODUCTS}/astrometrics`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_CARE :'/products/care' = `${PRODUCTS}/care`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_CHRONICLE :'/products/chronicle' = `${PRODUCTS}/chronicle`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_CWP :'/products/community-work-program' = `${PRODUCTS}/community-work-program`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_PCM :'/products/pretrial-case-management' = `${PRODUCTS}/pretrial-case-management`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_RESEARCH_HUB :'/products/research-hub' = `${PRODUCTS}/research-hub`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const PRODUCTS_STEPPING_UP :'/products/stepping-up' = `${PRODUCTS}/stepping-up`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const WORKING_WITH_US_GOVERNMENT :'/working-with-us/government' = `${WORKING_WITH_US}${GOVERNMENT}`;

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
const WORKING_WITH_US_RESEARCH :'/working-with-us/research' = `${WORKING_WITH_US}${RESEARCH}`;

export {
  ABOUT,
  GOVERNMENT,
  PLATFORM,
  PLATFORM_GOVERNMENT,
  PLATFORM_RESEARCH,
  PRIVACY_POLICY,
  PRODUCTS_ASTROMETRICS,
  PRODUCTS_CARE,
  PRODUCTS_CHRONICLE,
  PRODUCTS_CWP,
  PRODUCTS_PCM,
  PRODUCTS_RESEARCH_HUB,
  PRODUCTS_STEPPING_UP,
  RESEARCH,
  ROOT,
  TERMS_OF_SERVICE,
  WORKING_WITH_US_GOVERNMENT,
  WORKING_WITH_US_RESEARCH,
};
