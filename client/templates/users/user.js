Template.user.helpers({
  username: function() {
    if (Meteor.user())
      return Meteor.user().username;
  },
  user_icon: function() {
    if (Meteor.user() && Meteor.user().icon)
      return Meteor.user().icon;

    return 'user';
  },
  user_first_name: function() {
    if (Meteor.user())
      return Meteor.user().profile.first_name;
  }
} );
