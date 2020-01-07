// @flow

const INTRODUCTION :Object = {
  PARAGRAPH_2: (`Capitalized terms not defined in these Terms of Use shall have the meaning set forth in
    our Privacy Policy.`),
  PARAGRAPH_3: (`THE SECTIONS BELOW TITLED “BINDING ARBITRATION” AND “CLASS ACTION WAIVER” CONTAIN A BINDING
    ARBITRATION AGREEMENT AND CLASS ACTION WAIVER. THEY AFFECT YOUR LEGAL RIGHTS. PLEASE READ THEM.`)
};

const ITEM_1 :Object = {
  TITLE: '1. Use of Personal Information'
};

const ITEM_2 :Object = {
  TOP_LINE: 'By accessing and/or using the Site, you hereby agree to comply with these Site rules and that:',
  BOTTOM_LINE: (`We reserve the right, in our sole and absolute discretion, to deny you access to the Site,
    or any portion of the Site, without notice, and to remove any content that does not adhere to these guidelines.`),
  MAIN_BULLET_POINTS: [
    (`You will comply with all applicable laws in your use of the Site and will not use the Site for any unlawful
      purpose;`),
    'You will not access or use the Site to collect any market research for a competing business;',
    'You will not upload, post, e-mail, transmit, or otherwise make available any content that:',
    (`You will not impersonate any person or entity or falsely state or otherwise misrepresent your affiliation
      with a person or entity;`),
    (`You will not decompile, reverse engineer, or disassemble any software or other products or processes
       accessible through the Site;`),
    'You will not circumvent, remove, alter, deactivate, degrade, or thwart any of the protections in the Site;',
    (`You will not use automated means, including spiders, robots, crawlers, data mining tools, or the like to
      download or scrape data from the Site, directly or indirectly, except for Internet search engines (e.g.,
      Google) and non-commercial public archives (e.g., archive.org) that comply with our robots.txt file;`),
    (`You will not use, frame, or utilize framing techniques to enclose any OpenLattice’ trademark, logo, or
      other proprietary information (including the images found on the Site, the content of any text, or the
      layout/design of any page or form contained on a page) without OpenLattice’ express written consent;`),
    (`You will not use meta tags or any other “hidden text” utilizing a OpenLattice’ name, trademark, or
      product name without OpenLattice’ express written consent;`),
    (`You will not take any action that imposes or may impose (in our sole discretion) an unreasonable or
      disproportionately large load on our technical infrastructure;`),
    (`You will not interfere with or attempt to interrupt the proper operation of the Site through the use of any
      virus, device, information collection or transmission mechanism, software or routine, or access or attempt
      to gain access to any data, files, or passwords related to the Site through hacking, password or data mining,
      or any other means; and`),
    'If you find something that violates our Community Guidelines, please let us know, and we’ll review it.'
  ],
  INNER_BULLET_POINTS: [
    'is not owned by you or by an entity on behalf of which you are an authorized representative; or',
    (`is subject to any law, regulation, or rule, without first entering into an applicable data sharing agreement
      with us; or`),
    'infringes any copyright, trademark, right of publicity, or other proprietary rights of any person or entity; or',
    (`is threatening, tortious, defamatory, libelous, indecent, obscene, pornographic, invasive of another’s privacy,
      or promotes violence; or`),
    (`unlawfully discloses any sensitive information about another person, including that person’s e-mail address,
      postal address, phone number, credit card information, or any similar information;`)
  ],
  TITLE: '2. Site Guidelines'
};

