/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import PageSection from '../../../components/layout/NewPageSection';
import FooterSectionWithPageLinks from '../FooterSectionWithPageLinks';

import * as Routes from '../../../core/router/Routes';
import { PageIntro } from '../../../components/headers/PageHeaders';
import { NEUTRALS, PURPLES } from '../../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';
import { TARGET } from '../../../components/headers/MenuConsts';
import {
  INTRODUCTION,
  ITEM_1,
  ITEM_2,
  ITEM_3,
  ITEM_4,
  ITEM_5,
  ITEM_6,
  ITEM_7,
  ITEM_8,
  ITEM_9,
  ITEM_10,
  ITEM_11,
  ITEM_12,
  ITEM_13,
  ITEM_14
} from './Text';

const SITE :string = ' https://openlattice.com ';
const PRIVACY_LINK :string = ' https://openlattice.com/privacy ';
const JAMS :string = ' http://www.jamsadr.com';

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

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
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

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const BodyText = styled.div`
  color: ${NEUTRALS.GRAY_06};
  text-align: left;
  width: 100%;
  ${sharedTextStyles}
`;

const sharedLinkStyles = css`
  color: ${PURPLES.PP08};
  text-decoration: none;
`;

const SiteLink = styled(NavLink)`
  ${sharedLinkStyles}
  ${sharedTextStyles}
`;

const ExternalLink = styled.a`
  ${sharedLinkStyles}
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

const FakeBulletedList = styled.div`
  margin-left: 2px;
  width: 100%;
`;
const FakeInnerBulletedList = styled.div`
  margin-left: 34px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-left: 24px;
  }
`;

const ListItem = styled.div`
  display: flex;
  margin: 4px 0 4px 5px;

  :first-of-type {
    margin-top: 16px;
  }

  :last-of-type {
    margin-bottom: 16px;
  }
`;

const BulletWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;

const Bullet = styled.div`
  background-color: ${NEUTRALS.GRAY_06};
  border-radius: 50%;
  height: 8px;
  margin-right: 16px;
  margin-top: 9px;
  width: 8px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 6px;
    width: 6px;
  }
