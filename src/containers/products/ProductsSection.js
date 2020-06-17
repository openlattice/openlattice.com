/*
 * @flow
 */

import React, { useState } from 'react';

import styled from 'styled-components';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PRODUCT_TAGS } from './constants';
import {
  ASTROMETRICS_HEADER,
  ASTROMETRICS_SUBHEADER,
  CARE_HEADER,
  CARE_SUBHEADER,
  CHRONICLE_HEADER,
  CHRONICLE_SUBHEADER,
  CWP_HEADER,
  CWP_SUBHEADER,
  PCM_HEADER,
  PCM_SUBHEADER,
  REFERRALS_HEADER,
  REFERRALS_SUBHEADER,
  RESEARCH_HUB_HEADER,
  RESEARCH_HUB_SUBHEADER,
  STEPPING_UP_HEADER,
  STEPPING_UP_SUBHEADER,
} from './constants/language';

import { AstrometricsFeatureShot1 } from '../../assets/images/astrometrics';
import { CWPFeatureShot1 } from '../../assets/images/cwp';
import { ReferralsFeatureShot1 } from '../../assets/images/referrals';
import { SteppingUpFeatureShot1 } from '../../assets/images/stepping-up';
import { OpenLatticeCircleIcon } from '../../assets/svg/circle-icons';
import {
  AstrometricsIcon,
  CAREIcon,
  CWPIcon,
  PCMIcon,
  SteppingUpIcon,
} from '../../assets/svg/icons';
import {
  ContentGrid,
  FeatureGrid,
  GraphicShot,
  Header,
  InfoTile,
  LearnMoreButton,
  PageSection,
  SectionContent,
  SubHeader,
  Tag,
} from '../../components';
import { Routes } from '../../core/router';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';
import { openBeacon } from '../../utils/Utils';

const PRODUCTS_HEADER = 'Bring government into the 21st century';
const PRODUCTS_SUBHEADER = 'OpenLattice is founded on the ideal that government tools don\'t have to be difficult to'
  + ' deploy or use, nor is it necessary to make a trade off between security and collaboration.';

const ProductsSectionContent = styled(SectionContent)`
  margin-top: 0;
`;

const ProductsGrid = styled(ContentGrid)`
  align-items: stretch;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;

const OtherProductsGrid = styled(FeatureGrid)`
  margin: 24px 0;
`;

const Categories = styled.div`
  color: ${NEUTRALS.GRAY_08};
  font-size: 13px;
  font-weight: 600;
  margin: -8px 0 24px 0;
  text-transform: uppercase;
`;

const MoreProductsHeader = styled.h3`
  align-items: center;
  border-bottom: ${({ borderBottom }) => (borderBottom ? `1px solid ${NEUTRALS.GRAY_10}` : 'none')};
  border-top: ${({ borderTop }) => (borderTop ? `1px solid ${NEUTRALS.GRAY_10}` : 'none')};
  color: ${NEUTRALS.GRAY_08};
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  font-weight: normal;
  padding: 24px 16px;
  text-align: left;
  width: 100%;
