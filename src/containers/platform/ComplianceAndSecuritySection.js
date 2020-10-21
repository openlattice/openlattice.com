/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

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
  ContentGrid,
  InfoTile,
  PageSection,
  SectionContent,
  SolidButton,
  Typography,
} from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const TileGrid = styled(ContentGrid)`
  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  <PageSection>
    <SectionContent margin={{ b: 0, t: 0 }}>
      <SeparationHeader>Compliance</SeparationHeader>
      <TileGrid>
        <InfoTile2 align="left">
          <CJISLogo width="96" />
          <div>
            <Typography variant="h6">
              CJIS
            </Typography>
            <Typography variant="body1">
              Compliant with FBI’s Criminal Justice Information Services (CJIS) security policy to protect sensitive
              information like fingerprints and criminal backgrounds.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <GDPRLogo width="96" />
          <div>
            <Typography variant="h6">
              GDPR
            </Typography>
            <Typography variant="body1">
              Compliant with the EU’s General Data Protection Regulation to protect data and privacy in the European
              Union and European Economic Area.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <HIPAALogo width="96" />
          <div>
            <Typography variant="h6">
              HIPAA
            </Typography>
            <Typography variant="body1">
              Compliant with Health Insurance Portability and Accountability Act to protect patients’ medical
              records and relevant information from various care providers.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <CFRLogo width="96" />
          <div>
            <Typography variant="h6">
              42 CFR Part 2
            </Typography>
            <Typography variant="body1">
              Compliant with 42 CFR Part 2 to protect the privacy of substance use disorder patient records by
              prohibiting unauthorized disclosures of patient records.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <FERPALogo width="96" />
          <div>
            <Typography variant="h6">
              FERPA
            </Typography>
            <Typography variant="body1">
              Compliant with Family Educational Rights and Privacy Act to protect privacy of educational information
              and records being accessed by public entities.
            </Typography>
          </div>
        </InfoTile2>
      </TileGrid>
    </SectionContent>
    <SectionContent>
      <SolidButton onClick={openBeacon}>Learn More</SolidButton>
    </SectionContent>
    <SectionContent margin={{ b: 0, t: 0 }}>
      <SeparationHeader>Security</SeparationHeader>
      <TileGrid>
        <InfoTile2 align="left">
          <SecureDataLogo width="96" />
          <div>
            <Typography variant="h6">
              Encryption at rest and in transit
            </Typography>
            <Typography variant="body1">
              Your data is securely managed at every stage of implementation in accordance with industry best practices.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <SecureLoginLogo width="96" />
          <div>
            <Typography variant="h6">
              Secure login
            </Typography>
            <Typography variant="body1">
              Link your authentication protocols through a single sign-on integration eliminating the need for another
              password or use our natively supported authentication.
            </Typography>
          </div>
        </InfoTile2>
        <InfoTile2 align="left">
          <SecureCloudLogo width="96" />
          <div>
            <Typography variant="h6">
              Secure cloud storage
            </Typography>
            <Typography variant="body1">
              Your data is securely stored in AWS cloud storage which is more reliable, scalable, and secure than
              traditional on-premises storage systms.
            </Typography>
          </div>
        </InfoTile2>
      </TileGrid>
    </SectionContent>
    <SectionContent>
      <SolidButton onClick={openBeacon}>Learn More</SolidButton>
    </SectionContent>
  </PageSection>
);

export default ComplianceAndSecuritySection;
