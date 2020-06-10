/*
 * @flow
 */

import styled from 'styled-components';

import { SectionContent } from '../../../components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../../core/style/Sizes';

const ProductIntroSectionContent = styled(SectionContent)`
  margin: 64px auto 32px auto;

  @media only screen and (min-width: ${MEDIA_QUERY_SM}px) {
    margin: 64px auto 64px auto;
  }

  @media only screen and (min-width: ${MEDIA_QUERY_MD}px) {
    margin: 64px auto 100px auto;
  }
`;

export default ProductIntroSectionContent;
