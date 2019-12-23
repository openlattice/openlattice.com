/*
 * @flow
 */

import React from 'react';

import PageSection from '../../components/layout/NewPageSection';

import { PageIntro, PageTitle } from '../../components/headers/PageHeaders';
import { Content, PageDescriptionWrapper } from '../../components/layout/IntroComponents';
import { ScheduleACallPurple } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { scheduleACallLink, TARGET } from '../../components/headers/MenuConsts';

const ProductsIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <Content>
      <PageTitle>Products</PageTitle>
      <PageIntro>
        Solve modern problems with modern solutions.
      </PageIntro>
      <PageDescriptionWrapper>
        {`Use data-driven workflows to accurately and efficiently identify problems,
          take necessary actions, and track outcomes.`}
      </PageDescriptionWrapper>
      <ScheduleACallPurple
          href={scheduleACallLink}
          target={TARGET}>
        Schedule a call
      </ScheduleACallPurple>
    </Content>
  </PageSection>
);

export default ProductsIntro;
