/*
 * @flow
 */

import React, { useState } from 'react';

import styled from 'styled-components';
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageSection from './PageSection';
import SectionContent from './SectionContent';

import { NEUTRALS } from '../../core/style/Colors';
import { MEDIA_QUERY_MD } from '../../core/style/Sizes';
import { Tile } from '../tiles';
import { Typography } from '../typography';

const QuoteTile = styled(Tile)`
  color: white;
  margin: 0 48px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin: 0 32px;
  }
`;

const ButtonCircle = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 50%;
  display: flex;
  flex: 0 0 auto;
  font-size: 20px;
  height: 48px;
  justify-content: center;
  margin-bottom: 36px;
  width: 48px;

  &:hover {
    cursor: pointer;
  }

  > svg {
    margin-left: ${({ arrowLeft }) => (arrowLeft ? '-3px' : null)};
    margin-right: ${({ arrowRight }) => (arrowRight ? '-2px' : null)};
  }

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 16px;
    height: 32px;
    width: 32px;
  }
`;

const QuotesSection = ({ quotes } :{ quotes :Object[] }) => {

  const [index, setIndex] = useState(0);

  const moveForward = () => {
    const nextIndex = index + 1;
    if (nextIndex < quotes.length) {
      setIndex(nextIndex);
    }
    else if (nextIndex === quotes.length) {
      setIndex(0);
    }
  };

  const moveBackward = () => {
    const previousIndex :number = index - 1;
    if (previousIndex > -1) {
      setIndex(previousIndex);
    }
    else if (previousIndex === -1) {
      setIndex(quotes.length - 1);
    }
  };

  return (
    <PageSection bgColor={NEUTRALS.GRAY_16}>
      <SectionContent vertical={false}>
        {
          quotes.length > 1 && (
            <ButtonCircle aria-label="arrow-left-button" arrowLeft onClick={moveBackward}>
              <FontAwesomeIcon fixedWidth icon={faChevronLeft} />
            </ButtonCircle>
          )
        }
        <QuoteTile align={{ h: 'center' }} gap={80}>
          <Typography textAlign="center" variant="h3">{quotes[index].QUOTE}</Typography>
          <div>
            <Typography variant="body2">{quotes[index].NAME}</Typography>
            <Typography variant="body2">{quotes[index].ORG}</Typography>
          </div>
        </QuoteTile>
        {
          quotes.length > 1 && (
            <ButtonCircle aria-label="arrow-right-button" arrowRight onClick={moveForward}>
              <FontAwesomeIcon fixedWidth icon={faChevronRight} />
            </ButtonCircle>
          )
        }
      </SectionContent>
    </PageSection>
  );
};

export default QuotesSection;
