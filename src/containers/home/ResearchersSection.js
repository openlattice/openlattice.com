/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  BCMLogo,
  BYULogo,
  GeorgetownLogo,
  MichiganLogo,
  RuhrLogo,
  UCDenverLogo,
  USCLogo,
  WisconsinLogo,
} from '../../assets/logos';
import {
  ContentGrid,
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const TileGrid = styled(ContentGrid)`
  align-items: stretch;
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(328px, 1fr));
  }

  ${Tile} {
    /* NOTE: 328px is very carfully chosen and is tightly coupled with the media query */
    max-width: 384px;

    @media (min-width: ${MEDIA_QUERY_MD}px) {
      &:nth-child(even) {
        margin: 0 auto 0 0;
      }

      &:nth-child(odd) {
        margin: 0 0 0 auto;
      }
    }
  }
`;

const ResearchersSection = () => (
  <PageSection>
    <SectionContent>
      <Typography textAlign="center" variant="h2">
        We’re working with Researchers at:
      </Typography>
      <TileGrid>
        <Tile align={{ v: 'center' }}>
          <MichiganLogo />
        </Tile>
        <Tile align={{ v: 'center' }}>
          <GeorgetownLogo />
        </Tile>
        <Tile align={{ v: 'center' }}>
          <WisconsinLogo />
        </Tile>
      </TileGrid>
      <TileGrid>
        <Tile align={{ v: 'center' }}>
          <USCLogo />
        </Tile>
        <Tile align={{ v: 'center' }}>
          <UCDenverLogo />
        </Tile>
      </TileGrid>
      <TileGrid>
        <Tile align={{ v: 'center' }}>
          <BYULogo />
        </Tile>
        <Tile align={{ v: 'center' }}>
          <BCMLogo />
        </Tile>
        <Tile align={{ v: 'center' }}>
          <RuhrLogo />
        </Tile>
      </TileGrid>
    </SectionContent>
  </PageSection>
);

export default ResearchersSection;
