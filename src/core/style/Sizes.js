/*
 * @flow
 */

// 1020 = 960 for content + 2*30 for edges padding
export const PAGE_SECTION_MIN_WIDTH :number = 1020;
export const WINDOW_EDGE_PADDING :number = 30;
export const CONTENT_GRID_WIDTH :number = PAGE_SECTION_MIN_WIDTH - (WINDOW_EDGE_PADDING * 2);

// Media Queries
export const MEDIA_QUERY_SM :number = 768;
export const MEDIA_QUERY_MD :number = PAGE_SECTION_MIN_WIDTH;
