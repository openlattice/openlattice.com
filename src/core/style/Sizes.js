/*
 * @flow
 */

export const GRID_GAP :48 = 48;
export const PAGE_PADDING :32 = 32;
export const CONTENT_WIDTH :1104 = 1104; // 12 column grid system, 48px * (12 columns + 11 gutters)

// $FlowFixMe - ignoring flow because I prefer the code hints to show the value
export const PAGE_SECTION_WIDTH :1168 = CONTENT_WIDTH + (PAGE_PADDING * 2);

// Common Media Queries
export const MEDIA_QUERY_SM :420 = 420;
export const MEDIA_QUERY_MD :768 = 768;
export const MEDIA_QUERY_LG :1104 = CONTENT_WIDTH;

// Technology Media Queries
export const MEDIA_QUERY_TECH_SM :number = 420;

// Jurisdictions Media Queries
export const MEDIA_QUERY_JUR_SM :number = 530;
