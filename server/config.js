Accounts.config({
   loginExpirationInDays: null
});

if ( Version.find().count() > 0 ) {
  Version.remove({});
}
Version.insert( JSON.parse( Assets.getText( "version.json" ) ) );
