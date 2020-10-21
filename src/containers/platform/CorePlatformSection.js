/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  CloudSecureCircleIcon,
  DBSyncCircleIcon,
  DotGridCircleIcon,
  KeyCircleIcon,
  LinkCircleIcon,
  SearchCircleIcon,
} from '../../assets/svg/circle-icons';
import {
  ContentGrid,
  LearnMoreButton,
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import {
  DATA_INTEGRATIONS_LINK,
  DATA_LINKING_LINK,
  EDM_LINK,
  MANAGE_PERMISSIONS_LINK,
  PRIVACY_SECURITY_LINK,
  TOP_UTILIZERS_LINK,
} from '../../utils/constants/links';

const TileGrid = styled(ContentGrid)`
  align-items: stretch;

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

const CorePlatformSection = () => (
  <PageSection>
    <SectionContent margin={{ b: 0, t: 0 }} maxWidth={{ sm: 528 }}>
      <Typography variant="h2">
        Platform Features
      </Typography>
    </SectionContent>
    <SectionContent margin={{ b: 0, t: 100 }}>
      <TileGrid>
        <Tile align={{ h: 'center' }} withBorder>
          <DBSyncCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Data Integration
          </Typography>
          <Typography textAlign="center" variant="body1">
            Integrate currently siloed databases securely through the OpenLattice platform. All data is instantly
            analyzable and aggregated.
          </Typography>
          <LearnMoreButton href={DATA_INTEGRATIONS_LINK} />
        </Tile>
        <Tile align={{ h: 'center' }} withBorder>
          <LinkCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Data Linking
          </Typography>
          <Typography textAlign="center" variant="body1">
            Link datasets using our advanced artificial intelligence method, allowing for data deduplication within or
            over datasets.
          </Typography>
          <LearnMoreButton href={DATA_LINKING_LINK} />
        </Tile>
        <Tile align={{ h: 'center' }} withBorder>
          <CloudSecureCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Data Storage
          </Typography>
          <Typography textAlign="center" variant="body1">
            Securely store all data in an encrypted database, allowing for a single system of record across all
            analytical platforms and applications.
          </Typography>
          <LearnMoreButton href={PRIVACY_SECURITY_LINK} />
        </Tile>
        <Tile align={{ h: 'center' }} withBorder>
          <SearchCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Data Exploration
          </Typography>
          <Typography textAlign="center" variant="body1">
            Access, explore, and analyze your data - search for datasets, traverse connections between datasets,
            identify top utilizers, and perform analysis.
          </Typography>
          <LearnMoreButton href={TOP_UTILIZERS_LINK} />
        </Tile>
        <Tile align={{ h: 'center' }} withBorder>
          <DotGridCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Data Standardization
          </Typography>
          <Typography textAlign="center" variant="body1">
            Standardize your integrated data using our Entity Data Model (EDM) designed by our data scientists to
            utilize previously siloed datasets.
          </Typography>
          <LearnMoreButton href={EDM_LINK} />
        </Tile>
        <Tile align={{ h: 'center' }} withBorder>
          <KeyCircleIcon width="50" />
          <Typography textAlign="center" variant="h6">
            Permissions Management
          </Typography>
          <Typography textAlign="center" variant="body1">
            Access and manage your organization’s members, roles, permissions, and entity set access all in one
            simple interface.
          </Typography>
          <LearnMoreButton href={MANAGE_PERMISSIONS_LINK} />
        </Tile>
      </TileGrid>
    </SectionContent>
  </PageSection>
);

export default CorePlatformSection;
