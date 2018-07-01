import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

import { N2 } from '../../core/style/Colors';

const StyledSectionSubTitle = styled.h2`
  color: ${N2};
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  text-align: center;
  margin-top: 0;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    text-align: left;
  }
`;

export default StyledSectionSubTitle;
