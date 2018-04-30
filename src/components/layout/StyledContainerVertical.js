import styled from 'styled-components';

const StyledContainerVertical = styled.div`
  align-items: center;
  background: ${props => props.background || null};
  background-image: ${props => `url(${props.image})` || null};
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.paddingBottom || 0};
`;

export default StyledContainerVertical;
