/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import ContactUsSection from '../contactus/ContactUsSection';
import FooterSection from '../footer/FooterSectionWithPageLinks';
import PageSection from '../../components/layout/NewPageSection';

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
    <PageSection bgColor={NEUTRALS.WHITE} includeMenu>
      <ComingSoonContent>
        <PageIntro>Coming Soon</PageIntro>
      </ComingSoonContent>
    </PageSection>
    <ContactUsSection />
    <FooterSection />
  </>
);

export default ChronicleProductPage;
