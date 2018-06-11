import React, { Fragment } from 'react';

import styled from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';

import {
  N1,
  PP1,
  PP2,
  PP3,
  PP4
} from '../../core/style/Colors';

const Content = styled.div`
  display: block;
  margin: 80px 0 100px 0;
  max-width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 140px 0 140px 0;
  }
`;

const StyledCroppedSubtitle = StyledSectionSubTitle.extend`
  width: 46%;
  margin-bottom: 60px;
`;

const TabDisplayWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TabDisplayNavigation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TabItem = styled.span`
  border-bottom: 5px solid #b4add1;
  padding: 10px 0;
  text-align: center;
  width: 25%;
`;

const TabDisplayContentWrapper = styled.div`
  display: flex;
  height: 602px;
  width: 100%;
`;

const TabDisplayContentLeft01 = styled.div`
  background: blue;
  height: 100%;
  min-width: 435px;
`;

const TabDisplayContentRight01 = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
`;

const TabDisplayContentLeft02 = styled.div`
  background: red;
  height: 100%;
  min-width: 435px;
`;

const TabDisplayContentRight02 = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
`;

const TabDisplayContentLeft03 = styled.div`
  background: yellow;
  height: 100%;
  min-width: 435px;
`;

const TabDisplayContentRight03 = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
`;

const TabDisplayContentLeft04 = styled.div`
  background: green;
  height: 100%;
  min-width: 435px;
`;

const TabDisplayContentRight04 = styled.div`
  background: pink;
  height: 100%;
  width: 100%;
`;


const render01 = () => (
  <Fragment>
    <TabDisplayContentLeft01 />
    <TabDisplayContentRight01 />
  </Fragment>
);

const render02 = () => (
  <Fragment>
    <TabDisplayContentLeft02 />
    <TabDisplayContentRight02 />
  </Fragment>
);

const render03 = () => (
  <Fragment>
    <TabDisplayContentLeft03 />
    <TabDisplayContentRight03 />
  </Fragment>
);

const render04 = () => (
  <Fragment>
    <TabDisplayContentLeft04 />
    <TabDisplayContentRight04 />
  </Fragment>
);

const renderContent = (tab) => {
  switch(tab) {
    case 1:
      return render01();
    case 2:
      return render02();
    case 3:
      return render03();
    case 4:
      return render04();
    default:
      return render01();
  }
}


class HowItWorksSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 1
    };
  }

  render() {
    return (
      <Fragment>
        <PageSection bgColor={N1}>
          <Content>
            <StyledSectionTitle>
              How It Works
            </StyledSectionTitle>
            <StyledCroppedSubtitle>
              {
                `As a public benefit corporation, OpenLattice enables precision government by linking individual-level data 
                across currently siloed criminal justice, healthcare, and social services information at little or no cost.`
              }
            </StyledCroppedSubtitle>
            <TabDisplayWrapper>
              <TabDisplayNavigation>
                <TabItem>
                  01 Problem Definition
                </TabItem>
                <TabItem>
                  02 Data Sharing Agreements
                </TabItem>
                <TabItem>
                  03 Establishing Data Access
                </TabItem>
                <TabItem>
                  04 Specific Services
                </TabItem>
              </TabDisplayNavigation>
              <TabDisplayContentWrapper>
                {
                  renderContent(this.state.tab)
                }
              </TabDisplayContentWrapper>
            </TabDisplayWrapper>
          </Content>
        </PageSection>
      </Fragment>
    );
  }
};
  

export default HowItWorksSection;
