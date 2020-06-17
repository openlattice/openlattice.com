/*
 * @flow
 */

/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';

import styled from 'styled-components';

import {
  Header,
  PageSection,
  PurpleLink,
  SectionContent,
  SubHeader,
} from '../../components';
import { Routes } from '../../core/router';
import { GOOGLE_ANALYTICS_URL, GOOGLE_SUPPORT_URL, OL_URL } from '../../utils/constants/links';

const PrivacyPolicySectionContent = styled(SectionContent)`
  align-items: flex-start;
  margin: 0 0 100px 0;
  max-width: 720px;
  word-break: break-word;

  > p {
    margin: 0 0 24px 0;
  }
`;

const PrivacyPolicySection = () => (
  <PageSection>
    <SectionContent margin="100px 0 32px 0">
      <Header>Privacy Policy</Header>
      <SubHeader as="h6">Last updated April 03, 2019</SubHeader>
    </SectionContent>
    <PrivacyPolicySectionContent>
      <p>
        OpenLattice, Inc. (“OpenLattice,” “we,” “us,” or “our”) has created this privacy policy (this “Privacy Policy”)
        because we want you to be able to understand how personal information you provide to us is used and shared. This
        Privacy Policy relates to our information collection and us of your personal information through our website
        located at <PurpleLink to={Routes.ROOT}>{OL_URL}</PurpleLink> (the “Site”). For the avoidance of doubt, this
        Privacy Policy does not relate to data or information owned by you or your organization (“Content”) that you or
        your organization choose to upload to the OpenLattice Platform (“Platform”) or otherwise provide to OpenLattice
        for the performance of any requested services we offer. Our use of Content is governed by our Terms of Service
        or data sharing agreements signed between OpenLattice and the respective Content owners.
      </p>
      <p>By visiting our Site, you are agreeing to the terms of this Privacy Policy.</p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">The Information We Collect and/or Receive</Header>
      <p>
        In the course of operating the Site, we will collect (and/or receive) the following types of information. You
        authorize us to collect and/or receive such information.
      </p>
      <br />
      <Header align="left" as="h5">Contact Information</Header>
      <p>
        If you would like to request a demo of our products and services or download certain content that we offer
        through our Site, you will need to provide your name, e-mail address, job title, name of your
        agency/organization, and any additional information that you may choose to provide, including information about
        systems that you currently use. In this Privacy Policy, we refer to all contact information that you provide to
        us or that we otherwise obtain as set forth in this section as “Contact Information”.
      </p>
      <br />
      <Header align="left" as="h5">Job Application Information</Header>
      <p>
        If you would like to apply for any job opportunities at OpenLattice, you will need to provide your name, e-mail
        address, phone number and resume, and you may choose to provide a cover letter, LinkedIn profile, website, and
        description of how you heard about OpenLattice, and veteran status (collectively, the “Job Application
        Information”).
      </p>
      <br />
      <Header align="left" as="h5">Account Information</Header>
      <p>
        If you register for an account on the Site, we collect certain information in order to set up the account. This
        may include e-mail address, name, organizational affiliation, and other information related to managing and
        maintaining your account.
      </p>
      <br />
      <Header align="left" as="h5">Other Information</Header>
      <p>
        In addition to the Contact Information, Job Application Information, and Account Information, we may collect
        additional information (the “Other Information”). Such Other Information may include:
      </p>
      <ol>
        <li>
          From Your Activity. In an ongoing effort to improve the Site and the services we offer, we automatically
          collect certain information when you visit the Site. Such information includes, without limitation, IP
          addresses, browser type and language, referring and exit pages and URLs, date and time, amount of time spent
          on particular pages, what sections of the Site visitors visit, and similar information concerning your use of
          the Site.
        </li>
        <br />
        <li>
          From Cookies. We collect information using “cookie” technology. Cookies are small packets of data that a
          website stores on your computer’s or mobile device’s hard drive so that your computer will “remember”
          information about your visit. We may use both session cookies (which expire once you close your web browser)
          and persistent cookies (which stay on your computer until you delete them) to help us collect Other
          Information and to enhance your experience using the Site. If you do not want us to place a cookie on your
          hard drive, you may be able to turn that feature off on your computer or mobile device. Please consult your
          Internet browser’s documentation for information on how to do this and how to delete persistent cookies.
          However, if you decide not to accept cookies from us, the Site may function properly.
        </li>
        <br />
        <li>
          Third Party Analytics. We use third-party analytics services (such as Google Analytics) to evaluate your use
          of the Site, compile reports on activity, collect demographic data, analyze performance metrics, and collect
          and evaluate other information relating to the Site and mobile and Internet usage. These third parties use
          cookies and other technologies to help analyze and provide us the data. By accessing and using the Site, you
          consent to the processing of data about you by these analytics providers in the manner and for the purposes
          set out in this Privacy Policy.
        </li>
      </ol>
      <p>
        For more information on Google Analytics, including how to opt out from certain data collection,
        please visit <PurpleLink href={GOOGLE_ANALYTICS_URL}>{GOOGLE_ANALYTICS_URL}</PurpleLink>
        {' and '}
        <PurpleLink href={GOOGLE_SUPPORT_URL}>{GOOGLE_SUPPORT_URL}</PurpleLink>.
      </p>
      <p>
        Please be advised that if you opt out of any service, you may not be able to use the full functionality of the
        Site.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">How We Use and Share the Information</Header>
      <p>
        You authorize us to use your Job Application Information to determine your eligibility for the job opportunity
        and to contact you in connection with your job application. You authorize us to use your Contact Information to
        provide the requested services, including but not limited to, a demo of our products and services, newsletters,
        blog updates, and access to our downloadable content.
      </p>
      <p>
        You authorize us to use your Contact Information, Account Information and Other Information (collectively,
        the “Information”) to provide and improve our Site; to solicit your feedback; and to inform you about our
        company, products and services.
      </p>
      <p>
        You also authorize us to use and/or share your Information as described below.
      </p>
      <ul>
        <li>
          Agents, Providers and Related Third Parties. We may engage other companies and individuals to perform
          certain business-related functions on our behalf. Examples may include providing technical assistance, order
          fulfillment, customer service, and marketing assistance. These other companies will have access to the
          Information only as necessary to perform their functions and to the extent permitted by law. We may also
          share your Information with any of our parent companies, subsidiaries, or other companies under common
          control with us.
        </li>
        <br />
        <li>
          Aggregated Information. In an ongoing effort to better understand our users and our Site, we might analyze
          your Information in aggregate form in order to operate, maintain, manage, and improve the Site. This
          aggregate information does not identify you personally. We may share this aggregate data with our affiliates,
          agents, and business partners. We may also disclose aggregated user statistics in order to describe our Site
          to current and prospective business partners and to other third parties for other lawful purposes.
        </li>
        <br />
        <li>
          Business Transfers. As we develop our businesses, we might sell or buy businesses or assets. In the event of
          a corporate sale, merger, reorganization, sale of assets, dissolution, or similar event, your Information and
          Job Application Information may be part of the transferred assets.
        </li>
        <br />
        <li>
          Legal Requirements. To the extent permitted by law, we may also disclose your Information and Job Application
          Information: (i) when required by law, court order, or other government or law enforcement authority or
          regulatory agency; or (ii) whenever we believe that disclosing such information is necessary or advisable,
          for example, to protect the rights, property, or safety of OpenLattice or others. OpenLattice will notify you
          of any such request unless otherwise prohibited by law.
        </li>
      </ul>
      <br />
      <Header align="left" as="h5">Accessing and Modifying Information and Communication Preferences</Header>
      <p>
        If you have provided us any personal information, you may access, remove, review, and/or make changes to the
        same  by contacting us at support@openlattice.com.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">How We Protect the Information</Header>
      <p>
        We take your security seriously and have implemented our information technology infrastructure with appropriate
        technical and organizational measures to protect and secure your personal information from unauthorized access,
        use, and disclosure. These security measures have been implemented taking into account the state of the art of
        the technology, their cost of implementation, the risks presented by the processing, and the nature of the
        personal data.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">External Sites</Header>
      <p>
        The Site may contain links to External Sites. OpenLattice has no control over the privacy practices or the
        content of these External Sites. As such, we are not responsible for the content or the privacy policies of
        those External Sites. You should check the applicable third-party privacy policy and terms of use when visiting
        any External Sites.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">Children</Header>
      <p>
        We do not knowingly collect personal information from children under the age of 13 through the Site. If you are
        under 13, please do not give us any personal information. We encourage parents and legal guardians to monitor
        their children’s Internet usage and to help enforce our Privacy Policy by instructing their children never to
        provide personal information through the Site without their permission. If you have reason to believe that a
        child under the age of 13 has provided personal information to us, please contact us, and we will endeavor to
        delete that information from our systems.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">Important Notice to Non-U.S. Residents</Header>
      <p>
        The Site is operated in the United States. If you are located outside of the United States, please be aware
        that any information you provide to us may be transferred to, processed, maintained, and used on computers,
        servers, and systems located outside of your state, province, country, or other governmental jurisdiction where
        the privacy laws may not be as protective as those in your jurisdiction. If you are located outside the United
        States and choose to use the Site, you hereby irrevocably and unconditionally consent to such transfer,
        processing, and use in the United States and elsewhere.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">California Residents</Header>
      <p>
        Under California Civil Code Section 1798.83, California residents who have an established business relationship
        with OpenLattice may choose to opt out of our sharing their personal information with third parties for direct
        marketing purposes. If you are a California resident and (1) you wish to opt out; or (2) you wish to request
        certain information regarding our disclosure of your personal information to third parties for direct marketing
        purposes, please send an e-mail to support@openlattice.com with “Privacy Policy” in the subject line.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">Changes to This Privacy Policy</Header>
      <p>
        This Privacy Policy is effective as of the date stated at the top of this Privacy Policy. We may change this
        Privacy Policy from time to time with or without notice to you. Any such changes will be posted on the Site.
        By accessing the Site after we make any such changes to this Privacy Policy, you are deemed to have accepted
        such changes. Please be aware that, to the extent permitted by applicable law, our use of your information is
        governed by the Privacy Policy in effect at the time we collect the Information. Please refer back to this
        Privacy Policy on a regular basis.
      </p>
    </PrivacyPolicySectionContent>
    <PrivacyPolicySectionContent>
      <Header align="left" as="h4">How to Contact Us</Header>
      <p>
        If you have questions about this Privacy Policy, please contact us via e-mail at support@openlattice.com with
        “Privacy Policy” in the subject line.
      </p>
    </PrivacyPolicySectionContent>
  </PageSection>
);

export default PrivacyPolicySection;
