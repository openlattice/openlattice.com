/*
 * @flow
 */

import React from 'react';

import {
  Header,
  PageSection,
  SectionContent,
  SubHeader,
} from '../../components';

const HISTORY_SECTION = 'We set out to build a secure, scalable cloud-based data platform'
+ ' that empowers researchers, civil servants, and policy-makers to work together on society\'s'
+ ' toughest challenges. Where we landed was working with researchers and primary investigators'
+ ' to design and build modern discovery and data collection tools that expand the possibilities'
+ ' of research and advance our societal knowledge. Our core solutions help researchers use'
+ ' technology to uncover new insights and drive positive change in important cognitive,'
+ ' developmental, behavioral and mental health areas.';

const HistorySection = () => (
  <PageSection>
    <SectionContent maxWidth={{ sm: 528, md: 720 }}>
      <Header as="h2">Our history</Header>
      <SubHeader align="left" as="h5">{HISTORY_SECTION}</SubHeader>
    </SectionContent>
  </PageSection>
);

export default HistorySection;
