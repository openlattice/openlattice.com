import React from 'react';

import Content01 from './Content01';
import Content02 from './Content02';
import Content03 from './Content03';
import Content04 from './Content04';

import {
  Wrapper,
  Navigation,
  TabItem,
  ContentWrapper
} from './style';


class TabDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 1
    };
  }

  handleTabClick = (e) => {
    const tab = parseInt(e.target.dataset.name, 10);
    this.setState({ tab });
  }

  getActiveStatus = (tab) => {
    if (this.state.tab === tab) {
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
    return (
      <Wrapper>
        <Navigation>
          <TabItem data-name="1" onClick={this.handleTabClick} className={this.getActiveStatus(1)}>
            01 Problem Definition
          </TabItem>
          <TabItem data-name="2" onClick={this.handleTabClick} className={this.getActiveStatus(2)}>
            02 Data Sharing Agreements
          </TabItem>
          <TabItem data-name="3" onClick={this.handleTabClick} className={this.getActiveStatus(3)}>
            03 Establishing Data Access
          </TabItem>
          <TabItem data-name="4" onClick={this.handleTabClick} className={this.getActiveStatus(4)}>
            04 Specific Services
          </TabItem>
        </Navigation>
        <ContentWrapper>
          {
            this.renderContent(this.state.tab)
          }
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default TabDisplay;
