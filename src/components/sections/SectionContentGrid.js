/*
 * @flow
 */

import styled, { css } from 'styled-components';

import { GRID_GAP, MEDIA_QUERY_LG, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const SectionContentGrid = styled.div`
  align-items: ${({ alignItems }) => (alignItems || 'flex-start')};
  display: grid;
  grid-gap: ${GRID_GAP}px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  width: 100%;

  > div {
    max-width: 528px;

    @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
      &:nth-of-type(1) {
        order: ${({ reverseOrderOnMobile }) => (reverseOrderOnMobile ? 4 : 1)};
      }

      &:nth-of-type(2) {
        order: ${({ reverseOrderOnMobile }) => (reverseOrderOnMobile ? 3 : 2)};
      }

      &:nth-of-type(3) {
        order: ${({ reverseOrderOnMobile }) => (reverseOrderOnMobile ? 2 : 3)};
      }

      &:nth-of-type(4) {
        order: ${({ reverseOrderOnMobile }) => (reverseOrderOnMobile ? 1 : 4)};
      }
    }
  }
`;

export default SectionContentGrid;
