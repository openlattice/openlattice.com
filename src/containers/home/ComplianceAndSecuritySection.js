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
  Soc2Logo,
} from '../../assets/logos';
import { GDPRLogo } from '../../assets/svg/logos';
import {
  PageSection,
  SectionContent,
  Tile,
  Typography,
} from '../../components';
import { MEDIA_QUERY_LG, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const LogosWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 32px;

  > img {
    margin-bottom: 30px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    :first-of-type {
      margin-left: 0;
    }

    :last-of-type {
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    margin: 32px 16px;
  }
`;

const ComplianceAndSecuritySection = () => (
  <PageSection>
    <SectionContent>
      <Tile>
        <Typography maxWidth={{ lg: 624 }} textAlign="center" variant="h2">
          Designed to accommodate your security and compliance needs
        </Typography>
      </Tile>
      <Tile>
        <Typography maxWidth={{ lg: 528 }} textAlign="center" variant="body2">
          OpenLattice maintains the following security and compliance requirements:
        </Typography>
      </Tile>
      <LogosWrapper>
        <Logo>
          <CJISLogo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">CJIS</Typography>
        </Logo>
        <Logo>
          <Soc2Logo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">Soc2 Type II</Typography>
        </Logo>
        <Logo>
          <HIPAALogo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">HIPAA</Typography>
        </Logo>
        <Logo>
          <FERPALogo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">FERPA</Typography>
        </Logo>
        <Logo>
          <CFRLogo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">42 CFR Part 2</Typography>
        </Logo>
        <Logo>
          <GDPRLogo width={96} />
          <Typography fontWeight={600} textAlign="center" variant="body2">GDPR</Typography>
        </Logo>
      </LogosWrapper>
    </SectionContent>
  </PageSection>
);

export default ComplianceAndSecuritySection;
