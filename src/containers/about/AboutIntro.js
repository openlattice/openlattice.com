/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import StockImage from '../../assets/images/about-stock-photo.png';

import { PageIntro } from '../../components/headers/PageHeaders';
import { Content } from '../../components/layout/IntroComponents';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG } from '../../core/style/Sizes';

const AboutContent = styled(Content)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 141px auto 398px auto;
  }
`;

const AboutPageIntro = styled(PageIntro)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    width: 1104px;
  }
`;

const AboutStockImage = styled.div`
  align-self: center;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  position: absolute;
  top: 514px;
  width: 100%;
  z-index: 1000;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 575px;
    width: 1104px;
  }
`;

const AboutIntro = () => (
  <PageSection bgColor={NEUTRALS.GRAY_05} includeMenu>
    <AboutContent>
      <AboutPageIntro>
        {`We believe core societal institutions should have modern data
          infrastructure to better serve the citizens.`}
      </AboutPageIntro>
    </AboutContent>
    <AboutStockImage bgImage={StockImage} />
  </PageSection>
);

export default AboutIntro;
