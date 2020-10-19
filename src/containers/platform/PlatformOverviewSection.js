/*
 * @flow
 */

import React from 'react';

import { Typography } from 'lattice-ui-kit';

import { PageSection, SectionContent, SolidButton } from '../../components';
import { openBeacon } from '../../utils/Utils';

const PlatformOverviewSection = () => (
  <PageSection>
    <SectionContent>
      <SectionContent margin="24px 0">
        <Typography variant="h2">
          Feed Data In
        </Typography>
        <Typography variant="body1">
          Pull together data from any systems you’d like.
        </Typography>
      </SectionContent>
      <SectionContent margin="24px 0">
        <Typography variant="h2">
          Build On Top
        </Typography>
        <Typography variant="body1">
          Use open APIs to connect any tools you’d like.
        </Typography>
      </SectionContent>
      <SectionContent margin="24px 0">
        <Typography variant="h2">
          Get Data Out
        </Typography>
        <Typography variant="body1">
          Connect visualization and analysis tools of your choice.
        </Typography>
      </SectionContent>
      <SectionContent margin="24px 0">
        <Typography variant="h2">
          Share Data
        </Typography>
        <Typography variant="body1">
          Ensure those who need certain data can access it.
        </Typography>
      </SectionContent>
      <SectionContent margin="24px 0">
        <Typography variant="h2">
          While Fully Compliant
        </Typography>
        <Typography variant="body1">
          Meet pretty much any compliance out there.
        </Typography>
      </SectionContent>
      <SectionContent margin="24px 0">
        <SolidButton onClick={openBeacon}>Just Ask</SolidButton>
      </SectionContent>
    </SectionContent>
  </PageSection>
);

export default PlatformOverviewSection;
