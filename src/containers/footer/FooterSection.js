/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import OpenLatticeIconSVG from '../../assets/svg/icons/ol-icon-gray.svg';
import * as Routes from '../../core/router/Routes';
import { PageSection, SectionContent, Tag } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const Header = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    font-size: 18px;
  }
`;

const HeaderWithTag = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 550px) {
    justify-content: flex-start;
  }
`;

const linkStyles = css`
  color: ${NEUTRALS.GRAY_12};
  font-size: 16px;
  text-decoration: none;

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    font-size: 14px;
  }
`;

const InternalLink = styled(NavLink)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
`;

const FakeLink = styled.div`
  ${linkStyles}
  color: ${NEUTRALS.GRAY_13};
`;

const Copyright = styled.div`
  align-items: center;
  border-top: 1px solid ${NEUTRALS.GRAY_14};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding-top: 24px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    margin: 0;
  }

  > span {
    ${linkStyles}
    font-weight: normal;
    margin: 16px 0;
  }
`;

const FooterGrid = styled.div`
  align-items: flex-start;
  display: grid;
  grid-gap: 48px;
  grid-template-columns: auto;

  @media only screen and (min-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(192px, auto));
    text-align: left;
    width: 100%;
  }

  section {
    display: grid;
    grid-gap: 16px;
    text-align: center;

    @media only screen and (min-width: 550px) {
      text-align: left;
    }
  }
`;

const FooterSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_11}>
    <SectionContent>
      <FooterGrid>
        <section>
          <Header>Company</Header>
          <InternalLink to={Routes.ROOT}>Home</InternalLink>
          <InternalLink to={Routes.ABOUT}>About</InternalLink>
          <ExternalLink href="https://jobs.lever.co/openlattice" rel="noreferrer" target="_blank">Jobs</ExternalLink>
          <ExternalLink href="https://medium.com/openlattice" rel="noreferrer" target="_blank">Blog</ExternalLink>
        </section>
        <section>
          <section>
            <Header>Platform</Header>
            <InternalLink to={Routes.PLATFORM}>Platform overview</InternalLink>
            <InternalLink to={Routes.WORKING_WITH_US}>Working with us</InternalLink>
          </section>
          <section style={{ marginTop: '48px' }}>
            <HeaderWithTag>
              <Header>Partners</Header>
              <Tag tagType="comingSoon">Coming soon</Tag>
            </HeaderWithTag>
            <FakeLink>Technology partners</FakeLink>
            <FakeLink>Community Partners</FakeLink>
          </section>
        </section>
        <section>
          <Header>Products</Header>
          <InternalLink to={Routes.PRODUCTS_CARE}>Care</InternalLink>
          <InternalLink to={Routes.PRODUCTS_PCM}>Pretrial Case Management</InternalLink>
          <InternalLink to={Routes.PRODUCTS_CHRONICLE}>Chronicle</InternalLink>
        </section>
        <section>
          <Header>Support</Header>
          <ExternalLink href="https://help.openlattice.com" rel="noreferrer" target="_blank">Help Center</ExternalLink>
          <InternalLink to={Routes.TERMS_OF_SERVICE}>Terms of Service</InternalLink>
          <InternalLink to={Routes.PRIVACY_POLICY}>Privacy Policy</InternalLink>
        </section>
      </FooterGrid>
    </SectionContent>
    <SectionContent margin="0">
      <Copyright>
        <img src={OpenLatticeIconSVG} alt="" />
        <span>© 2020 OpenLattice, Inc. All rights reserved.</span>
      </Copyright>
    </SectionContent>
  </PageSection>
);

export default FooterSection;
