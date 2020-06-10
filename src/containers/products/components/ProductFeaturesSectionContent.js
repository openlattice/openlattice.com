/*
 * @flow
 */

import styled from 'styled-components';

import { SectionContent } from '../../../components';
import { MEDIA_QUERY_LG } from '../../../core/style/Sizes';

const ProductFeaturesSectionContent = styled(SectionContent)`
  margin-top: 50%;

  @media only screen and (min-width: ${MEDIA_QUERY_LG}px) {
    margin-top: 450px
  }
`;

export default ProductFeaturesSectionContent;
