/*
 * @flow
 */

import React from 'react';

import { Typography } from 'lattice-ui-kit';

import FooterSection from '../../footer/FooterSection';
import { AstrometricsFeatureShot1 } from '../../../assets/images/astrometrics';
import { AstrometricsIcon } from '../../../assets/svg/icons';
import {
  Categories,
  FeatureGrid,
  GraphicShot,
  InfoTile,
  LearnMoreButton,
  PageSection,
  ScrollToTop,
  SectionContent,
} from '../../../components';
import { openBeacon } from '../../../utils/Utils';
import { BasicProductIntroSection } from '../components';

const AstrometricsProductPage = () => (
  <>
    <ScrollToTop />
    <BasicProductIntroSection />
    <PageSection>
      <SectionContent margin="0 0 100px 0">
        <FeatureGrid>
          <InfoTile>
            <AstrometricsIcon width={48} />
            <Typography variant="h3">Astrometrics</Typography>
            <Categories>
              <span>PUBLIC SAFETY</span>
            </Categories>
            <Typography variant="body1">
              Our platform supports geospatial workflows at scale. It enables law enforcement agencies to perform
              audited, map-based searches of ALPR data.
            </Typography>
            <LearnMoreButton onClick={openBeacon} radius={5}>Schedule a call to learn more</LearnMoreButton>
          </InfoTile>
          <GraphicShot withBorder>
            <AstrometricsFeatureShot1 />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default AstrometricsProductPage;
