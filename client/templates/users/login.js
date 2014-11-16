Template.login.helpers( {
  error_message: function() {
    if ( Session.get( 'login-error' ) === true ) {
      return 'That was incorrect. Please try again!';
    }
    Session.set( 'login-error', false );
  }
})

Template.login.events({
  'submit .form-signin': function(e) {
    e.preventDefault();

    Meteor.loginWithPassword( $( '#input-username' ).val().toLowerCase(), $( '#input-password' ).val(), function( e ) {
      if ( e ) {
        Session.set( 'login-error', true );

        return;
      }

      Session.set( 'login-error', false );
      Router.go( 'itemsList' );
    });
  }
})