`;

const ScheduleCallButton = () => (
  <LearnMoreButton onClick={openBeacon} radius={5}>Schedule a call to learn more</LearnMoreButton>
);

const ProductsSection = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClickMoreProducts = () => {
    setIsOpen(!isOpen);
  };

  const chevronIcon = isOpen
    ? <FontAwesomeIcon fixedWidth icon={faChevronUp} />
    : <FontAwesomeIcon fixedWidth icon={faChevronDown} />;

  return (
    <PageSection>
      <SectionContent maxWidth={{ sm: 480, md: 720 }}>
        <Header as="h2">{PRODUCTS_HEADER}</Header>
        <SubHeader as="h5">{PRODUCTS_SUBHEADER}</SubHeader>
      </SectionContent>
      <ProductsSectionContent>
        <ProductsGrid>
          <InfoTile withBorder>
            <PCMIcon />
            <Header as="h3">{PCM_HEADER}</Header>
            <Categories>
              <span>{PRODUCT_TAGS.PUBLIC_SAFETY}</span>
              <span>{' · '}</span>
              <span>{PRODUCT_TAGS.JUSTICE}</span>
            </Categories>
            <SubHeader as="h6">{PCM_SUBHEADER}</SubHeader>
            <LearnMoreButton to={Routes.PCM} />
          </InfoTile>
          <InfoTile withBorder>
            <CAREIcon />
            <Header as="h3">{CARE_HEADER}</Header>
            <Categories>
              <span>{PRODUCT_TAGS.PUBLIC_SAFETY}</span>
              <span>{' · '}</span>
              <span>{PRODUCT_TAGS.BEHAVIORAL_HEALTH}</span>
            </Categories>
            <SubHeader as="h6">{CARE_SUBHEADER}</SubHeader>
            <LearnMoreButton to={Routes.CARE} />
          </InfoTile>
          <InfoTile withBorder>
            <OpenLatticeCircleIcon width={48} />
            <Header as="h3">
              {RESEARCH_HUB_HEADER}
              <Tag tagType="beta">BETA</Tag>
            </Header>
            <Categories>
              <span>{PRODUCT_TAGS.RESEARCH}</span>
            </Categories>
            <SubHeader as="h6">{RESEARCH_HUB_SUBHEADER}</SubHeader>
            <LearnMoreButton to={Routes.RESEARCH_HUB} />
          </InfoTile>
          <InfoTile withBorder>
            <OpenLatticeCircleIcon width={48} />
            <Header as="h3">{CHRONICLE_HEADER}</Header>
            <Categories>
              <span>{PRODUCT_TAGS.RESEARCH}</span>
            </Categories>
            <SubHeader as="h6">{CHRONICLE_SUBHEADER}</SubHeader>
            <LearnMoreButton to={Routes.CHRONICLE} />
          </InfoTile>
        </ProductsGrid>
      </ProductsSectionContent>
      <ProductsSectionContent>
        <MoreProductsHeader borderBottom={!isOpen} borderTop onClick={handleOnClickMoreProducts}>
          <span>More products</span>
          {chevronIcon}
        </MoreProductsHeader>
        {
          isOpen && (
            <>
              <OtherProductsGrid>
                <InfoTile>
                  <AstrometricsIcon width={48} />
                  <Header as="h3">{ASTROMETRICS_HEADER}</Header>
                  <Categories>
                    <span>{PRODUCT_TAGS.PUBLIC_SAFETY}</span>
                  </Categories>
                  <SubHeader as="h6">{ASTROMETRICS_SUBHEADER}</SubHeader>
                  <ScheduleCallButton />
                </InfoTile>
                <GraphicShot withBorder>
                  <AstrometricsFeatureShot1 />
                </GraphicShot>
              </OtherProductsGrid>
              <OtherProductsGrid reverseOrderOnWrap>
                <GraphicShot withBorder>
                  <CWPFeatureShot1 />
                </GraphicShot>
                <InfoTile>
                  <CWPIcon width={48} />
                  <Header as="h3">{CWP_HEADER}</Header>
                  <Categories>
                    <span>{PRODUCT_TAGS.JUSTICE}</span>
                  </Categories>
                  <SubHeader as="h6">{CWP_SUBHEADER}</SubHeader>
                  <ScheduleCallButton />
                </InfoTile>
              </OtherProductsGrid>
              <OtherProductsGrid>
                <InfoTile>
                  <OpenLatticeCircleIcon width={48} />
                  <Header as="h3">{REFERRALS_HEADER}</Header>
                  <Categories>
                    <span>{PRODUCT_TAGS.HEALTH}</span>
                  </Categories>
                  <SubHeader as="h6">{REFERRALS_SUBHEADER}</SubHeader>
                  <ScheduleCallButton />
                </InfoTile>
                <GraphicShot withBorder>
                  <ReferralsFeatureShot1 />
                </GraphicShot>
              </OtherProductsGrid>
              <OtherProductsGrid reverseOrderOnWrap>
                <GraphicShot withBorder>
                  <SteppingUpFeatureShot1 />
                </GraphicShot>
                <InfoTile>
                  <SteppingUpIcon width={48} />
                  <Header as="h3">{STEPPING_UP_HEADER}</Header>
                  <Categories>
                    <span>{PRODUCT_TAGS.BEHAVIORAL_HEALTH}</span>
                    <span>{' · '}</span>
                    <span>{PRODUCT_TAGS.RESEARCH}</span>
                  </Categories>
                  <SubHeader as="h6">{STEPPING_UP_SUBHEADER}</SubHeader>
                  <ScheduleCallButton />
                </InfoTile>
              </OtherProductsGrid>
              <MoreProductsHeader borderBottom borderTop={false} onClick={handleOnClickMoreProducts}>
                <span>More products</span>
                {chevronIcon}
              </MoreProductsHeader>
            </>
          )
        }
      </ProductsSectionContent>
    </PageSection>
  );
};

export default ProductsSection;
