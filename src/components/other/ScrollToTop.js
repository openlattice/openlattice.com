/*
 * @flow
 */

import { Component } from 'react';

// https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
class ScrollToTop extends Component<{}> {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default ScrollToTop;
