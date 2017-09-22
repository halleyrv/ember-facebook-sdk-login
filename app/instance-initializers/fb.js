export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  appInstance.inject('controller', 'fb', 'service:fb');
  appInstance.inject('route', 'fb', 'service:fb');
}

export default {
  name: 'fb',
  initialize
};
