import React from 'react';

import styled from 'styled-components';

import PageSection from '../layout/NewPageSection';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';
import { ContactUsPurple } from '../controls';

const ContactUsWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin: 120px 0;
  max-width: ${CONTENT_WIDTH}px;
  text-align: center;
  width: 100%;

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  ${ContactUsPurple} {
    margin-top: 30px;
  }
`;

const ContactUsPageSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <ContactUsWrapper>
      <h3>If you have a project in mind or just want to learn more, don’t hesitate to contact us.</h3>
      <ContactUsPurple onClick={openBeacon}>Contact Us</ContactUsPurple>
    </ContactUsWrapper>
  </PageSection>
);

export default ContactUsPageSection;