const ITEM_3 :Object = {
  PARAGRAPH_1: (`When you or your organization choose to upload or integrate data (“Content”) onto the Platform,
    you or your organization affirm that the Content complies with Site Guidelines above. You or your organization
    retain ownership rights over Content and only grant to OpenLattice the limited rights required to offer the
    Services. These limited rights include permission to access, transfer, copy, process, analyze and utilize
    the Content in any manner reasonably necessary to manage and administer the Platform and improve the
    Platform and our Services.`),
  PARAGRAPH_2: (`Our Services and the Platform include features that allow you or your organization to share
    Content with third parties via the Platform. Content is private by default but can be shared by granting
    third parties permissions that allow access to Content. You or your organization are solely responsible
    for (1) determining whether a given third party has an appropriate need to access Content, (2) entering
    into an agreement with that third party to comply with any and all laws, regulations, rules, or polices
    pertaining to the Content, and (3) configuring or requesting OpenLattice assistance in configuring
    permissions to grant to that third party access to Content.`),
  TITLE: '3. Customer Content, Permissions, and Sharing'
};

const ITEM_4 :Object = {
  PARAGRAPH_1: (`The Site contains materials, such as software, text, graphics, images, sound recordings,
    audiovisual works, webinars, white papers, case studies, and other materials provided by or on behalf
    of OpenLattice (collectively referred to as the “Materials”). The Materials may be owned by us or by
    third parties. The Materials are protected under both United States and foreign laws. Unauthorized
    use of the Materials may violate copyright, trademark, and other laws. You have no rights in or to
    the Materials, and you will not use the Materials except as permitted under this Agreement. No other
    use is permitted without prior written consent from us. You must retain all copyright and other
    proprietary notices contained in the original Materials on any copy you make of the Materials.
    You may not sell, transfer, assign, license, sublicense, or modify the Materials or reproduce,
    display, publicly perform, make a derivative version of, distribute, or otherwise use the Materials
    in any way for any public or commercial purpose. The use or posting of the Materials on any other
    website or in a networked computer environment for any purpose is expressly prohibited.`),
  PARAGRAPH_2: (`If you violate any part of this Agreement, your permission to access and/or use the
    Materials and the Site automatically terminates and you must immediately destroy any copies you
    have made of the Materials.`),
  PARAGRAPH_3: (`The trademarks, service marks, and logos of OpenLattice (“OpenLattice Trademarks”) used
    and displayed on the Site are registered and unregistered trademarks or service marks of OpenLattice.
    Other company, product, and service names located on the Site may be trademarks or service marks owned
    by others (the “Third-Party Trademarks”, and, collectively with the OpenLattice Trademarks, the
    “Trademarks”). Nothing on the Site should be construed as granting, by implication, estoppel,
    or otherwise, any license or right to use the Trademarks, without our prior written permission
    specific for each such use. Use of the Trademarks as part of a link to or from any site is
    prohibited unless establishment of such a link is approved in advance by us in writing.
    All goodwill generated from the use of the OpenLattice Trademarks inures to our benefit.`),
  PARAGRAPH_4: (`Elements of the Site are protected by trade dress, trademark, unfair competition,
    and other state and federal laws and may not be copied or imitated in whole or in part, by any
    means, including but not limited to the use of framing or mirrors. None of the Materials may
    be retransmitted without our express, written consent for each and every instance.`),
  TITLE: '4. Intellectual Property'
};

const ITEM_5 :Object = {
  BODY: (`We encourage you to e-mail us, but we do not want you to, and you should not, e-mail us any
    content that contains confidential information. With respect to all e-mails you send to us,
    including but not limited to, feedback, questions, comments, suggestions, and the like, we
    shall be free to use any ideas, concepts, know-how, or techniques contained in your communications
    for any purpose whatsoever, including but not limited to, the development, production and marketing
    of products and services that incorporate such information.`),
  TITLE: '5. Communications with Us'
};

