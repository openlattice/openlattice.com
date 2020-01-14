/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import IconListItem from './security/IconListItem';
import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import {
  COMPLIANCE_DESCRIPTIONS,
  COMPLIANCE_ICONS,
  COMPLIANCE_TITLES,
  SECURITY_DESCRIPTIONS,
  SECURITY_ICONS,
  SECURITY_TITLES
} from './security/ComplianceSecurityConsts';

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

const ListOuterWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  margin-top: 41px;
  margin-bottom: 101px;
  max-width: ${CONTENT_WIDTH}px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

const ListInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -24px;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    justify-content: flex-start;
  }
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
      <ListOuterWrapper>
        <ListInnerWrapper>
          <IconListItem
              body={COMPLIANCE_DESCRIPTIONS.CJIS}
              icon={COMPLIANCE_ICONS.CJIS}
              title={COMPLIANCE_TITLES.CJIS} />
          <IconListItem
              body={COMPLIANCE_DESCRIPTIONS.GDPR}
              icon={COMPLIANCE_ICONS.GDPR}
              title={COMPLIANCE_TITLES.GDPR} />
          <IconListItem
              body={COMPLIANCE_DESCRIPTIONS.HIPAA}
              icon={COMPLIANCE_ICONS.HIPAA}
              title={COMPLIANCE_TITLES.HIPAA} />
          <IconListItem
              body={COMPLIANCE_DESCRIPTIONS.CFR}
              icon={COMPLIANCE_ICONS.CFR}
              title={COMPLIANCE_TITLES.CFR} />
          <IconListItem
              body={COMPLIANCE_DESCRIPTIONS.FERPA}
              icon={COMPLIANCE_ICONS.FERPA}
              title={COMPLIANCE_TITLES.FERPA} />
        </ListInnerWrapper>
      </ListOuterWrapper>
      <SectionHeaderWrapper>
        <SmallSectionHeader>
          Security
        </SmallSectionHeader>
        <Line />
      </SectionHeaderWrapper>
      <ListOuterWrapper>
        <ListInnerWrapper>
          <IconListItem
              body={SECURITY_DESCRIPTIONS.ENCRYPTION}
              icon={SECURITY_ICONS.ENCRYPTION}
              title={SECURITY_TITLES.ENCRYPTION} />
          <IconListItem
              body={SECURITY_DESCRIPTIONS.LOGIN}
              icon={SECURITY_ICONS.LOGIN}
              title={SECURITY_TITLES.LOGIN} />
          <IconListItem
              body={SECURITY_DESCRIPTIONS.CLOUD}
              icon={SECURITY_ICONS.CLOUD}
              title={SECURITY_TITLES.CLOUD} />
        </ListInnerWrapper>
      </ListOuterWrapper>
    </Content>
  </PageSection>
);

export default ComplianceAndSecurity;
