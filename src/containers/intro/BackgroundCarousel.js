/*
 * @flow
 */

import React, { Component, Fragment } from 'react';

import styled, { keyframes } from 'styled-components';

import splashImg1 from '../../assets/images/splash_01.png';
import splashImg2 from '../../assets/images/splash_02.png';
import splashImg3 from '../../assets/images/splash_03.png';

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
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  height: 100%;
  position: absolute;
  width: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
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

    const { interval } = this.props;
    setInterval(this.cycleImages, interval);
  }

  cycleImages = () => {

    const { currIndex, images } = this.state;

    if (currIndex >= (images.length - 1)) {
      this.setState({ currIndex: 0, prevIndex: (images.length - 1) });
    }
    else {
      this.setState({ currIndex: (currIndex + 1), prevIndex: currIndex });
    }
  }

  render() {

    const { currIndex, images, prevIndex } = this.state;

    const imageComponents = images.map((image, index) => (
      <FadeIn isVisible={currIndex === index} key={image}>
        <BackgroundImage bgImage={images[currIndex]} />
      </FadeIn>
    ));

    return (
      <Fragment>
        { imageComponents }
        <BackgroundImage bgImage={images[prevIndex]} />
      </Fragment>
    );
  }
}

export default BackgroundCarousel;
