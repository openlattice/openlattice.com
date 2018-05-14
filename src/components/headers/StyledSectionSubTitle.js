import styled from 'styled-components';

import { N2 } from '../../core/style/Colors';

const StyledSectionSubTitle = styled.h2`
  color: ${N2};
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  @media only screen and (min-width: 1020px) {
    text-align: left
  }
`;

export default StyledSectionSubTitle;
