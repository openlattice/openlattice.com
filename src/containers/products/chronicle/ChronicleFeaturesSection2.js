/*
 * @flow
 */

import React from 'react';

import {
  ContentGrid,
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../../components';
import { NEUTRALS } from '../../../core/style/Colors';

const ChronicleFeaturesSection2 = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <ContentGrid align={{ v: 'start' }}>
        <Tile>
          <Typography variant="h2">
            Ensure data quality with comprehensive participant status
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            See a list of all study participants, along with their consent date and drop-out date, if applicable. Use
            this information to ensure data quality and identify any participation issues in real-time.
          </Typography>
        </Tile>
        <Tile>
          <Typography variant="h2">
            Save time with automated compliance documentation
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Chronicle collects and stores important information around enrollment, consent, and participation.
            A record gets automatically tabulated in a PDF that research teams can send directly to compliance and
            enforcement boards.
          </Typography>
        </Tile>
      </ContentGrid>
    </SectionContent>
  </PageSection>
);

export default ChronicleFeaturesSection2;
