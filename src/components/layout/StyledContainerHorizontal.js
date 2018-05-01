import styled from 'styled-components';

const StyledContainerHorizontal = styled.div`
  align-items: center;
  background: ${props => props.background || null};
  display: flex;
  padding-bottom: ${props => props.paddingBottom || 0};
`;

export default StyledContainerHorizontal;
