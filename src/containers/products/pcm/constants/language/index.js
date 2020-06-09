/*
 * @flow
 */

import React from 'react';

import { PurpleLink } from '../../../../../components';
import { COURT_REMINDERS_REPORT_LINK, LJAF_REPORT_LINK } from '../../../../../utils/constants/links';

const AUTOFILL_HEADER = 'Autofill risk assessments';
const AUTOFILL_SUBHEADER = 'Integrate your Records Management System so you do not have to manually look up defendant'
  + ' case history to complete risk assessments.';

const MANAGE_RISK_HEADER = 'Manage risk in your community';
const MANAGE_RISK_SUBHEADER = (
  <>
    {'Reducing jail population safely and objectively can reduce cost to taxpayers while allowing defendants who have'}
    {' been deemed low-risk to continue to work and live in the community. Furthermore, a '}
    <PurpleLink href={LJAF_REPORT_LINK} target="_blank">2013 report</PurpleLink>
    {' found low-risk defendants held 2-3 days on pretrial detention were roughly 40% more likely to be arrested on'}
    {' new criminal activity after release than those held less than 24 hours.'}
  </>
);

const MANAGE_SUPERVISION_HEADER = 'Manage supervision';
const MANAGE_SUPERVISION_SUBHEADER = 'Send automated court reminders to reduce Failure to Appear rates, and manage'
  + ' voice verification check-in appointments, and track community service completion.';

const SUPERVISION_TOUCHPOINTS_HEADER = 'Supervision touchpoints';
const SUPERVISION_TOUCHPOINTS_SUBHEADER = (
  <>
    {'Failures to appear can result in additional jurisdiction resources spent executing warrants, and potential'}
    {' avoidable jail time for defendants. Knowing the '}
    <PurpleLink href={COURT_REMINDERS_REPORT_LINK} target="_blank">
      positive impact court reminders can have
    </PurpleLink>
    {', OpenLattice developed both an automated Court Reminder system and an automated Voice Verification Check-In'}
    {' system. This allows jurisdictions to maximize benefit, while maintaining minimal labor requirements.'}
  </>
);

const TRACK_OUTCOMES_HEADER = 'Track outcomes';
const TRACK_OUTCOMES_SUBHEADER = 'Track hearing outcomes to better understand how judges and defendants interact with'
  + ' risk assessments and release requirements broadly in your jurisdiction.';

export {
  AUTOFILL_HEADER,
  AUTOFILL_SUBHEADER,
  MANAGE_RISK_HEADER,
  MANAGE_RISK_SUBHEADER,
  MANAGE_SUPERVISION_HEADER,
  MANAGE_SUPERVISION_SUBHEADER,
  SUPERVISION_TOUCHPOINTS_HEADER,
  SUPERVISION_TOUCHPOINTS_SUBHEADER,
  TRACK_OUTCOMES_HEADER,
  TRACK_OUTCOMES_SUBHEADER,
};
