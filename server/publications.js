Meteor.publish( 'items', function() {
  return Items.find();
});
Meteor.publish( 'version', function () {
  return Version.find();
});