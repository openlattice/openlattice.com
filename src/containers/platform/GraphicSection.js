/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PlatformGraphicSVG from '../../assets/svg/platform-graphic.svg';
import PageSection from '../../components/layout/NewPageSection';

import * as Routes from '../../core/router/Routes';
import { SectionHeader } from '../../components/headers/PageHeaders';
import { LearnMoreInternalLink } from '../../components/controls/index';
import { NEUTRALS } from '../../core/style/Colors';
import { CONTENT_WIDTH, MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    flex-direction: row;
    width: ${CONTENT_WIDTH}px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 200px auto 200px auto;
  }
`;

const TextWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 432px;
`;

const TextSection = styled.div`
  color: ${NEUTRALS.GRAY_07};
  font-size: 18px;
  line-height: 150%;
  margin-bottom: 40px;
  text-align: left;
  width: 100%;
`;

const TextSectionHeader = styled(SectionHeader)`
  text-align: left;
`;

const GraphicSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <Content>
      <TextWrapper>
        <TextSectionHeader>
          Designed to work with your security and compliance needs
        </TextSectionHeader>
        <TextSection>
          {`Placeholder - Maybe talk about the multiple layers of security and
            compliance features of our platform and how it’s built etc. Maybe
            talk about the multiple layers of security and compliance...`}
        </TextSection>
        <LearnMoreInternalLink to={Routes.PLATFORM}>Learn more</LearnMoreInternalLink>
      </TextWrapper>
      <img src={PlatformGraphicSVG} alt="" width={580} height={376} />
    </Content>
  </PageSection>
);

export default GraphicSection;
