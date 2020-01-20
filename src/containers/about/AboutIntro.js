/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content } from '../../components/layout/IntroComponents';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';

const AboutContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 143px auto 208px auto;
  }
`;

const AboutPageIntro = styled(PageIntro)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 1104px;
  }
`;

const AboutIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <AboutContent>
      <AboutPageIntro>
        {`We believe core societal institutions should have modern data
          infrastructure to better serve the citizens.`}
      </AboutPageIntro>
    </AboutContent>
  </PageSection>
);

export default AboutIntro;
