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
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from '../../core/style/Sizes';

const QuoteWrapper = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 48px;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    margin: 0 32px;
  }
`;

const Quote = styled.div`
  font-size: 32px;
  margin-bottom: 80px;
  text-align: center;

  @media only screen and (max-width: ${MEDIA_QUERY_MD}px) {
    font-size: 24px;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: ${MEDIA_QUERY_SM}px) {
    font-size: 16px;
  }
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  @media only screen and (max-width: 575px) {
    font-size: 14px;
  }
`;

const Org = styled(Name)`
  font-weight: normal;
  text-align: center;
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
        <QuoteWrapper>
          <Quote>{quotes[index].QUOTE}</Quote>
          <div>
            <Name>{quotes[index].NAME}</Name>
            <Org>{quotes[index].ORG}</Org>
          </div>
        </QuoteWrapper>
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
