/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto 24px auto;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 128px auto 24px auto;
    width: 1104px;
  }
`;

const ContentBlock = styled.div`
  align-self: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 104px;
  width: 720px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const Text = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }
`;

const MissionSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <MissionContent>
      <ContentBlock>
        <SectionHeader>Our mission</SectionHeader>
        <Text>
          {`We set out to build a secure, scalable cloud-based data platform that empowers
            civil servants, researchers, and policy-makers to work together on society's
            toughest challenges. Our solutions help organizations use technology to drive
            positive change in tackling recidivism, homelessness, mass incarceration, and
            other key societal welfare issues.`}
        </Text>
      </ContentBlock>
    </MissionContent>
  </PageSection>
);

export default MissionSection;
