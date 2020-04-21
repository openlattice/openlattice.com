/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import { ContactUsPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const PageIntroWrapper = styled(PageIntro)`
  width: 720px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const ProductsIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageIntroWrapper>
        Solve modern problems with modern solutions.
      </PageIntroWrapper>
      <PageDescriptionWrapper>
        {`Use data-driven workflows to accurately and efficiently identify problems,
          take necessary actions, and track outcomes.`}
      </PageDescriptionWrapper>
      <ContactUsPurple onClick={openBeacon}>
        Schedule a call
      </ContactUsPurple>
    </Content>
  </PageSection>
);

export default ProductsIntro;
