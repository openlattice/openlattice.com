import React, { Fragment } from 'react';

import styled, { css } from 'styled-components';

import PageSection from '../../components/layout/PageSection';
import StyledSectionSubTitle from '../../components/headers/StyledSectionSubTitle';
import StyledSectionTitle from '../../components/headers/StyledSectionTitle';
import { PAGE_SECTION_MIN_WIDTH, MEDIA_QUERY_SM, MEDIA_QUERY_MD } from '../../core/style/Sizes';
import Image01 from '../../assets/images/01_problem_definition.png';
import Image02 from '../../assets/images/02_data_sharing_agreements.png';
import Image03 from '../../assets/images/03_establishing_data_access.png';
import Image04 from '../../assets/images/04_specific_services.png';

import {
  N0,
  N1,
  N2,
  N4,
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

const bgImageMixin = (props) => {
  if (props.bgImage) {
    return css`
      background-image: url(${props.bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
  }
  return css`
    background: none;
  `;
};

const TabDisplayBody = styled.div`
  color: ${N4};
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 50px;
`;

const TabDisplayListItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const TabDisplayListItemNumber = styled.div`
  color: ${N2};
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`;

const TabDisplayListItemText = styled.div`
  color: ${N2};
  font-size: 14px;
  line-height: 1.4;
`;

const TabDisplayListItemTitle = TabDisplayListItemText.extend`
  font-weight: 600;
`;

const TabDisplaySectionItem = styled.div`
  margin-bottom: 30px;
`;

const TabDisplayContentLeft = styled.div`
  height: 100%;
  min-width: 435px;
  ${props => bgImageMixin(props)}
`;

const TabDisplayContentRight = styled.div`
  background: ${N0};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  width: 100%;
`;


const render01 = () => (
  <Fragment>
    <TabDisplayContentLeft bgImage={Image01} />
    <TabDisplayContentRight>
      <TabDisplayBody>
        {
          `Identify a clear problem and who your stakeholders are. The problem may be a rise in
           drug overdoses in recent years, overcrowding in county jails, or the need for a 
           shared case management interface across related behavioral health agencies. Some 
           common problems jurisdictions are tackling with OpenLattice:`
        }
      </TabDisplayBody>
      <TabDisplayListItem>
        <TabDisplayListItemNumber>
          01
        </TabDisplayListItemNumber>
        <TabDisplayListItemText>
          {
            `Identify and assist people who repeatedly cycle through county services, consuming a 
            disproportionate amount of social resources.`
          }
        </TabDisplayListItemText>
      </TabDisplayListItem>
      <TabDisplayListItem>
        <TabDisplayListItemNumber>
          02
        </TabDisplayListItemNumber>
        <TabDisplayListItemText>
          {
            `Inform policy decisions based on how government services are delivered and consumed.`
          }
        </TabDisplayListItemText>
      </TabDisplayListItem>
      <TabDisplayListItem>
        <TabDisplayListItemNumber>
          03
        </TabDisplayListItemNumber>
        <TabDisplayListItemText>
          {
            `Collaborate with academic researchers while protecting privacy.`
          }
        </TabDisplayListItemText>
      </TabDisplayListItem>
      <TabDisplayListItem>
        <TabDisplayListItemNumber>
          04
        </TabDisplayListItemNumber>
        <TabDisplayListItemText>
          {
            `Increase interagency coordination, and therefore strengthen the continuum of care 
            for citizens with mental health histories who might now be served by a variety of 
            community health and public safety organizations in fragmented ways.`
          }
        </TabDisplayListItemText>
      </TabDisplayListItem>
    </TabDisplayContentRight>
  </Fragment>
);

const render02 = () => (
  <Fragment>
    <TabDisplayContentLeft bgImage={Image02} />
    <TabDisplayContentRight>
      <TabDisplayBody>
        {
          `OpenLattice, Inc. recognizes the institutional, legal, and technical challenges of 
          establishing data sharing agreements among stakeholders, adhering to various laws and 
          regulations, and navigating homegrown or legacy data infrastructure. Our approach has 
          been to gather data sharing agreements in progressive and piecemeal fashion, using a 
          "Hub-Spoke-Wheel" model.`
        }
      </TabDisplayBody>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Hub
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `OpenLattice establishes 1:1 agreements with each agency.`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Spokes
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `BAA for HIPAA covered entities`
          }
        </TabDisplayListItemText>
        <TabDisplayListItemText>
          {
            `BAA + QSOA for 42 CFR Part 2 covered providers`
          }
        </TabDisplayListItemText>
        <TabDisplayListItemText>
          {
            `CJIS for Criminal Justice data`
          }
        </TabDisplayListItemText>
        <TabDisplayListItemText>
          {
            `FERPA for student data`
          }
        </TabDisplayListItemText>
        <TabDisplayListItemText>
          {
            `Standard OpenLattice Terms of Service for other organizations`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Wheel
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `An agreement governs data use across entire collaborative. The OpenLattice platform 
            is the mechanism for implementing agreement.`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
    </TabDisplayContentRight>
  </Fragment>
);

const render03 = () => (
  <Fragment>
    <TabDisplayContentLeft bgImage={Image03} />
    <TabDisplayContentRight>
      <TabDisplayBody>
        {
          `We have created standardized data models for key database types (e.g., Records Management 
          Systems) to alleviate the challenges of bespoke data integrations. Users can simply map 
          fields from source systems onto the OpenLattice schema.

          This greatly reduces costs and complexity such that OpenLattice is able to offer deeply 
          discounted or free data integration services for qualifying customers.`
        }
      </TabDisplayBody>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Key Decisions
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `Frequency of updates, data model elements, and mechanism of transport (direct vs. indirect).`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Common Issues
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `Security concerns, privacy concerns, performance concerns, licensing & insurance when 
            dealing with 3rd party vendors, and data access when dealing with proprietary interfaces or formats.`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
      <TabDisplaySectionItem>
        <TabDisplayListItemTitle>
          Breaking Through
        </TabDisplayListItemTitle>
        <TabDisplayListItemText>
          {
            `Persistence and properly incentivize third parties.`
          }
        </TabDisplayListItemText>
      </TabDisplaySectionItem>
    </TabDisplayContentRight>
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

  handleTabClick = (e) => {
    this.setState({ tab: parseInt(e.target.dataset.name) });
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
                <TabItem data-name='1' onClick={this.handleTabClick}>
                  01 Problem Definition
                </TabItem>
                <TabItem data-name='2' onClick={this.handleTabClick}>
                  02 Data Sharing Agreements
                </TabItem>
                <TabItem data-name='3' onClick={this.handleTabClick}>
                  03 Establishing Data Access
                </TabItem>
                <TabItem data-name='4' onClick={this.handleTabClick}>
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
