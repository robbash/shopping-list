Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('items') && Meteor.subscribe('version'); }
});

Router.route('/', {name: 'itemsList'});

var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('login');
    }
  } else {
    this.next();
  }
}


Router.onBeforeAction('dataNotFound', { only: 'itemPage' });
Router.onBeforeAction(requireLogin);
