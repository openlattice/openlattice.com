import React, { useState } from 'react';

import styled from 'styled-components';
import { faMinus, faPlus } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NEUTRALS, PURPLES } from '../../../core/style/Colors';
import { CONTENT_WIDTH } from '../../../core/style/Sizes';

const FAQ = styled.div`
  margin: 120px auto;
  padding: 0 30px;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
`;

const Question = styled.span`
  color: ${NEUTRALS.GRAY_06};
  font-size: 20px;
  line-height: 1.5;
`;

const QAWrapper = styled.div`
  border-bottom: 1px solid ${NEUTRALS.GRAY_10};
  display: flex;
  padding: 40px 0;

  > div {
    margin-left: 24px;
  }

  svg {
    color: ${NEUTRALS.GRAY_17};
  }

  &:last-child {
    border-bottom: 0;
  }
`;

const Answer = styled.div`
  border-left: 1px solid ${PURPLES.PP08};
  color: ${NEUTRALS.GRAY_08};
  font-size: 18px;
  margin-top: 16px;
  padding-left: 20px;
`;

const QUESTIONS = [
  'What security measures are in place?',
  'What is ResearchHub and how does it work with Chronicle?',
  'How does Chronicle Mobile work?',
  'Can my research team use only the Chronicle Dashboard and not Chronicle Mobile?',
  'What are my data collection options?',
  'What can I do with surveys through Chronicle?',
];

const ANSWERS = [
  'ResearchHub was built from the ground up with security and data-privacy in mind, and our team has an extensive'
    + ' background in information security standards. All collected data are securely encrypted, de-identified'
    + ' wherever appropriate, and stored securely in ResearchHub.',
  'ResearchHub is our research-focused version of our OpenLattice Data Platform, where all data are securely stored,'
    + ' and where they can also be viewed, analyzed, and shared. We designed Chronicle to seamlessly integrate on'
    + ' top of ResearchHub, providing a great way to view and manage participant data and communication.',
  'Chronicle Mobile is an easy to use app for your participants. The app is available on Google Play Store, making'
    + ' it simple for participants to find and install. Once the app is installed, the participants tap the research'
    + ' link, enter the study code, and connect automatically to the study. Any data the user has consented to share'
    + ' get collected in the background. You can also send your participants helpful reminder notifications, links'
    + ' to your custom surveys, and more directly through the app.',
  'Yes! Chronicle Mobile is an optional tool that can help automate participant and study data collection, as well'
    + ' as push custom communication to participants. If preferred, your team can import all your participant and'
    + ' study data to Chronicle and still benefit from all the security, participant management, and participant'
    + ' communication features available in Chronicle.',
  'Researchers can collect data in different ways. If you elect to use Chronicle Mobile, participant and study data'
    + ' are collected automatically from the app. Plus, you can send custom surveys through the app. Alternatively,'
    + ' you can import 3rd party data directly into ResearchHub and view it on the Chronicle Dashboard. The data can'
    + ' be imported from any structured format and viewed in ResearchHub in a clean, simple, and intuitive way.',
  'Chronicle empowers you to expand your options for incorporating participant feedback into your studies. Creating'
    + ' surveys with Chronicle means your survey data are secure and HIPAA-compliant. Additionally, if your team'
    + ' chooses to use Chronicle Mobile, you can push your surveys straight to your participants’ mobile devices,'
    + ' which improves engagement and increases the probability that your participants will respond.',
];

const ChronicleFAQ = () => {

  const [visibleAnswers, setVisibleAnswers] = useState({});

  const handleOnClick = (event) => {
    const { currentTarget } = event;
    if (currentTarget instanceof HTMLElement) {
      const { dataset } = currentTarget;
      if (dataset.question) {
        const isVisible = visibleAnswers[dataset.question] || false;
        setVisibleAnswers({ ...visibleAnswers, [dataset.question]: !isVisible });
      }
    }
  };

  return (
    <FAQ>
      <h1>FAQ</h1>
      <div>
        {
          QUESTIONS.map((question, index) => (
            <QAWrapper data-question={question} key={question} onClick={handleOnClick}>
              {
                visibleAnswers[question]
                  ? <FontAwesomeIcon fixedWidth icon={faMinus} size="lg" />
                  : <FontAwesomeIcon fixedWidth icon={faPlus} size="lg" />
              }
              <div>
                <Question>{question}</Question>
                {
                  visibleAnswers[question] && (
                    <Answer>{ANSWERS[index]}</Answer>
                  )
                }
              </div>
            </QAWrapper>
          ))
        }
      </div>
    </FAQ>
  );
};

export default ChronicleFAQ;
