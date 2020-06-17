/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  DATA_SECURITY_AND_COMPLIANCE,
  DATA_SECURITY_AND_COMPLIANCE_DESCRIPTION,
  GENERATE_DATASETS,
  GENERATE_DATASETS_DESCRIPTION,
  MANAGE_ACCESS,
  MANAGE_ACCESS_DESCRIPTION,
  SECURE_AUDIT_LOG,
  SECURE_AUDIT_LOG_DESCRIPTION,
  SHARE_DATA_BETTER_DECISIONS,
  SHARE_DATA_BETTER_DECISIONS_DESCRIPTION,
} from './constants/language';

import {
  DataSecurityAndComplianceImg,
  GenerateDatasetsImg,
  ManageAccessImg,
  SecureAuditLogImg,
  ShareDataImg,
} from '../../assets/images/home';
import {
  AnonymousCircleIcon,
  CheckCircleIcon,
  CloudCircleIcon,
  DotGridCircleIcon,
  KeyCircleIcon,
  LockCircleIcon,
  LogsCircleIcon,
  PointerCircleIcon,
  SelectCircleIcon,
  SyncCircleIcon,
  Users2CircleIcon,
} from '../../assets/svg/circle-icons';
import {
  FeatureGrid,
  GraphicShot,
  Header,
  InfoTile,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../components';

const FeatureList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    margin: 12px 0;
  }

  span {
    margin-left: 16px;
  }
`;

const FeaturesSection = () => (
  <PageSection>
    <SectionContent>
      <FeatureGrid>
        <InfoTile align="left">
          <Header as="h2">{SHARE_DATA_BETTER_DECISIONS}</Header>
          <SubHeader as="h5">{SHARE_DATA_BETTER_DECISIONS_DESCRIPTION}</SubHeader>
          <FeatureList>
            <li>
              <SyncCircleIcon width="32" />
              <span>Integrate siloed data</span>
            </li>
            <li>
              <DotGridCircleIcon width="32" />
              <span>Standardize integrated data</span>
            </li>
            <li>
              <Users2CircleIcon width="32" />
              <span>Easily share & collaborate</span>
            </li>
          </FeatureList>
        </InfoTile>
        <GraphicShot>
          <ShareDataImg />
        </GraphicShot>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid reverseOrderOnWrap>
        <GraphicShot>
          <ManageAccessImg />
        </GraphicShot>
        <InfoTile align="left">
          <Header as="h2">{MANAGE_ACCESS}</Header>
          <SubHeader as="h5">{MANAGE_ACCESS_DESCRIPTION}</SubHeader>
          <FeatureList>
            <li>
              <KeyCircleIcon width="32" />
              <span>Role-based access</span>
            </li>
            <li>
              <SelectCircleIcon width="32" />
              <span>Granular control down to the field level</span>
            </li>
            <li>
              <PointerCircleIcon width="32" />
              <span>Simple configuration</span>
            </li>
          </FeatureList>
        </InfoTile>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid>
        <InfoTile align="left">
          <Header as="h2">{GENERATE_DATASETS}</Header>
          <SubHeader as="h5">{GENERATE_DATASETS_DESCRIPTION}</SubHeader>
          <FeatureList>
            <li>
              <AnonymousCircleIcon width="32" />
              <span>Anonymize personal information</span>
            </li>
            <li>
              <CheckCircleIcon width="32" />
              <span>Compliance-friendly infrastructure</span>
            </li>
            <li>
              <LockCircleIcon width="32" />
              <span>Top privacy & security standards</span>
            </li>
          </FeatureList>
        </InfoTile>
        <GraphicShot>
          <GenerateDatasetsImg />
        </GraphicShot>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid reverseOrderOnWrap>
        <GraphicShot>
          <SecureAuditLogImg />
        </GraphicShot>
        <InfoTile align="left">
          <Header as="h2">{SECURE_AUDIT_LOG}</Header>
          <SubHeader as="h5">{SECURE_AUDIT_LOG_DESCRIPTION}</SubHeader>
          <FeatureList>
            <li>
              <LogsCircleIcon width="32" />
              <span>Every action is logged</span>
            </li>
            <li>
              <LockCircleIcon width="32" />
              <span>Tamper-resistant</span>
            </li>
            <li>
              <KeyCircleIcon width="32" />
              <span>Restricted, role-based access</span>
            </li>
          </FeatureList>
        </InfoTile>
      </FeatureGrid>
    </SectionContent>
    <SectionContent>
      <FeatureGrid>
        <InfoTile align="left">
          <Header as="h2">{DATA_SECURITY_AND_COMPLIANCE}</Header>
          <SubHeader as="h5">{DATA_SECURITY_AND_COMPLIANCE_DESCRIPTION}</SubHeader>
          <FeatureList>
            <li>
              <CheckCircleIcon width="32" />
              <span>HIPAA, CJIS, GDPR, and FERPA compliant</span>
            </li>
            <li>
              <CloudCircleIcon width="32" />
              <span>Secure AWS cloud storage</span>
            </li>
            <li>
              <LockCircleIcon width="32" />
              <span>Encryption at rest and in transit</span>
            </li>
          </FeatureList>
        </InfoTile>
        <GraphicShot>
          <DataSecurityAndComplianceImg />
        </GraphicShot>
      </FeatureGrid>
    </SectionContent>
  </PageSection>
);

export default FeaturesSection;
