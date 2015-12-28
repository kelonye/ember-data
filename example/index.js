require('ember-data');

Em.TEMPLATES.index = Em.Handlebars.template(eval(require('./template')));

App = Em.Application.create();

App.ApplicationStore = DS.Store.extend({
  adapter: 'DS.FixturesAdapter'
});

App.Book = DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string')
});

App.IndexRoute = Em.Route.extend({
  model: function(){
    return this.get('store').createRecord('Book', {
      title: 'Ember.js cookbook',
      author: 'JD'
    });
  }
});
