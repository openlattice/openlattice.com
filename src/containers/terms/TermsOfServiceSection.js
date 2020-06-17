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
import { JAMS_URL, OL_PRIVACY_URL, OL_URL } from '../../utils/constants/links';

const TermsOfServiceSectionContent = styled(SectionContent)`
  align-items: flex-start;
  margin: 0 0 100px 0;
  max-width: 720px;
  word-break: break-word;

  > p {
    margin: 0 0 24px 0;
  }

  li {
    list-style-type: disc;
    margin-bottom: 8px;
  }
`;

const PrivacyPolicySection = () => (
  <PageSection>
    <SectionContent margin="100px 0 32px 0">
      <Header>Terms of Service</Header>
      <SubHeader as="h6">Last updated April 03, 2019</SubHeader>
    </SectionContent>
    <TermsOfServiceSectionContent>
      <p>
        OpenLattice, Inc., is a cloud-based platform that enables people and organizations to securely and compliantly
        share sensitive data. This website, <PurpleLink to={Routes.ROOT}>{OL_URL}</PurpleLink> (the “Site”) is owned
        and operated by OpenLattice, Inc. (“OpenLattice”, “we”, or “us”). By registering for, using, or accessing the
        Service, inclusive of Platform features, you agree to be bound by these terms of service (“Terms”). If you
        don’t agree to these Terms, you must discontinue use of the Services. If you have any questions about these
        terms, please contact us: support@openlattice.com. For the avoidance of doubt, these Terms do not govern our
        customers’ use of the services and/or products through paid licenses or signed data sharing agreements.
      </p>
      <p>
        Capitalized terms not defined in these Terms of Use shall have the meaning set forth in our Privacy Policy.
      </p>
      <p>
        THE SECTIONS BELOW TITLED “BINDING ARBITRATION” AND “CLASS ACTION WAIVER” CONTAIN A BINDING ARBITRATION
        AGREEMENT AND CLASS ACTION WAIVER. THEY AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">1. Use of Personal Information</Header>
      <p>
        Your use of the Site may involve the transmission to us of certain personal information. Our policies with
        respect to the collection and use of such personal information are governed by our Privacy Policy located
        at <PurpleLink to={Routes.PRIVACY_POLICY}>{OL_PRIVACY_URL}</PurpleLink> which is hereby incorporated by
        reference in its entirety. You acknowledge your use of the Services is subject to our Privacy Policy and that
        it identifies how we collect, store, and use certain information.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">2. Site Guidelines</Header>
      <p style={{ margin: 0 }}>
        By accessing and/or using the Site, you hereby agree to comply with these Site rules and that:
      </p>
      <ul>
        <li>
          You will comply with all applicable laws in your use of the Site and will not use the Site for any unlawful
          purpose;
        </li>
        <li>
          You will not access or use the Site to collect any market research for a competing business;
        </li>
        <li>
          You will not upload, post, e-mail, transmit, or otherwise make available any content that:
        </li>
        <ul>
          <li>
            is not owned by you or by an entity on behalf of which you are an authorized representative; or
          </li>
          <li>
            is subject to any law, regulation, or rule, without first entering into an applicable data sharing
            agreement with us; or
          </li>
          <li>
            infringes any copyright, trademark, right of publicity, or other proprietary rights of any person or
            entity; or
          </li>
          <li>
            is threatening, tortious, defamatory, libelous, indecent, obscene, pornographic, invasive of another’s
            privacy, or promotes violence; or
          </li>
          <li>
            unlawfully discloses any sensitive information about another person, including that person’s e-mail
            address, postal address, phone number, credit card information, or any similar information;
          </li>
        </ul>
        <li>
          You will not impersonate any person or entity or falsely state or otherwise misrepresent your affiliation
          with a person or entity;
        </li>
        <li>
          You will not decompile, reverse engineer, or disassemble any software or other products or processes
          accessible through the Site;
        </li>
        <li>
          You will not circumvent, remove, alter, deactivate, degrade, or thwart any of the protections in the Site;
        </li>
        <li>
          You will not use automated means, including spiders, robots, crawlers, data mining tools, or the like to
          download or scrape data from the Site, directly or indirectly, except for Internet search engines
          (e.g., Google) and non-commercial public archives (e.g., archive.org) that comply with our robots.txt file;
        </li>
        <li>
          You will not use, frame, or utilize framing techniques to enclose any OpenLattice’ trademark, logo, or other
          proprietary information (including the images found on the Site, the content of any text, or the
          layout/design of any page or form contained on a page) without OpenLattice’ express written consent;
        </li>
        <li>
          You will not use meta tags or any other “hidden text” utilizing a OpenLattice’ name, trademark, or product
          name without OpenLattice’ express written consent;
        </li>
        <li>
          You will not take any action that imposes or may impose (in our sole discretion) an unreasonable or
          disproportionately large load on our technical infrastructure;
        </li>
        <li>
          You will not interfere with or attempt to interrupt the proper operation of the Site through the use of any
          virus, device, information collection or transmission mechanism, software or routine, or access or attempt to
          gain access to any data, files, or passwords related to the Site through hacking, password or data mining, or
          any other means; and
        </li>
        <li>
          If you find something that violates our Community Guidelines, please let us know, and we’ll review it.
        </li>
      </ul>
      <p>
        We reserve the right, in our sole and absolute discretion, to deny you access to the Site, or any portion of
        the Site, without notice, and to remove any content that does not adhere to these guidelines.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">3. Customer Content, Permissions, and Sharing</Header>
      <p>
        When you or your organization choose to upload or integrate data (“Content”) onto the Platform, you or your
        organization affirm that the Content complies with Site Guidelines above. You or your organization retain
        ownership rights over Content and only grant to OpenLattice the limited rights required to offer the Services.
        These limited rights include permission to access, transfer, copy, process, analyze and utilize the Content in
        any manner reasonably necessary to manage and administer the Platform and improve the Platform and our Services.
      </p>
      <p>
        Our Services and the Platform include features that allow you or your organization to share Content with third
        parties via the Platform. Content is private by default but can be shared by granting third parties permissions
        that allow access to Content. You or your organization are solely responsible for (1) determining whether a
        given third party has an appropriate need to access Content, (2) entering into an agreement with that third
        party to comply with any and all laws, regulations, rules, or polices pertaining to the Content, and (3)
        configuring or requesting OpenLattice assistance in configuring permissions to grant to that third party
        access to Content.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">4. Intellectual Property</Header>
      <p>
        The Site contains materials, such as software, text, graphics, images, sound recordings, audiovisual works,
        webinars, white papers, case studies, and other materials provided by or on behalf of OpenLattice (collectively
        referred to as the “Materials”). The Materials may be owned by us or by third parties. The Materials are
        protected under both United States and foreign laws. Unauthorized use of the Materials may violate copyright,
        trademark, and other laws. You have no rights in or to the Materials, and you will not use the Materials except
        as permitted under this Agreement. No other use is permitted without prior written consent from us. You must
        retain all copyright and other proprietary notices contained in the original Materials on any copy you make of
        the Materials. You may not sell, transfer, assign, license, sublicense, or modify the Materials or reproduce,
        display, publicly perform, make a derivative version of, distribute, or otherwise use the Materials in any way
        for any public or commercial purpose. The use or posting of the Materials on any other website or in a
        networked computer environment for any purpose is expressly prohibited.
      </p>
      <p>
        If you violate any part of this Agreement, your permission to access and/or use the Materials and the Site
        automatically terminates and you must immediately destroy any copies you have made of the Materials.
      </p>
      <p>
        The trademarks, service marks, and logos of OpenLattice (“OpenLattice Trademarks”) used and displayed on the
        Site are registered and unregistered trademarks or service marks of OpenLattice. Other company, product, and
        service names located on the Site may be trademarks or service marks owned by others (the “Third-Party
        Trademarks”, and, collectively with the OpenLattice Trademarks, the “Trademarks”). Nothing on the Site should
        be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks,
        without our prior written permission specific for each such use. Use of the Trademarks as part of a link to or
        from any site is prohibited unless establishment of such a link is approved in advance by us in writing. All
        goodwill generated from the use of the OpenLattice Trademarks inures to our benefit.
      </p>
      <p>
        Elements of the Site are protected by trade dress, trademark, unfair competition, and other state and federal
        laws and may not be copied or imitated in whole or in part, by any means, including but not limited to the use
        of framing or mirrors. None of the Materials may be retransmitted without our express, written consent for each
        and every instance.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">5. Communications with Us</Header>
      <p>
        We encourage you to e-mail us, but we do not want you to, and you should not, e-mail us any content that
        contains confidential information. With respect to all e-mails you send to us, including but not limited to,
        feedback, questions, comments, suggestions, and the like, we shall be free to use any ideas, concepts,
        know-how, or techniques contained in your communications for any purpose whatsoever, including but not limited
        to, the development, production and marketing of products and services that incorporate such information.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">6. No Warranties/Limitation of Liability</Header>
      <p>
        YOU ACKNOWLEDGE THAT ALTHOUGH THE SITE, MATERIALS, AND PLATFORM CONTENT CONTAINED THEREIN CAN BE USED AS AIDS
        TO MAKE INFORMED DECISIONS, THE SITE, MATERIALS, AND PLATFORM CONTENT CONTAINED THEREIN ARE SOLELY
        INFORMATIONAL IN NATURE AND ARE NOT MEANT TO BE SUBSTITUTES FOR LEGAL, BUSINESS, OR MEDICAL ADVICE, OR
        EXERCISE OF YOUR OWN JUDGMENT. ANY SUCH DECISIONS OR JUDGMENTS ARE MADE AT YOUR SOLE DISCRETION AND ELECTION.
      </p>
      <p>
        THE SITE, MATERIALS, AND PLATFORM CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY WARRANTIES OF ANY
        KIND, INCLUDING THAT THE SITE, MATERIALS, OR PLATFORM CONTENT ARE ACCURATE OR WILL OPERATE ERROR-FREE.
      </p>
      <p>
        WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, MERCHANTABILITY,
        NON-INFRINGEMENT OF THIRD PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM A
        COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. IN CONNECTION WITH ANY WARRANTY, CONTRACT, OR
        COMMON LAW TORT CLAIMS: (I) WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR CONSEQUENTIAL
        DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM THE USE OR
        INABILITY TO ACCESS AND USE THE SITE, MATERIALS, OR PLATFORM CONTENT, EVEN IF WE HAVE BEEN ADVISED OF THE
        POSSIBILITY OF SUCH DAMAGES; AND (II) ANY DIRECT DAMAGES THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF THE
        SITE OR THE CONTENT SHALL BE LIMITED TO ONE HUNDRED DOLLARS ($100).
      </p>
      <p>
        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. THEREFORE, SOME OF THE ABOVE LIMITATIONS
        ON WARRANTIES IN THIS SECTION MAY NOT APPLY TO YOU.
      </p>
      <p>
        NOTHING IN THESE TERMS OF USE SHALL AFFECT ANY NON-WAIVABLE STATUTORY RIGHTS THAT APPLY TO YOU.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">7. External Sites</Header>
      <p>
        The Site may contain links to third-party websites (“External Sites”). These links are provided solely as a
        convenience to you and not as an endorsement by us of the content on such External Sites. The content of such
        External Sites is developed and provided by others. You should contact the site administrator or webmaster for
        those External Sites if you have any concerns regarding such links or any content located on such External
        Sites. We are not responsible for the content of any linked External Sites and do not make any representations
        regarding the content or accuracy of materials on such External Sites. You should take precautions when
        downloading files from all websites to protect your computer from viruses and other destructive programs. If
        you decide to access linked External Sites, you do so at your own risk.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">8. Indemnification</Header>
      <p>
        You agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees and
        assigns harmless from and against any claims, actions, or demands, including, without limitation, reasonable
        legal and accounting fees, arising or resulting from: (i) your breach of this Agreement; (ii) your misuse of
        Materials, Content, or the Site; and/or (iii) your violation of any third-party right, including without
        limitation any copyright, trademark, property, or privacy right.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">9. Compliance with Applicable Laws</Header>
      <p>
        The Site is based in the United States. We make no claims concerning whether the Materials or Content may be
        downloaded, viewed, or be appropriate for use outside of the United States. If you access the Site, or the
        Content from outside of the United States, you do so at your own risk. Whether inside or outside of the United
        States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">10. Termination of the Agreement</Header>
      <p>
        We reserve the right, in our sole discretion, to restrict, suspend, or terminate this Agreement and your access
        to all or any part of the Site, at any time and for any reason without prior notice or liability. We reserve
        the right to change, suspend, or discontinue all or any part of the Site at any time without prior notice or
        liability.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">11. Digital Millennium Copyright Act</Header>
      <p>
        OpenLattice respects the intellectual property rights of others and attempts to comply with all relevant laws.
        We will review all claims of copyright infringement received and remove any Content or user submissions deemed
        to have been posted or distributed in violation of any such laws.
      </p>
      <p>
        Our designated agent under the Digital Millennium Copyright Act (the “Act”) for the receipt of any Notification
        of Claimed Infringement which may be given under that Act is as follows:
      </p>
      <p>
        Email: support@openlattice.com
      </p>
      <p>
        If you believe that your work has been copied on the Site in a way that constitutes copyright infringement,
        please provide our agent with notice in accordance with the requirements of the Act, including (i) a
        description of the copyrighted work that has been infringed and the specific location on the Site where such
        work is located; (ii) a description of the location of the original or an authorized copy of the copyrighted
        work; (iii) your address, telephone number and e-mail address; (iv) a statement by you that you have a good
        faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; (v) a
        statement by you, made under penalty of perjury, that the information in your notice is accurate and that you
        are the copyright owner or authorized to act on the copyright owner’s behalf; and (vi) an electronic or
        physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the
        copyright interest.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">12. Binding Arbitration</Header>
      <p>
        In the event of a dispute arising under or relating to this Agreement or any other products or services
        provided by us (each, a “Dispute”), either party may elect to finally and exclusively resolve the dispute by
        binding arbitration governed by the Federal Arbitration Act (“FAA”). Any election to arbitrate, at any time,
        shall be final and binding on the other party. IF EITHER PARTY CHOOSES ARBITRATION, NEITHER PARTY SHALL HAVE
        THE RIGHT TO LITIGATE SUCH CLAIM IN COURT OR TO HAVE A JURY TRIAL, EXCEPT EITHER PARTY MAY BRING ITS CLAIM IN
        ITS LOCAL SMALL CLAIMS COURT, IF PERMITTED BY THAT SMALL CLAIMS COURT RULES AND IF WITHIN SUCH COURT’S
        JURISDICTION. ARBITRATION IS DIFFERENT FROM COURT, AND DISCOVERY AND APPEAL RIGHTS MAY ALSO BE LIMITED IN
        ARBITRATION. All disputes will be resolved before a neutral arbitrator, whose decision will be final except
        for a limited right of appeal under the FAA. The arbitration shall be commenced and conducted by the Judicial
        Arbitration and Mediation Services (“JAMS”) pursuant to its then current Comprehensive Arbitration Rules and
        Procedures and in accordance with the Expedited Procedures in those rules, or, where appropriate, pursuant to
        JAMS’ Streamlined Arbitration Rules and Procedures. All applicable JAMS’ rules and procedures are available at
        the JAMS website <PurpleLink href={JAMS_URL}>{JAMS_URL}</PurpleLink>. Each party will be responsible for
        paying any JAMS filing, administrative and arbitrator fees in accordance with JAMS rules. Judgment on the
        arbitrator’s award may be entered in any court having jurisdiction. This clause shall not preclude parties from
        seeking provisional remedies in aid of arbitration from a court of appropriate jurisdiction. The arbitration
        may be conducted in person, through the submission of documents, by phone, or online. If conducted in person,
        the arbitration shall take place in the United States county where you reside. The parties may litigate in
        court to compel arbitration, to stay a proceeding pending arbitration, or to confirm, modify, vacate or enter
        judgment on the award entered by the arbitrator. The parties shall cooperate in good faith in the voluntary and
        informal exchange of all non-privileged documents and other information (including electronically stored
        information) relevant to the Dispute immediately after commencement of the arbitration. Nothing in this
        Agreement will prevent OpenLattice from seeking injunctive relief in any court of competent jurisdiction as
        necessary to protect OpenLattice’s proprietary interests.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">13. Class Action Waiver</Header>
      <p>
        You agree that any arbitration or proceeding shall be limited to the Dispute between us and you individually.
        To the full extent permitted by law, (i) no arbitration or proceeding shall be joined with any other; (ii)
        there is no right or authority for any Dispute to be arbitrated or resolved on a class action-basis or to
        utilize class action procedures; and (iii) there is no right or authority for any Dispute to be brought in a
        purported representative capacity on behalf of the general public or any other persons. YOU AGREE THAT YOU MAY
        BRING CLAIMS AGAINST US ONLY IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS CUSTOMER IN ANY
        PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
      </p>
    </TermsOfServiceSectionContent>
    <TermsOfServiceSectionContent>
      <Header align="left" as="h4">14. Miscellaneous</Header>
      <p>
        This Agreement is governed by the internal substantive laws of the State of New York, without respect to its
        conflict of laws provisions. If this Agreement is terminated in accordance with the Termination provision
        above, such termination shall not affect the validity of the following provisions of this Agreement, which
        shall remain in full force and effect: “Intellectual Property,” “Communications with Us,” “No Warranties;
        Limitation of Liability,” “Indemnification,” “Termination of the Agreement,” “Binding Arbitration,” “Class
        Action Waiver,” and “Miscellaneous.”
      </p>
      <p>
        Our failure to act on or enforce any provision of the Agreement shall not be construed as a waiver of that
        provision or any other provision in this Agreement. No waiver shall be effective against us unless made in
        writing, and no such waiver shall be construed as a waiver in any other or subsequent instance. Except as
        expressly agreed by us and you in writing, this Agreement constitutes the entire Agreement between you and us
        with respect to the subject matter, and supersedes all previous or contemporaneous agreements, whether written
        or oral, between the parties with respect to the subject matter. The section headings are provided merely for
        convenience and shall not be given any legal import. This Agreement will inure to the benefit of our
        successors, assigns, licensees, and sublicensees.
      </p>
    </TermsOfServiceSectionContent>
  </PageSection>
);

export default PrivacyPolicySection;
