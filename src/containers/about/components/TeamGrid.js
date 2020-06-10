/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SectionContentGrid } from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';
import { GRID_GAP, PAGE_PADDING } from '../../../core/style/Sizes';

const GRID_ITEM_MAX_WIDTH :240 = 240;
const GRID_COLUMNS_1 = (2 * PAGE_PADDING) + (1 * GRID_GAP) + (2 * GRID_ITEM_MAX_WIDTH) - 1; // 591
const GRID_COLUMNS_2 = (2 * PAGE_PADDING) + (2 * GRID_GAP) + (3 * GRID_ITEM_MAX_WIDTH) - 1; // 879
const GRID_COLUMNS_3 = (2 * PAGE_PADDING) + (3 * GRID_GAP) + (4 * GRID_ITEM_MAX_WIDTH) - 1; // 1167

const getMaxWidth = ({ members }) => {
  if (members === 1) return `${GRID_ITEM_MAX_WIDTH}px`;
  if (members === 2) return `${GRID_ITEM_MAX_WIDTH * 2 + GRID_GAP}px`;
  if (members === 3) return `${GRID_ITEM_MAX_WIDTH * 3 + GRID_GAP * 2}px`;
  return undefined;
};

const MemberGrid = styled(SectionContentGrid)`
  max-width: ${getMaxWidth};

  @media only screen and (max-width: ${GRID_COLUMNS_1}px) {
    grid-template-columns: auto;
  }

  > div {
    max-width: ${GRID_ITEM_MAX_WIDTH}px;
  }
`;

const TeamMember = styled.div`
  align-items: center;
  color: ${NEUTRALS.GRAY_07};
  display: flex;
  flex-direction: column;
  max-height: 400px;
  position: relative;

  @media only screen and (max-width: ${GRID_COLUMNS_3}px) {
    &:nth-child(3n - 2) {
      margin: 0 0 0 auto;
    }

    &:nth-child(3n - 1) {
      margin: 0 auto;
    }

    &:nth-child(3n) {
      margin: 0 auto 0 0;
    }
  }

  @media only screen and (max-width: ${GRID_COLUMNS_2}px) {
    &:nth-child(even) {
      margin: 0 auto 0 0;
    }

    &:nth-child(odd) {
      margin: 0 0 0 auto;
    }
  }

  @media only screen and (max-width: ${GRID_COLUMNS_1}px) {
    &:nth-child(n) {
      margin: 0;
    }
  }
`;

const TeamMemberPhoto = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;

  > img {
    width: 100%;
  }
`;

const TeamMemberName = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  width: 100%;
`;

const TeamMemberRole = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 13px;
  text-align: center;
  width: 100%;
`;

const TeamMemberLinkedIn = styled.a`
  color: ${NEUTRALS.GRAY_07};
`;

type Props = {
  members :TeamMemberType[];
};

const TeamGrid = ({ members } :Props) => (
  <MemberGrid members={members.length}>
    {
      members.map((teamMember :TeamMemberType) => (
        <TeamMember key={teamMember.NAME}>
          <TeamMemberPhoto>{teamMember.PHOTO}</TeamMemberPhoto>
          <TeamMemberName>{teamMember.NAME}</TeamMemberName>
          {teamMember.FOUNDER && <TeamMemberRole>Founder &</TeamMemberRole>}
          {teamMember.COFOUNDER && <TeamMemberRole>Co-founder &</TeamMemberRole>}
          <TeamMemberRole>{teamMember.ROLE}</TeamMemberRole>
          {
            teamMember.LI && (
              <TeamMemberLinkedIn href={teamMember.LI}>
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </TeamMemberLinkedIn>
            )
          }
        </TeamMember>
      ))
    }
  </MemberGrid>
);

export default TeamGrid;
