import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import { StyledTitleMd, StyledBody } from '../../utils/Styles';

import psPathSvg from '../../assets/images/ems-data-path.svg';
import healthPathSvg from '../../assets/images/health-clinic-data-path.svg';
import personPng from '../../assets/images/person-grp@3x.png';
import ssPathSvg from '../../assets/images/police-data-path.svg';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

const StyledContentBody = StyledBody.extend`
  width: 465px;
  height: 88px;
  font-family: Roboto, 'Open Sans';
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: left;
  color: #6f788a;
  margin-bottom: 40px;
`;

const InnerWrapper = styled.div`
  padding: 200px 0 0 0;
  position: relative;
`;

const ArtWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -100px;
  position: relative;
`;

const PersonImg = styled.img`
  height: 375px;
  margin-right: 140px;
  z-index: 1000;
`;

const PublicSafetyPath = styled.img`
  position: absolute;
  right: -200px;
  top: -100px;
`;

const HealthPath = styled.img`
  bottom: 25px;
  left: -250px;
  position: absolute;
`;

const SocialServicesPath = styled.img`
  bottom: 50px;
  position: absolute;
  right: -195px;
`;

const Badge = styled.div`
  border-radius: 2px;
  color: #fff;
  display: inline;
  padding: 5px;
`;

const HealthBadge = Badge.extend`
  background-color: #9359ff;
  bottom: 100px;
  left: 80px;
  position: absolute;
`;

const PublicSafetyBadge = Badge.extend`
  background-color: #c881ff;
  position: absolute;
  right: 40px;
  top: -50px;
`;

const SocialServicesBadge = Badge.extend`
  background-color: #6124e2;
  bottom: 120px;
  position: absolute;
  right: 50px;
`;

const Services = () => (
  <HomepageSection background="#f9f9fd">
    <InnerWrapper>
      <StyledContentBlock>
        <StyledTitleMd>
          Understand how services are delivered and consumed
        </StyledTitleMd>
        <StyledContentBody color="#6f788a">
          {`
            Leverage data across public safety, healthcare systems, and social services to streamline operations,
            test interventions, and improve human outcomes.
          `}
        </StyledContentBody>
      </StyledContentBlock>
      <ArtWrapper>
        <PersonImg src={personPng} />
        <HealthPath src={healthPathSvg} />
        <HealthBadge>HEALTHCARE</HealthBadge>
        <PublicSafetyPath src={psPathSvg} />
        <PublicSafetyBadge>PUBLIC SAFETY</PublicSafetyBadge>
        <SocialServicesPath src={ssPathSvg} />
        <SocialServicesBadge>SOCIAL SERVICES</SocialServicesBadge>
      </ArtWrapper>
    </InnerWrapper>
  </HomepageSection>
);

export default Services;
