/*
 * @flow
 */

import styled from 'styled-components';

import { CONTENT_WIDTH } from '../../core/style/Sizes';

const SectionContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ vertical }) => (vertical === false ? 'row' : 'column')};
  margin: 64px 0 100px 0;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
`;

export default SectionContent;
