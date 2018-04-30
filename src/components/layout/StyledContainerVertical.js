import styled from 'styled-components';

const StyledContainerVertical = styled.div`
  align-items: center;
  background: ${props => props.background || inherit};
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.paddingBottom || inherit};
`;

export default StyledContainerVertical;
