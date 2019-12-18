// @flow
import styled from 'styled-components';

import { NEUTRALS, PURPLES } from '../../../core/style/Colors';

const ScheduleACallWhite = styled.a`
  border-radius: 23px;
  border: 1px solid ${PURPLES.PP08};
  color: ${PURPLES.PP08};
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 18px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

const ScheduleACallPurple = styled(ScheduleACallWhite)`
  align-self: center;
  background-color: ${PURPLES.PP08};
  border: none;
  color: ${NEUTRALS.WHITE};
`;

export {
  ScheduleACallPurple,
  ScheduleACallWhite
};
