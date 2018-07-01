import styled from 'styled-components';

import {
  N0,
  N2,
  N4,
  PP4
} from '../../core/style/Colors';

import { MEDIA_QUERY_LG } from '../../core/style/Sizes';


export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    flex-direction: row;
  }
`;

export const Body = styled.div`
  color: ${N4};
  font-size: 16px;
  line-height: 22px;
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
  line-height: 24px;
  margin-right: 10px;
`;

export const ListItemText = styled.span`
  color: ${N2};
  font-size: 14px;
  line-height: 19px;
`;

export const ListItemLink = styled.a`
  color: ${PP4}
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  text-decoration: none;

  &:visited {
    color: ${PP4};
  }
`;

export const ListItemTitle = styled.div`
  color: ${N2};
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
`;

export const SectionItem = styled.div`
  margin-bottom: 30px;
`;

export const ContentLeft = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentRight = styled.div`
  background: ${N0};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  width: 100%;
`;
