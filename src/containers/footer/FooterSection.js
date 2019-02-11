/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-original.png';

import PageSection from '../../components/layout/PageSection';
import { N1, N2 } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

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

const Copyright = styled.span`
  font-size: 14px;
  line-height: 1.35;
`;

const FooterSection = () => (
  <PageSection bgColor={N1}>
    <Content>
      <Logo src={logoImg} alt="OpenLattice Logo" height={50} />
      <Copyright>
        Copyright © 2019 OpenLattice
      </Copyright>
    </Content>
  </PageSection>
);

export default FooterSection;
