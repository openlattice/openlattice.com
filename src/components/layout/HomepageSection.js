import React from 'react';
import styled from 'styled-components';

import StyledContainerVertical from './StyledContainerVertical';
import StyledGrid from './StyledGrid';

const HomepageSection = ({ children, background, image, paddingBottom }) => (
  <StyledContainerVertical
      background={background}
      image={image}
      paddingBottom={paddingBottom}>
    <StyledGrid>
      { children }
    </StyledGrid>
  </StyledContainerVertical>
);

export default HomepageSection;
