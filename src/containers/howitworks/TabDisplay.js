import React from 'react';
import styled from 'styled-components';

import Content01 from './Content01';
import Content02 from './Content02';
import Content03 from './Content03';
import Content04 from './Content04';

import { TABS } from './Constants';

import { PURPLES } from '../../core/style/Colors';
import { MEDIA_QUERY_JUR_SM, MEDIA_QUERY_LG } from '../../core/style/Sizes';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Navigation = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TabItem = styled.span`
  border-bottom: 2px solid #b4add1;
  color: #b4add1;
  cursor: pointer;
  font-size: 12px;
  font-weight: semi-bold;
  line-height: 1.2;
  padding: 10px 4px;
  text-align: center;
  width: 25%;

  &:hover,
  &.active {
    color: ${PURPLES.PP05};
    border-bottom: 2px solid ${PURPLES.PP05};
  }

  @media only screen and (min-width: ${MEDIA_QUERY_JUR_SM}px) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    line-height: 22px;
  }
`;


class TabDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 1
    };
  }

  handleTabClick = (e) => {
    const selectedTab = parseInt(e.target.dataset.name, 10);
    this.setState({ selectedTab });
  }

  getActiveStatus = (tab) => {
    const { selectedTab } = this.state;
    if (selectedTab === tab) {
      return 'active';
    }

    return null;
  }

  renderContent = (tab) => {
    switch (tab) {
      case 1:
        return <Content01 />;
      case 2:
        return <Content02 />;
      case 3:
        return <Content03 />;
      case 4:
        return <Content04 />;
      default:
        return <Content01 />;
    }
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <Wrapper>
        <Navigation>
          <TabItem data-name="1" onClick={this.handleTabClick} className={this.getActiveStatus(1)}>
            { TABS[1] }
          </TabItem>
          <TabItem data-name="2" onClick={this.handleTabClick} className={this.getActiveStatus(2)}>
            { TABS[2] }
          </TabItem>
          <TabItem data-name="3" onClick={this.handleTabClick} className={this.getActiveStatus(3)}>
            { TABS[3] }
          </TabItem>
          <TabItem data-name="4" onClick={this.handleTabClick} className={this.getActiveStatus(4)}>
            { TABS[4] }
          </TabItem>
        </Navigation>
        { this.renderContent(selectedTab) }
      </Wrapper>
    );
  }
}

export default TabDisplay;
