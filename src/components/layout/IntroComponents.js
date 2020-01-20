// @flow
import styled from 'styled-components';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../core/style/Sizes';
import { PageDescription } from '../headers/PageHeaders';

const Content = styled.div`
  align-items: center;
  color: ${NEUTRALS.WHITE};
  display: flex;
  flex-direction: column;
  margin: 50px auto 100px auto;
  max-width: 100%;
  text-align: center;

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    width: 100%;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin: 134px auto 208px auto;
  }
`;

const PageDescriptionWrapper = styled(PageDescription)`
  width: 624px;
`;

export {
  Content,
  PageDescriptionWrapper
};
