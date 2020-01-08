// @flow
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

import { NEUTRALS, PURPLES } from '../../../core/style/Colors';
import { MEDIA_QUERY_LG, MEDIA_QUERY_TECH_SM } from '../../../core/style/Sizes';

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 208px auto 200px auto;
  }
`;

const sharedTextStyles = css`
  font-size: 16px;
  line-height: 150%;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    font-size: 14px;
  }
`;

const LastUpdated = styled.div`
  color: ${NEUTRALS.GRAY_08};
  margin-bottom: 104px;
  text-align: center;
  ${sharedTextStyles}
`;

const BodyTextWrapper = styled.div`
  width: 720px;
  margin-bottom: 104px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    width: 100%;
  }
`;

const BodyText = styled.div`
  color: ${NEUTRALS.GRAY_06};
  text-align: left;
  width: 100%;
  ${sharedTextStyles}
`;

const sharedLinkStyles = css`
  color: ${PURPLES.PP08};
  text-decoration: none;
`;

const SiteLink = styled(NavLink)`
  ${sharedLinkStyles}
  ${sharedTextStyles}
`;

const ExternalLink = styled.a`
  ${sharedLinkStyles}
  ${sharedTextStyles}
`;

const ItemTitle = styled.div`
  color: ${NEUTRALS.GRAY_06};
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  margin-bottom: 16px;
  text-align: left;
`;

const FakeBulletedList = styled.div`
  margin-left: 2px;
  width: 100%;
`;
const FakeInnerBulletedList = styled.div`
  margin-left: 34px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    margin-left: 24px;
  }
`;

const ListItem = styled.div`
  display: flex;
  margin: 4px 0 4px 5px;

  :first-of-type {
    margin-top: 16px;
  }

  :last-of-type {
    margin-bottom: 16px;
  }
`;

const BulletWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;

const Bullet = styled.div`
  background-color: ${NEUTRALS.GRAY_06};
  border-radius: 50%;
  height: 8px;
  margin-right: 16px;
  margin-top: 9px;
  width: 8px;

  @media only screen and (max-width: ${MEDIA_QUERY_TECH_SM}px) {
    height: 6px;
    width: 6px;
  }
`;

export {
  BodyText,
  BodyTextWrapper,
  Bullet,
  BulletWrapper,
  Content,
  ExternalLink,
  FakeBulletedList,
  FakeInnerBulletedList,
  ItemTitle,
  LastUpdated,
  ListItem,
  SiteLink,
};