const ITEM_6 :Object = {
  PARAGRAPH_1: (`YOU ACKNOWLEDGE THAT ALTHOUGH THE SITE, MATERIALS, AND PLATFORM CONTENT CONTAINED THEREIN CAN BE
    USED AS AIDS TO MAKE INFORMED DECISIONS, THE SITE, MATERIALS, AND PLATFORM CONTENT CONTAINED THEREIN ARE SOLELY
    INFORMATIONAL IN NATURE AND ARE NOT MEANT TO BE SUBSTITUTES FOR LEGAL, BUSINESS, OR MEDICAL ADVICE, OR EXERCISE
    OF YOUR OWN JUDGMENT. ANY SUCH DECISIONS OR JUDGMENTS ARE MADE AT YOUR SOLE DISCRETION AND ELECTION.`),
  PARAGRAPH_2: (`THE SITE, MATERIALS, AND PLATFORM CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT ANY
    WARRANTIES OF ANY KIND, INCLUDING THAT THE SITE, MATERIALS, OR PLATFORM CONTENT ARE ACCURATE OR WILL OPERATE
    ERROR-FREE.`),
  PARAGRAPH_3: (`WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE, MERCHANTABILITY,
    NON-INFRINGEMENT OF THIRD PARTIES’ RIGHTS, AND FITNESS FOR PARTICULAR PURPOSE AND ANY WARRANTIES ARISING FROM
    A COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE OF TRADE. IN CONNECTION WITH ANY WARRANTY, CONTRACT,
    OR COMMON LAW TORT CLAIMS: (I) WE AND OUR LICENSORS SHALL NOT BE LIABLE FOR ANY INCIDENTAL OR CONSEQUENTIAL
    DAMAGES, LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS INTERRUPTION RESULTING FROM THE USE
    OR INABILITY TO ACCESS AND USE THE SITE, MATERIALS, OR PLATFORM CONTENT, EVEN IF WE HAVE BEEN ADVISED OF
    THE POSSIBILITY OF SUCH DAMAGES; AND (II) ANY DIRECT DAMAGES THAT YOU MAY SUFFER AS A RESULT OF YOUR USE OF
    THE SITE OR THE CONTENT SHALL BE LIMITED TO ONE HUNDRED DOLLARS ($100).`),
  PARAGRAPH_4: (`SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES. THEREFORE, SOME OF THE ABOVE
    LIMITATIONS ON WARRANTIES IN THIS SECTION MAY NOT APPLY TO YOU.`),
  PARAGRAPH_5: 'NOTHING IN THESE TERMS OF USE SHALL AFFECT ANY NON-WAIVABLE STATUTORY RIGHTS THAT APPLY TO YOU.',
  TITLE: '6. No Warranties/Limitation of Liability'
};

const ITEM_7 :Object = {
  BODY: (`The Site may contain links to third-party websites (“External Sites”). These links are provided solely as
  a convenience to you and not as an endorsement by us of the content on such External Sites. The content of such
  External Sites is developed and provided by others. You should contact the site administrator or webmaster for
  those External Sites if you have any concerns regarding such links or any content located on such External Sites.
  We are not responsible for the content of any linked External Sites and do not make any representations regarding
  the content or accuracy of materials on such External Sites. You should take precautions when downloading files
  from all websites to protect your computer from viruses and other destructive programs. If you decide to access
  linked External Sites, you do so at your own risk.`),
  TITLE: '7. External Sites'
};

const ITEM_8 :Object = {
  BODY: (`You agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees
    and assigns harmless from and against any claims, actions, or demands, including, without limitation,
    reasonable legal and accounting fees, arising or resulting from: (i) your breach of this Agreement; (ii) your
    misuse of Materials, Content, or the Site; and/or (iii) your violation of any third-party right, including
    without limitation any copyright, trademark, property, or privacy right.`),
  TITLE: '8. Indemnification'
};

const ITEM_9 :Object = {
  BODY: (`The Site is based in the United States. We make no claims concerning whether the Materials or Content may
    be downloaded, viewed, or be appropriate for use outside of the United States. If you access the Site, or the
    Content from outside of the United States, you do so at your own risk. Whether inside or outside of the United
    States, you are solely responsible for ensuring compliance with the laws of your specific jurisdiction.`),
  TITLE: '9. Compliance with Applicable Laws'
};

