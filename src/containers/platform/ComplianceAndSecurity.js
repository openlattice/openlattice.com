/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 200px auto 200px auto;
  }
`;

const SectionHeaderWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const SmallSectionHeader = styled(SectionHeader)`
  align-self: flex-start;
  font-size: 24px;
  text-align: left;
`;

const Line = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_10};
  height: 0;
  width: 100%;
`;

const ComplianceAndSecurity = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <SectionHeaderWrapper>
        <SmallSectionHeader>
          Compliance
        </SmallSectionHeader>
        <Line />
      </SectionHeaderWrapper>
      <SectionHeaderWrapper>
        <SmallSectionHeader>
          Security
        </SmallSectionHeader>
        <Line />
      </SectionHeaderWrapper>
    </Content>
  </PageSection>
);

export default ComplianceAndSecurity;
