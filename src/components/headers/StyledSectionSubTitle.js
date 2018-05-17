import styled from 'styled-components';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

import { N2 } from '../../core/style/Colors';

const StyledSectionSubTitle = styled.h2`
  color: ${N2};
  font-size: 16px;
  font-weight: normal;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    text-align: left
  }
`;

export default StyledSectionSubTitle;
