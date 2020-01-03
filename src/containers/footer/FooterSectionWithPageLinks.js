/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyleUtils } from 'lattice-ui-kit';

import PageSection from '../../components/layout/PageSection';
import GrayOLLogo from '../../assets/logos/ol-gray-logo.svg';

import * as Routes from '../../core/router/Routes';
import { NEUTRALS, PINKS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';
import { helpCenterLink, TARGET } from '../../components/headers/MenuConsts';

const { getStyleVariation } = StyleUtils;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px auto 0 auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    justify-content: space-between;
    margin: 136px 0 24px 0;
    text-align: left;
  }
`;

const LinksOuterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 176px;
  }
`;

const LinkGroupWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    align-items: center;
    margin-bottom: 40px;
  }
`;

const InnerLinkGroupWrapper = styled(LinkGroupWrapper)`
  margin-top: 52px;
`;

const Header = styled.div`
  color: ${NEUTRALS.WHITE};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 18px;
  }
`;

const HeaderWithTag = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 14px;
`;

const getTagColor = getStyleVariation('tagType', {
  beta: PINKS.PINK02,
  comingSoon: NEUTRALS.GRAY_13
});

const Tag = styled.div`
  background-color: ${getTagColor};
  border-radius: 3px;
  color: ${NEUTRALS.WHITE};
  font-size: 10px;
  font-weight: bold;
  line-height: 150%;
  margin-left: 12px;
  padding: 1px 5px;
  text-transform: uppercase;
`;

const linkStyles = css`
  color: ${NEUTRALS.GRAY_12};
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 16px;
  text-decoration: none;

  :first-of-type {
    margin-top: 14px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
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

const LinkWithTag = styled(HeaderWithTag)`
  margin: 0;
  margin-bottom: 16px;

  ${InternalLink} {
    margin: 0;
  }
`;

const SectionFooterWrapper = styled.div`
  width: 100%;
`;

const Line = styled.div`
  border: 1px solid ${NEUTRALS.GRAY_14};
  height: 0;
  margin-bottom: 24px;
  width: 100%;
`;

const SectionFooterInnerWrapper = styled(LinksOuterWrapper)`
  align-items: center;
  margin: 0;
`;

const Copyright = styled.div`
  ${linkStyles}
  font-weight: normal;
`;

const FooterSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_11}>
    <Content>
      <LinksOuterWrapper>
        <LinkGroupWrapper>
          <Header>Company</Header>
          <InternalLink to={Routes.ROOT}>Home</InternalLink>
          <InternalLink to={Routes.ABOUT}>About</InternalLink>
          <ExternalLink href="https://angel.co/company/openlattice/jobs" target={TARGET}>Jobs</ExternalLink>
          <ExternalLink href="https://medium.com/openlattice" target={TARGET}>Blog</ExternalLink>
        </LinkGroupWrapper>
        <div>
          <LinkGroupWrapper>
            <Header>Platform</Header>
            <InternalLink to={Routes.PLATFORM}>Platform overview</InternalLink>
            <InternalLink to={Routes.WORKING_WITH_US}>Working with us</InternalLink>
          </LinkGroupWrapper>
          <InnerLinkGroupWrapper>
            <HeaderWithTag>
              <Header>Partners</Header>
              <Tag tagType="comingSoon">Coming soon</Tag>
            </HeaderWithTag>
            <FakeLink>Technology partners</FakeLink>
            <FakeLink>Community Partners</FakeLink>
          </InnerLinkGroupWrapper>
        </div>
        <LinkGroupWrapper>
          <Header>Products</Header>
          <InternalLink to={Routes.PRODUCTS}>All products</InternalLink>
          <InternalLink to={Routes.CARE}>Care</InternalLink>
          <InternalLink to={Routes.PCM}>Pretrial Case Management</InternalLink>
          <LinkWithTag>
            <InternalLink to={Routes.RESEARCH_HUB}>Research Hub</InternalLink>
            <Tag tagType="beta">BETA</Tag>
          </LinkWithTag>
          <InternalLink to={Routes.OTHER_PRODUCTS}>Other products</InternalLink>
        </LinkGroupWrapper>
        <LinkGroupWrapper>
          <Header>Support</Header>
          <ExternalLink href={helpCenterLink} target={TARGET}>Help Center</ExternalLink>
          <InternalLink to={Routes.TERMS_OF_SERVICE}>Terms of Service</InternalLink>
          <InternalLink to={Routes.PRIVACY_POLICY}>Privacy Policy</InternalLink>
        </LinkGroupWrapper>
      </LinksOuterWrapper>
      <SectionFooterWrapper>
        <Line />
        <SectionFooterInnerWrapper>
          <img src={GrayOLLogo} alt="" />
          <Copyright>© 2019 OpenLattice, Inc. All rights reserved.</Copyright>
        </SectionFooterInnerWrapper>
      </SectionFooterWrapper>
    </Content>
  </PageSection>
);

export default FooterSection;
