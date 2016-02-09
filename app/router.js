import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('volume');
	this.route('mass');
	this.route('currency');
});

export default Router;
