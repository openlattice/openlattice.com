/*
 * @flow
 */

import styled from 'styled-components';

import LearnMoreButton from './LearnMoreButton';
import OutlineButton from './OutlineButton';
import SolidButton from './SolidButton';

const ContactUsButton = styled(OutlineButton).attrs({
  children: 'Contact us',
  color: 'primary',
})``;

const ScheduleCallButton = styled(SolidButton).attrs(({ children }) => ({
  children: children || 'Schedule a call',
}))``;

export {
  ContactUsButton,
  LearnMoreButton,
  OutlineButton,
  ScheduleCallButton,
  SolidButton,
};
