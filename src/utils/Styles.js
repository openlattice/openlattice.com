import styled from 'styled-components';
const StyledTitle = styled.div`
  color: ${props => props.color || '#4d4d4d'};
  font-family: Chivo, 'Open Sans';
  line-height: 1.4;
`;

export const StyledTitleLg = StyledTitle.extend`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const StyledTitleMd = StyledTitle.extend`
  font-size: 32px;
  margin-bottom: 30px;
`;

export const StyledBody = styled.div`
  color: ${props => props.color || inherit};
  font-family: Roboto, 'Open Sans';
  font-size: 18px
  line-height: 1.5;
`;
