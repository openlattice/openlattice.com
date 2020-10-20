/*
 * @flow
 */

import React from 'react';

import { Colors, Typography } from 'lattice-ui-kit';

import {
  Header,
  PageSection,
  SectionContent,
  SolidButton,
  SubHeader,
} from '../../../components';
import { openBeacon } from '../../../utils/Utils';

const { NEUTRAL } = Colors;

const OL_IS_FOUNDED = 'OpenLattice is founded on the ideal that government tools don\'t have to be difficult to deploy'
  + ' or use, nor is it necessary to make a trade off between security and collaboration.';

const BasicProductIntroSection = () => (
  <>
    <PageSection bgColor={NEUTRAL.N00}>
      <SectionContent margin="20vh 0" maxWidth={{ lg: 700 }}>
        <Header color={NEUTRAL.N800}>
          Solve modern problems with modern solutions
        </Header>
        <SubHeader color={NEUTRAL.N800} maxWidth={700}>
          Use data-driven workflows to accurately and efficiently identify problems, take necessary actions, and
          track outcomes.
        </SubHeader>
        <SolidButton onClick={openBeacon}>Schedule a Call</SolidButton>
      </SectionContent>
    </PageSection>
    <PageSection>
      <SectionContent maxWidth={{ lg: 700 }}>
        <Typography gutterBottom variant="h1">
          Bring government into the 21st century.
        </Typography>
        <Typography variant="body1">
          {OL_IS_FOUNDED}
        </Typography>
      </SectionContent>
    </PageSection>
  </>
);

export default BasicProductIntroSection;
