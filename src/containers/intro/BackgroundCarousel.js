/*
 * @flow
 */

import React, { Component, Fragment } from 'react';

import styled, { keyframes } from 'styled-components';

import splashImg1 from '../../assets/images/splash_01.jpg';
import splashImg2 from '../../assets/images/splash_02.jpg';
import splashImg3 from '../../assets/images/splash_03.jpg';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = styled.div`
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-name: ${fadeInAnimation};
  animation-timing-function: ease-in;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  height: 100%;
  position: absolute;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

type Props = {
  interval :number;
}
type State = {
  currIndex :number;
  images :string[];
  prevIndex :number;
}

class BackgroundCarousel extends Component<Props, State> {

  constructor(props :Props) {

    super(props);
    this.state = {
      images: [
        splashImg1,
        splashImg2,
        splashImg3
      ],
      currIndex: 0,
      prevIndex: 0
    };
  }

  componentDidMount() {
    setInterval(this.cycleImages, this.props.interval);
  }

  cycleImages = () => {

    if (this.state.currIndex >= (this.state.images.length - 1)) {
      this.setState({ currIndex: 0, prevIndex: (this.state.images.length - 1) });
    }
    else {
      this.setState({ currIndex: (this.state.currIndex + 1), prevIndex: this.state.currIndex });
    }
  }

  render() {

    const imageComponents = this.state.images.map((image, index) => (
      <FadeIn isVisible={this.state.currIndex === index} key={image}>
        <BackgroundImage bgImage={this.state.images[this.state.currIndex]} />
      </FadeIn>
    ));

    return (
      <Fragment>
        { imageComponents }
        <BackgroundImage bgImage={this.state.images[this.state.prevIndex]} />
      </Fragment>
    );
  }
}

export default BackgroundCarousel;
