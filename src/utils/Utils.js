/*
 * @flow
 */

function openBeacon() {
  if (window.Beacon) {
    // eslint-disable-next-line new-cap
    window.Beacon('open');
  }
}

export {
  openBeacon,
};
