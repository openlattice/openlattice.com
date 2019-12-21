/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import GrayOLLogo from '../../assets/logos/ol-gray-logo.svg';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { helpCenterLink } from '../../components/headers/MenuConsts';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 136px 0 24px 0;
    text-align: left;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  margin-bottom: 176px;
  align-items: center;
  justify-content: space-between;
`;

const FooterSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_11}>
    <Content>

    </Content>
  </PageSection>
);

export default FooterSection;
