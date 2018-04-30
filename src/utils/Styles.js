import styled from 'styled-components';
const StyledTitle = styled.div`
  color: ${props => props.color || inherit};
  font-family: Futura;
  line-height: 1.4;
`;

export const StyledTitleLg = StyledTitle.extend`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const StyledTitleMd = StyledTitle.extend`
  font-size: 32px;
`;

export const StyledBody = styled.div`
  color: ${props => props.color || inherit};
  font-family: 'Open Sans';
  line-height: 1.4;
`;
