/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import OpenLatticeIconSVG from '../../assets/svg/icons/ol-icon-gray.svg';
import PageSection from '../../components/layout/NewPageSection';
import * as Routes from '../../core/router/Routes';
import { SectionContent } from '../../components';
import { TARGET, helpCenterLink } from '../../components/headers/MenuConsts';
import { Tag } from '../../components/tags/Tag';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const Header = styled.div`
  color: ${NEUTRALS.WHITE};
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

const SectionFooterWrapper = styled.div`
  width: 100%;
`;

const Line = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_14};
  height: 0;
  width: 100%;
`;

const SectionFooterInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 24px 0;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    margin: 0;
  }
`;

const Copyright = styled.div`
  ${linkStyles}
  font-weight: normal;
  margin: 16px 0;
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
          <ExternalLink href="https://jobs.lever.co/openlattice" target={TARGET}>Jobs</ExternalLink>
          <ExternalLink href="https://medium.com/openlattice" target={TARGET}>Blog</ExternalLink>
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
          <InternalLink to={Routes.PRODUCTS}>All products</InternalLink>
          <InternalLink to={Routes.CARE}>Care</InternalLink>
          <InternalLink to={Routes.PCM}>Pretrial Case Management</InternalLink>
          <HeaderWithTag>
            <InternalLink to={Routes.RESEARCH_HUB}>Research Hub</InternalLink>
            <Tag tagType="beta">BETA</Tag>
          </HeaderWithTag>
          <InternalLink to={Routes.PRODUCTS}>Other products</InternalLink>
        </section>
        <section>
          <Header>Support</Header>
          <ExternalLink href={helpCenterLink} target={TARGET}>Help Center</ExternalLink>
          <InternalLink to={Routes.TERMS_OF_SERVICE}>Terms of Service</InternalLink>
          <InternalLink to={Routes.PRIVACY_POLICY}>Privacy Policy</InternalLink>
        </section>
      </FooterGrid>
    </SectionContent>
    <SectionFooterWrapper>
      <Line />
      <SectionFooterInnerWrapper>
        <img src={OpenLatticeIconSVG} alt="" />
        <Copyright>© 2020 OpenLattice, Inc. All rights reserved.</Copyright>
      </SectionFooterInnerWrapper>
    </SectionFooterWrapper>
  </PageSection>
);

export default FooterSection;
