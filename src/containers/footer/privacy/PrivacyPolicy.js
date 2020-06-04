/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import {
  INTRODUCTION,
  SECTION_1,
  SECTION_2,
  SECTION_3,
  SECTION_4,
  SECTION_5,
  SECTION_6,
  SECTION_7,
  SECTION_8,
  SECTION_9,
} from './Text';

import FooterSectionWithPageLinks from '../FooterSectionWithPageLinks';
import PageSection from '../../../components/layout/NewPageSection';
import ScrollToTopOnMount from '../../../components/layout/ScrollToTopOnMount';
import * as Routes from '../../../core/router/Routes';
import { SectionContent } from '../../../components';
import { TARGET } from '../../../components/headers/MenuConsts';
import { PageIntro } from '../../../components/headers/PageHeaders';
import { NEUTRALS } from '../../../core/style/Colors';
import {
  BodyText,
  BodyTextWrapper,
  Bullet,
  BulletWrapper,
  CustomBulletedList,
  ExternalLink,
  ItemTitle,
  LastUpdated,
  ListItem,
  SiteLink,
} from '../styled/ExtendedTextStyles';

const SITE :string = ' https://openlattice.com ';
const GOOGLE_ANALYTICS :string = ' https://www.google.com/analytics ';
const GOOGLE_SUPPORT :string = ' https://support.google.com/analytics/answer/6004245';

const InnerBodyTextWrapper = styled.div`
  margin-top: 48px;
  width: 100%;
`;

const InnerBodyText = styled(BodyText)`
  margin-bottom: 16px;
`;

const InnerItemTitle = styled(ItemTitle)`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NumberedList = styled(CustomBulletedList)`
  margin-left: 10px;
`;

const NumberedListItem = styled(ListItem)`
  display: flex;
  margin: 8px 0;

  :first-of-type {
    margin-top: 18px;
  }

  :last-of-type {
    margin-bottom: 18px;
  }
`;

const Number = styled.div`
  color: ${NEUTRALS.GRAY_06};
  margin-right: 18px;
  margin-top: 2px;
`;

const BulletedListWithMargin = styled(CustomBulletedList)`
  margin-bottom: 48px;
`;

const PrivacyPolicy = () => (
  <>
    <ScrollToTopOnMount />
    <PageSection bgColor={NEUTRALS.WHITE} includeMenu>
      <SectionContent>
        <PageIntro>Privacy Policy</PageIntro>
        <LastUpdated>Last updated April 03, 2019</LastUpdated>
        <BodyTextWrapper>
          <BodyText>
            OpenLattice, Inc. (“OpenLattice,” “we,” “us,” or “our”) has created this privacy policy (this
            “Privacy Policy”) because we want you to be able to understand how personal information you provide to us
            is used and shared. This Privacy Policy relates to our information collection and us of your personal
            information through our website located at
            <SiteLink to={Routes.ROOT}>{ SITE }</SiteLink>
            (the “Site”). For the avoidance of doubt,
            this Privacy Policy does not relate to data or information owned by you or your organization (“Content”)
            that you or your organization choose to upload to the OpenLattice Platform (“Platform”) or otherwise provide
            to OpenLattice for the performance of any requested services we offer. Our use of Content is governed by our
            Terms of Service or data sharing agreements signed between OpenLattice and the respective Content owners.
            <br />
            <br />
            { INTRODUCTION.PARAGRAPH_2 }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_1.TITLE }</ItemTitle>
          <BodyText>{ SECTION_1.INTRO }</BodyText>
          <InnerBodyTextWrapper>
            <InnerItemTitle>{ SECTION_1.SECTION_1_TITLE }</InnerItemTitle>
            <BodyText>{ SECTION_1.SECTION_1_BODY }</BodyText>
          </InnerBodyTextWrapper>
          <InnerBodyTextWrapper>
            <InnerItemTitle>{ SECTION_1.SECTION_2_TITLE }</InnerItemTitle>
            <BodyText>{ SECTION_1.SECTION_2_BODY }</BodyText>
          </InnerBodyTextWrapper>
          <InnerBodyTextWrapper>
            <InnerItemTitle>{ SECTION_1.SECTION_3_TITLE }</InnerItemTitle>
            <BodyText>{ SECTION_1.SECTION_3_BODY }</BodyText>
          </InnerBodyTextWrapper>
          <InnerBodyTextWrapper>
            <InnerItemTitle>{ SECTION_1.SECTION_4_TITLE }</InnerItemTitle>
            <InnerBodyText>{ SECTION_1.SECTION_4_BODY_FIRST }</InnerBodyText>
            <NumberedList>
              {
                SECTION_1.LIST.map((text :string, index :number) => (
                  <NumberedListItem key={text}>
                    <Number>
                      { index + 1 }
                      .
                    </Number>
                    <BodyText>{ text }</BodyText>
                  </NumberedListItem>
                ))
              }
            </NumberedList>
            <InnerBodyText>
              For more information on Google Analytics, including how to opt out from certain data collection, please
              visit
              <ExternalLink href={GOOGLE_ANALYTICS} target={TARGET}>{ GOOGLE_ANALYTICS }</ExternalLink>
              and
              <ExternalLink href={GOOGLE_SUPPORT} target={TARGET}>{ GOOGLE_SUPPORT }</ExternalLink>
              .
            </InnerBodyText>
            <InnerBodyText>{ SECTION_1.SECTION_4_BODY_LAST }</InnerBodyText>
          </InnerBodyTextWrapper>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_2.TITLE }</ItemTitle>
          <BodyText>{ SECTION_2.INTRO_1 }</BodyText>
          <br />
          <br />
          <BodyText>{ SECTION_2.INTRO_2 }</BodyText>
          <br />
          <br />
          <BodyText>{ SECTION_2.INTRO_3 }</BodyText>
          <BulletedListWithMargin>
            {
              SECTION_2.BULLET_POINTS.map((text :string) => (
                <ListItem key={text}>
                  <BulletWrapper>
                    <Bullet />
                  </BulletWrapper>
                  <BodyText>{ text }</BodyText>
                </ListItem>
              ))
            }
          </BulletedListWithMargin>
          <InnerItemTitle>{ SECTION_2.SECTION_TITLE }</InnerItemTitle>
          <BodyText>{ SECTION_2.SECTION_BODY }</BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_3.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_3.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_4.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_4.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_4.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_4.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_5.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_5.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_6.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_6.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_7.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_7.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_8.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_8.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ SECTION_9.TITLE }</ItemTitle>
          <BodyText>
            { SECTION_9.BODY }
          </BodyText>
        </BodyTextWrapper>
      </SectionContent>
    </PageSection>
    <FooterSectionWithPageLinks />
  </>
);

export default PrivacyPolicy;
