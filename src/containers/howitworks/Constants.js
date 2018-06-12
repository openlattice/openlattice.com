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
  BODY: `OpenLattice, Inc. recognizes the institutional, legal, and technical challenges of 
    establishing data sharing agreements among stakeholders, adhering to various laws and regulations, 
    and navigating homegrown or legacy data infrastructure. Our approach has been to gather data 
    sharing agreements in progressive and piecemeal fashion, using a "Hub-Spoke-Wheel" model.`,

  LIST_ITEM_01: {
    TITLE: 'Hub',
    TEXT: 'OpenLattice establishes 1:1 agreements with each agency.'
  },

  LIST_ITEM_02: {
    TITLE: 'Spokes',
    TEXT: 'BAA for HIPAA covered entities'
  },

  LIST_ITEM_03: {
    TITLE: 'BAA + QSOA for 42 CFR Part 2 covered providers',
    TEXT: 'CJIS for Criminal Justice data'
  },

  LIST_ITEM_04: {
    TITLE: 'FERPA for student data',
    TEXT: 'Standard OpenLattice Terms of Service for other organizations'
  },

  LIST_ITEM_05: {
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
    TEXT: 'Persistence and properly incentivize third parties.'
  }
};

export const CONTENT_04 = {
  BODY_01: `Once data is integrated, we match individuals using deep learning across data sets from 
    criminal justice, health care, and social services.`,

  BODY_02: `Customers can leverage existing OpenLattice solutions or develop their own against unified 
    individual profiles that respect applicable access control rules. Exisiting usecases:`,

  LIST_ITEM_01: {
    TITLE: '01',
    TEXT: `Portland (Maine) is assessing, monitoring, and managing opioid-impacted individuals across 
      police, hospitals, clinics, and jail.`
  },

  LIST_ITEM_02: {
    TITLE: '02',
    TEXT: `Minnehaha & Pennington County, SD automated risk assessments for pre-trial release decisions 
      and monitors released individuals.`
  },

  LIST_ITEM_03: {
    TITLE: '03',
    TEXT: `Baltimore, Portland (Maine), and Johnson County (Iowa) are monitoring behavioral health 
      associated criminal justice incidents.`
  }
};
