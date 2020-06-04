/*
 * @flow
 */

import React from 'react';

import styled from 'styled-components';

import { CUSTOMERS } from './constants/customers';

import PageSection from '../../components/layout/NewPageSection';
import { OurCustomersMapGraphic } from '../../assets/svg/graphics';
import { SectionContent } from '../../components';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const CitizensImpacted = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 36px;
  font-weight: 600;
  line-height: 130%;
  margin-bottom: 16px;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    font-size: 56px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 64px;
  }
`;

const CitizensImpactedHeader = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  line-height: 150%;
  margin-bottom: 16px;
  text-align: left;
  text-transform: uppercase;
`;

const MapSection = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 128px;
  width: 100%;

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: column;
  }
`;

const Map = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  margin-top: 100px;

  > img {
    max-width: 650px;
    width: 100%;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_LG}px) {
    align-items: center;
    width: 100%;
  }
`;

const MapFootnote = styled.div`
  align-self: flex-end;
  color: ${NEUTRALS.GRAY_08};
  font-size: 12px;
  line-height: 150%;
  margin-top: 24.2px;
`;

const CustomersGrid = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: auto;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, auto));
    width: 100%;
  }
`;

const Customer = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin-left: 20%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-left: 10%;
  }
`;


const OurCustomersSection = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <SectionContent>
      <MapSection>
        <div>
          <CitizensImpactedHeader>Citizens impacted</CitizensImpactedHeader>
          <CitizensImpacted>13,329,315</CitizensImpacted>
        </div>
        <Map>
          <OurCustomersMapGraphic />
          <MapFootnote>Number of customers in each area</MapFootnote>
        </Map>
      </MapSection>
      <CustomersGrid>
        {
          CUSTOMERS.map((customer :string) => (
            <Customer key={customer}>{customer}</Customer>
          ))
        }
      </CustomersGrid>
    </SectionContent>
  </PageSection>
);

export default OurCustomersSection;
