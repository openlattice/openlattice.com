/*
 * @flow
 */

import React from 'react';

import { Typography } from 'lattice-ui-kit';

import FooterSection from '../../footer/FooterSection';
import { CWPFeatureShot1 } from '../../../assets/images/cwp';
import { CWPIcon } from '../../../assets/svg/icons';
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

const CWPProductPage = () => (
  <>
    <ScrollToTop />
    <BasicProductIntroSection />
    <PageSection>
      <SectionContent margin="0 0 100px 0">
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot withBorder>
            <CWPFeatureShot1 />
          </GraphicShot>
          <InfoTile>
            <CWPIcon width={48} />
            <Typography variant="h3">Community Work Program</Typography>
            <Categories>
              <span>JUSTICE</span>
            </Categories>
            <Typography variant="body1">
              A data driven tool for your jurisdiction to manage participation and completion of alternative
              sentences to community services.
            </Typography>
            <LearnMoreButton onClick={openBeacon} radius={5}>Schedule a call to learn more</LearnMoreButton>
          </InfoTile>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <FooterSection />
  </>
);

export default CWPProductPage;
