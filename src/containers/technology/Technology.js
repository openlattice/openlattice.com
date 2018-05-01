import React from 'react';
import styled from 'styled-components';

import HomepageSection from '../../components/layout/HomepageSection';
import StyledContainerHorizontal from '../../components/layout/StyledContainerHorizontal';
import InfoTile from './components/InfoTile';
import FooterTile from './components/FooterTile';
import * as TechConsts from './Consts';
import { StyledTitleMd, StyledBody } from '../../utils/Styles';

const StyledContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 140px 0 40px 0;
  max-width: 550px;
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
`;

const TilesRow = StyledContainerHorizontal.extend`
  justify-content: space-between;
  padding-bottom: 30px;
`;

const Technology = () => (
  <HomepageSection background="#ffffff" paddingBottom="190px">
    <StyledContentBlock>
      <StyledTitleMd>
        Our Technology
      </StyledTitleMd>
      <StyledContentBody color="#6f788a">
        {`
          Our no-cost tier of core services help address the most common challenges in cross-sector data partnerships.
        `}
      </StyledContentBody>
    </StyledContentBlock>
    <TilesRow>
      <InfoTile
          title={TechConsts.title1}
          body={TechConsts.body1}
          image={TechConsts.image1} />
      <InfoTile
          title={TechConsts.title2}
          body={TechConsts.body2}
          image={TechConsts.image2} />
      <InfoTile
          title={TechConsts.title3}
          body={TechConsts.body3}
          image={TechConsts.image3} />
    </TilesRow>
    <TilesRow>
      <InfoTile
          title={TechConsts.title4}
          body={TechConsts.body4}
          image={TechConsts.image4} />
      <InfoTile
          title={TechConsts.title5}
          body={TechConsts.body5}
          image={TechConsts.image5} />
      <InfoTile
          title={TechConsts.title6}
          body={TechConsts.body6}
          image={TechConsts.image6} />
    </TilesRow>
    <TilesRow>
      <FooterTile body={TechConsts.footerBody1} image={TechConsts.footerImage1} />
      <FooterTile body={TechConsts.footerBody2} image={TechConsts.footerImage2} />
    </TilesRow>
  </HomepageSection>
);

export default Technology;
