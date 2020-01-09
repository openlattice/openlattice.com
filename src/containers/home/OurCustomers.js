/*
 * @flow
 */

import React from 'react';
import styled, { css } from 'styled-components';

import MapImage from '../../assets/images/home/our-customers-map.png';
import PageSection from '../../components/layout/NewPageSection';

import {
  JURISDICTIONS_1,
  JURISDICTIONS_2,
  JURISDICTIONS_3,
  JURISDICTIONS_4,
} from './OurCustomersConsts';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG, MEDIA_QUERY_TECH_SM } from '../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 160px auto 160px auto;
  }
`;

const CustomerCountWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 1102px;
  }
`;

const sharedTextStyles = css`
  color: ${NEUTRALS.GRAY_06};
  font-weight: 600;
`;

const NumberIntegrated = styled.div`
  font-size: 64px;
  line-height: 130%;
  margin-bottom: 16px;
  ${sharedTextStyles}

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 56px;
  }
`;

const NumberSubHeader = styled.div`
  font-size: 16px;
  line-height: 150%;
  ${sharedTextStyles}
`;

const MapWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin-top: 40px;
  }
`;

const Map = styled.img`
  height: 356.8px;
  width: 576px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 178.4px;
    width: 288px;
  }
`;

const MapFootnote = styled.div`
  color: ${NEUTRALS.GRAY_08};
  font-size: 12px;
  line-height: 150%;
  margin-top: 24.2px;
`;

const JurisdictionsOuterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 auto;
  justify-content: space-between;
  margin: auto;
  margin-top: 80px;
  max-width: 1102px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    justify-content: center;
  }
`;

const JurisdictionsColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    align-self: center;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin: 0 48px;
    width: 200px;
  }
`;

const Jurisdiction = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 8px;
`;

const OurCustomers = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05}>
    <Content>
      <CustomerCountWrapper>
        <div>
          <NumberIntegrated>1,452,582</NumberIntegrated>
          <NumberSubHeader>Citizens’ data integrated</NumberSubHeader>
        </div>
        <MapWrapper>
          <Map src={MapImage} />
          <MapFootnote>Number of customers in each area</MapFootnote>
        </MapWrapper>
      </CustomerCountWrapper>
      <JurisdictionsOuterWrapper>
        <JurisdictionsColumn>
          {
            JURISDICTIONS_1.map((jurisdictionName :string) => (
              <Jurisdiction key={jurisdictionName}>{ jurisdictionName }</Jurisdiction>
            ))
          }
        </JurisdictionsColumn>
        <JurisdictionsColumn>
          {
            JURISDICTIONS_2.map((jurisdictionName :string) => (
              <Jurisdiction key={jurisdictionName}>{ jurisdictionName }</Jurisdiction>
            ))
          }
        </JurisdictionsColumn>
        <JurisdictionsColumn>
          {
            JURISDICTIONS_3.map((jurisdictionName :string) => (
              <Jurisdiction key={jurisdictionName}>{ jurisdictionName }</Jurisdiction>
            ))
          }
        </JurisdictionsColumn>
        <JurisdictionsColumn>
          {
            JURISDICTIONS_4.map((jurisdictionName :string) => (
              <Jurisdiction key={jurisdictionName}>{ jurisdictionName }</Jurisdiction>
            ))
          }
        </JurisdictionsColumn>
      </JurisdictionsOuterWrapper>
    </Content>
  </PageSection>
);

export default OurCustomers;
