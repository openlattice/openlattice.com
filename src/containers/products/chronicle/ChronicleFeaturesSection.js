/*
 * @flow
 */

import React from 'react';

import { ChronicleFeatureShot1, ChronicleFeatureShot2, ChronicleFeatureShot3 } from '../../../assets/images/chronicle';
import { BarsCircleIcon, MergeArrowCircleIcon, UserCircleIcon } from '../../../assets/svg/circle-icons';
import {
  ContentGrid,
  FeatureGrid,
  GraphicShot,
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../../components';
import { ProductFeaturesSectionContent } from '../components';

const ChronicleFeaturesSection = () => (
  <PageSection>
    <ProductFeaturesSectionContent>
      <ContentGrid align={{ h: 'start', v: 'start' }}>
        <Tile>
          <UserCircleIcon />
          <Typography textAlign="center" variant="h5">
            Manage Participants
          </Typography>
          <div>
            <Typography variant="body1">
              Enroll participants
            </Typography>
            <Typography variant="body1">
              Manage participant consent
            </Typography>
            <Typography variant="body1">
              Monitor continued compliance with study protocol
            </Typography>
          </div>
        </Tile>
        <Tile>
          <MergeArrowCircleIcon />
          <Typography textAlign="center" variant="h5">
            Integrate Data
          </Typography>
          <Typography variant="body1">
            Integrate data from multiple sources including 3rd party sensors. Collect data from participants through a
            participant mobile app
          </Typography>
        </Tile>
        <Tile>
          <BarsCircleIcon />
          <Typography textAlign="center" variant="h5">
            Analyze & Collaborate
          </Typography>
          <Typography variant="body1">
            Manage roles and permissions for researchers. Data collected for studies managed in Chronicle can be shared
            through ResearchHub.
          </Typography>
        </Tile>
      </ContentGrid>
    </ProductFeaturesSectionContent>
    <SectionContent>
      <FeatureGrid>
        <Tile>
          <Typography maxWidth={{ lg: 480 }} variant="h2">
            Streamline data collection and communication with participants through the Chronicle mobile app
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Chronicle includes an optional companion mobile application for Android devices. Through this app,
            researchers can securely collect information for media usage studies and utilize push notifications for
            point-in-time surveys.
          </Typography>
        </Tile>
        <GraphicShot withBorder>
          <ChronicleFeatureShot1 />
        </GraphicShot>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid reverseOrderOnWrap>
        <GraphicShot withBorder>
          <ChronicleFeatureShot2 />
        </GraphicShot>
        <Tile>
          <Typography variant="h2">
            Review study data
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Data is collected in a standardized format so that it can be viewed in a clean, simple, and intuitive way
            on our Chronicle Dashboard or exported to a preferred statistical tool.
          </Typography>
        </Tile>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid>
        <Tile>
          <Typography variant="h2">
            Integrate and share data
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Integrate multiple data streams for an individual, and securely share all or select data with other
            researchers via ResearchHub.
          </Typography>
        </Tile>
        <GraphicShot withBorder>
          <ChronicleFeatureShot3 />
        </GraphicShot>
      </FeatureGrid>
    </SectionContent>
  </PageSection>
);

export default ChronicleFeaturesSection;
