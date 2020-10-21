/*
 * @flow
 */

import React from 'react';

import { Typography } from 'lattice-ui-kit';

import FooterSection from '../../footer/FooterSection';
import { SteppingUpFeatureShot1 } from '../../../assets/images/stepping-up';
import { SteppingUpIcon } from '../../../assets/svg/icons';
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

const SteppingUpProductPage = () => (
  <>
    <ScrollToTop />
    <BasicProductIntroSection />
    <PageSection>
      <SectionContent margin={{ t: 0, b: 100 }}>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot withBorder>
            <SteppingUpFeatureShot1 />
          </GraphicShot>
          <InfoTile>
            <SteppingUpIcon width={48} />
            <Typography variant="h3">Stepping Up Dashboard</Typography>
            <Categories>
              <span>BEHAVIORAL HEALTH</span>
              <span>{' · '}</span>
              <span>RESEARCH</span>
            </Categories>
            <Typography variant="body1">
              Visualize and link data from across silos to see how different subsets of individuals affected by mental
              illness interact across social services.
            </Typography>
            <LearnMoreButton onClick={openBeacon} radius={5}>Schedule a call to learn more</LearnMoreButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default SteppingUpProductPage;
