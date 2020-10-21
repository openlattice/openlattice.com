/*
 * @flow
 */

import React from 'react';

import {
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../components';

const PlatformOverviewSection = () => (
  <PageSection>
    <SectionContent>
      <Tile align={{ h: 'center' }}>
        <Typography variant="h5">
          Feed Data In
        </Typography>
        <Typography variant="body1">
          Pull together data from any systems you’d like.
        </Typography>
        <Typography variant="h5">
          Build On Top
        </Typography>
        <Typography variant="body1">
          Use open APIs to connect any tools you’d like.
        </Typography>
        <Typography variant="h5">
          Get Data Out
        </Typography>
        <Typography variant="body1">
          Connect visualization and analysis tools of your choice.
        </Typography>
        <Typography variant="h5">
          Share Data
        </Typography>
        <Typography variant="body1">
          Ensure those who need certain data can access it.
        </Typography>
        <Typography variant="h5">
          While Fully Compliant
        </Typography>
        <Typography variant="body1">
          Meet pretty much any compliance out there.
        </Typography>
      </Tile>
    </SectionContent>
  </PageSection>
);

export default PlatformOverviewSection;