`;

const TermsOfService = () => (
  <>
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
            inclusive of Platform features, you agree to be bound by these terms of service (“Terms”). If you don’t
            agree to these Terms, you must discontinue use of the Services. If you have any questions about these
            terms, please contact us: support@openlattice.com. For the avoidance of doubt, these Terms do not
            govern our customers’ use of the services and/or products through paid licenses or signed data
            sharing agreements.
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
            respect to the collection and use of such personal information are governed by our Privacy Policy
            (located at
            <SiteLink to={Routes.PRIVACY_POLICY}>{PRIVACY_LINK}</SiteLink>
            which is hereby incorporated by reference in its entirety. You acknowledge
            your use of the Services is subject to our Privacy Policy and that it identifies how we collect, store, and
            use certain information.
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_2.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_2.TOP_LINE }
            <FakeBulletedList>
              {
                ITEM_2.MAIN_BULLET_POINTS.slice(0, 3).map((text :string) => (
                  <ListItem key={text}>
                    <BulletWrapper>
                      <Bullet />
                    </BulletWrapper>
                    <div>{ text }</div>
                  </ListItem>
                ))
              }
            </FakeBulletedList>
            <FakeInnerBulletedList>
              {
                ITEM_2.INNER_BULLET_POINTS.map((text :string) => (
                  <ListItem key={text}>
                    <BulletWrapper>
                      <Bullet />
                    </BulletWrapper>
                    <div>{ text }</div>
                  </ListItem>
                ))
              }
            </FakeInnerBulletedList>
            <FakeBulletedList>
              {
                ITEM_2.MAIN_BULLET_POINTS.slice(3).map((text :string) => (
                  <ListItem key={text}>
                    <BulletWrapper>
                      <Bullet />
                    </BulletWrapper>
                    <div>{ text }</div>
                  </ListItem>
                ))
              }
            </FakeBulletedList>
            { ITEM_2.BOTTOM_LINE }
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
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_6.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_6.PARAGRAPH_1 }
            <br />
            <br />
            { ITEM_6.PARAGRAPH_2 }
            <br />
            <br />
            { ITEM_6.PARAGRAPH_3 }
            <br />
            <br />
            { ITEM_6.PARAGRAPH_4 }
            <br />
            <br />
            { ITEM_6.PARAGRAPH_5 }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_7.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_7.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_8.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_8.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_9.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_9.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_10.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_10.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_11.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_11.PARAGRAPH_1 }
            <br />
            <br />
            { ITEM_11.PARAGRAPH_2 }
            <br />
            <br />
            { ITEM_11.PARAGRAPH_3 }
            <br />
            <br />
            { ITEM_11.PARAGRAPH_4 }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_12.TITLE }</ItemTitle>
          <BodyText>
            In the event of a dispute arising under or relating to this Agreement or any other products or services
            provided by us (each, a “Dispute”), either party may elect to finally and exclusively resolve the dispute
            by binding arbitration governed by the Federal Arbitration Act (“FAA”). Any election to arbitrate, at any
            time, shall be final and binding on the other party. IF EITHER PARTY CHOOSES ARBITRATION, NEITHER PARTY
            SHALL HAVE THE RIGHT TO LITIGATE SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL, EXCEPT EITHER PARTY MAY
            BRING ITS CLAIM IN ITS LOCAL SMALL CLAIMS COURT, IF PERMITTED BY THAT SMALL CLAIMS COURT RULES AND IF
            WITHIN SUCH COURT’S JURISDICTION. ARBITRATION IS DIFFERENT FROM COURT, AND DISCOVERY AND APPEAL RIGHTS
            MAY ALSO BE LIMITED IN ARBITRATION. All disputes will be resolved before a neutral arbitrator, whose
            decision will be final except for a limited right of appeal under the FAA. The arbitration shall be
            commenced and conducted by the Judicial Arbitration and Mediation Services (“JAMS”) pursuant to its
            then current Comprehensive Arbitration Rules and Procedures and in accordance with the Expedited
            Procedures in those rules, or, where appropriate, pursuant to JAMS’ Streamlined Arbitration Rules
            and Procedures. All applicable JAMS’ rules and procedures are available at the JAMS website
            <ExternalLink href={JAMS} target={TARGET}>{ JAMS }</ExternalLink>
            .
            Each party will be responsible for paying any JAMS filing, administrative and
            arbitrator fees in accordance with JAMS rules. Judgment on the arbitrator’s award may be entered in
            any court having jurisdiction. This clause shall not preclude parties from seeking provisional
            remedies in aid of arbitration from a court of appropriate jurisdiction. The arbitration may be
            conducted in person, through the submission of documents, by phone, or online. If conducted in
            person, the arbitration shall take place in the United States county where you reside. The parties may
            litigate in court to compel arbitration, to stay a proceeding pending arbitration, or to confirm, modify,
            vacate or enter judgment on the award entered by the arbitrator. The parties shall cooperate in good faith
            in the voluntary and informal exchange of all non-privileged documents and other information (including
            electronically stored information) relevant to the Dispute immediately after commencement of the
            arbitration. Nothing in this Agreement will prevent OpenLattice from seeking injunctive relief in any
            court of competent jurisdiction as necessary to protect OpenLattice’s proprietary interests.
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_13.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_13.BODY }
          </BodyText>
        </BodyTextWrapper>
        <BodyTextWrapper>
          <ItemTitle>{ ITEM_14.TITLE }</ItemTitle>
          <BodyText>
            { ITEM_14.PARAGRAPH_1 }
            <br />
            <br />
            { ITEM_14.PARAGRAPH_2 }
          </BodyText>
        </BodyTextWrapper>
      </Content>
    </PageSection>
    <FooterSectionWithPageLinks />
  </>
);

export default TermsOfService;
