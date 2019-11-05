import styled from 'styled-components';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { NEUTRALS } from '../../core/style/Colors';

const StyledSectionTitle = styled.h1`
  color: ${NEUTRALS.BLACK};
  font-size: 25px;
  font-weight: semi-bold;
  line-height: 1.2;
  margin-bottom: 30px;
  margin-top: 0;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    font-size: 32px;
    text-align: left;
  }
`;

export default StyledSectionTitle;
