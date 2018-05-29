import styled from 'styled-components';
import { MEDIA_QUERY_SM } from '../../core/style/Sizes';

const StyledSectionTitle = styled.h1`
  font-family: 'Chivo', sans-serif;
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 20px;
  margin-top: 0;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    text-align: left
  }
`;

export default StyledSectionTitle;
