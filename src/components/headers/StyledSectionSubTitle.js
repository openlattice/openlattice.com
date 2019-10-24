import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';

import { NEUTRALS } from '../../core/style/Colors';

const StyledSectionSubTitle = styled.h2`
  color: ${NEUTRALS.GRAY02};
  font-size: 15px;
  font-weight: normal;
  line-height: 22px;
  text-align: left;
  margin-top: 0;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 16px;
  }
`;

export default StyledSectionSubTitle;
