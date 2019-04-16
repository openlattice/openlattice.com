/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-original.png';

import PageSection from '../../components/layout/PageSection';
import { N1, N2, PP4 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const helpLink = 'https://help.openlattice.com';
/*
 * styled components
 */

const Content = styled.div`
  align-items: center;
  color: ${N2};
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  margin-top: 22px;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  margin: 0 0 30px 0;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 0;
  }
`;

const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHelpLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: ${PP4};
  text-decoration: none;
`;

const Copyright = styled.span`
  font-size: 14px;
  line-height: 1.35;
`;

const FooterSection = () => (
  <PageSection bgColor={N1}>
    <Content>
      <Logo src={logoImg} alt="OpenLattice Logo" height={50} />
      <RightSectionWrapper>
        <StyledHelpLink href={helpLink}>
          Help Center
        </StyledHelpLink>
        <Copyright>
          Copyright © 2019 OpenLattice
        </Copyright>
      </RightSectionWrapper>
    </Content>
  </PageSection>
);

export default FooterSection;
