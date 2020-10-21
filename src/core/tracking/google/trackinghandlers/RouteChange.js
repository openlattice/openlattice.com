/*
 * @flow
 */

import _isFunction from 'lodash/isFunction';

import { GOOGLE_TRACKING_ID } from '..';

declare var gtag :?Function;
type Action = {
  +type :string;
};

type RouteChangeEvent = {
  page_location :string;
  page_path :string;
  user_id ?:string;
};

export default function handler(action :Action, prevState :any, nextState :any) {

  try {

    const prevPath = prevState.getIn(['router', 'location', 'pathname'], '');
    const prevSearch = prevState.getIn(['router', 'location', 'search'], '');
    const nextPath = nextState.getIn(['router', 'location', 'pathname'], '');
    const nextSearch = nextState.getIn(['router', 'location', 'search'], '');
    if (prevPath === nextPath && prevSearch === nextSearch) {
      return;
    }

    const { location } = window;
    const origin = `${location.protocol}//${location.host}`;
    const url = `${origin}${location.pathname}${location.hash}`.split('?')[0];

    // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
    // https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
    // https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id#set_user_id
    const event :RouteChangeEvent = {};
    event.page_location = url;
    event.page_path = url.replace(origin, '');

    if (_isFunction(gtag)) {
      gtag('config', GOOGLE_TRACKING_ID, event);
    }
    else {
      console.error('global "gtag" function not available', gtag);
    }
  }
  catch (e) {
    console.error('caught an exception', e);
  }
}
