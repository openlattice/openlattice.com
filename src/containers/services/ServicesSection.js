/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import logoImg from '../../assets/images/logo-white@3x.png';
import splashImg1 from '../../assets/images/splash_01.jpg';

import PageSection from '../../components/layout/PageSection';
import { GRAY_BG_COLOR_1 } from '../../core/style/Constants';

const Content = styled.div`
  display: block;
  margin-top: 150px;
  max-width: 500px;
`;

const Title = styled.div`
  font-family: 'Chivo', sans-serif;
  font-size: 30px;
  margin-bottom: 30px;
`;

const SubTitle = styled.div`
  font-size: 16px;
`;

const IntroSection = () => (
  <PageSection bgColor={GRAY_BG_COLOR_1}>
    <Content>
      <Title>Understand how services are delivered and consumed</Title>
      <SubTitle>
        {
          `Leverage data across public safety, healthcare systems, and social services to streamline operations,
          test interventions, and improve human outcomes.`
        }
      </SubTitle>
    </Content>
  </PageSection>
);

export default IntroSection;
