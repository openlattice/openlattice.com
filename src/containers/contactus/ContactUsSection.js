/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';

import { ContactUsPurple, ContactUsWhite } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { contactUsLink, TARGET } from '../../components/headers/MenuConsts';

const SectionContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 40px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 132px 0;
    text-align: left;
  }
`;

const Message = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 26px;
  font-weight: 500;
  line-height: 150%;
  width: 528px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-bottom: 30px;
    font-size: 18px;
    width: auto;
  }
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 0 16px;
  grid-template-columns: repeat(2, 1fr);
`;

const ContactUsSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <Message>
        If you have a project in mind or just want to learn more, don’t hesitate to contact us.
      </Message>
      <ButtonGroup>
        <ContactUsWhite>Send an email</ContactUsWhite>
        <ContactUsPurple href={contactUsLink} target={TARGET}>Schedule a call</ContactUsPurple>
      </ButtonGroup>
    </SectionContent>
  </PageSection>
);

export default ContactUsSection;
