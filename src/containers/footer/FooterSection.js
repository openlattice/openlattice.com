/*
 * @flow
 */

import React from 'react';

import styled, { css } from 'styled-components';
import { Colors } from 'lattice-ui-kit';
import { NavLink } from 'react-router-dom';

import OpenLatticeIconSVG from '../../assets/svg/icons/ol-icon-gray.svg';
import * as Routes from '../../core/router/Routes';
import {
  PageSection,
  SectionContent,
  Tag,
  Typography,
} from '../../components';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

const { NEUTRAL } = Colors;

const HeaderWithTag = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 550px) {
    justify-content: flex-start;
  }
`;

const linkStyles = css`
  color: ${NEUTRAL.N400};
  text-decoration: none;
`;

const InternalLink = styled(NavLink)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
`;

const FakeLink = styled.div`
  ${linkStyles}
  color: ${NEUTRAL.N700};
`;

const Copyright = styled.div`
  align-items: center;
  border-top: 1px solid ${NEUTRAL.N800};
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
  <PageSection bgColor={NEUTRAL.N900}>
    <SectionContent>
      <FooterGrid>
        <section>
          <Typography color="white" variant="h6">Company</Typography>
          <InternalLink to={Routes.ROOT}>
            <Typography variant="body1">
              Home
            </Typography>
          </InternalLink>
          <InternalLink to={Routes.ABOUT}>About</InternalLink>
          <ExternalLink href="https://jobs.lever.co/openlattice" rel="noreferrer" target="_blank">Jobs</ExternalLink>
          <ExternalLink href="https://medium.com/openlattice" rel="noreferrer" target="_blank">Blog</ExternalLink>
        </section>
        <section>
          <section>
            <Typography color="white" variant="h6">Platform</Typography>
            <InternalLink to={Routes.PLATFORM_GOVERNMENT}>
              <Typography variant="body1">
                Platform - Government
              </Typography>
            </InternalLink>
            <InternalLink to={Routes.PLATFORM_RESEARCH}>
              <Typography variant="body1">
                Platform - Research
              </Typography>
            </InternalLink>
            <InternalLink to={Routes.WORKING_WITH_US_GOVERNMENT}>
              <Typography variant="body1">
                Working with Us - Government
              </Typography>
            </InternalLink>
            <InternalLink to={Routes.WORKING_WITH_US_RESEARCH}>
              <Typography variant="body1">
                Working with Us - Government
              </Typography>
            </InternalLink>
          </section>
          <section style={{ marginTop: '48px' }}>
            <HeaderWithTag>
              <Typography color="white" variant="h6">Partners</Typography>
              <Tag tagType="comingSoon">Coming soon</Tag>
            </HeaderWithTag>
            <FakeLink>Technology partners</FakeLink>
            <FakeLink>Community Partners</FakeLink>
          </section>
        </section>
        <section>
          <Typography color="white" variant="h6">Products</Typography>
          <InternalLink to={Routes.PRODUCTS_CARE}>
            <Typography variant="body1">
              Care
            </Typography>
          </InternalLink>
          <InternalLink to={Routes.PRODUCTS_PCM}>
            <Typography variant="body1">
              Pretrial Case Management
            </Typography>
          </InternalLink>
          <InternalLink to={Routes.PRODUCTS_CHRONICLE}>
            <Typography variant="body1">
              Chronicle
            </Typography>
          </InternalLink>
        </section>
        <section>
          <Typography color="white" variant="h6">Support</Typography>
          <ExternalLink href="https://help.openlattice.com" rel="noreferrer" target="_blank">Help Center</ExternalLink>
          <InternalLink to={Routes.TERMS_OF_SERVICE}>
            <Typography variant="body1">
              Terms of Service
            </Typography>
          </InternalLink>
          <InternalLink to={Routes.PRIVACY_POLICY}>
            <Typography variant="body1">
              Privacy Policy
            </Typography>
          </InternalLink>
        </section>
      </FooterGrid>
    </SectionContent>
    <SectionContent margin={{ b: 0, t: 0 }}>
      <Copyright>
        <img src={OpenLatticeIconSVG} alt="" />
        <Typography color={NEUTRAL.N400} variant="body1">
          © 2020 OpenLattice, Inc. All rights reserved.
        </Typography>
      </Copyright>
    </SectionContent>
  </PageSection>
);

export default FooterSection;
