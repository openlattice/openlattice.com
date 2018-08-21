export const TITLE = 'How It Works';

export const SUBTITLE = `As a public benefit corporation, OpenLattice enables precision 
  government by linking individual-level data across currently siloed criminal justice, 
  healthcare, and social services information at little or no cost.`;

export const TABS = {
  1: '01 Problem Definition',
  2: '02 Data Sharing Agreements',
  3: '03 Establishing Data Access',
  4: '04 Specific Services'
};

export const CONTENT_01 = {
  BODY: `Identify a clear problem and who your stakeholders are. The problem may be a rise in 
    drug overdoses in recent years, overcrowding in county jails, or the need for a shared 
    case management interface across related behavioral health agencies. Some common problems 
    jurisdictions are tackling with OpenLattice:`,

  LIST_ITEM_01: {
    TITLE: '01',
    TEXT: `Identify and assist people who repeatedly cycle through county services, consuming 
      a disproportionate amount of social resources.`
  },

  LIST_ITEM_02: {
    TITLE: '02',
    TEXT: 'Inform policy decisions based on how government services are delivered and consumed.'
  },

  LIST_ITEM_03: {
    TITLE: '03',
    TEXT: 'Collaborate with academic researchers while protecting privacy.'
  },

  LIST_ITEM_04: {
    TITLE: '04',
    TEXT: `Increase interagency coordination, and therefore strengthen the continuum of care 
      for citizens with mental health histories who might now be served by a variety of community 
      health and public safety organizations in fragmented ways.`
  }
};

export const CONTENT_02 = {
  BODY: `OpenLattice recognizes the institutional, legal, and technical challenges of 
    establishing data sharing agreements among stakeholders, adhering to various laws and regulations, 
    and navigating homegrown or legacy data infrastructure. Our approach has been to gather data 
    sharing agreements in progressive and piecemeal fashion, using a "Hub-Spoke-Wheel" model.`,

  LIST_ITEM_01: {
    TITLE: 'Hub',
    TEXT: 'OpenLattice establishes 1:1 agreements with each agency.'
  },

  LIST_ITEM_02: {
    TITLE: 'Spokes',
    BAA_LINK: 'https://www.hhs.gov/hipaa/for-professionals/covered-entities/sample-business-associate-agreement-provisions/index.html',
    HIPAA_LINK: 'https://www.hhs.gov/hipaa/for-professionals/index.html',
    QSOA_LINK: 'https://www.samhsa.gov/sites/default/files/faqs-applying-confidentiality-regulations-to-hie.pdf',
    CFR_LINK: 'https://www.samhsa.gov/health-information-technology/laws-regulations-guidelines',
    CJIS_LINK: 'https://www.fbi.gov/services/cjis/cjis-security-policy-resource-center/view',
    FERPA_LINK: 'https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html'
  },

  LIST_ITEM_03: {
    TITLE: 'Wheel',
    TEXT: `An agreement governs data use across entire collaborative. The OpenLattice platform is the 
      mechanism for implementing agreement.`
  }
};

export const CONTENT_03 = {
  BODY_01: `We have created standardized data models for key database types (e.g., Records Management 
    Systems) to alleviate the challenges of bespoke data integrations. Users can simply map fields 
    from source systems onto the OpenLattice schema.`,

  BODY_02: `This greatly reduces costs and complexity such that OpenLattice is able to offer deeply 
    discounted or free data integration services for qualifying customers.`,

  LIST_ITEM_01: {
    TITLE: 'Key Decisions',
    TEXT: 'Frequency of updates, data model elements, and mechanism of transport (direct vs. indirect).'
  },

  LIST_ITEM_02: {
    TITLE: 'Common Issues',
    TEXT: `Security concerns, privacy concerns, performance concerns, licensing & insurance when dealing 
      with 3rd party vendors, and data access when dealing with proprietary interfaces or formats.`
  },

  LIST_ITEM_03: {
    TITLE: 'Breaking Through',
    TEXT: 'Persistence and properly incentivizing third parties.'
  }
};

export const CONTENT_04 = {
  BODY_01: `Once data is integrated, we match individuals using deep learning across datasets from 
    criminal justice, health care, and social services.`,

  BODY_02: `Customers can leverage existing OpenLattice solutions or develop their own against unified 
    individual profiles that respect applicable access control rules. Existing use cases:`,

  LIST_ITEM_01: {
    TITLE: '01',
    TEXT: `Portland (Maine) is assessing, monitoring, and managing opioid-impacted individuals across 
      police, hospitals, clinics, and jail.`
  },

  LIST_ITEM_02: {
    TITLE: '02',
    TEXT: `Minnehaha & Pennington County, SD automated risk assessments for pretrial release decisions
      and monitors released individuals.`
  },

  LIST_ITEM_03: {
    TITLE: '03',
    TEXT: `Baltimore (Maryland), Portland (Maine), and Johnson County (Iowa) are monitoring behavioral health 
      associated criminal justice incidents.`
  }
};
