/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import FooterSection from '../footer/FooterSectionWithPageLinks';
import PageSection from '../../components/layout/NewPageSection';
import ScrollToTopOnMount from '../../components/layout/ScrollToTopOnMount';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content } from '../../components/layout/IntroComponents';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';

const ComingSoonContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 300px auto;
  }
`;

const ChronicleProductPage = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.WHITE} includeMenu>
      <ComingSoonContent>
        <PageIntro>Coming Soon</PageIntro>
      </ComingSoonContent>
    </PageSection>
    <FooterSection />
  </>
);

export default ChronicleProductPage;
