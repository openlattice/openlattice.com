/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import PageSection from '../../../components/layout/NewPageSection';

import * as Routes from '../../../core/router/Routes';
import { PageIntro } from '../../../components/headers/PageHeaders';
import { NEUTRALS, PURPLES } from '../../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../../core/style/Sizes';
import {
  INTRODUCTION,
  ITEM_1,
  ITEM_3,
  ITEM_4,
  ITEM_5
} from './Text';

const SITE :string = ' https://openlattice.com ';
const PRIVACY_LINK :string = ' https://openlattice.com/privacy ';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 208px auto 200px auto;
  }
`;

const sharedTextStyles = css`
  font-size: 16px;
  line-height: 150%;
`;

const LastUpdated = styled.div`
  color: ${NEUTRALS.GRAY_08};
  margin-bottom: 104px;
  text-align: center;
  ${sharedTextStyles}
`;

const BodyTextWrapper = styled.div`
  width: 720px;
  margin-bottom: 104px;
`;

const BodyText = styled.div`
  color: ${NEUTRALS.GRAY_06};
  text-align: left;
  width: 100%;
  ${sharedTextStyles}
`;

const SiteLink = styled(NavLink)`
  color: ${PURPLES.PP08};
  text-decoration: none;
  ${sharedTextStyles}
`;

const ItemTitle = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 16px;
  text-align: left;
`;

const TermsOfService = () => (
  <PageSection bgColor={NEUTRALS.WHITE} includeMenu>
    <Content>
      <PageIntro>Terms of Service</PageIntro>
      <LastUpdated>Last updated April 03, 2019</LastUpdated>
      <BodyTextWrapper>
        <BodyText>
          OpenLattice, Inc., is a cloud-based platform that enables people and organizations to securely
          and compliantly share sensitive data. This website,
          <SiteLink to={Routes.ROOT}>{SITE}</SiteLink>
          (the “Site”) is owned and operated
          by OpenLattice, Inc. (“OpenLattice”, “we”, or “us”). By registering for, using, or accessing the Service,
          inclusive of Platform features, you agree to be bound by these terms of service (“Terms”). If you don’t agree
          to these Terms, you must discontinue use of the Services. If you have any questions about these terms, please
          contact us: support@openlattice.com. For the avoidance of doubt, these Terms do not govern our customers’ use
          of the services and/or products through paid licenses or signed data sharing agreements.
          <br />
          <br />
          { INTRODUCTION.PARAGRAPH_2 }
          <br />
          <br />
          { INTRODUCTION.PARAGRAPH_3 }
        </BodyText>
      </BodyTextWrapper>
      <BodyTextWrapper>
        <ItemTitle>{ ITEM_1.TITLE }</ItemTitle>
        <BodyText>
          Your use of the Site may involve the transmission to us of certain personal information. Our policies with
          respect to the collection and use of such personal information are governed by our Privacy Policy (located at
          <SiteLink to={Routes.PRIVACY_POLICY}>{PRIVACY_LINK}</SiteLink>
          which is hereby incorporated by reference in its entirety. You acknowledge
          your use of the Services is subject to our Privacy Policy and that it identifies how we collect, store, and
          use certain information.
        </BodyText>
      </BodyTextWrapper>
      <BodyTextWrapper>
        <ItemTitle>{ ITEM_3.TITLE }</ItemTitle>
        <BodyText>
          { ITEM_3.PARAGRAPH_1 }
          <br />
          <br />
          { ITEM_3.PARAGRAPH_2 }
        </BodyText>
      </BodyTextWrapper>
      <BodyTextWrapper>
        <ItemTitle>{ ITEM_4.TITLE }</ItemTitle>
        <BodyText>
          { ITEM_4.PARAGRAPH_1 }
          <br />
          <br />
          { ITEM_4.PARAGRAPH_2 }
          <br />
          <br />
          { ITEM_4.PARAGRAPH_3 }
          <br />
          <br />
          { ITEM_4.PARAGRAPH_4 }
        </BodyText>
      </BodyTextWrapper>
      <BodyTextWrapper>
        <ItemTitle>{ ITEM_5.TITLE }</ItemTitle>
        <BodyText>
          { ITEM_5.BODY }
        </BodyText>
      </BodyTextWrapper>
    </Content>
  </PageSection>
);

export default TermsOfService;