const ITEM_10 :Object = {
  BODY: (`We reserve the right, in our sole discretion, to restrict, suspend, or terminate this Agreement and your
    access to all or any part of the Site, at any time and for any reason without prior notice or liability. We
    reserve the right to change, suspend, or discontinue all or any part of the Site at any time without prior
    notice or liability.`),
  TITLE: '10. Termination of the Agreement'
};

const ITEM_11 :Object = {
  PARAGRAPH_1: (`OpenLattice respects the intellectual property rights of others and attempts to comply with all
    relevant laws. We will review all claims of copyright infringement received and remove any Content or user
    submissions deemed to have been posted or distributed in violation of any such laws.`),
  PARAGRAPH_2: (`Our designated agent under the Digital Millennium Copyright Act (the “Act”) for the receipt
  of any Notification of Claimed Infringement which may be given under that Act is as follows:`),
  PARAGRAPH_3: 'Email: support@openlattice.com',
  PARAGRAPH_4: (`If you believe that your work has been copied on the Site in a way that constitutes copyright
    infringement, please provide our agent with notice in accordance with the requirements of the Act, including
    (i) a description of the copyrighted work that has been infringed and the specific location on the Site where
    such work is located; (ii) a description of the location of the original or an authorized copy of the
    copyrighted work; (iii) your address, telephone number and e-mail address; (iv) a statement by you that you
    have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law;
    (v) a statement by you, made under penalty of perjury, that the information in your notice is accurate and
    that you are the copyright owner or authorized to act on the copyright owner’s behalf; and (vi) an electronic
    or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of
    the copyright interest.`),
  TITLE: '11. Digital Millennium Copyright Act'
};

const ITEM_12 :Object = {
  TITLE: '12. Binding Arbitration'
};

const ITEM_13 :Object = {
  BODY: (`You agree that any arbitration or proceeding shall be limited to the Dispute between us and you individually.
    To the full extent permitted by law, (i) no arbitration or proceeding shall be joined with any other; (ii) there is
    no right or authority for any Dispute to be arbitrated or resolved on a class action-basis or to utilize class
    action procedures; and (iii) there is no right or authority for any Dispute to be brought in a purported
    representative capacity on behalf of the general public or any other persons. YOU AGREE THAT YOU MAY BRING CLAIMS
    AGAINST US ONLY IN YOUR INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS CUSTOMER IN ANY PURPORTED CLASS OR
    REPRESENTATIVE PROCEEDING.`),
  TITLE: '13. Class Action Waiver'
};

const ITEM_14 :Object = {
  PARAGRAPH_1: (`This Agreement is governed by the internal substantive laws of the State of New York, without respect
    to its conflict of laws provisions. If this Agreement is terminated in accordance with the Termination provision
    above, such termination shall not affect the validity of the following provisions of this Agreement, which shall
    remain in full force and effect: “Intellectual Property,” “Communications with Us,” “No Warranties; Limitation
    of Liability,” “Indemnification,” “Termination of the Agreement,” “Binding Arbitration,” “Class Action Waiver,”
    and “Miscellaneous.”`),
  PARAGRAPH_2: (`Our failure to act on or enforce any provision of the Agreement shall not be construed as a waiver
    of that provision or any other provision in this Agreement. No waiver shall be effective against us unless made
    in writing, and no such waiver shall be construed as a waiver in any other or subsequent instance. Except as
    expressly agreed by us and you in writing, this Agreement constitutes the entire Agreement between you and us
    with respect to the subject matter, and supersedes all previous or contemporaneous agreements, whether written
    or oral, between the parties with respect to the subject matter. The section headings are provided merely for
    convenience and shall not be given any legal import. This Agreement will inure to the benefit of our successors,
    assigns, licensees, and sublicensees.`),
  TITLE: '14. Miscellaneous'
};

export {
  INTRODUCTION,
  ITEM_1,
  ITEM_2,
  ITEM_3,
  ITEM_4,
  ITEM_5,
  ITEM_6,
  ITEM_7,
  ITEM_8,
  ITEM_9,
  ITEM_10,
  ITEM_11,
  ITEM_12,
  ITEM_13,
  ITEM_14
};
