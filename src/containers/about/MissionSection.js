/*
 * @flow
 */

import React from 'react';
import styled from 'styled-components';

import PageSection from '../../components/layout/NewPageSection';
import CodeStockPhoto from '../../assets/images/code-stock-photo.png';
import WomanStockPhoto from '../../assets/images/woman-typing-stock-photo.png';

import { SectionHeader } from '../../components/headers/PageHeaders';
import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_MD } from '../../core/style/Sizes';

const MissionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 1104px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 401px auto 216px auto;
  }
`;

const ContentBlock = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 948px;
  }
`;

const Header = styled(SectionHeader)`
  text-align: left;
`;

const Text = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 18px;
  line-height: 150%;
  text-align: left;
  width: 480px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 556px;
    width: 480px;
  }
`;

const CodeImage = styled(Image)`
  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    height: 480px;
  }
`;

const MissionSection = () => (
  <PageSection bgColor={NEUTRALS.WHITE}>
    <MissionContent>
      <ContentBlock>
        <div>
          <Header>Our mission</Header>
          <Text>
            {`We set out to build a secure, scalable cloud-based data platform that
              empowers civil servants, researchers, and policy-makers to work together
              on society's toughest challenges.`}
          </Text>
        </div>
        <Image bgImage={WomanStockPhoto} />
      </ContentBlock>
      <ContentBlock>
        <CodeImage bgImage={CodeStockPhoto} />
        <div>
          <Header>Improve human outcome</Header>
          <Text>
            {`Something about solutions to help drive positive change in recidivism,
              homelessness, etc.`}
          </Text>
        </div>
      </ContentBlock>
    </MissionContent>
  </PageSection>
);

export default MissionSection;
