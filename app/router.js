import EmberRouter from '@ember/routing/router';
import config from 'todo-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('logga-in');
  this.route('registrera');
  this.route('app/konto');
  this.route('app/todos');
  this.route('not-found', { path: '/*path' });
});
