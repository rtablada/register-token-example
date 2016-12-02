import config from '../config/environment';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: config.DS.host,
  namespace: config.DS.namespace,
});
