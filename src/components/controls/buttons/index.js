/*
 * @flow
 */

import styled from 'styled-components';

import LearnMoreButton from './LearnMoreButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';

const ScheduleCallButton = styled(SolidButton).attrs(({ children }) => ({
  children: children || 'Schedule a call',
}))``;

export {
  LearnMoreButton,
  OutlineButton,
  ScheduleCallButton,
  SolidButton,
};
