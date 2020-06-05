/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  CFR_TEXT,
  CJIS_TEXT,
  CLOUD_TEXT,
  ENCRYPTION_TEXT,
  FERPA_TEXT,
  GDPR_TEXT,
  HIPAA_TEXT,
  LOGIN_TEXT,
} from './constants/language';

import PageSection from '../../components/layout/NewPageSection';
import {
  CFRLogo,
  CJISLogo,
  FERPALogo,
  HIPAALogo,
} from '../../assets/logos';
import {
  GDPRLogo,
  SecureCloudLogo,
  SecureDataLogo,
  SecureLoginLogo,
} from '../../assets/svg/logos';
import {
  InfoTile,
  SectionContent,
  SectionContentGrid,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const TileGrid = styled(SectionContentGrid)`
  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit,minmax(336px,1fr));
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  }
`;

// TODO: refactor as a reusable component
const SeparationHeader = styled.h3`
  border-bottom: 1px solid ${NEUTRALS.GRAY_10};
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 48px 0;
  padding: 0 0 24px 0;
  text-align: left;
  width: 100%;
`;

// TODO: refactor as a reusable component
const InfoTile2 = styled(InfoTile)`
  flex-direction: row;

  h4 {
    color: ${NEUTRALS.GRAY_06};
    margin: 0 0 8px 0;
  }

  img {
    margin: 0 48px 0 0;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    img {
      margin-right: 24px;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    align-items: center;
    flex-direction: column;

    img {
      margin: 0 0 24px 0;
    }
  }
`;

const ComplianceAndSecuritySection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <SectionContent>
      <SeparationHeader>Compliance</SeparationHeader>
      <TileGrid>
        <InfoTile2 align="left">
          <CJISLogo width="96" />
          <div>
            <h4>CJIS</h4>
            <span>{CJIS_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <GDPRLogo width="96" />
          <div>
            <h4>GDPR</h4>
            <span>{GDPR_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <HIPAALogo width="96" />
          <div>
            <h4>HIPAA</h4>
            <span>{HIPAA_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <CFRLogo width="96" />
          <div>
            <h4>42 CFR Part 2</h4>
            <span>{CFR_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <FERPALogo width="96" />
          <div>
            <h4>FERPA</h4>
            <span>{FERPA_TEXT}</span>
          </div>
        </InfoTile2>
      </TileGrid>
    </SectionContent>
    <SectionContent>
      <SeparationHeader>Security</SeparationHeader>
      <TileGrid>
        <InfoTile2 align="left">
          <SecureDataLogo width="96" />
          <div>
            <h4>Encryption at rest and in transit</h4>
            <span>{ENCRYPTION_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <SecureLoginLogo width="96" />
          <div>
            <h4>Secure login</h4>
            <span>{LOGIN_TEXT}</span>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <SecureCloudLogo width="96" />
          <div>
            <h4>Secure cloud storage</h4>
            <span>{CLOUD_TEXT}</span>
          </div>
        </InfoTile2>
      </TileGrid>
    </SectionContent>
  </PageSection>
);

export default ComplianceAndSecuritySection;
