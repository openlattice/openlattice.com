/*
 * @flow
 */

import React from 'react';

import { Colors } from 'lattice-ui-kit';

import {
  FeatureGrid,
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../components';

const { NEUTRAL } = Colors;

const HowItWorksSection = () => (
  <PageSection bgColor={NEUTRAL.N50}>
    <SectionContent>
      <FeatureGrid align={{ h: 'start', v: 'start' }}>
        <Tile>
          <Typography variant="h2">
            How It Works
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            OpenLattice develops software tools for primary investigators who work with human subjects to help them
            push the boundaries of their research in complex and important cognitive, developmental, behavioral
            and mental health areas.
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            The Chronicle app supports researchers through study management, advanced data collection capabilities,
            including real-time data monitoring and mobile device application usage information, study management,
            and access to a team of data science experts.
          </Typography>
          <Typography color={NEUTRAL.N400} fontWeight={600} maxWidth={{ lg: 420 }} uppercase variant="body1">
            Step 1
          </Typography>
          <Typography maxWidth={{ lg: 420 }} variant="h3">
            Enroll
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Simply set up an account, enroll participants and start collecting data. It’s that simple. Chronicle is
            designed to allow you to manage participant enrollment, consent, and study engagement and
            compensation in one application.
          </Typography>
          <Typography color={NEUTRAL.N400} fontWeight={600} maxWidth={{ lg: 420 }} uppercase variant="body1">
            Step 2
          </Typography>
          <Typography maxWidth={{ lg: 420 }} variant="h3">
            Collect
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            {`Once enrolled, your participants can consent to sharing a wide range of data points directly through the
            app. The app’s live data stream features help researchers ensure data quality all the way through the
            collection phase and with Chronicle’s time-use diary, ecological momentary assessment, and mobile
            features your data collection possibilities just expanded.`}
          </Typography>
        </Tile>
        <Tile>
          <Typography color={NEUTRAL.N400} fontWeight={600} maxWidth={{ lg: 420 }} uppercase variant="body1">
            Step 3
          </Typography>
          <Typography maxWidth={{ lg: 420 }} variant="h3">
            Clean
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            {`Now onto the fun stuff - you’ve collected your data and all that’s left is to make sense of it!
              Chronicle’s library of scripts and support tools help improve the speed and accuracy of cleaning,
              structuring, and validating your data, so you can spend more time on the analysis.`}
          </Typography>
          <Typography color={NEUTRAL.N400} fontWeight={600} maxWidth={{ lg: 420 }} uppercase variant="body1">
            Step 4
          </Typography>
          <Typography maxWidth={{ lg: 420 }} variant="h3">
            Analyze
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Chronicle makes analyzing your data easy. Seemlessly connect to the database through Jupyterhub and you
            will be able to run scripts to view the data directly in R, Python, Juila, and other common notebooks.
            You also have the option to securely download your data and begin analysis in a tool of your choice.
          </Typography>
          <Typography maxWidth={{ lg: 480 }} variant="body2">
            Not sure the best place to start? Simply connect with our team of data science experts for an analysis
            support call to help determine the best approach to get the most out of your data!
          </Typography>
        </Tile>
      </FeatureGrid>
    </SectionContent>
  </PageSection>
);

export default HowItWorksSection;
