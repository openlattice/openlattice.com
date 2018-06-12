import styled, { css } from 'styled-components';

import {
  N0,
  N2,
  N4,
  PP4
} from '../../core/style/Colors';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TabItem = styled.span`
  border-bottom: 5px solid #b4add1;
  color: #b4add1;
  cursor: pointer;
  padding: 10px 0;
  text-align: center;
  width: 25%;

  &:hover, &.active {
    color: ${PP4};
    border-bottom: 5px solid ${PP4};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 602px;
  width: 100%;
`;

export const bgImageMixin = (props) => {
  if (props.bgImage) {
    return css`
      background-image: url(${props.bgImage});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
  }
  return css`
    background: none;
  `;
};

export const Body = styled.div`
  color: ${N4};
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const BodyWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const ListItemNumber = styled.div`
  color: ${N2};
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`;

export const ListItemText = styled.div`
  color: ${N2};
  font-size: 14px;
  line-height: 1.4;
`;

export const ListItemTitle = ListItemText.extend`
  font-weight: 600;
`;

export const SectionItem = styled.div`
  margin-bottom: 30px;
`;

export const ContentLeft = styled.div`
  height: 100%;
  min-width: 435px;
  ${props => bgImageMixin(props)}
`;

export const ContentRight = styled.div`
  background: ${N0};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  width: 100%;
`;
