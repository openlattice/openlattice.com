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
  justify-content: space-between;
  margin-bottom: 22px;
  margin-top: 22px;
`;

const Copyright = styled.span`
  font-size: 14px;
`;

const FooterSection = () => (
  <PageSection bgColor={N1}>
    <Content>
      <img src={logoImg} alt="OpenLattice Logo" height={50} />
      <Copyright>Copyright © 2018 OpenLattice</Copyright>
    </Content>
  </PageSection>
);

export default FooterSection;
