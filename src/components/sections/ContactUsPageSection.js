import React from 'react';

import styled from 'styled-components';

import SectionContent from './SectionContent';

import PageSection from '../layout/NewPageSection';
import { NEUTRALS } from '../../core/style/Colors';
import { GRID_GAP, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';
import { ContactUsPurple, ContactUsWhite } from '../controls';

const ContactUsSectionContent = styled(SectionContent)`
  margin: 128px 0;

  h3 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
    max-width: 528px;
    text-align: center;

    @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
      text-align: left;
    }
  }
`;

const ContactUsGrid = styled.div`
  align-items: center;
  display: grid;
  grid-gap: ${GRID_GAP}px;
  grid-template-columns: auto;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(328px, auto));
  }
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: auto;
  justify-content: center;
  margin: 0 auto;
  max-width: 336px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: auto auto;
  }
`;

const ContactUsPageSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <ContactUsSectionContent>
      <ContactUsGrid>
        <h3>
          If you have a project in mind or just want to learn more, don’t hesitate to contact us.
        </h3>
        <ButtonsGrid>
          <ContactUsWhite onClick={openBeacon}>Send an email</ContactUsWhite>
          <ContactUsPurple onClick={openBeacon}>Schedule a call</ContactUsPurple>
        </ButtonsGrid>
      </ContactUsGrid>
    </ContactUsSectionContent>
  </PageSection>
);

export default ContactUsPageSection;
