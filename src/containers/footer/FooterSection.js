/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-original@3x.png';

import PageSection from '../../components/layout/PageSection';
import { N1, N2 } from '../../core/style/Colors';

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

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled.img`
  margin: 0 0 30px 0;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Copyright = styled.span`
  font-size: 14px;
`;

const FooterSection = () => (
  <PageSection bgColor={N1}>
    <Content>
      <Logo src={logoImg} alt="OpenLattice Logo" height={50} />
      <Copyright>Copyright © 2018 OpenLattice</Copyright>
    </Content>
  </PageSection>
);

export default FooterSection;
