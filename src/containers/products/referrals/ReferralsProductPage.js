/*
 * @flow
 */

import React from 'react';

import { Typography } from 'lattice-ui-kit';

import FooterSection from '../../footer/FooterSection';
import { ReferralsFeatureShot1 } from '../../../assets/images/referrals';
import { OpenLatticeIcon } from '../../../assets/svg/icons';
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

const ReferralsProductPage = () => (
  <>
    <ScrollToTop />
    <BasicProductIntroSection />
    <PageSection>
      <SectionContent margin="0 0 100px 0">
        <FeatureGrid>
          <InfoTile>
            <OpenLatticeIcon width={48} />
            <Typography variant="h3">Referrals</Typography>
            <Categories>
              <span>HEALTH</span>
            </Categories>
            <Typography variant="body1">
              Enable service providers to manage their own inbound and outbound referrals, as well as wait-time and
              other customer service-focused analytics.
            </Typography>
            <LearnMoreButton onClick={openBeacon} radius={5}>Schedule a call to learn more</LearnMoreButton>
          </InfoTile>
          <GraphicShot withBorder>
            <ReferralsFeatureShot1 />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default ReferralsProductPage;
