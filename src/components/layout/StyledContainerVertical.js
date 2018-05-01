import styled, { css } from 'styled-components';

const StyledContainerVertical = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: ${props => props.paddingBottom || 0};
  ${(props) => {
    if (props.image) {
      return css`
        background-image: url(${props.image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `;
    }
    else if (props.background) {
      return css`background-color: ${props.background};`;
    }
    return '';
  }}
`;

export default StyledContainerVertical;
