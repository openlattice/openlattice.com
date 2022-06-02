/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import OurCustomersSection from './OurCustomersSection';
import { QUOTES } from './constants/quotes';

import FooterSection from '../footer/FooterSection';
import { StatueOfLibertyJPG } from '../../assets/images/home';
import {
  RightDataGraphic,
  RightPeopleGraphic,
  RightTimeGraphic,
} from '../../assets/svg/graphics';
import {
  FeatureGrid,
  GraphicShot,
  PageSection,
  QuotesSection,
  ScrollToTop,
  SectionContent,
  SolidButton,
  Tile,
  Typography,
} from '../../components';
import { openBeacon } from '../../utils/Utils';

const { PURPLE } = Colors;

const HomePage = () => (
  <>
    <ScrollToTop />
    <PageSection bgImage={StatueOfLibertyJPG}>
      <SectionContent align={{ h: 'end' }} margin={{ b: '25vh', t: '25vh' }}>
        <Tile align={{ h: 'end' }}>
          <Typography maxWidth={{ xs: 300, sm: 400, md: 500 }} textAlign="right" variant="h1">
            {'With liberty and justice '}
            <Typography component="span" underline variant="h1">
              for all.
            </Typography>
          </Typography>
          <Typography maxWidth={{ sm: 250, md: 500 }} textAlign="right" variant="h6">
            Data tools for those who serve the public.
          </Typography>
        </Tile>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent>
        <Typography maxWidth={{ lg: 1000 }} textAlign="center" variant="h1">
          Get the right data to the right people at the right time
        </Typography>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent margin={{ t: 0 }}>
        <FeatureGrid>
          <Tile>
            <Tile gap={16}>
              <Typography color={PURPLE.P300} fontWeight={700} variant="body2">
                RIGHT DATA
              </Typography>
              <Typography variant="h2">
                Collect and connect all the data you need
              </Typography>
            </Tile>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Connect any and all systems, teams, departments, jurisdictions, and researchers and feed the data into
              one secure, modern, easy-to-use system that links it all together for you.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Optionally, collect data through OpenLattice Apps, built to help you achieve specific goals.
            </Typography>
            <Tile gap={32}>
              <Typography maxWidth={{ lg: 480 }} variant="body2">
                OpenLattice makes sure the data is properly protected and compliant, so you can focus on the actionable
                insights that come from integrated data.
              </Typography>
            </Tile>
          </Tile>
          <GraphicShot>
            <RightDataGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid reverseOrderOnWrap>
          <GraphicShot>
            <RightPeopleGraphic />
          </GraphicShot>
          <Tile>
            <Tile gap={16}>
              <Typography color={PURPLE.P300} fontWeight={700} variant="body2">
                RIGHT PEOPLE
              </Typography>
              <Typography maxWidth={{ lg: 400 }} variant="h2">
                Put the data in the hands of people who need it
              </Typography>
            </Tile>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Set access to data according to fine-grained permissions and roles.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              See who accessed what data and when.
            </Typography>
            <Tile gap={32}>
              <Typography maxWidth={{ lg: 480 }} variant="body2">
                OpenLattice makes sure only those who should have access to certain data actually do.
              </Typography>
            </Tile>
          </Tile>
        </FeatureGrid>
      </SectionContent>
      <SectionContent>
        <FeatureGrid>
          <Tile>
            <Tile gap={16}>
              <Typography color={PURPLE.P300} fontWeight={700} variant="body2">
                RIGHT TIME
              </Typography>
              <Typography variant="h2">
                Get notified of key information instantly
              </Typography>
            </Tile>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Notify others that need to see the information you’re seeing and work with you or take over a case.
            </Typography>
            <Typography maxWidth={{ lg: 480 }} variant="body2">
              Automate notifications upon certain triggers or scenarios, or when critical information arises.
            </Typography>
            <Tile gap={32}>
              <Typography maxWidth={{ lg: 480 }} variant="body2">
                OpenLattice makes sure it’s easy to pass information to others and understand information being sent
                to you.
              </Typography>
            </Tile>
          </Tile>
          <GraphicShot>
            <RightTimeGraphic />
          </GraphicShot>
        </FeatureGrid>
      </SectionContent>
    </PageSection>
    <QuotesSection quotes={QUOTES} />
    <OurCustomersSection />
    <FooterSection />
  </>
);

export default HomePage;
