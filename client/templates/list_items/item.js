Template.item.events({
  'click li': function( e ) {
    e.stopPropagation();
    Items.update( { _id: this._id }, { $set: { checked: !this.checked } } );
    if ( this.checked ) {
      showMessage( 'unchecked', 'Item unchecked' );
    } else {
      showMessage( 'check', 'Item checked' );
    }
  },
  'click a.btn-important': function( e ) {
    e.stopPropagation();
    Items.update( { _id: this._id }, { $set: { important: !this.important } } );
    showMessage( 'heart-empty', 'Item ' + (!this.important ? '' : 'not ') + 'important' );
  },
  'click a.btn-delete': function( e ) {
    e.stopPropagation();
    if ( confirm( 'Do you want to delete this item?' ) ) {
      Items.remove( { _id: this._id } );
      showMessage( 'remove', 'Item deleted' );
    }
  }
});
